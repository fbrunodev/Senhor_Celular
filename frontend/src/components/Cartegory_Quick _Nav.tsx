import React from "react";

export default function Category_Quick_Nav(){
    return(
        <section className="py-6">
            <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <a href="#smartphones" 
        className="rounded-2xl border border-gray-200 p-4 text-center font-medium shadow-lg bg-animated-blue">
        Smartphones
        </a>
        <a href="#smartphones" 
        className="rounded-2xl border border-gray-200 p-4 text-center font-medium shadow-lg bg-animated-blue">
        Smartwatches
        </a>
        <a href="#smartphones" 
        className="rounded-2xl border border-gray-200 p-4 text-center font-medium shadow-lg bg-animated-blue">
        Carregadores
        </a>
        <a href="#smartphones" 
        className="rounded-2xl border border-gray-200 p-4 text-center font-medium shadow-lg bg-animated-blue">
        Áudio
        </a>

            </div>
        </section>
    )
}