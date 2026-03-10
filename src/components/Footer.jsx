import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail, Zap } from 'lucide-react';

const Footer = () => {
       return (
              <footer className="bg-black text-white pt-24 pb-12 relative overflow-hidden text-sm md:text-base">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
                     <div className="container mx-auto px-4 md:px-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                                   <div className="md:col-span-1">
                                          <a href="#" className="flex items-center gap-3 mb-8 group w-fit">
                                                 <div className="relative p-0.5 rounded-xl bg-gradient-to-br from-primary/50 to-primary/10 group-hover:shadow-[0_0_15px_rgba(247,206,60,0.2)] transition-all duration-300">
                                                        <img
                                                               src="/assets/logo-dg.jpg"
                                                               alt="Diego Grande Logo"
                                                               className="w-11 h-11 rounded-[10px] object-cover"
                                                        />
                                                 </div>
                                                 <div className="flex flex-col">
                                                        <span className="font-black text-xl leading-none text-white">
                                                               DIEGO GRANDE
                                                        </span>
                                                        <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-1">
                                                               Electricidad Automotor
                                                        </span>
                                                 </div>
                                          </a>
                                          <p className="text-gray-400 mb-8 font-light leading-relaxed">
                                                 Especialistas en electricidad automotor. Venta de baterías Moura, diagnóstico eléctrico computarizado, reparación de alternadores y motores de arranque. Ruta 9 Km 752, Colonia Caroya.
                                          </p>
                                          <div className="flex gap-4">
                                                 <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary hover:shadow-[0_0_20px_rgba(247,206,60,0.3)] transition-all">
                                                        <Facebook size={20} />
                                                 </a>
                                                 <a href="https://www.instagram.com/bateriasdiegogrande/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary hover:shadow-[0_0_20px_rgba(247,206,60,0.3)] transition-all">
                                                        <Instagram size={20} />
                                                 </a>
                                          </div>
                                   </div>

                                   <div>
                                          <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-wider">Enlaces Rápidos</h4>
                                          <ul className="space-y-4">
                                                 <li><a href="#how-it-works" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Cómo funciona</a></li>
                                                 <li><a href="#selector" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Buscador de Baterías</a></li>
                                                 <li><a href="#blog" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Nuestro Blog</a></li>
                                                 <li><a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Garantía Oficial</a></li>
                                          </ul>
                                   </div>

                                   <div>
                                          <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-wider">Contacto</h4>
                                          <ul className="space-y-6">
                                                 <li className="flex items-start gap-4">
                                                        <div className="p-3 rounded-full bg-white/5 border border-white/10 text-primary mt-1">
                                                               <MapPin size={18} />
                                                        </div>
                                                        <span className="text-gray-400 font-light leading-relaxed">Ruta 9 Km 752, Colonia Caroya, Córdoba</span>
                                                 </li>
                                                 <li className="flex items-center gap-4">
                                                        <div className="p-3 rounded-full bg-white/5 border border-white/10 text-primary">
                                                               <Phone size={18} />
                                                        </div>
                                                        <span className="text-gray-400 font-light">3525 618338 / 3525 644369</span>
                                                 </li>
                                                 <li className="flex items-center gap-4">
                                                        <div className="p-3 rounded-full bg-white/5 border border-white/10 text-primary">
                                                               <Mail size={18} />
                                                        </div>
                                                        <span className="text-gray-400 font-light">contacto@diegogrande.com.ar</span>
                                                 </li>
                                          </ul>
                                   </div>

                                   <div>
                                          <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-wider">Horario de Atención</h4>
                                          <ul className="space-y-4 text-gray-400 font-light">
                                                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Lunes a Viernes:</span> <span className="font-medium text-white">08:00 - 18:00</span></li>
                                                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Sábados:</span> <span className="font-medium text-white">08:30 - 13:00</span></li>
                                                 <li className="flex justify-between text-primary mt-6 font-bold bg-primary/10 p-4 rounded-xl border border-primary/20 items-center">
                                                        <span>Emergencias 24hs</span>
                                                        <Zap className="fill-primary" size={20} />
                                                 </li>
                                          </ul>
                                   </div>
                            </div>

                            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                                   <p className="text-gray-500 text-sm text-center md:text-left font-light">
                                          &copy; {new Date().getFullYear()} Diego Grande Electricidad del Automotor. Todos los derechos reservados.
                                   </p>
                                   <div className="flex gap-8 text-sm text-gray-500 font-light">
                                          <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
                                          <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
                                   </div>
                            </div>
                     </div>
              </footer>
       );
};

export default Footer;
