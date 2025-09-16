import React from "react";
import logo from "../assets/logo3.png"; // importe sua logo

export default function Footer() {
  const year = new Date().getFullYear(); // pega o ano atual dinamicamente

  return (
    <footer className="pt-12 pb-8 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo e descrição */}
        <div>
          <img src={logo} alt="Logo Senhor Celular" className="h-10 w-auto mb-2" />
          <p className="text-sm text-gray-600 max-w-xs">
            Somos a loja oficial de produtos Xiaomi no Brasil, oferecendo os melhores smartphones, acessórios e produtos para casa inteligente.
          </p>
        </div>

        {/* Categorias */}
        <div>
          <h5 className="font-semibold mb-3">Categorias</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#smartphones" className="hover:underline">Smartphones</a></li>
            <li><a href="#audio" className="hover:underline">Áudio</a></li>
            <li><a href="#casa" className="hover:underline">Casa Inteligente</a></li>
          </ul>
        </div>

        {/* Ajuda */}
        <div>
          <h5 className="font-semibold mb-3">Ajuda</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:underline">Perguntas Frequentes</a></li>
            <li><a href="#" className="hover:underline">Envio e Entrega</a></li>
            <li><a href="#" className="hover:underline">Política de Devolução</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h5 className="font-semibold mb-3">Contato</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>contato@mibrasil.com.br</li>
            <li>(11) 1234-5678</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-7xl px-4 mt-8 text-xs text-gray-500">
        © {year} Mi Brasil. Todos os direitos reservados.
      </div>
    </footer>
  );
}
