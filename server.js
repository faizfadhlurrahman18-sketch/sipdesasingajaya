const express = require('express');
const app = express();
const path = require('path');

// Melayani semua file statis dari folder utama
app.use(express.static(__dirname));

// Jalankan server di semua IP (agar bisa diakses dari device lain di jaringan yang sama)
app.listen(3000, '0.0.0.0', () => {
  console.log('Server berjalan di http://localhost:3000 (atau http://<IP-KOMPUTER>:3000 dari device lain)');
});
