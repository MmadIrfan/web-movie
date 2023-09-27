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
    duration: 107,
    genre: "Horror",
    produser: "Manoj Punjabi",
    sutradara: "Awi Suryadi",
    penulis: "Agasyah Karim, Khalid Kashogi, Awi Suryadi",
    produksi: "Md Pictures",
    casts: "SDeva Mahenra, Della Dartyan, Iwa K, Moh Abe, Joanna Dyah",
    sinopsis:
      "HAO (Deva Mahenra) memiliki kemampuan retrokognisi, sebuah kemampuan melihat kejadian di masa lalu. Dengan kemampuan nya Hao menolong SARI (Nayla D Purnama) seorang siswi SMK yang ternyata hilang di culik sosok pocong dengan kepala gundul yang menyeramkan. Bersama RIDA (Della Dartyan) sahabat nya, Hao berhasil menyelamatkan Sari, tapi perbuatan Hao ternyata membuat pocong gundul murka. Teror demi teror mengancam keselamatan Hao. Dengan kemampuannya, ia mengintip masalalu Pocong Gundul, semasa hidup rupanya ia seorang dukun hitam bernama WALISDI (Iwa K). Manusia jahat yang melakukan ritual kuno berbahaya, ritual yang membuatnya menjadi Pocong Gundul. Jika dibiarkan, Pocong Gundul akan bergentayangan dan memakan lebih banyak korban. Karena itu, Hao harus melakukan upaya terbaiknya untuk menghentikan rencana jahat Pocong Gundul, meski nyawa menjadi taruhannya.",
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
    casts: "Sylvester Stallone, Jason Statham, 50 Cent, Megan Fox.",
    sinopsis:
      "Misi kelompok The Expendables kali ini akan berusaha mencegah perang dunia ke-3. Mereka rela mempertaruhkan nyawa demi kesuksesan misi. Barney Ross (Sylvester Stallone), Lee Christmas (Jason Statham) akan berhadapan dengan penjual senjata ilegal yang salah satunya dipimpin oleh Iko Uwais.",
  },
  {
    id: 3,
    title: "Satu Hari Dengan Ibu",
    posterURL: "/poster/shdi.jpg",
    label: "/label/su.png",
    categories: "NOW PLAYING",
    duration: "105",
    genre: "Drama, Family",
    produser: "Novandrian, Dimas Luqman, Ahya Elhasyim, M. Iqbal",
    sutradara: "M. Amrul Ummami",
    penulis: "M. Amrul Ummami, M. Ali Ghifari",
    produksi: "Ruang 29 Pictures",
    casts: "Chand Kelvin, Vebby Palwinta, Vonni Anggraini, Muzakki Ramdhan",
    sinopsis:
      "Dewa (Chand Kelvin), seorang pemuda bermasalah terjebak dalam lingkaran waktu yang terus berulang. Setiap kali terbangun, ia mengulang hari ketika Ibunya (Vonny Anggraini) meninggal. Sekuat tenaga ia ingin lepas dari lingkaran waktu yang menyakitkan itu. Dalam prosesnya, Dewa menyadari kesalahan-kesalahan yang ia lakukan. Dengan bantuan Putri (Vebby Palwinta) dan teman-temannya, Dewa terus mencoba jadi lebih baik, dan lebih berbakti pada ibunya.",
  },
  {
    id: 4,
    title: "Aku Tahu Kapan Kamu Mati - Desa Bunuh Diri",
    posterURL: "/poster/atkkm.jpg",
    label: "/label/D.png",
    categories: "NOW PLAYING",
    duration: "105",
    genre: "Horror",
    produser: "Oswin Bonifanz",
    sutradara: "Anggy Umbara",
    penulis: "Laila Nur Azizah",
    produksi: "Millenium Films",
    casts: "Natasha Wilona, Acha Septriasa, Marsha Aruan.",
    sinopsis:
      "Siena dan teman-temannya mengungkap misteri kematian yang terjadi tanpa peringatan, membawa mereka ke Desa Remetuk dan kutukan kelam.",
  },
  {
    id: 5,
    title: "A Haunting In Venice",
    posterURL: "/poster/AHauntingInVenice.jpg",
    label: "/label/R.png",
    categories: "NOW PLAYING",
    duration: "103",
    genre: "Drama, Crime",
    produser: "Kenneth Branagh, Judy Hofflund",
    sutradara: "Kenneth Branagh",
    penulis: "Michael Green",
    produksi: "Walt Disney Pictures",
    casts: "Kelly Reilly, Jamie Dornan, Kenneth Branagh, Michelle Yeoh",
    sinopsis:
      "Berlatar kota Venice, pasca Perang Dunia II, Hercule Poirot (Kenneth Branagh) yang sudah pensiun menerima undangan untuk menghadiri acara pemanggilan arwah. Mantan detektif ini akhirnya kembali beraksi setelah salah satu tamu terbunuh.",
  },
  {
    id: 6,
    title: "Retribution",
    posterURL: "/poster/RETRIBUTION.jpg",
    label: "/label/R.png",
    categories: "NOW PLAYING",
    duration: "90",
    genre: "Action, Crime",
    produser: "Jaume Collet-Serra, Shanna Eddy, Alex Heineman",
    sutradara: "Nimrod Antal",
    penulis: "Christopher Salmanpour, Alberto Marini",
    produksi: "Studio Canal",
    casts: "Liam Neeson, Jack Champion, Matthew Modine, Embeth Davidtz",
    sinopsis:
      "Matt Truner (Liam Neeson) seorang bankir senior yang mendapat ancaman bom saat mengantar anak-anaknya ke sekolah. Bom akan meledak jika ia berhenti ataupun keluar mobil.",
  },
  {
    id: 7,
    title: "Talk To Me",
    posterURL: "/poster/TalkToMe.jpg",
    label: "/label/D.png",
    categories: "COMING SOON",
    duration: "95",
    genre: "Action, Adventure",
    produser: "Kristina Ceyton",
    sutradara: "Danny Philippou, Michael Philippou",
    penulis: "Danny Philippou, Bill Hinzman, Daley Pearson",
    produksi:
      "Screen Australia, South Australian Film Corporation, Adelaide Film Festival Investment Fund, Causeway Films",
    casts: "Sophie Wilde, Alexandra Jensen, Joe Bird, Otis Dhanji",
    sinopsis:
      "Ketika sekelompok teman menemukan cara menyihir roh menggunakan tangan yang dibalsem, mereka menjadi terpikat pada sensasi baru, sampai salah satu dari mereka bertindak terlalu jauh dan melepaskan kekuatan supernatural yang menakutkan.",
  },
  {
    id: 8,
    title: "No Hard Feelings",
    posterURL: "/poster/NoHardFeelings.jpg",
    label: "/label/su.png",
    categories: "NOW PLAYING",
    duration: "103",
    genre: "Comedy, Romance",
    produser: "Justine Ciarrocchi, Jennifer Lawrence, Naomi Odenkirk",
    sutradara: "Gene Stupnitsky",
    penulis: "Gene Stupnitsky, John Phillips",
    produksi: "Sony Pictures",
    casts: "Jenifer Lawrence, Andrew Barth Feldman, Laura Benanti",
    sinopsis:
      "Di ambang kehilangan rumahnya, Maddie menemukan lowongan pekerjaan yang menarik: orang tua helikopter mencari seseorang untuk membawa putra mereka yang introvert berusia 19 tahun keluar dari cangkangnya sebelum kuliah. Dia memiliki satu musim panas untuk menjadikannya seorang pria atau mati saat mencoba.",
  },
  {
    id: 9,
    title: "Air Mata Di Ujung Sajadah",
    posterURL: "/poster/amds.jpg",
    label: "/label/su.png",
    categories: "COMING SOON",
    duration: "105",
    genre: "Drama",
    produser: "Ronny Irawan, Nafa Urbach",
    sutradara: "Key Mangunsong",
    penulis: "Titien Wattimena",
    produksi: "Beehave Pictures, MBK Productions",
    casts: "Fedi Nuril, Titi Kamal, Citra Kirana",
    sinopsis:
      "Tujuh tahun berlalu, Aqilla (Titi Kamal) baru mengetahui bahwa anaknya yakni Baskara (Faqih Alaydrus), ternyata masih hidup dan diasuh oleh Arif (Fedi Nuril) dan Yumna (Citra Kirana), pasangan yang hanya memiliki satu harapan: memiliki seorang anak. Aqilla bertolak dari kehidupannya yang hampa di Eropa menuju Kota Solo untuk menjemput masa depan barunya. Akankah Aqilla tega merenggut Baskara yang sudah dibesarkan oleh Arif dan Yumna selama bertahun-tahun? Memang darah dan daging Aqilla ada dalam diri Baskara, namun di sana juga ada keringat dan airmata Yumna. Siapakah yang lebih berhak menjadi ibu dari Baskara?",
  },
  {
    id: 10,
    title: "The Nun II",
    posterURL: "/poster/thenun2.jpg",
    label: "/label/R.png",
    categories: "COMING SOON",
    duration: "110",
    genre: "Horror, Mystery",
    produser: "Peter Safran, James Wan",
    sutradara: "Michael Chaves",
    penulis: "Ian Goldberg, Richard Naing, Akela Cooper",
    produksi: "Warner Bros. Pictures",
    casts: "Taissa Farmiga, Anna Popplewell, Bonnie Aarons.",
    sinopsis:
      "Berlatar tahun 1956, bermula dari pembunuhan seorang pendeta, Suster Irene (Taissa Farmiga) sekali lagi berhadapan dengan kekuatan jahat yang sangat besar, Valak sang biarawati iblis demi kedamaian hidupnya serta orang-orang di sekitarnya.",
  },
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
