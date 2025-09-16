import React from "react";
import poco1 from "../assets/poco1.webp"
import cabo from "../assets/cabo.webp"

export default function ProductCard(){
    return(
        <section id="grid" className="py-6">
            <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-end justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold">Produtos em Destaque</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Card 1 */}

                <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm bg-white">
                <div className="relative aspect-square overflow-hidden">
                    <img src={poco1} alt="Redmi A3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                    <span className="absolute left-2 top-2 text-xs font-semibold px-2 py-1 rounded-full text-white bg-animated-blue">Oferta</span>
                    
                    
                </div>
                <div className="p-3">
                    <h4 className="font-medium leading-snug line-clamp-2 min-h-[44px]">Poco C85 128GB</h4>
                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">em até 6x de R$ 257,59 sem juros</div>
                    <p className="mt-1 text-lg font-semibold">R$ 1.471,99</p>
                <button onClick={() => window.location.href = 'PRODUTOS/page-produtos.html'} 
                className="w-full mt-3 py-2 rounded-xl font-medium text-white shadow-lg relative overflow-hidden bg-animated-blue"> Aproveitar
               </button>
                </div>
                </div>

                { /* Card 2*/}
                <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm bg-white">
                <div className="relative aspect-square overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop" alt="Redmi A3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                    <span className="absolute left-2 top-2 text-xs font-semibold px-2 py-1 rounded-full text-white bg-animated-blue">Novo</span>
                    
                </div>
                <div className="p-3">
                    <h4 className="font-medium leading-snug line-clamp-2 min-h-[44px]">Redmi A3</h4>
                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">à vista com 8% off</div>
                    <p className="mt-1 text-lg font-semibold">R$ 939,90</p>
        <button 
        className="w-full mt-3 py-2 rounded-xl font-medium text-white shadow-lg relative overflow-hidden bg-animated-blue">
        Aproveitar
        </button>
            </div>
                </div>

                { /* Card 3 */}
                <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm bg-white">
                <div className="relative aspect-square overflow-hidden">
                    <img src={cabo} alt="Redmi A3X" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                    <span className="absolute left-2 top-2 text-xs font-semibold px-2 py-1 rounded-full text-white bg-animated-blue">Exclusivo</span>
                </div>
                <div className="p-3">
                    <h4 className="font-medium leading-snug line-clamp-2 min-h-[44px]">Redmi A3X 128GB 4GB</h4>
                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">à vista com 8% off</div>
                    <p className="mt-1 text-lg font-semibold">R$ 815,00</p>
        <button 
        className="w-full mt-3 py-2 rounded-xl font-medium text-white shadow-lg relative overflow-hidden bg-animated-blue">
        Aproveitar
        </button>     </div>
                </div>

            { /* Card 4 */}
                <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm bg-white">
                <div className="relative aspect-square overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" alt="Redmi A5" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                    <span className="absolute left-2 top-2 text-xs font-semibold px-2 py-1 rounded-full text-white bg-animated-blue">Oferta</span>
                </div>
                <div className="p-3">
                    <h4 className="font-medium leading-snug line-clamp-2 min-h-[44px]">Redmi A5 64GB</h4>
                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">à vista com 8% off</div>
                    <p className="mt-1 text-lg font-semibold">R$ 800,00</p>
        <button 
        className="w-full mt-3 py-2 rounded-xl font-medium text-white shadow-lg relative overflow-hidden bg-animated-blue">
        Aproveitar
        </button>         </div>
                </div>
                { /* Card 5 */}
                <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm bg-white">
                <div className="relative aspect-square overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop" alt="Redmi A3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                    <span className="absolute left-2 top-2 text-xs font-semibold px-2 py-1 rounded-full text-white bg-animated-blue">Oferta</span>
                    
                </div>
                <div className="p-3">
                    <h4 className="font-medium leading-snug line-clamp-2 min-h-[44px]">Redmi A3 64GB 3GB</h4>
                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">à vista com 8% off</div>
                    <p className="mt-1 text-lg font-semibold">R$ 760,00</p>
        <button 
        className="w-full mt-3 py-2 rounded-xl font-medium text-white shadow-lg relative overflow-hidden bg-animated-blue">
        Aproveitar
        </button>         </div>
                </div>
                { /* Card 6 */}
                <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm bg-white">
                <div className="relative aspect-square overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop" alt="Redmi A3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                    <span className="absolute left-2 top-2 text-xs font-semibold px-2 py-1 rounded-full text-white bg-animated-blue">Oferta</span>
                    
                </div>
                <div className="p-3">
                    <h4 className="font-medium leading-snug line-clamp-2 min-h-[44px]">Redmi A3 64GB 3GB</h4>
                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">à vista com 8% off</div>
                    <p className="mt-1 text-lg font-semibold">R$ 760,00</p>
        <button 
        className="w-full mt-3 py-2 rounded-xl font-medium text-white shadow-lg relative overflow-hidden bg-animated-blue">
        Aproveitar
        </button>         </div>
                </div>
                { /* Card 7 */}
                <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm bg-white">
                <div className="relative aspect-square overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop" alt="Redmi A3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                    <span className="absolute left-2 top-2 text-xs font-semibold px-2 py-1 rounded-full text-white bg-animated-blue">Novo</span>
                    
                </div>
                <div className="p-3">
                    <h4 className="font-medium leading-snug line-clamp-2 min-h-[44px]">Redmi A3</h4>
                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">à vista com 8% off</div>
                    <p className="mt-1 text-lg font-semibold">R$ 939,90</p>
        <button 
        className="w-full mt-3 py-2 rounded-xl font-medium text-white shadow-lg relative overflow-hidden bg-animated-blue">
        Aproveitar
        </button>         </div>
                </div>
                { /* Card 1 */}
                <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm bg-white">
                <div className="relative aspect-square overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop" alt="Redmi A3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                    <span className="absolute left-2 top-2 text-xs font-semibold px-2 py-1 rounded-full text-white bg-animated-blue">Oferta</span>
                    
                </div>
                <div className="p-3">
                    <h4 className="font-medium leading-snug line-clamp-2 min-h-[44px]">Redmi A3 64GB 3GB</h4>
                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">à vista com 8% off</div>
                    <p className="mt-1 text-lg font-semibold">R$ 760,00</p>
        <button 
        className="w-full mt-3 py-2 rounded-xl font-medium text-white shadow-lg relative overflow-hidden bg-animated-blue">
        Aproveitar
        </button>         </div>
                </div>


            </div>
            </div>
        </section>
    )
}

