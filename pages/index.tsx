import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  posterURL: string;
}
export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto mt-8 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            className="text-center font-semibold p-2 hover:text-birumuda"
            key={movie.id}
          >
            <Link href={`/detail/${movie.title}`}>
              <Image
                src={movie.posterURL}
                alt={movie.title}
                width={426}
                height={290}>
              </Image>
            </Link>
            <h2 className="pt-4">{movie.title}</h2>
          </div>
        ))}
      </div>
    </Layout>
  );
}
