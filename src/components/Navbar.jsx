import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingCart, Zap } from 'lucide-react';

const Navbar = () => {
       const [isScrolled, setIsScrolled] = useState(false);
       const [isMenuOpen, setIsMenuOpen] = useState(false);

       useEffect(() => {
              const handleScroll = () => {
                     setIsScrolled(window.scrollY > 20);
              };
              window.addEventListener('scroll', handleScroll);
              return () => window.removeEventListener('scroll', handleScroll);
       }, []);

       return (
              <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/70 backdrop-blur-2xl py-4 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
                     <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                            <a href="#" className="flex items-center gap-3 md:gap-4 group">
                                   <div className="relative transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(247,206,60,0.4)]">
                                          <img
                                                 src="/assets/logo-dg.png"
                                                 alt="Diego Grande Logo"
                                                 className="w-16 h-16 md:w-20 md:h-20 object-contain"
                                          />
                                   </div>
                                   <div className="flex flex-col">
                                          <span className="font-black text-2xl md:text-3xl tracking-tighter leading-none text-white">
                                                 DIEGO GRANDE
                                          </span>
                                          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary font-bold mt-1">
                                                 Electricidad Automotor
                                          </span>
                                   </div>
                            </a>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex items-center gap-10">
                                   <a href="#how-it-works" className="text-sm font-semibold uppercase tracking-widest text-white/70 hover:text-primary transition-colors">
                                          Cómo funciona
                                   </a>
                                   <a href="#servicios" className="text-sm font-semibold uppercase tracking-widest text-white/70 hover:text-primary transition-colors">
                                          Servicios
                                   </a>
                                   <a href="#selector" className="text-sm font-semibold uppercase tracking-widest text-white/70 hover:text-primary transition-colors">
                                          Buscar Alternador
                                   </a>
                                   <a href="#blog" className="text-sm font-semibold uppercase tracking-widest text-white/70 hover:text-primary transition-colors">
                                          Blog
                                   </a>
                                   <a href="https://wa.me/5493525618338" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm py-3 px-8 font-bold uppercase tracking-wider rounded-full transition-all duration-300 bg-primary text-black hover:bg-white hover:shadow-[0_0_20px_rgba(247,206,60,0.5)] active:scale-95">
                                          <Phone size={18} />
                                          WhatsApp
                                   </a>
                            </div>

                            {/* Mobile Toggle */}
                            <div className="md:hidden flex items-center gap-4">
                                   <button className="p-2 rounded-full text-white hover:bg-white/10 transition-colors">
                                          <ShoppingCart size={24} />
                                   </button>
                                   <button
                                          className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
                                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                                   >
                                          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                   </button>
                            </div>
                     </div>

                     {/* Mobile Menu */}
                     {isMenuOpen && (
                            <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 absolute top-full left-0 right-0 shadow-2xl animate-fade-in">
                                   <div className="flex flex-col gap-6">
                                          <a href="#how-it-works" className="text-white/80 hover:text-primary text-lg font-bold tracking-wide border-b border-white/10 pb-4 transition-colors" onClick={() => setIsMenuOpen(false)}>Cómo funciona</a>
                                          <a href="#servicios" className="text-white/80 hover:text-primary text-lg font-bold tracking-wide border-b border-white/10 pb-4 transition-colors" onClick={() => setIsMenuOpen(false)}>Servicios</a>
                                          <a href="#selector" className="text-white/80 hover:text-primary text-lg font-bold tracking-wide border-b border-white/10 pb-4 transition-colors" onClick={() => setIsMenuOpen(false)}>Buscar Batería</a>
                                          <a href="#blog" className="text-white/80 hover:text-primary text-lg font-bold tracking-wide border-b border-white/10 pb-4 transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</a>
                                          <a href="https://wa.me/5493525618338" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-4 text-lg bg-primary text-black font-bold uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(247,206,60,0.3)] active:scale-95 transition-all">
                                                 <Phone size={24} />
                                                 WhatsApp
                                          </a>
                                   </div>
                            </div>
                     )}
              </nav>
       );
};

export default Navbar;
