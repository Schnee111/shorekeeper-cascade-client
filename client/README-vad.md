# Setup VAD Assets (WAJIB sebelum `bun run dev`)

`@ricky0123/vad-web` butuh beberapa file statis (Silero VAD `.onnx`, worklet, dan onnxruntime `.wasm`) yang harus di-serve dari `public/vad/`.

## Langkah (jalankan di laptop, dari folder `client/`)

```bash
# 1. Install deps
bun install

# 2. Buat folder & copy asset dari node_modules
mkdir -p public/vad

# Silero VAD model + audio worklet (dari @ricky0123/vad-web dist)
cp node_modules/@ricky0123/vad-web/dist/silero_vad*.onnx public/vad/
cp node_modules/@ricky0123/vad-web/dist/vad.worklet.bundle.min.js public/vad/

# onnxruntime-web WASM binaries
cp node_modules/onnxruntime-web/dist/*.wasm public/vad/
```

> Nama file bisa sedikit beda antar versi. Kalau `cp` gagal, cek isi `node_modules/@ricky0123/vad-web/dist/` dan `node_modules/onnxruntime-web/dist/`, lalu sesuaikan. Yang penting: file `.onnx`, `vad.worklet.*.js`, dan `*.wasm` ada di `public/vad/`.

`voice.ts` sudah di-set `baseAssetPath: "/vad/"` dan `onnxWASMBasePath: "/vad/"` supaya nunjuk ke sini.

## Verifikasi
Setelah `bun run dev`, buka DevTools → Network. Saat tap orb pertama kali, harus ada request 200 ke `/vad/silero_vad*.onnx` dan `/vad/*.wasm`. Kalau 404 → asset belum ke-copy.
