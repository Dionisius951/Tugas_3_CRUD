# CRUD APP Webinar

## Overview

repostory ini berisi frontend dan backend untuk menjalankan aplikasi pendaftaran webinar.

## Backend

## Cara Menjalankan Server

```
cd backend
```

```
npm install
```

```bash
nodemon index.js
```

## Endpoints

### 1. Mendapatkan Data Webinar
Untuk mendapatkan data webinar, gunakan metode **GET** dan buka URL berikut:
[http://localhost:9000/webinar](http://localhost:9000/webinar)

Jika data tersedia, maka tampilan akan seperti berikut ini:

```json
{
  "message": "Berhasil mendapat data",
  "data": [
    {
      "id": 1,
      "title": "Web Development 2025",
      "detail": "menjadi web developer handal",
      "date": "2025-01-04",
      "link": "satset.zoom"
    }
  ]
}
```

---

### 2. Menambahkan Data Webinar
Untuk menambahkan data webinar, gunakan metode **POST** dan buka URL berikut:
[http://localhost:9000/webinar](http://localhost:9000/webinar)

Inputkan data value sesuai dengan webinar yang ingin ditambahkan. Sebagai contoh:

```json
{
  "title": "Web Development 2025",
  "detail": "menjadi web developer handal",
  "date": "2025-01-04",
  "link": "satset.zoom"
}
```

Ketika data dikirim, output akan tampak seperti berikut:

```json
{
  "message": "Berhasil Membuat Webinar"
}
```

---

### 3. Memperbarui Data Webinar
Untuk memperbarui data webinar, gunakan metode **PUT** dan buka URL berikut:
[http://localhost:9000/webinar/:id](http://localhost:9000/webinar/:id)

Inputkan data value yang ingin diubah. Jika hanya ingin memperbarui sebagian informasi, kirim data seperti berikut:

```json
{
  "title": "Web Development Advanced",
  "date": "2025-02-10"
}
```

Respons jika berhasil memperbarui data:

```json
{
  "message": "Berhasil Mengupdate Webinar"
}
```

---

### 4. Menghapus Data Webinar
Untuk menghapus data webinar, gunakan metode **DELETE** dan buka URL berikut:
[http://localhost:9000/webinar/:id](http://localhost:9000/webinar/:id)

Jika permintaan berhasil, respons akan seperti berikut:

```json
{
  "message": "Berhasil Menghapus Webinar"
}
```

---

### 5. Mendapatkan Data Registrasi
Untuk mendapatkan data registrasi, gunakan metode **GET** dan buka URL berikut:
[http://localhost:9000/register](http://localhost:9000/register)

Jika data tersedia, maka tampilan akan seperti berikut ini:

```json
{
  "message": "Berhasil mendapat data",
  "data": [
    {
      "webinar_id": 3,
      "date_register": "2025-01-03",
      "name": "dion",
      "email": "dion@dion.com"
    }
  ]
}
```

---

### 6. Menambahkan Data Registrasi
Untuk menambahkan data registrasi, gunakan metode **POST** dan buka URL berikut:
[http://localhost:9000/register](http://localhost:9000/register)

Inputkan data sesuai dengan registrasi yang ingin ditambahkan. Sebagai contoh:

```json
{
  "webinar_id": 3,
  "date_register": "2025-01-03",
  "name": "dion",
  "email": "dion@dion.com"
}
```

Ketika data dikirim, output akan tampak seperti berikut:

```json
{
  "message": "Berhasil Mendaftar webinar"
}
```

---

## Frontend

## Cara Menjalankan Server

```
cd frontend
```

```
npm install
```

```bash
npm run dev
```

### 1. Halaman Register
Frontend route untuk melakukan registrasi webinar.
- **Route:** `/`
- **Fitur:** Menampilkan form registrasi untuk pengguna.

### 2. Halaman CRUD Webinar
Frontend route untuk mengelola data webinar (CRUD).
- **Route:** `/webinar`
- **Fitur:** Menampilkan daftar webinar serta form untuk menambah, mengedit, dan menghapus webinar.

---

## Catatan
- **ID** adalah parameter yang wajib digunakan untuk metode **PUT** dan **DELETE** pada webinar.
- API ini dirancang untuk dijalankan di server lokal dengan port **9000**. Pastikan tidak ada konflik dengan aplikasi lain yang berjalan di port yang sama.

