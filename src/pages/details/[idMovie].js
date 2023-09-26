"use client";
import React from "react";
import { useRouter } from "next/router";
import { getFilmePorId } from "@/services/movies";
import { useState, useEffect } from "react";
import Layout from "@/Components/Layout";
import { SideBar } from "@/Components/Sidebar";
import { Footer } from "@/Components/Footer";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import StarRating from "@/Components/StarRating";

function Details() {
  const router = useRouter();
  const [movie, setMovie] = useState({});
  const movieID = router.query.idMovie;

  useEffect(() => {
    if (movieID) {
      const result = getFilmePorId(Number(movieID));
      setMovie(result);
    }
  }, [movieID]);

  return (
    <Layout>
      <main className="h-full min-h-screen flex flex-1">
        <SideBar />
        <div>
          <div className="flex mt-10 items-center mx-5">
            <Link href="/">
              <ChevronLeft />
            </Link>
            <h1 className="font-semibold text-3xl m-10">
              <p>Categoria: {movie.categoria}</p>
            </h1>
          </div>
          <section className="flex items-center gap-5 flex-col lg:flex-row">
            <img src={movie.imagem} alt={movie.titulo} className="w-72 m-10" />
            <div className="flex flex-col items-start gap-2">
              <StarRating/>
              <strong className="text-xl">{movie.titulo}</strong>
              <p>Estreia: {movie.dataLancamento}</p>
              {movie.sinopse ? (
                <p className="items-justify mr-10">Sinopse: {movie.sinopse}</p>
              ) : (
                <p> Sinopse não disponível</p>
                )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
export default Details;
