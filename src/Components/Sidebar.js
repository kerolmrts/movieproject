import React from "react";
import { Home as HomeIcon, Search, PenSquare } from "lucide-react";
import Link from "next/link";

export function SideBar() {

  return (
    
    
    <aside className="w-72 min-h-screen bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-red-500 rounded-full" />
        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
        <div className="w-2 h-2 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </Link>

        <Link
          href="/Perfil"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
         Perfil
        </Link>

        <Link
          href="/Blog"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <PenSquare />
          Blog
        </Link>
      </nav>

      <div className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-1">
        <a href="http://localhost:3000/#acao" className="text-sm text-zinc-400 hover:text-zinc-100">
          Ação
        </a>
        <a href="http://localhost:3000/#comedia" className="text-sm text-zinc-400 hover:text-zinc-100">
          Comédia
        </a>
        <a href="http://localhost:3000/#drama" className="text-sm text-zinc-400 hover:text-zinc-100">
          Drama
        </a>
       
        <a href="http://localhost:3000/#romance" className="text-sm text-zinc-400 hover:text-zinc-100">
          Romance
        </a>
      
        <a href="http://localhost:3000/#terror" className="text-sm text-zinc-400 hover:text-zinc-100">
          Terror
        </a>
      </div>
    </aside>
  )
}
