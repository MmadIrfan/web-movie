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
  {
    id: 1,
    title: "Kisah Tanah Jawa Pocong Gundul",
    posterURL: "/poster/gundul.jpg",
    label: "/label/su.png",
  },
  {
    id: 2,
    title: "Expend4bles",
    posterURL: "/poster/expend4bles.jpg",
    label: "/label/su.png",
  },
  {
    id: 3,
    title: "Satu Hari Dengan Ibu",
    posterURL: "/poster/shdi.jpg",
    label: "/label/su.png",
  },
  {
    id: 4,
    title: "Aku Tahu Kapan Kamu Mati - Desa Bunuh Diri",
    posterURL: "/poster/atkkm.jpg",
    label: "/label/su.png",
  },
  {
    id: 5,
    title: "A Haunting In Venice",
    posterURL: "/poster/AHauntingInVenice.jpg",
    label: "/label/su.png",
  },
  {
    id: 6,
    title: "Retribution",
    posterURL: "/poster/RETRIBUTION.jpg",
    label: "/label/su.png",
  },
  {
    id: 7,
    title: "Talk To Me",
    posterURL: "/poster/TalkToMe.jpg",
    label: "/label/su.png",
  },
  {
    id: 8,
    title: "No Hard Feelings",
    posterURL: "/poster/NoHardFeelings.jpg",
    label: "/label/su.png",
  },
  {
    id: 9,
    title: "Air Mata Di Ujung Sajadah",
    posterURL: "/poster/amds.jpg",
    label: "/label/su.png",
  },
  {
    id: 10,
    title: "The Nun II",
    posterURL: "/poster/thenun2.jpg",
    label: "/label/su.png",
  },
  // Tambahkan lebih banyak data film di sini
];

app.get("/movies", (req, res) => {
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

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
