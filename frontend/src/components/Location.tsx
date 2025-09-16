import React from "react";

export default function Location() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Texto da loja */}
        <div>
          <h2 className="text-3xl font-bold text-[#0000A3] mb-4">Onde Estamos</h2>
          <p className="text-gray-700 mb-4">
            Venha nos visitar em nossa loja física! Aqui você encontra os melhores smartphones,
            acessórios e computadores com qualidade e garantia.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>
              <i className="fas fa-map-marker-alt text-[#F97209] mr-2"></i> Rua Exemplo, nº 123 - Goiânia, GO
            </li>
            <li>
              <i className="fas fa-phone text-[#F97209] mr-2"></i> (62) 99999-9999
            </li>
            <li>
              <i className="fas fa-envelope text-[#F97209] mr-2"></i> contato@senhorcelular.com.br
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="w-full h-80 rounded-lg shadow overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4702.932386668278!2d-49.25683572396138!3d-16.67359614522029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3d6270238db%3A0x832c38e83c6c141e!2sSenhor%20Celular%20e%20Computadores%20Goi%C3%A2nia!5e1!3m2!1spt-BR!2sbr!4v1757429233388!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
