const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const users = [
  { id: 1, username: "irfan", password: "password1" },
  { id: 2, username: "ghina", password: "password2" },
];

// Data film (contoh)
const movies = [
  { id: 1, title: 'Kisah Tanah Jawa Pocong Gundul', posterURL: 'link_gambar_1' },
  { id: 2, title: 'Expend4bles', posterURL: 'link_gambar_2' },
  { id: 3, title: 'Satu Hari Dengan Ibu', posterURL: 'link_gambar_2' },
  { id: 4, title: 'Aku Tahu Kapan Kamu Mati - Desa Bunuh Diri', posterURL: 'link_gambar_2' },
  { id: 5, title: 'A Haunting In Venice', posterURL: 'link_gambar_2' },
  { id: 6, title: 'Retribution', posterURL: 'link_gambar_2' },
  { id: 7, title: 'Talk To Me', posterURL: 'link_gambar_2' },
  { id: 8, title: 'No Hard Feelings', posterURL: 'link_gambar_2' },
  { id: 9, title: 'Air Mata Di Ujung Sajadah', posterURL: 'link_gambar_2' },
  { id: 10, title: 'The Nun II', posterURL: 'link_gambar_2' },
  // Tambahkan lebih banyak data film di sini
];

app.get('/api/v2/cineflex/movies', (req, res) => {
  res.json(movies);
});

app.get("/users", (req, res) => {
  const { username, password } = req.query;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json([user]);
  } else {
    res.status(401).json({ message: "Login failed. Invalid credentials." });
  }
});
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
