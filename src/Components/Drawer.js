import { Home as HomeIcon, Search, User, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, {useContext} from "react";
import { ThemeContext } from '@/app/Contexts/ThemeContext';
import { Button } from './Button';
import { signOut } from 'next-auth/react';

const Drawer = ({ isOpen, onClose, ...rest}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const drawerStyle = {
    // transform: isOpen ? 'translateX(0%)' : 'translateX(-25%)',
    marginLeft: isOpen ? '0' : '-230px',
  };

  return (
    
         <aside 
         {...rest}
         className={`relative w-72 px-3 pt-20 h-full min-h-screen overflow-auto shadow-lg ${theme === 'dark' ? 'bg-zinc-800 text-zinc-200' : 'bg-white text-zinc-800'}`} style={drawerStyle}>
       
        <button
          onClick={onClose}
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-zinc-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
            {isOpen ? (
              <ArrowLeft />
              ) : (
                <ArrowRight />
          )}
     
        </button>
        <label className="relative inline-flex items-center cursor-pointer">
        <input 
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={toggleTheme}
            checked={theme === 'dark'}
        ></input>

        <div 
            className={`w-11 h-6 ${theme === 'dark' ? 
            'bg-gray-700 peer-checked:bg-zinc-500 ':
            'bg-gray-200 peer-checked:white '} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zinc-300 dark:peer-focus:ring-zinc-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}>
        </div>

        <span
            className="ml-3 text-sm font-medium"
        >    
            {theme === 'dark' ? 'Tema Escuro' : 'Tema claro'}
        </span>

        </label>
        <div className="mt-5 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
        <nav className="space-y-5 mt-5">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold">
            <HomeIcon />
            Início
          </Link>

          <Link href="/Perfil" className="flex items-center gap-3 text-sm font-semibold ">
            <User />
           Cadastrar Perfil
          </Link>

          <Link href="/Buscador" className="flex items-center gap-3 text-sm font-semibold">
            <Search />
          Buscador
          </Link>
        </nav>

        <div className="mt-6 pt-6  flex flex-col gap-1">
          <p>Categorias</p>
          <a href="/#acao" className="text-sm hover:text-zinc-100">
            Ação
          </a>
          <a href="/#comedia" className="text-sm hover:text-zinc-100">
            Comédia
          </a>
          <a href="/#drama" className="text-sm hover:text-zinc-100">
            Drama
          </a>

          <a href="/#romance" className="text-sm hover:text-zinc-100">
            Romance
          </a>

          <a href="/#terror" className="text-sm hover:text-zinc-100">
            Terror
          </a>
        </div>
        <Button                 
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign out
                </Button>
        
      </aside>
    
  );
};
export default Drawer;

