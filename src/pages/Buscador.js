import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Popcorn } from "lucide-react";
import Link from "next/link";
import Layout from "@/Components/Layout";
import { Footer } from "@/Components/Footer";
import { getMovieTitle, getFilmes } from "@/services/movies";
import "tailwindcss/tailwind.css";
import { InputButton } from "@/Components/InputButton";
import { Input } from "@/Components/Input";
import Banner from "@/Components/Banner";
import Drawer from "@/Components/Drawer";
import { Card } from "@/Components/Card";

function Buscador() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
  const searchURL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const checkSessionAndRedirect = async () => {
      if (status === "loading") return;

      if (!session) {
        router.push("/Login");
      } else {
        setShouldRender(true);
      }
    };

    checkSessionAndRedirect();
  }, [session, status, router]);

  useEffect(() => {
    const fetchFilmes = async () => {
      const dataMovies = await getFilmes();
      setMovies(dataMovies);
    };
    fetchFilmes();
  }, []);

  useEffect(() => {
    getMovieTitle(API_URL);
  }, []);

  function getMovieTitle(url) {
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro ao buscar filmes: ${res.status} - ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => data.results)
      .catch((error) => {
        console.error('Erro na busca de filmes:', error);
        return [];
      });
  }

  function handleSearch(e) {
    e.preventDefault();
    if (searchTerm) {
      const searchUrl = searchURL + searchTerm;
      getMovieTitle(searchUrl)
        .then((data) => {
          setSearchResults(data);
        })
        .catch((error) => {
          console.error('Erro na busca de filmes:', error);
          setSearchResults([]);
        });
    } else {
      getMovieTitle(API_URL)
        .then((data) => {
          setSearchResults(data);
        })
        .catch((error) => {
          console.error('Erro na busca de filmes:', error);
          setSearchResults([]);
        });
    }
  }

  return (
    <Layout>
      <div className="h-full min-h-screen flex flex-col">
        <div className="flex flex-1">
          <Drawer
            className="md:flex-col"
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(!isDrawerOpen)}
          ></Drawer>
          <div className="flex w-full flex-col">
            <Banner>
              <h1 className="text-white text-shadow-lg border-4 border-gray-800 p-4 transition-transform hover:scale-105 cursor-pointer">
                Busque seus filmes favoritos
              </h1>
            </Banner>
            <div className="flex flex-col w-full my-10 items-center justify-center">
              <div className="flex flex-col">
                <form className="mt-36" onSubmit={handleSearch}>
                  <Input
                    placeholder="Pesquisar pelo título"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    icon={Popcorn}
                  />
                  <div className="flex items-center justify-center gap-2">
                    <InputButton type="submit">Procurar</InputButton>
                    <InputButton onClick={() => setSearchTerm("")}>Limpar</InputButton>
                  </div>
                </form>
              </div>
              {searchResults.length > 0 && (
                <div>
                  <h2 className="mb-5">Resultados da busca:</h2>
                  <ul className="flex flex-wrap p-10 -mx-4 gap-5">
                    {searchResults.map((movie) => (
                      <li key={movie.id}>
                        <Link href={`/details/${movie.id}`}>
                          <Card
                            key={movie.id}
                            titulo={movie.titulo}
                            dataLancamento={movie.dataLancamento}
                            srcImage={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            id={movie.id}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Buscador;
