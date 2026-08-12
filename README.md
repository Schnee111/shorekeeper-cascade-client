# 🐟 Shorekeeper JARVIS

Voice assistant dengan Fish Audio TTS yang mendukung multi-bahasa (English, Indonesian, Japanese).

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client (Svelte)                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │  Mic Input   │  │ Audio Player │  │ Subtitle Display │  │
│  └──────┬───────┘  └──────▲───────┘  └────────▲─────────┘  │
│         │                  │                   │             │
└─────────┼──────────────────┼───────────────────┼─────────────┘
          │                  │                   │
          ▼                  │                   │
┌─────────────────────────────────────────────────────────────┐
│                   Server (Bun + Elysia.js)                   │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ Deepgram STT │→ │    Hermes    │→ │  Fish Audio TTS  │  │
│  │  (Nova-3)    │  │ (Language    │  │  (Multi-voice)   │  │
│  │              │  │  Detection)  │  │                  │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## ✨ Features

- **🎙️ Speech-to-Text**: Deepgram Nova-3 dengan low latency
- **🧠 Language Detection**: Auto-detect English/Indonesian/Japanese
- **🔊 Text-to-Speech**: Fish Audio TTS dengan multi-voice
  - Indonesian: Vestia Zeta voice (reference_id: 3095f8e1)
  - English/Japanese: Default voice
- **📝 Real-time Subtitles**: Tampilkan subtitle saat audio diputar
- **🎵 MP3 Audio**: Kualitas audio optimal dengan format MP3
- **⚡ WebSocket**: Komunikasi real-time antara client dan server

## 🛠️ Tech Stack

### Server
- **Runtime**: Bun 1.3.14
- **Framework**: Elysia.js
- **STT**: Deepgram Nova-3
- **TTS**: Fish Audio (s2.1-pro-free model)

### Client
- **Framework**: Svelte 5
- **Build Tool**: Vite
- **Audio**: Web Audio API

## 📋 Prerequisites

- Bun 1.3.14+
- Node.js 18+ (untuk client build)
- API Keys:
  - Deepgram API Key
  - Fish Audio API Key

## 🚀 Setup

### 1. Clone Repository

```bash
git clone https://github.com/Schnee111/shorekeeper-jarvis.git
cd shorekeeper-jarvis
```

### 2. Server Setup

```bash
cd server

# Install dependencies
bun install

# Copy environment file
cp .env.example .env

# Edit .env dan tambahkan API keys
nano .env
```

**Environment Variables (`.env`):**
```env
DEEPGRAM_API_KEY=your_deepgram_api_key_here
FISH_API_KEY=your_fish_audio_api_key_here
PORT=3002
```

### 3. Client Setup

```bash
cd ../client

# Install dependencies
npm install

# Development mode
npm run dev

# Build for production
npm run build
```

## 🏃 Running

### Development Mode

**Terminal 1 - Server:**
```bash
cd server
bun run --watch src/index.ts
```

**Terminal 2 - Client:**
```bash
cd client
npm run dev
```

### Production Mode

**Build:**
```bash
# Build server
cd server
bun run build

# Build client
cd ../client
npm run build
```

**Run:**
```bash
# Start server
cd server
bun run dist/index.js

# Serve client (gunakan static file server atau nginx)
cd ../client/dist
npx serve .
```

## 🔧 Project Structure

```
shorekeeper-jarvis/
├── server/
│   ├── src/
│   │   ├── index.ts              # Main server file
│   │   ├── fish-audio-tts.ts     # Fish Audio TTS integration
│   │   ├── deepgram-stt.ts       # Deepgram STT integration
│   │   ├── gemini-live.ts        # Gemini Live integration (backup)
│   │   ├── gemini-tts.ts         # Gemini TTS (legacy)
│   │   ├── hermes-bridge.ts      # Language detection & routing
│   │   └── sentence-detector.ts  # Sentence splitting
│   ├── dist/                     # Build output
│   ├── .env                      # Environment variables
│   └── package.json
│
├── client/
│   ├── src/
│   │   ├── App.svelte            # Main UI component
│   │   └── lib/
│   │       ├── audio-playback.ts # Audio player (MP3 + PCM)
│   │       ├── deepgram.ts       # Deepgram client
│   │       └── utils.ts          # Utility functions
│   ├── dist/                     # Build output
│   ├── public/                   # Static assets
│   └── package.json
│
└── README.md
```

## 🎯 Pipeline Flow

1. **User speaks** → Microphone captures audio
2. **Deepgram STT** → Converts speech to text
3. **Hermes Bridge** → Detects language (EN/ID/JP)
4. **Fish Audio TTS** → Generates audio with appropriate voice
   - Indonesian: Vestia Zeta voice
   - English/Japanese: Default voice
5. **Server sends** → Subtitle + MP3 audio via WebSocket
6. **Client displays** → Subtitle on screen
7. **Client plays** → MP3 audio through speakers

## 🎤 Voice Selection

### Fish Audio TTS

**Indonesian:**
- Voice: Vestia Zeta
- Reference ID: `3095f8e1d1fa4b82acaa8aca720a7f83`
- Quality: Natural, clear pronunciation

**English/Japanese:**
- Voice: Default
- Quality: High quality standard voice

### Language Detection

Automatic detection based on text patterns:
- **Indonesian**: Keywords like "aku", "kamu", "bagaimana", etc.
- **Japanese**: Hiragana, Katakana, Kanji characters
- **English**: Default fallback

## 📡 WebSocket API

### Client → Server

```typescript
// Start conversation
{ type: "start" }

// Send audio chunk
{ type: "audio", data: "base64_pcm_data" }

// Send text query (alternative to voice)
{ type: "hermesQuery", text: "Hello, how are you?" }

// Stop conversation
{ type: "stop" }
```

### Server → Client

```typescript
// Subtitle text (before audio)
{ type: "subtitle", text: "Halo, bagaimana kabarmu?", language: "id" }

// Audio data (MP3 format)
{ type: "audio", data: "base64_mp3_data" }

// Transcript (STT result)
{ type: "transcript", text: "User said something" }

// Turn complete signal
{ type: "turnComplete" }

// Status updates
{ type: "status", state: "listening" | "processing" | "speaking" }
```

## 🧪 Testing

### Manual Test (WebSocket)

```bash
cd shorekeeper-jarvis

bun -e "
const ws = new WebSocket('ws://localhost:3002/ws');
ws.onopen = () => {
  console.log('Connected');
  ws.send(JSON.stringify({ type: 'hermesQuery', text: 'Halo, apa kabar?' }));
};
ws.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  console.log(msg.type, msg.text || (msg.data ? msg.data.length + ' bytes' : ''));
};
"
```

### Test Results

```
✓ Indonesian detected correctly
✓ Subtitle sent before audio
✓ MP3 audio generated (15-50KB typical)
✓ Turn complete signal working
✓ Latency: < 2 seconds end-to-end
```

## 🌐 Deployment

### VPS Deployment (Recommended)

```bash
# 1. Build project locally
cd server && bun run build
cd ../client && npm run build

# 2. Copy to VPS
rsync -avz server/dist/ user@vps:/var/www/jarvis/server/
rsync -avz client/dist/ user@vps:/var/www/jarvis/client/

# 3. Setup nginx reverse proxy
# See docs/nginx.conf for example configuration

# 4. Setup systemd service
# See docs/jarvis.service for example service file
```

### Environment Variables di VPS

```bash
# Di VPS
nano /var/www/jarvis/server/.env

DEEPGRAM_API_KEY=***
FISH_API_KEY=***
PORT=3002
NODE_ENV=production
```

## 🐛 Troubleshooting

### Server tidak bisa connect ke Fish Audio

```bash
# Cek API key
curl -H "Authorization: Bearer $FISH_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"text":"test","model":"s2.1-pro-free"}' \
     https://api.fish.audio/v1/tts
```

### Audio tidak keluar di client

1. Cek browser console untuk errors
2. Pastikan autoplay policy tidak blocking audio
3. Test dengan klik button dulu sebelum audio play

### WebSocket connection failed

```bash
# Cek server running
curl http://localhost:3002/health

# Cek firewall
sudo ufw status
sudo ufw allow 3002/tcp
```

## 📝 Notes

- **Gemini TTS**: Masih ada di codebase sebagai backup, tapi tidak digunakan
- **Kokoro TTS**: Model files tidak di-commit (terlalu besar ~500MB)
- **Rate Limits**: Fish Audio free tier = 5 concurrent requests
- **Latency**: Target < 2s end-to-end, actual ~1.5s typical

## 🤝 Contributing

Feel free to submit issues or pull requests!

## 📄 License

MIT

## 👤 Author

Schnee - Voice Assistant Enthusiast

---

**Last Updated**: 2026-08-12  
**Branch**: feat/hermes-integration  
**Commit**: 731bbfe
