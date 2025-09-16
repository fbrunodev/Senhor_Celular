import React from "react";
import logo from "../assets/logo.png"; // sua logo

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#0000A3] text-white shadow">
      <div className="h-30 max-w-7xl px-4 py-5 flex items-center justify-between ml-0">


        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo Senhor Celular" className="h-11 w-auto" />
        </div>

        {/* Topo direito */}
        <div className="absolute top-4 right-4 flex items-center gap-4">
            {/* Entrar / Cadastre-se */}
          <a href="#" className="w-65 text-sm hover:text-orange-500 transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.12 17.804zM12 12a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
            Entrar / Cadastre-se
          </a>

          {/* Favoritos */}
          <a href="#favoritos" className="p-2 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
          </a>

          {/* Carrinho */}
          <a href="#carrinho" className="p-2 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h12l-2-5M17 13l2-5M6 18a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
          </a>
        </div>
        {/*Buscar*/}
        <div className="absolute top-[20px] left-80 right-0 flex items-center gap-4 px-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-180  px-4 py-1 rounded-lg border border-gray-300 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
         <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition-colors flex items-center justify-center">
            {/* Ícone de seta */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
       {/* Menu */}
        <nav className="w-260 flex flex-wrap gap-4 text-sm mt-[70px]">
          <a href="#" className="px-3 py-1 rounded hover:bg-white hover:text-[#0000A3] transition-colors">Início</a>
             <a href="#smartphones" className=" px-3 py-1 rounded hover:bg-white hover:text-[#0000A3] transition-colors">Mais Vendidos</a>
          <a href="#smartphones" className=" px-3 py-1 rounded hover:bg-white hover:text-[#0000A3] transition-colors">Celulares</a>
          <a href="#smartwatches" className="px-3 py-1 rounded hover:bg-white hover:text-[#0000A3] transition-colors">Computadores</a>
          <a href="#audio" className="px-3 py-1 rounded hover:bg-white hover:text-[#0000A3] transition-colors">Carregadores e fones</a>
          <a href="#ofertas" className=" px-3 py-1 rounded hover:bg-white hover:text-[#0000A3] transition-colors">Ofertas</a>
        </nav>
      </div>
    </header>
  );
}
