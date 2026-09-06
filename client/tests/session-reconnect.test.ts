import test from 'node:test';
import assert from 'node:assert/strict';

// Data models mirroring client/src/lib/types.ts & session state machine
interface Message {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  time: string;
  status?: 'streaming' | 'done';
}

const DisconnectReason = {
  UNKNOWN_REASON: 0,
  CLIENT_INITIATED: 1,
  SERVER_SHUTDOWN: 3,
} as const;
type DisconnectReason = (typeof DisconnectReason)[keyof typeof DisconnectReason];

class TestConversationStore {
  messages: Message[] = [];
  sealTimer: NodeJS.Timeout | null = null;
  subtitle = '';
  transcript = '';
  awaitingReply = false;
  agentSpeaking = false;

  sealAgentBubble(): void {
    const last = this.messages[this.messages.length - 1];
    if (last && last.role === 'assistant' && last.status === 'streaming') {
      last.status = 'done';
    }
  }

  resetTurnState(): void {
    if (this.sealTimer) {
      clearTimeout(this.sealTimer);
      this.sealTimer = null;
    }
    this.subtitle = '';
    this.transcript = '';
    this.awaitingReply = false;
    this.agentSpeaking = false;
  }

  clearHistory(): void {
    this.resetTurnState();
    this.messages.length = 0;
  }

  reset(): void {
    this.resetTurnState();
  }
}

class TestSessionStore {
  mode: 'off' | 'standby' | 'active' = 'off';
  lkState: 'connecting' | 'connected' | 'reconnecting' | 'reconnect_grace' | 'disconnected' = 'disconnected';
  reconnectGraceActive = false;
  graceCountdown = 15;
  graceInterval: NodeJS.Timeout | null = null;
  hasStarted = false;
  conversation: TestConversationStore;

  constructor(conversation: TestConversationStore) {
    this.conversation = conversation;
  }

  handleStateChange(state: 'connecting' | 'connected' | 'reconnecting' | 'disconnected', reason?: DisconnectReason): void {
    this.lkState = state;
    if (state === 'reconnecting') {
      // Reconnecting state
    } else if (state === 'connected') {
      this.clearGraceTimer();
    } else if (state === 'disconnected') {
      const isClientInitiated = reason === DisconnectReason.CLIENT_INITIATED;
      if (this.mode === 'active' && !isClientInitiated) {
        this.startReconnectGrace();
      } else {
        this.cleanupLivekit(false);
      }
    }
  }

  startReconnectGrace(): void {
    if (this.reconnectGraceActive) return;
    this.reconnectGraceActive = true;
    this.graceCountdown = 15;
    this.lkState = 'reconnect_grace';

    this.conversation.sealAgentBubble();

    if (this.graceInterval) clearInterval(this.graceInterval);
    this.graceInterval = setInterval(() => {
      this.graceCountdown -= 1;
      if (this.graceCountdown <= 0) {
        this.clearGraceTimer();
        this.cleanupLivekit(false);
      }
    }, 1000);
  }

  clearGraceTimer(): void {
    if (this.graceInterval) {
      clearInterval(this.graceInterval);
      this.graceInterval = null;
    }
    this.reconnectGraceActive = false;
  }

  cleanupLivekit(clearHistory = false): void {
    this.conversation.sealAgentBubble();
    this.conversation.resetTurnState();

    if (clearHistory) {
      this.conversation.clearHistory();
    }

    this.mode = 'off';
    this.hasStarted = false;
    this.lkState = 'disconnected';
  }

  disconnectLivekit(): void {
    this.clearGraceTimer();
    this.cleanupLivekit(false);
  }

  clearConversation(): void {
    this.conversation.clearHistory();
  }
}

test('BUG-6: Unexpected disconnect starts 15s grace and preserves conversation messages', () => {
  const conv = new TestConversationStore();
  const sess = new TestSessionStore(conv);

  // 1. Setup active session with existing messages
  sess.mode = 'active';
  conv.messages.push(
    { id: 1, role: 'user', text: 'Hello Shorekeeper', time: '12:00', status: 'done' },
    { id: 2, role: 'assistant', text: 'Greetings, Schnee.', time: '12:01', status: 'streaming' }
  );

  assert.equal(conv.messages.length, 2);

  // 2. Simulate unexpected WebRTC network drop (SERVER_SHUTDOWN)
  sess.handleStateChange('disconnected', DisconnectReason.SERVER_SHUTDOWN);

  // 3. Verify Grace State
  assert.equal(sess.reconnectGraceActive, true, 'Grace period should be active');
  assert.equal(sess.graceCountdown, 15, 'Initial grace countdown must be 15s');
  assert.equal(sess.lkState, 'reconnect_grace');

  // CRITICAL INVARIANT: In-flight streaming bubble must be sealed and history must NOT be wiped!
  assert.equal(conv.messages.length, 2, 'History must survive unexpected disconnect');
  assert.equal(conv.messages[1].status, 'done', 'In-flight streaming bubble must be sealed');
  assert.equal(conv.messages[0].text, 'Hello Shorekeeper');

  // 4. Test recovery before timeout
  sess.handleStateChange('connected');
  assert.equal(sess.reconnectGraceActive, false, 'Grace period cleared on reconnect');
  assert.equal(conv.messages.length, 2, 'Messages preserved after reconnect');

  sess.clearGraceTimer();
});

test('BUG-6: Grace timeout elapses -> mode becomes off, but conversation persists', async () => {
  const conv = new TestConversationStore();
  const sess = new TestSessionStore(conv);

  sess.mode = 'active';
  conv.messages.push({ id: 1, role: 'user', text: 'Important data', time: '12:05', status: 'done' });

  sess.handleStateChange('disconnected', DisconnectReason.UNKNOWN_REASON);
  assert.equal(sess.reconnectGraceActive, true);

  // Fast-forward countdown
  sess.graceCountdown = 1;
  await new Promise((resolve) => setTimeout(resolve, 1100));

  assert.equal(sess.reconnectGraceActive, false);
  assert.equal(sess.mode, 'off');
  // Invariant holds:
  assert.equal(conv.messages.length, 1);
  assert.equal(conv.messages[0].text, 'Important data');

  sess.clearGraceTimer();
});

test('BUG-6: User-initiated disconnect does not trigger reconnect grace banner and preserves history', () => {
  const conv = new TestConversationStore();
  const sess = new TestSessionStore(conv);

  sess.mode = 'active';
  conv.messages.push({ id: 1, role: 'user', text: 'Goodbye', time: '12:10', status: 'done' });

  sess.handleStateChange('disconnected', DisconnectReason.CLIENT_INITIATED);

  assert.equal(sess.reconnectGraceActive, false, 'No grace banner for user disconnect');
  assert.equal(sess.mode, 'off');
  assert.equal(conv.messages.length, 1, 'History still preserved on manual exit');

  sess.clearGraceTimer();
});
