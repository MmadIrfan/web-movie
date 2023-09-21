import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  posterURL: string;
  label: string;
  categories: string;
  duration: number;
  genre: string;
  produser: string;
  sutradara: string;
  penulis: string;
  produksi: string;
  casts: string;
  sinopsis: string;
}

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (typeof id === "string") {
      axios
        .get(`http://localhost:3001/movies/${id}`)
        .then((response) => {
          setMovie(response.data);
        })
        .catch((error) => {
          console.error("Error fetching movie details:", error);
        });
    }
  }, [id]);

  return (
    <Layout judul={movie?.title}>
      {movie ? (
        <div className="my-8">
          <div className="font-thin text-4xl col-span-12 mb-5">
            <h3>{movie.categories}</h3>
          </div>
          <div className="flex relative box-border">
            <Image
              src={movie.posterURL}
              alt={movie.title}
              width={420}
              height={285}
            />
            <div className="relative mx-6">
              <div className="font-semibold text-birutua text-3xl mb-6">
                <h1>{movie.title}</h1>
              </div>
              <div className="absolute top-0 right-0 text-center">
                <span>{movie.duration} Minutes</span>
                <Image
                  src={movie.label}
                  alt={movie.label}
                  width={42}
                  height={22}
                />
              </div>
              <ul className="mb-2">
                <li className="flex items-start mb-1">
                  <span className="w-24">Jenis Film</span>
                  <span>:</span>
                  <span className="ml-2">{movie.genre}</span>
                </li>
                <li className="flex items-start mb-1">
                  <span className="w-24">Produser</span>
                  <span>:</span>
                  <span className="ml-2">{movie.produser}</span>
                </li>
                <li className="flex items-start mb-1">
                  <span className="w-24">Sutradara</span>
                  <span>:</span>
                  <span className="ml-2">{movie.sutradara}</span>
                </li>
                <li className="flex items-start mb-1">
                  <span className="w-24">Penulis</span>
                  <span>:</span>
                  <span className="ml-2">{movie.penulis}</span>
                </li>
                <li className="flex items-start mb-1">
                  <span className="w-24">Produksi</span>
                  <span>:</span>
                  <span className="ml-2">{movie.produksi}</span>
                </li>
                <li className="flex items-start mb-1">
                  <span className="w-24">Casts</span>
                  <span>:</span>
                  <span className="ml-2">{movie.casts}</span>
                </li>
              </ul>
              <div className="mx-8 p-2 inline-block my-6 border-y border-gray-600">
                <Link href={"#"} className="p-10 text-xl hover:text-birumuda">
                  Watch Trailer
                </Link>
                <Link href={"#"} className="p-10 text-xl hover:text-birumuda">
                  Playing At
                </Link>
              </div>
              <div>
                <h4 className="font-medium text-2xl">Sinopsis</h4>
                <p>{movie.sinopsis}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="font-thin text-4xl col-span-12 mb-5">
          <h3>Loading...</h3>
        </div>
      )}
    </Layout>
  );
}
