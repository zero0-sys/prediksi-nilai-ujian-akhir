# Web Prediksi Mata pelajaran 

## Deskripsi
Prediksi Mata Pelajaran adalah aplikasi web yang dirancang untuk memprediksi nilai ujian untuk berbagai mata pelajaran. Pengguna dapat memasukkan mata pelajaran, dan aplikasi tersebut menghasilkan nilai prediksi acak. Aplikasi ini juga menghitung nilai rata-rata dan menampilkan pesan motivasi berdasarkan hasil. Proyek ini dibangun dengan PHP untuk logika backend dan HTML, CSS, dan JavaScript untuk frontend.

---

## Fitur
- Memprediksi nilai untuk mata pelajaran input dengan nilai acak antara 0 dan 100.
- Menghitung nilai rata-rata semua mata pelajaran yang diprediksi.
- Menampilkan pesan umpan balik motivasi atau konstruktif berdasarkan nilai rata-rata.
- Memungkinkan pengguna untuk menambahkan beberapa mata pelajaran secara dinamis untuk memprediksi nilai.
- Desain yang sepenuhnya responsif untuk perangkat seluler dan desktop.

---

## Persyaratan
- PHP 7.4 atau lebih tinggi
- Server web (misalnya, Apache, Nginx, atau server bawaan PHP)
- Peramban dengan JavaScript yang diaktifkan

---

## Instalasi
1. Klon repositori atau unduh kode sumber:
```bash
git clone https://github.com/Netyc/prediksi-nilai-ujian-akhir.git
```

2. Letakkan file di direktori root server web Anda.

3. Jalankan server PHP Anda:
```bash
php -S localhost:8000
```

4. Buka peramban Anda dan navigasikan ke:
```
http://localhost:8000
```

---

## Penggunaan
1. Masukkan nama subjek di kolom input.
2. Klik **Tambahkan Mapel Lainnya** untuk menambahkan lebih banyak subjek jika diperlukan.
3. Klik **Prediksi Hasil** untuk menghasilkan skor.
4. Lihat skor yang diprediksi dan skor rata-rata di bagian hasil.
5. Baca pesan motivasi berdasarkan skor rata-rata.

---

## Struktur File
- `index.php`: Skrip PHP utama yang berisi logika backend dan rendering frontend.
- `styles`: CSS yang disematkan dalam HTML untuk menata aplikasi web.
- `scripts`: JavaScript untuk penambahan bidang input subjek secara dinamis.

---

## Sorotan Kode Kunci
- **Prediksi Skor Acak:**

```php
$score = rand(0, 100);

```
Menghasilkan skor acak untuk setiap input subjek.

- **Perhitungan Skor Rata-rata:**

```php
return array_sum($this->predictedScores) / count($this->predictedScores);

```
Menghitung rata-rata semua skor yang diprediksi.

- **Desain Responsif:**
CSS ditata dengan kueri media untuk memastikan responsivitas untuk perangkat desktop dan seluler.

---

## Kustomisasi
- **Pesan Umpan Balik:**
Anda dapat mengedit pesan sukses dan pesan kesalahan dalam array `$successMessages` dan `$errorMessages` dalam kode PHP.

- **Penataan Gaya:**
Ubah CSS yang disematkan di bagian `<style>` untuk mengubah tampilan aplikasi.

---

## Kontribusi
1. Fork repositori.
2. Buat cabang baru:
```bash
git checkout -b feature-branch
```
3. Komit perubahan Anda:
```bash
git commit -m "Add new feature"
```
4. Push ke cabang:
```bash
git push origin feature-branch
```
5. Buka permintaan tarik.

---

## Lisensi
free
---

## Ucapan Terima Kasih
- Dibuat oleh :@naufalshdq
- Ucapan terima kasih khusus kepada kontributor dan penguji
- Dukung kami di: [Saweria](https://saweria.co/naufalshdq)

---

## Kontak
Untuk pertanyaan, saran, atau kontribusi, silakan hubungi:
- Email: naufalmushaddiq@gmail.com
