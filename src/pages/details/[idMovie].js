import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Drawer from "@/Components/Drawer";
import { getFilmePorId } from "@/services/movies";
import Layout from "@/Components/Layout";
import { Footer } from "@/Components/Footer";
import Link from "next/link";
import StarRating from "@/Components/StarRating";
import "tailwindcss/tailwind.css";

function Details() {
  const router = useRouter();
  const [movie, setMovie] = useState({});
  const movieID = router.query.idMovie;

  useEffect(() => {
    const fetchData = async () => {
      if (movieID) {
        const result = await getFilmePorId(Number(movieID));
        setMovie(result);
        console.log(movie)
      }
    };

    fetchData();
  }, [movieID]);

  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
 
  return (
    <Layout>
      <main className="h-full min-h-screen">
        <div className="flex items-start">
          <div className="flex">
            <Drawer
              className="md:flex-col"
              isOpen={isDrawerOpen}
              onClose={handleMenuToggle}
            ></Drawer>
            <Link href="/">Voltar</Link>
            <h1 className="font-semibold text-3xl m-10">
              <p>Filme:</p>
            </h1>
          </div>
          <section className="flex items-center gap-5 flex-col lg:flex-row">
            {movie && (
              <img
                src={movie.imagem}
                alt={movie.titulo}
                className="w-72 m-10"
              />
            )}
            <div className="flex flex-col items-start gap-2">
              <StarRating voteAverage={movie?.Votos || 0} totalStars={10} />
              {movie && <strong className="text-xl">{movie.titulo}</strong>}
              {movie && <p>Estreia: {movie.dataLancamento}</p>}
              {movie && movie.sinopse ? (
                <p className="items-justify mr-10">Sinopse: {movie.sinopse}</p>
              ) : (
                <p>Sinopse não disponível</p>
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
