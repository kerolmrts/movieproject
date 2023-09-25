"use client";
import { Button } from "@/Components/Button";
import { Card } from "@/Components/Card";
import Layout from "@/Components/Layout";
import { SideBar } from "@/Components/Sidebar";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { getFilmes } from "@/services/movies";
import { useState, useEffect } from "react";
import Banner from "@/Components/Banner";


export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const dataMovies = getFilmes();
    setMovies(dataMovies);
  });
  return (
    <Layout>
      <div className="h-full flex flex-col">
        <div className="flex flex-1">
          <SideBar />

          <main className="flex-1">
          <Banner/>
            <div className="p-6">
            <h2 className="text-2xl mt-10"> Últimos lançamentos</h2>
            <ul className="flex gap-8 mt-2 flex-col lg:flex-row">
              {movies
                .filter((movie) => movie.selecao === "novo")
                .map((movie) => {
                  return (
                    <li key={movie.id}>
                      <Card
                        key={movie.id}
                        titulo={movie.titulo}
                        dataLancamento={movie.dataLancamento}
                        srcImage={movie.imagem}
                        id={movie.id}
                      />
                    </li>
                  );
                })}
            </ul>
            <div className="flex items-center mt-10 gap-4">
              <Button>
                <ChevronLeft />
              </Button>
              <Button>
                <ChevronRight />
              </Button>
            </div>
            <h2 className="font-semibold text-3xl mt-20">Categorias</h2>
            <h2 className="text-2xl mt-10" id="acao">
              {" "}
              Ação
            </h2>
            <ul className="flex gap-8 mt-2 flex-col lg:flex-row">
              {movies
                .filter((movie) => movie.categoria === "Ação")
                .map((movie) => {
                  return (
                    <li key={movie.id}>
                      <Card
                        key={movie.id}
                        titulo={movie.titulo}
                        dataLancamento={movie.dataLancamento}
                        srcImage={movie.imagem}
                        id={movie.id}
                      />
                    </li>
                  );
                })}
            </ul>
            <div className="flex items-center mt-10 gap-4">
              <Button>
                <ChevronLeft />
              </Button>
              <Button>
                <ChevronRight />
              </Button>
            </div>
            <h2 className="text-2xl mt-10" id="comedia">
              {" "}
              Comédia
            </h2>
            <ul className="flex gap-8 mt-2 flex-col lg:flex-row">
              {movies
                .filter((movie) => movie.categoria === "Comédia")
                .map((movie) => {
                  return (
                    <li key={movie.id}>
                      <Card
                        key={movie.id}
                        titulo={movie.titulo}
                        dataLancamento={movie.dataLancamento}
                        srcImage={movie.imagem}
                        id={movie.id}
                      />
                    </li>
                  );
                })}
            </ul>
            <div className="flex items-center mt-10 gap-4">
              <Button>
                <ChevronLeft />
              </Button>
              <Button>
                <ChevronRight />
              </Button>
            </div>
            <h2 className="text-2xl mt-10" id="drama">
              {" "}
              Drama
            </h2>
            <ul className="flex gap-8 mt-2 flex-col lg:flex-row">
              {movies
                .filter((movie) => movie.categoria === "Drama")
                .map((movie) => {
                  return (
                    <li key={movie.id}>
                      <Card
                        key={movie.id}
                        titulo={movie.titulo}
                        dataLancamento={movie.dataLancamento}
                        srcImage={movie.imagem}
                        id={movie.id}
                      />
                    </li>
                  );
                })}
            </ul>
            <div className="flex items-center mt-10 gap-4">
              <Button>
                <ChevronLeft />
              </Button>
              <Button>
                <ChevronRight />
              </Button>
            </div>

            <h2 className="text-2xl mt-10" id="terror">
              {" "}
              Terror
            </h2>
            <ul className="flex gap-8 mt-2 flex-col lg:flex-row">
              {movies
                .filter((movie) => movie.categoria === "Terror")
                .map((movie) => {
                  return (
                    <li key={movie.id}>
                      <Card
                        key={movie.id}
                        titulo={movie.titulo}
                        dataLancamento={movie.dataLancamento}
                        srcImage={movie.imagem}
                        id={movie.id}
                      />
                    </li>
                  );
                })}
            </ul>
            <div className="flex items-center mt-10 gap-4">
              <Button>
                <ChevronLeft />
              </Button>
              <Button>
                <ChevronRight />
              </Button>
            </div>

            <h2 className="text-2xl mt-10" id="romance">
              {" "}
              Romance
            </h2>
            <ul className="flex gap-8 mt-2 flex-col lg:flex-row">
              {movies
                .filter((movie) => movie.categoria === "Romance")
                .map((movie) => {
                  return (
                    <li key={movie.id}>
                      <Card
                        key={movie.id}
                        titulo={movie.titulo}
                        dataLancamento={movie.dataLancamento}
                        srcImage={movie.imagem}
                        id={movie.id}
                      />
                    </li>
                  );
                })}
            </ul>
            <div className="flex items-center mt-10 gap-4">
              <Button>
                <ChevronLeft />
              </Button>
              <Button>
                <ChevronRight />
              </Button>
            </div>
      </div>
          </main>
        </div>
      </div>
      <footer className="flex items-center justify-center w-full h-10 bg-zinc-700">
        <div className=" text-zinc-100/25">
          {" "}
          © 2023 Todos os direitos reservados | Brasil{" "}
        </div>
      </footer>
    </Layout>
  );
}
