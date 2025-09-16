import React, { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Inscrição enviada! (mock) - ${email}`);
    setEmail("");
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl overflow-hidden border border-gray-200 bg-animated-blue">
          <div className="grid md:grid-cols-2">
            
            {/* Fundo com degradê animado */}
            <div className="p-8 md:p-10 animate-gradient-bg rounded-none">
              <h3 className="text-white text-2xl font-bold">Inscreva-se na newsletter</h3>
              <p className="text-white/90 mt-2">Receba novidades, lançamentos e ofertas exclusivas.</p>
            </div>

            {/* Formulário */}
            <div className="p-8 md:p-10 bg-white">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail" 
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2"
                />
                <button 
                  type="submit"
                  className="px-5 py-3 rounded-xl font-medium text-white bg-animated-blue"
                >
                  Inscrever-se
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                Ao inscrever-se, você concorda com nossos termos e política de privacidade.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
