# 🧩 UTS Web Service Engineering (WSE) - Resource events

**Topik:** CRUD RESTful (Complete with 7 RESTful Principles)  
**Mata Kuliah:** Web Service Engineering  
**Dosen Pengampu:** Muhayat, M.IT

---

## 👤 Informasi Mahasiswa
| Kunci | Nilai |
| :--- | :--- |
| **Nama** | Alya Nur Medina |
| **NIM** | 230104040226 |
| **Digit Akhir NIM** | 6 |
| **Resource API** | **events** (Data Kegiatan Kampus) |

---

## 🎯 Tujuan Praktikum
1. Menerapkan 7 RESTful Principles dalam API Express.  
2. Mengimplementasikan **CRUD lengkap (GET, POST, PUT, DELETE)** pada resource `events`.  
3. Menerapkan validasi input untuk field wajib: `title`, `date`, dan `location`.  
4. Menyusun struktur proyek modular dan konsisten.  
5. Menggunakan Status Code yang tepat (200, 201, **204**, 400, 404).

---

## ⚙️ Tools yang Digunakan
- Node.js 18+ & npm  
- Express.js  
- VS Code  
- Nodemon (dev dependency)  
- Postman / Thunder Client  

---

## 🧱 Struktur Folder Project
Struktur yang digunakan mematuhi ketentuan UTS, fokus pada modularitas:
UTS-WSE-230104040226/ ├─ package.json ├─ README.md ├─ src/ │  ├─ app.js │  ├─ routes/ │  │   └─ events.routes.js │  ├─ controllers/ │  │   └─ events.controller.js │  ├─ data/ │  │   └─ events.data.js (Data Dummy Awal)
---

## 🧠 Konsep Arsitektur Singkat
1. **Client (Postman)** → mengirim request CRUD dan uji validasi.  
2. **API Server (Express)** → menjalankan server dan mengaktifkan middleware.  
3. **Router (events.routes.js)** → mendefinisikan endpoint RESTful `/api/events`.  
4. **Controller** → berisi logika CRUD, validasi, dan membentuk response standar JSON.  
5. **Data Layer (events.data.js)** → menyimpan data dummy sementara yang dapat dimanipulasi.  
6. **Response JSON** → semua endpoint konsisten dan mengikuti status code RESTful (200, 201, 204, 400, 404).

---

## 🧮 7 RESTful Principles (Penerapan)
| No | Prinsip | Penjelasan Singkat |
|----|----------|--------------------|
| 1 | **Resource-Oriented URI** | Gunakan kata benda jamak: `/api/events` |
| 2 | **Proper HTTP Methods** | Gunakan GET, POST, PUT, DELETE sesuai fungsinya |
| 3 | **Stateless Communication** | Tiap request independen |
| 4 | **Consistent Status Codes** | Gunakan 200, 201, **204**, 400, 404 sesuai kondisi |
| 5 | **Content Representation (JSON)** | Semua response berformat JSON |
| 6 | **Validation & Error Handling** | Validasi input memastikan field wajib ada (400 Bad Request) |
| 7 | **Discoverability** | Endpoint `/api/info` aktif dan berisi identitas service |

---

## 🧰 Daftar Endpoint RESTful API (Resource: `events`)

| No | Endpoint | Method | Deskripsi | Status Code | Field Wajib |
|----|-----------|--------|------------|--------------|--------------|
| 1 | `/api/events` | GET | Ambil semua kegiatan | 200 | – |
| 2 | `/api/events/:id` | GET | Ambil kegiatan berdasarkan ID | 200 / 404 | – |
| 3 | `/api/events` | POST | Tambah kegiatan baru | 201 / 400 | `{ "title": "...", "date": "...", "location": "..." }` |
| 4 | `/api/events/:id` | PUT | Update penuh kegiatan | 200 / 400 / 404 | `{ "title": "...", "date": "...", "location": "..." }` |
| 5 | `/api/events/:id` | DELETE | Hapus kegiatan | **204** / 404 | – |
| 6 | `/api/info` | GET | Informasi service/Identitas | 200 | – |

---

## 🧪 Langkah Uji Postman (Untuk 5 Screenshot Wajib)

Lakukan pengujian berikut secara berurutan:

### 1️⃣ GET /api/info
* **Method:** `GET`
* **Endpoint:** `http://localhost:3000/api/info`
* **Hasil:** `200 OK` (Menampilkan Identitas Mahasiswa)

### 2️⃣ POST /api/events (Success)
* **Method:** `POST`
* **Endpoint:** `http://localhost:3000/api/events`
* **Body (raw, JSON):** `{"title": "Kuliah Tamu WSE", "date": "2025-11-25", "location": "Auditorium"}`
* **Hasil:** **`201 Created`**

### 3️⃣ POST /api/events (Validation Error)
* **Method:** `POST`
* **Endpoint:** `http://localhost:3000/api/events`
* **Body (raw, JSON):** `{"title": "Event Gagal"}`
* **Hasil:** **`400 Bad Request`**

### 4️⃣ GET /api/events
* **Method:** `GET`
* **Endpoint:** `http://localhost:3000/api/events`
* **Hasil:** **`200 OK`** (Menampilkan data awal + data dari uji POST success)

### 5️⃣ DELETE /api/events/1
* **Method:** `DELETE`
* **Endpoint:** `http://localhost:3000/api/events/1`
* **Hasil:** **`204 No Content`**

---

## 🧩 Rubrik Penilaian (Fokus UTS)
| No | Aspek | Bobot |
|----|--------|-------|
| 1 | CRUD Lengkap (GET, POST, PUT, DELETE) | 25% |
| 2 | Status Code Tepat (200, 201, 204, 400, 404) | 25% |
| 3 | Validasi Input & Error Handling (400) | 15% |
| 4 | Penerapan 7 RESTful Principles | 10% |
| 5 | Struktur Project Modular & Konsisten | 10% |
| 6 | Response JSON Rapi | 5% |
| 7 | Dokumentasi README.md Lengkap | 5% |
| 8 | Lima (5) Uji Postman Sesuai Checklist | 5% |
| **TOTAL** |  | **100%** |

---

🧑‍💻 *Dikembangkan untuk mata kuliah Web Service Engineering - Prodi S1 Teknologi Informasi - UIN Antasari Banjarmasin* ✍️ *Dosen Pengampu: Muhayat, M.IT*
