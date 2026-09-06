# Conventional Commits & Automated SemVer Guide

Panduan resmi tata kelola versioning dan commit untuk repositori Shorekeeper.
Sistem CI/CD menggunakan **Google Release Please** yang secara otomatis membaca pesan git commit untuk menghitung kenaikan versi SemVer ($\text{MAJOR}.\text{MINOR}.\text{PATCH}$) dan menghasilkan `CHANGELOG.md`.

---

## 1. Format Pesan Commit

Setiap commit wajib mengikuti format baku:

```text
<type>(<scope>): <deskripsi singkat imperative>

[optional body: penjelasan latar belakang perubahan]

[optional footer: referensi issue atau BREAKING CHANGE]
```

### Tipe Commit & Dampak Versinya

| Tipe Commit | Kenaikan SemVer | Penjelasan & Aturan | Contoh Riil |
|---|---|---|---|
| `fix:` | **PATCH** (+0.0.1) | Perbaikan bug tanpa mengubah atau menambah API. | `fix(audio): lock 48kHz sample rate on Fish TTS` |
| `feat:` | **MINOR** (+0.1.0) | Penambahan fitur baru yang backward-compatible. | `feat(models): support Gemini 3.8 Flash series` |
| `perf:` | **PATCH** (+0.0.1) | Peningkatan performa kode atau komputasi. | `perf(vad): optimize silero frame window processing` |
| `feat!:` / `fix!:` | **MAJOR** (+1.0.0) | **BREAKING CHANGE** — perubahan arsitektur besar yang tidak kompatibel ke belakang. | `feat(core)!: migrate audio pipeline to LiveKit Agents SDK` |
| `docs:` | Tidak naik versi | Perubahan dokumentasi, README, atau panduan. | `docs: add SemVer and release-please guide` |
| `style:` | Tidak naik versi | Format kode, titik koma, whitespace (tanpa ubah logika). | `style: apply ruff format to python codebase` |
| `refactor:`| PATCH / None | Restrukturisasi kode tanpa fix bug atau nambah fitur. | `refactor(recorder): remove obsolete internal recorder` |
| `test:` | Tidak naik versi | Tambah atau perbaiki unit test. | `test(agent): guard livekit cloud tests with creds check` |
| `chore:` | Tidak naik versi | Maintenance dependencies, konfigurasi CI/CD, build tools. | `chore(deps): update livekit-agents to 1.6.9` |

---

## 2. Cara Agent Mengenali Kenaikan Versi

Release Please bekerja dengan parser berbasis regex pada HEAD git commit sejak tag rilis terakhir:

1. **Mendeteksi PATCH (`fix:`):**
   - Jika ditemukan commit dengan prefix `fix:` atau `perf:`, sistem menaikkan angka ketiga:  
     $$2.1.0 \longrightarrow 2.1.1$$

2. **Mendeteksi MINOR (`feat:`):**
   - Jika ditemukan commit dengan prefix `feat:`, sistem menaikkan angka kedua dan mereset patch ke `0`:  
     $$2.1.0 \longrightarrow 2.2.0$$

3. **Mendeteksi MAJOR (`BREAKING CHANGE`):**
   - Jika ditemukan tanda seru setelah tipe (misal `feat!:`) atau terdapat footer teks `BREAKING CHANGE: <alasan>`, sistem menaikkan angka depan dan mereset minor & patch ke `0`:  
     $$2.1.0 \longrightarrow 3.0.0$$

---

## 3. Siklus Rilis (Release Lifecycle)

1. Developer / Agent bekerja dan mem-push commit dengan format di atas ke branch `main`.
2. Release Please bot secara otomatis membuat atau meng-update **Release PR** draf (contoh: `chore: release 2.2.0`).
3. Draf PR tersebut berisi changelog otomatis yang mengelompokkan perbaikan bug dan fitur baru.
4. Ketika Release PR tersebut di-merge:
   - Tag rilis resmi (misal `v2.2.0`) terbit di GitHub Releases.
   - File `package.json` / `pyproject.toml` ter-update otomatis.
   - GitHub Actions CI/CD otomatis mem-build image container baru dan mem-push ke GitHub Container Registry (`ghcr.io`).
