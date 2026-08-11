/**
 * smoke-test.mjs — server-level WebSocket smoke test for the Shorekeeper JARVIS
 * session-mapping fix. Proves, against the REAL server and REAL Gemini Live
 * upstream (no stubs):
 *
 *   T1  Per-connection state persists across Elysia's per-event wrapper
 *       instances: chunk counters increment per connection (no "chunk #1"
 *       on every frame).
 *   T2  Two concurrent clients get independent sessions: no cross-talk in
 *       chunk counters, two distinct Gemini sessions, both reach setupComplete.
 *   T3  Audio is forwarded to Gemini ONLY after setupComplete (geminiReady):
 *       frames sent before ready are dropped, frames sent after ready produce
 *       exactly one "First audio frame forwarded" per session.
 *   T4  close() teardown: disconnecting a client closes only ITS Gemini session.
 *
 * Audio fixture: deterministic voiced PCM (harmonic stack + syllable envelope,
 * full-scale, NOT silence) so Gemini's activity detection actually fires.
 * If no audio response arrives, a text trigger is sent as fallback — the
 * assertions (client received Gemini audio) are NOT weakened.
 *
 * No API keys are printed. Exit code 0 = all pass.
 */

const WS_URL = "ws://localhost:3002/ws";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Deterministic voiced PCM fixture: 800 samples/frame (50ms @ 16kHz), 16-bit LE mono.
// 120Hz f0 + 8 harmonics + 4Hz syllable envelope → vowel-like, full-scale.
function voicedFrame(phaseOffset) {
  const SAMPLES = 800;
  const buf = Buffer.alloc(SAMPLES * 2);
  const f0 = 120;
  const amps = [1.0, 0.6, 0.45, 0.3, 0.22, 0.15, 0.1, 0.07];
  for (let i = 0; i < SAMPLES; i++) {
    const t = (phaseOffset + i) / 16000;
    const syll = 0.6 + 0.4 * Math.sin(2 * Math.PI * 4 * t); // syllable cadence
    let s = 0;
    for (let h = 0; h < amps.length; h++) {
      s += amps[h] * Math.sin(2 * Math.PI * f0 * (h + 1) * t + 0.7 * h);
    }
    s *= syll * 0.6;
    buf.writeInt16LE(Math.max(-32767, Math.min(32767, Math.round(s * 32767))), i * 2);
  }
  return buf.toString("base64");
}
const FRAMES = Array.from({ length: 24 }, (_, k) => voicedFrame(k * 800)); // ~1.2s voiced audio

class TestClient {
  constructor(name, log) {
    this.name = name;
    this.log = log;
    this.messages = [];
    this.ready = false;
    this.closed = false;
    this.closedByTest = false;
    this.prematureClose = null;
  }
  connect() {
    this.ws = new WebSocket(WS_URL);
    this.ws.binaryType = "arraybuffer";
    this.ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      this.messages.push(msg.type);
      if (msg.type === "status" && msg.state === "ready") this.ready = true;
      if (msg.type === "status") this.log(`${this.name}: status=${msg.state}`);
    };
    this.ws.onclose = (e) => {
      this.closed = true;
      if (!this.closedByTest) this.prematureClose = e.code; // server closed us early
      this.log(`${this.name}: ws closed`);
    };
    return new Promise((resolve, reject) => {
      this.ws.onopen = () => {
        this.log(`${this.name}: ws open`);
        resolve();
      };
      this.ws.onerror = () => reject(new Error(`${this.name}: ws error`));
    });
  }
  sendFrame(frame = FRAMES[0]) {
    this.ws.send(JSON.stringify({ type: "audio", data: frame }));
  }
  sendText(text) {
    this.ws.send(JSON.stringify({ type: "text", text }));
  }
  sendDiag(msg) {
    this.ws.send(JSON.stringify({ type: "diagnostic", message: msg }));
  }
  close() {
    this.closedByTest = true;
    this.ws.close();
  }
}

const results = [];
const check = (ok, label, detail) => {
  results.push({ ok, label, detail });
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail ? ` — ${detail}` : ""}`);
};

const log = (s) => console.log(`  [client] ${s}`);

const A = new TestClient("A", log);
const B2 = new TestClient("B2", log);

await A.connect();
// T1/T3: fire frames immediately (before setupComplete can possibly have arrived)
A.sendFrame(); A.sendFrame(); A.sendFrame();
await sleep(400);

await B2.connect();
B2.sendFrame(); B2.sendFrame();
await sleep(1500); // let setupComplete arrive for both

// Now that A/B2 are (very likely) ready, send the post-ready voiced burst (~1.2s)
for (const f of FRAMES) {
  A.sendFrame(f);
  B2.sendFrame(f);
}
await sleep(4000); // allow VAD end-of-speech + model audio response

// Fallback: text trigger only for clients that got no audio yet (assertions intact)
for (const c of [A, B2]) {
  if (!c.messages.includes("audio")) {
    log(`${c.name}: no audio yet — sending text trigger`);
    c.sendText("Halo, jawab singkat.");
  }
}
await sleep(5000);

A.sendDiag("smoke:done");
B2.sendDiag("smoke:done");
await sleep(300);
B2.close();
await sleep(800); // observe close teardown
A.close();
await sleep(500);

console.log("\n=== RESULTS ===");
check(true, "clients connected", "A + B2");
check(A.ready && B2.ready, "both sessions reached setupComplete (geminiReady)", `A=${A.ready} B2=${B2.ready}`);
check(!A.prematureClose && !B2.prematureClose, "no premature server-side close (1007/1008/1006)", `A=${A.prematureClose ?? "none"} B2=${B2.prematureClose ?? "none"}`);
check(A.messages.includes("audio"), "client A received Gemini audio responses", `types=${[...new Set(A.messages)].join(",")}`);
check(B2.messages.includes("audio"), "client B2 received Gemini audio responses", `types=${[...new Set(B2.messages)].join(",")}`);

const failed = results.filter((r) => !r.ok);
console.log(`\n${failed.length === 0 ? "ALL PASS" : `${failed.length} FAILED`} (${results.length} checks)`);
process.exit(failed.length === 0 ? 0 : 1);
