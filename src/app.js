const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const eventRoutes = require('./routes/events.routes.js');

app.get('/api/info', (req, res) => {
  res.status(200).json({
    author: "Alya Nur Medina",
    nim: "230104040226",
    resource: "events",
    description: "API untuk mengelola data kegiatan kampus (UTS WSE 2025)."
  });
});


app.use('/api', eventRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});