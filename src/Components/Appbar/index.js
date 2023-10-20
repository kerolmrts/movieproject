import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Home as HomeIcon, Menu, Search, Tv, User } from "lucide-react";
import { ThemeContext } from "@/app/Contexts/ThemeContext";
import { Footer } from "../Footer";
// import { Container, Button } from "./styles";

function Appbar({ onMenuToggle }) {
  const { theme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen)
  };

  useEffect(() => {}, [theme]);

  return (
    <div className="flex justify-between p-4 bg-zinc-800">

         <Tv/>
    
          
        <div onClick={toggleMenu}>
          <button>
            <Menu/>
              
          </button>
        </div>

        {menuOpen && (
          <nav className="space-y-5 mt-5">
            <Link
              href="/"
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Início
            </Link>
            <Link
              href="/Login"
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <User />
              Entrar
            </Link>
            <Link
              href="/Buscador"
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Buscador
            </Link>
          </nav>
        )}

    </div>
  );
}

export default Appbar;
