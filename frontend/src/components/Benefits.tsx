import React from "react";

export default function Benefits() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-gray-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white bg-animated-blue">
            ✓
          </div>
          <div>
            <p className="font-semibold">12x sem juros</p>
            <p className="text-sm text-gray-600">Facilidade no pagamento.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white bg-animated-blue">
            🚚
          </div>
          <div>
            <p className="font-semibold">Frete Grátis</p>
            <p className="text-sm text-gray-600">Acima de R$200 para todo Brasil.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white bg-animated-blue">
            ✔
          </div>
          <div>
            <p className="font-semibold">Garantia</p>
            <p className="text-sm text-gray-600">Produtos originais.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
