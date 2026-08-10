# Milestone 1: Realtime Mic Stream + STT (faster-whisper lokal)

> **For Hermes:** Implement task-by-task. Setiap task bite-sized (2-5 menit).

**Goal:** Mic browser di-capture, disegmentasi otomatis via VAD, dikirim ke Python faster-whisper sidecar lewat Elysia WS bridge, dan hasil transkrip tampil realtime di panel "Live Transcript" Svelte.

**Architecture:**
- **client (Svelte 5 + Vite):** getUserMedia → AudioWorklet/MediaRecorder → VAD deteksi ujung ujaran → kirim segmen audio (WebM/Opus) via WS ke Elysia (`ws://localhost:3002/ws`).
- **server (Bun + Elysia, :3002):** terima segmen audio biner via WS, forward ke Python sidecar (HTTP POST multipart), balikin transkrip ke client sebagai `{type:'transcript', text, final}`.
- **stt-sidecar (Python + faster-whisper, :3003):** endpoint `POST /transcribe` terima audio blob → decode → `WhisperModel.transcribe()` → JSON `{text, segments}`.

Kenapa sidecar terpisah: faster-whisper = Python; Elysia = Bun/TS. Sidecar HTTP paling bersih & bisa di-restart independen. Whisper = batch model (bukan streaming), jadi realtime-nya dicapai lewat **VAD-segmentation** (potong per ujung kalimat), bukan true token-streaming.

**Tech Stack:** Bun, Elysia.js, Svelte 5 (runes), Vite, Python 3.11 (venv), faster-whisper (CTranslate2), `@ricky0123/vad-web` (Silero VAD di browser).

**Scope M1 (STT SAJA):** LLM & TTS TIDAK termasuk. Output milestone = teks transkrip muncul di UI realtime saat Schnee bicara.

---

## Phase A: STT Sidecar (Python)

### Task A1: Buat venv + install faster-whisper
**Files:** Create `stt-sidecar/requirements.txt`, `stt-sidecar/README.md`

```
# stt-sidecar/requirements.txt
faster-whisper==1.0.3
fastapi==0.115.0
uvicorn[standard]==0.30.6
python-multipart==0.0.9
```

**Cmd:**
```bash
cd ~/projects/shorekeeper-jarvis/stt-sidecar
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
```
**Verify:** `.venv/bin/python -c "import faster_whisper; print('ok')"` → `ok`

### Task A2: Endpoint transcribe
**Files:** Create `stt-sidecar/server.py`

```python
import io, tempfile, os
from fastapi import FastAPI, UploadFile, File
from faster_whisper import WhisperModel

# base=cepat & ringan CPU; ganti "small"/"medium" kalau butuh akurasi & ada resource
MODEL_SIZE = os.getenv("WHISPER_MODEL", "base")
DEVICE = os.getenv("WHISPER_DEVICE", "cpu")
COMPUTE = os.getenv("WHISPER_COMPUTE", "int8")

model = WhisperModel(MODEL_SIZE, device=DEVICE, compute_type=COMPUTE)
app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok", "model": MODEL_SIZE, "device": DEVICE}

@app.post("/transcribe")
async def transcribe(audio: UploadFile = File(...)):
    data = await audio.read()
    with tempfile.NamedTemporaryFile(suffix=".webm", delete=False) as f:
        f.write(data); path = f.name
    try:
        segments, info = model.transcribe(path, language="id", beam_size=1, vad_filter=True)
        text = " ".join(s.text.strip() for s in segments).strip()
        return {"text": text, "lang": info.language}
    finally:
        os.unlink(path)
```

**Cmd (jalankan sidecar):**
```bash
cd ~/projects/shorekeeper-jarvis/stt-sidecar
.venv/bin/uvicorn server:app --host 127.0.0.1 --port 3003
```
**Verify:** `curl localhost:3003/health` → `{"status":"ok",...}`. Model download otomatis first run (~150MB base).

### Task A3: Smoke test transcribe dgn file
**Verify:** rekam/ambil sample WebM pendek, lalu:
```bash
curl -F "audio=@sample.webm" localhost:3003/transcribe
```
Expected: `{"text":"...","lang":"id"}` — pastikan teks masuk akal. FFmpeg harus ada di PATH (faster-whisper butuh utk decode webm): `ffmpeg -version`.

---

## Phase B: Elysia WS Bridge (Bun)

### Task B1: Route WS terima audio biner → forward ke sidecar
**Files:** Modify `server/src/index.ts:14-45` (blok `.ws("/ws")`)

Ganti handler `message` supaya:
- Kalau message = ArrayBuffer/Uint8Array (audio biner) → `fetch("http://127.0.0.1:3003/transcribe", {POST, FormData})` → kirim balik `{type:'transcript', text, final:true}`.
- Kalau message = JSON `{type:'control', ...}` → handle sinyal start/stop.

```typescript
.ws("/ws", {
  open(ws) {
    ws.send({ type: "system", message: "Connected to Shorekeeper STT Bridge" });
  },
  async message(ws, message: any) {
    // audio biner dari VAD segment
    if (message instanceof ArrayBuffer || message instanceof Uint8Array) {
      ws.send({ type: "status", state: "processing", log: "[STT] Transcribing segment..." });
      try {
        const blob = new Blob([message], { type: "audio/webm" });
        const fd = new FormData();
        fd.append("audio", blob, "segment.webm");
        const res = await fetch("http://127.0.0.1:3003/transcribe", { method: "POST", body: fd });
        const data = await res.json();
        ws.send({ type: "transcript", text: data.text ?? "", final: true, log: `[STT] "${data.text}"` });
      } catch (e: any) {
        ws.send({ type: "error", log: `[STT] error: ${e.message}` });
      }
      return;
    }
    // sinyal kontrol JSON (start/stop listening)
    if (message?.type === "control") {
      ws.send({ type: "status", state: message.state ?? "idle" });
    }
  },
  close(ws) { console.log("[WS] disconnected"); },
})
```

**Cmd:** `cd ~/projects/shorekeeper-jarvis/server && bun run src/index.ts`
**Verify:** server nyala :3002, log `open` muncul saat client connect. (Butuh Bun mendukung binary WS message — cek Task B2.)

### Task B2: Pastikan Elysia terima binary WS frame
**Verify:** Bun WebSocket support binary by default. Test cepat lewat `bun` REPL / node client kirim Buffer ke `ws://localhost:3002/ws`, konfirmasi handler masuk cabang biner (log "Transcribing segment"). Kalau Elysia auto-parse JSON & rusak di biner → set `.ws("/ws", { ..., parse: false })` atau cek `typeof message`.

---

## Phase C: Client Mic Capture + VAD (Svelte 5)

### Task C1: Install VAD browser
**Cmd:**
```bash
cd ~/projects/shorekeeper-jarvis/client
bun add @ricky0123/vad-web onnxruntime-web
```
**Files:** Modify `client/vite.config.ts` — pastikan asset `.onnx` & `.wasm` dari vad-web ke-serve (copy ke `public/` atau `assetsInclude`). Cek README vad-web utk path model Silero.

### Task C2: Modul mic+VAD → kirim segmen ke WS
**Files:** Create `client/src/lib/voice.ts`

```typescript
import { MicVAD } from "@ricky0123/vad-web";

export type VoiceEvents = {
  onSpeechStart: () => void;
  onSegment: (webm: ArrayBuffer) => void; // segmen audio siap kirim
  onError: (e: unknown) => void;
};

export async function createVoice(ev: VoiceEvents) {
  let recorder: MediaRecorder | null = null;
  let chunks: Blob[] = [];

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  const vad = await MicVAD.new({
    onSpeechStart: () => {
      ev.onSpeechStart();
      chunks = [];
      recorder = new MediaRecorder(stream, { mimeType: "audio/webm;codecs=opus" });
      recorder.ondataavailable = (e) => e.data.size && chunks.push(e.data);
      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        ev.onSegment(await blob.arrayBuffer());
      };
      recorder.start();
    },
    onSpeechEnd: () => {
      recorder?.state === "recording" && recorder.stop();
    },
  });

  return {
    start: () => vad.start(),
    stop: () => { vad.pause(); stream.getTracks().forEach(t => t.stop()); },
  };
}
```
> Catatan: vad-web butuh HTTPS/localhost utk getUserMedia. Vite dev = `localhost` OK.

### Task C3: Wire voice.ts ke App.svelte
**Files:** Modify `client/src/App.svelte:45-75` — ganti `toggleListening` mock jadi pakai `createVoice`. Kirim `onSegment` sbg binary ke `socket.send(webm)`. Update `transcript` dari WS message `type:'transcript'`.

```typescript
import { createVoice } from './lib/voice';
let voice: Awaited<ReturnType<typeof createVoice>> | null = null;

// di onmessage tambah:
// if (data.type === 'transcript') transcript = data.text;

async function toggleListening() {
  if (!isListening) {
    isListening = true; status = 'listening';
    transcript = 'Listening...';
    voice = await createVoice({
      onSpeechStart: () => { status = 'listening'; logs = [...logs, '[VAD] speech start']; },
      onSegment: (buf) => {
        status = 'processing';
        if (socket && wsConnected) socket.send(buf); // binary frame
      },
      onError: (e) => logs = [...logs, `[VAD] error ${e}`],
    });
    await voice.start();
  } else {
    isListening = false; status = 'idle';
    voice?.stop(); voice = null;
  }
}
```

### Task C4: Tampilkan transkrip final di panel
**Files:** Modify `client/src/App.svelte:30-35` (`socket.onmessage`) — handle `data.type==='transcript'` → set `transcript`, push `data.log` ke `logs`, set `status='idle'`.

---

## Phase D: Verifikasi End-to-End

### Task D1: Jalankan 3 proses paralel
```bash
# term 1
cd ~/projects/shorekeeper-jarvis/stt-sidecar && .venv/bin/uvicorn server:app --port 3003
# term 2
cd ~/projects/shorekeeper-jarvis/server && bun run src/index.ts
# term 3
cd ~/projects/shorekeeper-jarvis/client && bun run dev
```
**Verify manual (Schnee):** buka Vite URL, tap orb, ngomong Indo → dalam ~1-2 detik teks muncul di "Live Transcript" & log `[STT] "..."`. **Kamu verifikasi UI manual** (sesuai preferensi).

### Task D2: Commit
```bash
cd ~/projects/shorekeeper-jarvis
git add stt-sidecar server/src/index.ts client/src client/vite.config.ts client/package.json
git commit -m "feat(stt): realtime mic capture + VAD segmentation + faster-whisper sidecar bridge"
```

---

## Files yang berubah
- **Create:** `stt-sidecar/{requirements.txt,server.py,README.md}`, `client/src/lib/voice.ts`
- **Modify:** `server/src/index.ts`, `client/src/App.svelte`, `client/vite.config.ts`, `client/package.json`

## Risks / Open Questions
1. **FFmpeg wajib** di host utk decode WebM (faster-whisper pakai). Kalau gak ada → decode PCM manual di client.
2. **Latensi model:** `base` int8 CPU ~0.5-1.5s/segmen pendek. Kalau lambat → coba `tiny`, atau GPU (`device=cuda`).
3. **Bahasa hardcoded `id`** di sidecar — kalau mau bilingual auto-detect, hapus `language="id"` (lebih lambat + kadang salah deteksi).
4. **VAD false trigger** dari noise → tuning threshold vad-web (`positiveSpeechThreshold`).
5. **Deploy target M1:** lokal dev dulu (laptop). VPS deploy nanti di milestone terpisah — jangan campur.

## Verification gate M1 (harus lulus semua)
- [ ] `curl localhost:3003/health` ok
- [ ] sidecar transcribe file WebM → teks benar
- [ ] WS bridge forward biner → balik transkrip
- [ ] UI: bicara → transkrip muncul <2s
- [ ] commit bersih
