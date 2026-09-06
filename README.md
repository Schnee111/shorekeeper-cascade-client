<div align="center">

# 🌊 Shorekeeper Cascade Client

**High-fidelity conversational Web HUD with reactive 3D Spectro Particle Orb, token-diff streaming, and hardware-decoupled WebRTC voice synthesis.**

[![Release](https://img.shields.io/github/v/release/Schnee111/shorekeeper-cascade-client?style=flat-square&color=c5a86a)](https://github.com/Schnee111/shorekeeper-cascade-client/releases)
[![CI/CD](https://img.shields.io/github/actions/workflow/status/Schnee111/shorekeeper-cascade-client/ci.yml?branch=main&style=flat-square&label=CI%20Pipeline)](https://github.com/Schnee111/shorekeeper-cascade-client/actions)
[![Docker](https://img.shields.io/badge/Container-ghcr.io-2496ed?style=flat-square&logo=docker)](https://github.com/Schnee111/shorekeeper-cascade-client/pkgs/container/shorekeeper-cascade-client)
[![License](https://img.shields.io/badge/License-MIT-6ee7b7?style=flat-square)](LICENSE)
[![Svelte](https://img.shields.io/badge/Svelte-5.0%20Runes-ff3e00?style=flat-square)](https://svelte.dev)
[![LiveKit](https://img.shields.io/badge/WebRTC-LiveKit%20Cloud-002b36?style=flat-square)](https://livekit.io)

[Live Demo](https://jarvis.shorekeeper.my.id) • [Companion Backend](https://github.com/Schnee111/shorekeeper-cascade-agent) • [Architecture Guide](docs/SEMVER_CONVENTIONAL_COMMITS.md)

</div>

---

## 🌌 Why Shorekeeper Cascade Client?

Standard web voice interfaces suffer from three glaring flaws:
1. **Audio Crackling & Buffer Stalls**: Tapping the WebAudio API directly into active playback streams causes sink contention and sample rate mismatch.
2. **Flash of Unrendered Markdown**: LLM response streaming often dumps raw asterisks (`**`), unclosed codeblocks, and raw URLs mid-sentence.
3. **Sluggish Visual Feedback**: Laggy FFT visualizers that spike CPU usage and drain mobile battery.

**Shorekeeper Cascade Client** eliminates these issues through:
- **Native RFC 6464 Audio Telemetry**: Bypasses the HTML `<audio>` node entirely for visualization; uses in-band WebRTC audio-level RTP headers to animate the 3D Orb with **0ms audio latency** and **zero hardware crackle**.
- **Token-Diff Reactive Streaming**: An Apple Intelligence-inspired streaming text reveal engine that settles completed words statically and smoothly fades in new tokens without DOM thrashing.
- **Svelte 5 Runes & Three.js Shaders**: Ultra-lean, 60fps Spectro particle dynamics tuned to cosmic Kuro Gold (`#c5a86a`) and Spectro Mint (`#6ee7b7`) aesthetics.

---

## 🌌 The Shorekeeper Ecosystem

The Shorekeeper voice intelligence project is architected across three independent, complementary open-source repositories:

| Repository | Paradigm | Technology Stack | Primary Role |
|---|---|---|---|
| **[shorekeeper-cascade-client](https://github.com/Schnee111/shorekeeper-cascade-client)** (This Repo) | **Web Client** | Svelte 5 (Runes) · Three.js · Vite · PWA | Production Web HUD, token streaming, 3D Spectro Particle Orb |
| **[shorekeeper-cascade-agent](https://github.com/Schnee111/shorekeeper-cascade-agent)** | **Cascade Pipeline** | LiveKit Python SDK · Groq Whisper · Hermes LLM · Fish Audio 48kHz | Modular STT-LLM-TTS voice pipeline, JWT token server |
| **[shorekeeper-s2s](https://github.com/Schnee111/shorekeeper-s2s)** | **Native S2S Monorepo** | Gemini 3.1 Live · WebRTC · OMP Worker Mesh · SQLite WAL | Flagship end-to-end speech-to-speech autonomous engineering platform |

---

## 🛠️ Technology Stack

| Layer | Technologies & Frameworks | Description |
|---|---|---|
| **Frontend Framework** | Svelte 5 (Runes `$state`, `$derived`, `$effect`) | Next-gen reactive UI without virtual DOM overhead |
| **Build & Tooling** | Vite 6 · TypeScript 5.7 · pnpm | Ultra-fast HMR and optimized static production bundling |
| **Real-time Voice Carrier** | LiveKit Client SDK · WebRTC · RFC 6464 | Hardware-decoupled audio telemetry with 0ms visual latency |
| **3D Graphics & Shaders** | Three.js · Custom Spectro Particle Shaders | Hardware-accelerated 60fps Spectro Orb visualization |
| **Audio Worklet & DSP** | Web Audio API · AudioContext Decoupled Analyser | Zero-crackle waveform and audio-level analysis |
| **Styling & Aesthetics** | Tailwind CSS 3.4 · WuWa Cosmic Palette | Void obsidian, Kuro Gold (`#c5a86a`), Spectro Mint (`#6ee7b7`) |
| **Deployment & Hosting** | Nginx Alpine-Slim (<25MB) · GHCR · Docker Compose | Multi-stage containerized static preview & reverse proxy |

---

## 🏛️ System Architecture

```text
┌────────────────────────────────────────────────────────┐
│                  User Web Browser                      │
│                                                        │
│  [ User Mic ] ──▶ (AudioWorklet 16kHz PCM)             │
│                            │                           │
│                            ▼                           │
│                 [ LiveKit Room Engine ]                │
│                            ▲                           │
│                            │ (Opus 48kHz Audio Track)  │
│                            │                           │
│   ┌────────────────────────┴───────────────────────┐   │
│   │ Direct Audio Element (Native Hardware Playback)│   │
│   └────────────────────────────────────────────────┘   │
│                            │ (RFC 6464 Audio Levels)   │
│                            ▼                           │
│   ┌────────────────────────────────────────────────┐   │
│   │ Three.js Spectro Orb Visualizer (60 FPS)       │   │
│   └────────────────────────────────────────────────┘   │
└────────────────────────────┬───────────────────────────┘
                             │ WebRTC Room
                             ▼
┌────────────────────────────────────────────────────────┐
│            shorekeeper-cascade-agent (VPS)             │
│  Groq Whisper large-v3 ──▶ Hermes LLM ──▶ Fish Audio   │
└────────────────────────────────────────────────────────┘
```

---

## ⚡ Feature Matrix

| Feature | Shorekeeper Cascade Client | Standard Voice Starters |
|---|---|---|
| **Frontend Framework** | **Svelte 5 Runes** (fine-grained reactivity) | React 18 / Next.js (heavy re-renders) |
| **Audio Visualizer** | **3D Three.js Particle Orb** via RFC 6464 | 2D Canvas AnalyserNode (causes crackle) |
| **Streaming Text** | **Token-diff entry animations** + markdown filter | Unformatted raw string concatenation |
| **Wake Word Engine** | **ONNX Runtime Web** (`openwakeword-web`) | Cloud-only or no wake-word support |
| **Vocal Prosody** | Filters Fish Audio bracket cues (`[whisper]`, `[sigh]`) | Displays raw acoustic tags to user |
| **Build Footprint** | **~1.6 MB** minified bundle (gzip ~440 KB) | 5–12 MB typical node bundle |

---

## 🚀 Quickstart (60 Seconds)

### Prerequisites
- Node.js `>= 22.0.0`
- pnpm `>= 9.0.0`

### 1. Installation
```bash
# Clone the repository
git clone https://github.com/Schnee111/shorekeeper-cascade-client.git
cd shorekeeper-cascade-client/client

# Install dependencies with locked manifest
pnpm install
```

### 2. Local Development
```bash
# Launch Vite development server on port 3000
pnpm run dev
```
Visit `http://localhost:3000` to interact with the HUD.

### 3. Verification & Production Build
```bash
# Run 24 unit tests (Markdown parsers, prosody cleaners, mojibake filters)
pnpm test

# Build production-ready static assets
pnpm run build
```

---

## 📦 Production Deployment

The client compiles to static HTML/JS/CSS assets that can be served via Nginx, Cloudflare Pages, or Docker:

```nginx
# Sample Nginx Configuration Snippet
server {
    listen 443 ssl http2;
    server_name jarvis.shorekeeper.my.id;
    root /var/www/jarvis;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html =404;
    }
}
```

---

## 🔄 CI/CD & Automated Versioning

- **Automated Quality Gates**: Every pull request and push to `main` executes `pnpm test` and `pnpm run build` with frozen lockfile validation via GitHub Actions (`.github/workflows/ci.yml`).
- **Release Automation**: Governed by **Google Release Please** (`.github/workflows/release-please.yml`). Commits following [Conventional Commits](docs/SEMVER_CONVENTIONAL_COMMITS.md) automatically calculate semantic version bumps (`v2.1.0` ➔ `v2.2.0`) and generate `CHANGELOG.md`.

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

Developed with 🤍 by [Muhammad Daffa Ma'arif (Schnee111)](https://github.com/Schnee111).
