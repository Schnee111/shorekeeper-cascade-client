# Shorekeeper Cascade Client

Modern, responsive Web HUD client for the Shorekeeper voice ecosystem. Built with **Svelte 5 (Runes)**, **Vite**, **Tailwind CSS**, and **Three.js**, providing a production-grade WebRTC conversational interface with a 3D Spectro Particle Orb visualizer and token-diff streaming text reveal.

---

## Overview

The `shorekeeper-cascade-client` acts as the primary web frontend for the decoupled LiveKit cascade voice architecture. It establishes bidirectional WebRTC audio streams with the backend voice agent, captures microphone input, renders assistant replies with real-time markdown streaming, and visualizes audio telemetry using native WebRTC RFC 6464 levels.

### Key Capabilities

- **Svelte 5 Runes Architecture**: Reactive state management with fine-grained reactivity and minimal re-render overhead.
- **3D Spectro Particle Orb**: Interactive visualizer built with Three.js shaders responding dynamically to speaker volume, turn states, and audio frequencies.
- **Hardware-Decoupled WebRTC Audio**: WebAudio analysis decoupled from media stream output element to prevent buffer underrun crackling and aliasing.
- **Streaming Text Reveal**: GPU-friendly, token-by-token diff animation for incoming LLM responses with seamless markdown formatting.
- **Wake Word Integration**: Local on-device wake-word detection using ONNX Runtime Web (`onnxruntime-web`).
- **Dynamic Model & Voice Switching**: Live selector for AI models (Gemini 3.8 Flash High/Medium/Low) and 20+ expressive voice presets.

---

## Architecture Flow

```text
  [ User Microphone ]
          │ (AudioWorklet 16kHz)
          ▼
   [ LiveKit Client ] ──(WebRTC Room)──▶ [ shorekeeper-cascade-agent ]
          ▲                                       │
          │ (Opus 48kHz Audio Track)               │
          └───────────────────────────────────────┘
          │
  ┌───────┴─────────────────────────────────────────┐
  │ Browser Playback Sink                           │
  │  ├── HTMLAudioElement (Direct WebRTC Speaker)   │
  │  └── RFC 6464 Telemetry ──▶ Three.js Spectro Orb │
  └─────────────────────────────────────────────────┘
```

---

## Getting Started

### Prerequisites

- **Node.js**: >= 22.0.0
- **pnpm**: >= 9.0.0

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Schnee111/shorekeeper-cascade-client.git
   cd shorekeeper-cascade-client/client
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm run dev
   ```
   Open your browser at `http://localhost:3000`.

### Testing & Quality Gates

```bash
# Run unit test suite (24 tests covering markdown, prosody, and normalizations)
pnpm test

# Build production static bundle
pnpm run build
```

---

## CI/CD & Automated Release

- **Continuous Integration**: Every PR and push to `main` executes `pnpm test` and `pnpm run build` with frozen lockfile validation via GitHub Actions (`.github/workflows/ci.yml`).
- **Release Automation**: Governed by **Google Release Please** (`.github/workflows/release-please.yml`). Commits following [Conventional Commits](docs/SEMVER_CONVENTIONAL_COMMITS.md) automatically calculate semantic version bumps and generate `CHANGELOG.md`.

---

## License

This project is open source and available under the [MIT License](LICENSE).
