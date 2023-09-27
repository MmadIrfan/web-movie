import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Movie {
  id: number;
  title: string;
  posterURL: string;
  label: string;
  categories: string;
}
interface Foto {
  id: number;
  gambar: string;
  ke: string;
  alt: string;
}
export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [foto, setFoto] = useState<Foto[]>([]);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/movies"),
      axios.get("http://localhost:3001/foto"),
    ])
      .then(([moviesResponse, fotoResponse]) => {
        const moviesData = moviesResponse.data;
        const fotoData = fotoResponse.data;

        setMovies(moviesData);
        setFoto(fotoData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const nowPlaying = movies.filter(
    (movie) => movie.categories === "NOW PLAYING"
  );
  const upComing = movies.filter((movie) => movie.categories === "COMING SOON");

  return (
    <Layout judul="Home">
      <div className="p-6">
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={2500}
          transitionTime={800}
          infiniteLoop={true}
        >
          {foto.map((foto) => (
            <div key={foto.id} onClick={() => router.push(`${foto.ke}`)}>
              <Image
                src={`/carousel${foto.gambar}`}
                alt={foto.alt}
                width={800}
                height={400}
                priority={true}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="mt-8">
        <span className="bg-birutua text-putihb px-6 py-2 font-semibold">
          Now Playing
        </span>
      </div>
      <div className="mt-8 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {nowPlaying.map((movie) => (
          <div
            className="font-semibold p-2 hover:text-birumuda"
            key={movie.id}
            onClick={() => router.push(`/detail?id=${movie.id}`)}
          >
            <Image
              src={movie.posterURL}
              alt={movie.title}
              width={426}
              height={290}
            />
            <h2 className="text-center pt-4 text-lg">{movie.title}</h2>
            <div className="grid place-items-center h-10">
              <Image src={movie.label} alt="labels" width={42} height={22} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <span className="bg-birutua text-putihb px-6 py-2 font-semibold">
          Upcoming
        </span>
      </div>
      <div className="mt-8 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {upComing.map((movie) => (
          <div className="font-semibold p-2 hover:text-birumuda" key={movie.id}>
            <Link href={`/detail?id=${movie.id}`}>
              <Image
                src={movie.posterURL}
                alt={movie.title}
                width={426}
                height={290}
              />
              <h2 className="text-center pt-4 text-lg">{movie.title}</h2>
              <div className="grid place-items-center h-10">
                <Image src={movie.label} alt="labels" width={42} height={22} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
