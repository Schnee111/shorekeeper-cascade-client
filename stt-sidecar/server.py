import os
import tempfile

from fastapi import FastAPI, File, UploadFile
from faster_whisper import WhisperModel

# base = cepat & ringan CPU; ganti "small"/"medium" kalau butuh akurasi & ada resource
MODEL_SIZE = os.getenv("WHISPER_MODEL", "base")
DEVICE = os.getenv("WHISPER_DEVICE", "cpu")
COMPUTE = os.getenv("WHISPER_COMPUTE", "int8")
LANGUAGE = os.getenv("WHISPER_LANG", "id")  # set kosong untuk auto-detect

model = WhisperModel(MODEL_SIZE, device=DEVICE, compute_type=COMPUTE)
app = FastAPI(title="Shorekeeper STT Sidecar")


@app.get("/health")
def health():
    return {"status": "ok", "model": MODEL_SIZE, "device": DEVICE, "compute": COMPUTE}


@app.post("/transcribe")
async def transcribe(audio: UploadFile = File(...)):
    data = await audio.read()
    with tempfile.NamedTemporaryFile(suffix=".webm", delete=False) as f:
        f.write(data)
        path = f.name
    try:
        segments, info = model.transcribe(
            path,
            language=LANGUAGE or None,
            beam_size=1,
            vad_filter=True,
        )
        text = " ".join(s.text.strip() for s in segments).strip()
        return {"text": text, "lang": info.language}
    finally:
        os.unlink(path)
