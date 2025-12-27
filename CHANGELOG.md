# CHANGELOG

Semua perubahan penting pada proyek ini akan didokumentasikan di file ini.

Format changelog mengikuti prinsip Semantic Versioning.

---

## [2.0.0] - 2025

### Diubah
- Migrasi penuh dari PHP ke JavaScript (client-side).
- File utama aplikasi diubah dari `index.php` menjadi `index.html`.
- Mekanisme session PHP (`$_SESSION`) digantikan dengan `localStorage` browser.
- Proyek kini dapat dijalankan langsung di GitHub Pages tanpa backend.

### Dipertahankan
- Logika prediksi nilai tetap sama seperti versi PHP sebelumnya.
- Rentang nilai prediksi:
  - Rata-rata nilai rapor ≥ 75 menghasilkan nilai 75–100.
  - Rata-rata nilai rapor < 75 menghasilkan nilai 25–74.
- Satu mata pelajaran selalu menghasilkan satu nilai prediksi yang konsisten.
- Perhitungan rata-rata nilai tidak diubah.
- Ketentuan minimal 5 mata pelajaran tetap berlaku.
- Pesan hasil (sukses atau gagal) hanya dihasilkan satu kali per sesi.

### Ditambahkan
- Validasi form menggunakan JavaScript.
- Penanganan submit form di sisi client.
- Penyimpanan nilai prediksi dan pesan hasil menggunakan `localStorage`.

### Dihapus
- Ketergantungan pada PHP dan server-side processing.
- Penggunaan session PHP.
- Kebutuhan hosting yang mendukung PHP.

### Dampak
- Proyek menjadi lebih ringan dan mudah di-deploy.
- Dapat dihosting secara gratis menggunakan GitHub Pages.
- Tidak memerlukan database maupun backend server.

---

## [1.0.0] - 2024

### Rilis Awal
- Implementasi prediksi nilai ujian akhir menggunakan PHP.
- Menggunakan session PHP untuk menyimpan nilai prediksi.
- Form input mata pelajaran dan rata-rata nilai rapor.
- Penentuan pesan hasil berdasarkan rata-rata nilai prediksi.
