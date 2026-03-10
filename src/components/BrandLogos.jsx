import React from 'react';

const BrandLogos = () => {
       const brands = [
              { name: "Ford", logo: "https://cdn.simpleicons.org/ford/white", id: 1 },
              { name: "Chevrolet", logo: "https://cdn.simpleicons.org/chevrolet/white", id: 2 },
              { name: "Volkswagen", logo: "https://cdn.simpleicons.org/volkswagen/white", id: 3 },
              { name: "Renault", logo: "https://cdn.simpleicons.org/renault/white", id: 4 },
              { name: "Fiat", logo: "https://cdn.simpleicons.org/fiat/white", id: 5 },
              { name: "Toyota", logo: "https://cdn.simpleicons.org/toyota/white", id: 6 },
              { name: "Peugeot", logo: "https://cdn.simpleicons.org/peugeot/white", id: 7 },

       ];

       return (
              <section className="py-12 bg-black border-y border-white/5 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
                     <div className="container mx-auto px-4 md:px-6 relative z-0">
                            <p className="text-center text-xs font-bold text-white/40 uppercase tracking-[0.3em] mb-10">
                                   Trabajamos con las mejores marcas
                            </p>
                            <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
                                   {brands.map((brand) => (
                                          <div key={brand.id} className="h-8 md:h-12 w-auto flex items-center justify-center grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-500 hover:scale-110 cursor-default">
                                                 <img
                                                        src={brand.logo}
                                                        alt={brand.name}
                                                        className="h-full w-auto object-contain px-2"
                                                 />
                                          </div>
                                   ))}
                            </div>
                     </div>
              </section>
       );
};

export default BrandLogos;
