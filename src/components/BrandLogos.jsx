import React from 'react';

const BrandLogos = () => {
       const brands = [
              { name: "FORD", id: 1 },
              { name: "CHEVROLET", id: 2 },
              { name: "VOLKSWAGEN", id: 3 },
              { name: "RENAULT", id: 4 },
              { name: "FIAT", id: 5 },
              { name: "TOYOTA", id: 6 },
              { name: "PEUGEOT", id: 7 },
       ];

       return (
              <section className="py-12 bg-black border-y border-white/5 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
                     <div className="container mx-auto px-4 md:px-6 relative z-0">
                            <p className="text-center text-xs font-bold text-white/40 uppercase tracking-[0.3em] mb-10">
                                   Trabajamos con las mejores marcas
                            </p>
                            <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-40 hover:opacity-80 transition-opacity duration-700">
                                   {brands.map((brand) => (
                                          <div key={brand.id} className="text-xl md:text-3xl font-black text-white tracking-widest uppercase hover:text-primary transition-colors cursor-default">
                                                 {brand.name}
                                          </div>
                                   ))}
                            </div>
                     </div>
              </section>
       );
};

export default BrandLogos;
