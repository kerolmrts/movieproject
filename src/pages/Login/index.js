"use client";
import Layout from "@/Components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Avatar } from "@/Components/Avatar";
import { Button } from "@/Components/Button";
import { Footer } from "@/Components/Footer";
import "tailwindcss/tailwind.css";
import Appbar from "@/Components/Appbar";



const LoginPage = () => {
   const { data: session, status } = useSession();
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const checkSessionAndRedirect = async () => {
      if (status === "loading") return;

      if (session) {
        router.push("/");
      } else {
        setShouldRender(true);
      }
    };

    checkSessionAndRedirect();

  }, [session, status, router]);


  if (!shouldRender) {
    return null;
  }

  if (session) {
    return (
      <Layout>
        <Appbar />
        <div className="h-full min-h-screen grid">
          <div className="flex flex-1">
            <div className="flex w-full flex-col mx-5 my-10">
              <h2 className="flex w-full flex-col mx-5 my-10">
                Logado como: {session.user.name}, e-mail: {session.user.email}
              </h2>
              <div className="flex flex-col items-center gap-5">
                <Avatar
                  srcImage={session.user.image}
                  width={200}
                  height={200}
                  alt="User's image"
                />
                <div className="flex gap-2">
                  <Button onClick={() => router.push("/Perfil")}>
                    Completar Cadastro
                  </Button>
                  <Button
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Sign out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout>
      <Appbar />
      <main className="h-full min-h-screen grid grid-cols-3">
  <div className="col-span-1 p-6"> 
    <h1 className="p-20 font-extrabold text-4xl text-center text-zinc-500 ">
    Junte-se a nós e participe da comunidade de cinéfilos para desvendar as maravilhas do mundo do cinema!
    </h1>
    <h2 className="font-bold  text-center text-zinc-500">
    Faça login para acessar o conteúdo:
    </h2>
    <div className="flex w-full my-10 items-center justify-center">
      <Button onClick={() => signIn("google")}>Sign in</Button>
    </div>
  </div>
  <div className="col-span-2">
   <img src="img_movie.jpg"
   className="w-full h-screen"/>
  </div>
</main>
      <Footer />
    </Layout>
  );
};

export default LoginPage;
