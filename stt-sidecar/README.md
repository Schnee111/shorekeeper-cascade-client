# STT Sidecar — faster-whisper

Microservice Python untuk transkripsi audio (STT) Shorekeeper JARVIS.

## Setup
```bash
cd stt-sidecar
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
```

## Jalankan
```bash
.venv/bin/uvicorn server:app --host 127.0.0.1 --port 3003
```
Model `base` (~150MB) ter-download otomatis saat pertama run.

## Env
| Var | Default | Ket |
|---|---|---|
| `WHISPER_MODEL` | `base` | `tiny`/`base`/`small`/`medium` |
| `WHISPER_DEVICE` | `cpu` | `cuda` kalau ada GPU |
| `WHISPER_COMPUTE` | `int8` | `float16` utk GPU |
| `WHISPER_LANG` | `id` | kosongkan utk auto-detect |

## Verifikasi
```bash
curl localhost:3003/health
curl -F "audio=@sample.webm" localhost:3003/transcribe
```
**Butuh `ffmpeg` di PATH** untuk decode WebM.
