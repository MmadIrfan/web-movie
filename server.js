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
    label: "/label/R.png",
    categories: "COMING SOON",
    duration: 103,
    genre: "Action, Adventure",
    produser: "Jason Statham, Kevin King Templeton, Jeffrey Greenstein",
    sutradara: "Scott Waugh",
    penulis: "Kurt Wimmer, Tad Daggerhart, Max Adams",
    produksi: "Millenium Films",
    casts:
      "Sylvester Stallone, Jason Statham, 50 Cent, Megan Fox, Dolph Lundgren, Tony Jaa, Iko Uwais, Randy Couture, Andy Garcia, Nicole Andrews",
    sinopsis:
      "Misi kelompok The Expendables kali ini akan berusaha mencegah perang dunia ke-3. Mereka rela mempertaruhkan nyawa demi kesuksesan misi. Barney Ross (Sylvester Stallone), Lee Christmas (Jason Statham) akan berhadapan dengan penjual senjata ilegal yang salah satunya dipimpin oleh Iko Uwais.",
  },
  {
    id: 2,
    title: "Expend4bles",
    posterURL: "/poster/expend4bles.jpg",
    label: "/label/D.png",
    categories: "NOW PLAYING",
    duration: "103",
    genre: "Action, Adventure",
    produser: "Jason Statham, Kevin King Templeton, Jeffrey Greenstein",
    sutradara: "Scott Waugh",
    penulis: "Kurt Wimmer, Tad Daggerhart, Max Adams",
    produksi: "Millenium Films",
    casts:
      "Sylvester Stallone, Jason Statham, 50 Cent, Megan Fox, Dolph Lundgren, Tony Jaa, Iko Uwais, Randy Couture, Andy Garcia, Nicole Andrews",
    sinopsis:
      "Misi kelompok The Expendables kali ini akan berusaha mencegah perang dunia ke-3. Mereka rela mempertaruhkan nyawa demi kesuksesan misi. Barney Ross (Sylvester Stallone), Lee Christmas (Jason Statham) akan berhadapan dengan penjual senjata ilegal yang salah satunya dipimpin oleh Iko Uwais.",
  },
  {
    id: 3,
    title: "Satu Hari Dengan Ibu",
    posterURL: "/poster/shdi.jpg",
    label: "/label/su.png",
    categories: "NOW PLAYING",
    duration: "103",
    genre: "Action, Adventure",
    produser: "Jason Statham, Kevin King Templeton, Jeffrey Greenstein",
    sutradara: "Scott Waugh",
    penulis: "Kurt Wimmer, Tad Daggerhart, Max Adams",
    produksi: "Millenium Films",
    casts:
      "Sylvester Stallone, Jason Statham, 50 Cent, Megan Fox, Dolph Lundgren, Tony Jaa, Iko Uwais, Randy Couture, Andy Garcia, Nicole Andrews",
    sinopsis:
      "Misi kelompok The Expendables kali ini akan berusaha mencegah perang dunia ke-3. Mereka rela mempertaruhkan nyawa demi kesuksesan misi. Barney Ross (Sylvester Stallone), Lee Christmas (Jason Statham) akan berhadapan dengan penjual senjata ilegal yang salah satunya dipimpin oleh Iko Uwais.",
  },
  {
    id: 4,
    title: "Aku Tahu Kapan Kamu Mati - Desa Bunuh Diri",
    posterURL: "/poster/atkkm.jpg",
    label: "/label/D.png",
    categories: "NOW PLAYING",
    duration: "103",
    genre: "Action, Adventure",
    produser: "Jason Statham, Kevin King Templeton, Jeffrey Greenstein",
    sutradara: "Scott Waugh",
    penulis: "Kurt Wimmer, Tad Daggerhart, Max Adams",
    produksi: "Millenium Films",
    casts:
      "Sylvester Stallone, Jason Statham, 50 Cent, Megan Fox, Dolph Lundgren, Tony Jaa, Iko Uwais, Randy Couture, Andy Garcia, Nicole Andrews",
    sinopsis:
      "Misi kelompok The Expendables kali ini akan berusaha mencegah perang dunia ke-3. Mereka rela mempertaruhkan nyawa demi kesuksesan misi. Barney Ross (Sylvester Stallone), Lee Christmas (Jason Statham) akan berhadapan dengan penjual senjata ilegal yang salah satunya dipimpin oleh Iko Uwais.",
  },
  {
    id: 5,
    title: "A Haunting In Venice",
    posterURL: "/poster/AHauntingInVenice.jpg",
    label: "/label/R.png",
    categories: "NOW PLAYING",
    duration: "103",
    genre: "Action, Adventure",
    produser: "Jason Statham, Kevin King Templeton, Jeffrey Greenstein",
    sutradara: "Scott Waugh",
    penulis: "Kurt Wimmer, Tad Daggerhart, Max Adams",
    produksi: "Millenium Films",
    casts:
      "Sylvester Stallone, Jason Statham, 50 Cent, Megan Fox, Dolph Lundgren, Tony Jaa, Iko Uwais, Randy Couture, Andy Garcia, Nicole Andrews",
    sinopsis:
      "Misi kelompok The Expendables kali ini akan berusaha mencegah perang dunia ke-3. Mereka rela mempertaruhkan nyawa demi kesuksesan misi. Barney Ross (Sylvester Stallone), Lee Christmas (Jason Statham) akan berhadapan dengan penjual senjata ilegal yang salah satunya dipimpin oleh Iko Uwais.",
  },
  {
    id: 6,
    title: "Retribution",
    posterURL: "/poster/RETRIBUTION.jpg",
    label: "/label/R.png",
    categories: "NOW PLAYING",
    duration: "103",
    genre: "Action, Adventure",
    produser: "Jason Statham, Kevin King Templeton, Jeffrey Greenstein",
    sutradara: "Scott Waugh",
    penulis: "Kurt Wimmer, Tad Daggerhart, Max Adams",
    produksi: "Millenium Films",
    casts:
      "Sylvester Stallone, Jason Statham, 50 Cent, Megan Fox, Dolph Lundgren, Tony Jaa, Iko Uwais, Randy Couture, Andy Garcia, Nicole Andrews",
    sinopsis:
      "Misi kelompok The Expendables kali ini akan berusaha mencegah perang dunia ke-3. Mereka rela mempertaruhkan nyawa demi kesuksesan misi. Barney Ross (Sylvester Stallone), Lee Christmas (Jason Statham) akan berhadapan dengan penjual senjata ilegal yang salah satunya dipimpin oleh Iko Uwais.",
  },
  {
    id: 7,
    title: "Talk To Me",
    posterURL: "/poster/TalkToMe.jpg",
    label: "/label/D.png",
    categories: "COMING SOON",
    duration: "103",
    genre: "Action, Adventure",
    produser: "Jason Statham, Kevin King Templeton, Jeffrey Greenstein",
    sutradara: "Scott Waugh",
    penulis: "Kurt Wimmer, Tad Daggerhart, Max Adams",
    produksi: "Millenium Films",
    casts:
      "Sylvester Stallone, Jason Statham, 50 Cent, Megan Fox, Dolph Lundgren, Tony Jaa, Iko Uwais, Randy Couture, Andy Garcia, Nicole Andrews",
    sinopsis:
      "Misi kelompok The Expendables kali ini akan berusaha mencegah perang dunia ke-3. Mereka rela mempertaruhkan nyawa demi kesuksesan misi. Barney Ross (Sylvester Stallone), Lee Christmas (Jason Statham) akan berhadapan dengan penjual senjata ilegal yang salah satunya dipimpin oleh Iko Uwais.",
  },
  {
    id: 8,
    title: "No Hard Feelings",
    posterURL: "/poster/NoHardFeelings.jpg",
    label: "/label/su.png",
    categories: "NOW PLAYING",
    duration: "103",
    genre: "Action, Adventure",
    produser: "Jason Statham, Kevin King Templeton, Jeffrey Greenstein",
    sutradara: "Scott Waugh",
    penulis: "Kurt Wimmer, Tad Daggerhart, Max Adams",
    produksi: "Millenium Films",
    casts:
      "Sylvester Stallone, Jason Statham, 50 Cent, Megan Fox, Dolph Lundgren, Tony Jaa, Iko Uwais, Randy Couture, Andy Garcia, Nicole Andrews",
    sinopsis:
      "Misi kelompok The Expendables kali ini akan berusaha mencegah perang dunia ke-3. Mereka rela mempertaruhkan nyawa demi kesuksesan misi. Barney Ross (Sylvester Stallone), Lee Christmas (Jason Statham) akan berhadapan dengan penjual senjata ilegal yang salah satunya dipimpin oleh Iko Uwais.",
  },
  {
    id: 9,
    title: "Air Mata Di Ujung Sajadah",
    posterURL: "/poster/amds.jpg",
    label: "/label/su.png",
    categories: "COMING SOON",
    duration: "103",
    genre: "Action, Adventure",
    produser: "Jason Statham, Kevin King Templeton, Jeffrey Greenstein",
    sutradara: "Scott Waugh",
    penulis: "Kurt Wimmer, Tad Daggerhart, Max Adams",
    produksi: "Millenium Films",
    casts:
      "Sylvester Stallone, Jason Statham, 50 Cent, Megan Fox, Dolph Lundgren, Tony Jaa, Iko Uwais, Randy Couture, Andy Garcia, Nicole Andrews",
    sinopsis:
      "Misi kelompok The Expendables kali ini akan berusaha mencegah perang dunia ke-3. Mereka rela mempertaruhkan nyawa demi kesuksesan misi. Barney Ross (Sylvester Stallone), Lee Christmas (Jason Statham) akan berhadapan dengan penjual senjata ilegal yang salah satunya dipimpin oleh Iko Uwais.",
  },
  {
    id: 10,
    title: "The Nun II",
    posterURL: "/poster/thenun2.jpg",
    label: "/label/R.png",
    categories: "COMING SOON",
    duration: "103",
    genre: "Action, Adventure",
    produser: "Jason Statham, Kevin King Templeton, Jeffrey Greenstein",
    sutradara: "Scott Waugh",
    penulis: "Kurt Wimmer, Tad Daggerhart, Max Adams",
    produksi: "Millenium Films",
    casts:
      "Sylvester Stallone, Jason Statham, 50 Cent, Megan Fox, Dolph Lundgren, Tony Jaa, Iko Uwais, Randy Couture, Andy Garcia, Nicole Andrews",
    sinopsis:
      "Misi kelompok The Expendables kali ini akan berusaha mencegah perang dunia ke-3. Mereka rela mempertaruhkan nyawa demi kesuksesan misi. Barney Ross (Sylvester Stallone), Lee Christmas (Jason Statham) akan berhadapan dengan penjual senjata ilegal yang salah satunya dipimpin oleh Iko Uwais.",
  },
  // Tambahkan lebih banyak data film di sini
];

const foto = [
  {
    id: 1,
    gambar: "/c1.jpg",
    ke: "/detail?id=2",
    alt: "Expend4bles",
  },
  {
    id: 2,
    gambar: "/c2.jpg",
    ke: "/detail?id=6",
    alt: "Retribution",
  },
  {
    id: 3,
    gambar: "/c3.jpg",
    ke: "/detail?id=1",
    alt: "Kisah Tanah Jawa Pocong Gundul",
  },
  {
    id: 4,
    gambar: "/c4.jpg",
    ke: "/detail?id=3",
    alt: "Satu Hari Dengan Ibu",
  },
];

app.get("/foto", (req, res) => {
  res.json(foto);
});

app.get("/movies", (req, res) => {
  res.json(movies);
});
app.get("/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === movieId);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
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
