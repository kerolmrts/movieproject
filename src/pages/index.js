"use client";
import { Button } from "@/Components/Button";
import { Card } from "@/Components/Card";
import Layout from "@/Components/Layout";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { getFilmes } from "@/services/movies";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Banner from "@/Components/Banner";
import "tailwindcss/tailwind.css";
import Drawer from "@/Components/Drawer";


export default function Home() {
  const [movies, setMovies] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  
  


  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
 
  
  useEffect(() => {
    console.log("Aqui são as variáveis de ambiente:", process.env.NEXT_PUBLIC_TESTE);
    const fetchFilmes = async () => {
      const dataMovies = await getFilmes();
      setMovies(dataMovies);
       };
    fetchFilmes();
  
  },[]);

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


  if (!shouldRender) {
    return null;
  }
  return (
    <Layout>
      <div className="h-full flex flex-col">
        <div className="flex flex-1">
        <Drawer
            className="h-full md:flex-col"
            isOpen={isDrawerOpen}
            onClose={handleMenuToggle}
          ></Drawer>
       
           <main className="flex-1">
            <Banner>
            <h1 className="text-white text-shadow-lg border-4 border-gray-800 p-4 transition-transform hover:scale-105 cursor-pointer">
          Comunidade de cinéfilos
        </h1>
        </Banner>
            <div className="p-6">
              <h2 className="text-2xl mt-10"> Últimos lançamentos</h2>
              <ul className="flex gap-8 mt-2 flex-col lg:flex-row">
                {movies
                  .sort(
                    (a, b) =>
                      new Date(b.dataLancamento) - new Date(a.dataLancamento)
                  ) 
                  .slice(0, 5) 
                  .map((movie) => (
                    <li key={movie.id}>
                      <Card
                        key={movie.id}
                        titulo={movie.titulo}
                        dataLancamento={movie.dataLancamento}
                        srcImage={movie.imagem}
                        id={movie.id}
                      />
                    </li>
                  ))}
              </ul>
              
              <h2 className="font-semibold text-3xl mt-20">Categorias</h2>
              <h2 className="text-2xl mt-10" id="acao">
                {" "}
                Ação
              </h2>
              <div className="relative mt-2">
                <div className="flex gap-8 flex-nowrap">
                  {movies
                    .filter((movie) => movie.categoria.includes(28)) // Ação
                     .splice(0,5)
                    .map((movie) => (
                      <div key={movie.id} className="flex-shrink-0 ">
                        <Card
                          key={movie.id}
                          titulo={movie.titulo}
                          dataLancamento={movie.dataLancamento}
                          srcImage={movie.imagem}
                          id={movie.id}
                        />
                      </div>
                    ))}
                </div>
                <div className="flex items-center mt-10 gap-4">
                  <Button>
                    <ChevronLeft />
                  </Button>
                  <Button>
                    <ChevronRight />
                  </Button>
                </div>
              </div>
              <h2 className="text-2xl mt-10" id="comedia">
                {" "}
                Comédia
              </h2>
              <ul className="flex gap-8 mt-2 flex-col lg:flex-row">
              {movies
                    .filter((movie) => movie.categoria.includes(35)) // Comédia
                    .splice(0,5)
                    .map((movie) => (
                      <div key={movie.id} className="flex-shrink-0 ">
                        <Card
                          key={movie.id}
                          titulo={movie.titulo}
                          dataLancamento={movie.dataLancamento}
                          srcImage={movie.imagem}
                          id={movie.id}
                        />
                      </div>
                    ))}
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
                    .filter((movie) => movie.categoria.includes(18)) // Drama
                    .splice(0,5)
                    .map((movie) => (
                      <div key={movie.id} className="flex-shrink-0 ">
                        <Card
                          key={movie.id}
                          titulo={movie.titulo}
                          dataLancamento={movie.dataLancamento}
                          srcImage={movie.imagem}
                          id={movie.id}
                        />
                      </div>
                    ))}
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
                Ficção Científica
              </h2>
              <ul className="flex gap-8 mt-2 flex-col lg:flex-row">
              {movies
                    .filter((movie) => movie.categoria.includes(878)) // Romance
                    .splice(0,5)
                    .map((movie) => (
                      <div key={movie.id} className="flex-shrink-0 ">
                        <Card
                          key={movie.id}
                          titulo={movie.titulo}
                          dataLancamento={movie.dataLancamento}
                          srcImage={movie.imagem}
                          id={movie.id}
                        />
                      </div>
                    ))}
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
                    .filter((movie) => movie.categoria.includes(27)) // Terror
                    .splice(0,5)
                    .map((movie) => (
                      <li key={movie.id} className="flex-shrink-0 ">
                        <Card
                          key={movie.id}
                          titulo={movie.titulo}
                          dataLancamento={movie.dataLancamento}
                          srcImage={movie.imagem}
                          id={movie.id}
                        />
                      </li>
                    ))}
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
