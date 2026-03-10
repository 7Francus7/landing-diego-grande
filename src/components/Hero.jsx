import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Zap, Clock, Star } from 'lucide-react';

const Hero = () => {
       return (
              <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-black">
                     {/* Background Image */}
                     <div
                            className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity"
                            style={{ backgroundImage: "url('/assets/hero-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                     ></div>

                     {/* Dynamic Glowing Background Orbs */}
                     <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow z-0 pointer-events-none"></div>
                     <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-float z-0 pointer-events-none"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50 z-0 pointer-events-none"></div>

                     {/* Premium Background Overlay Texture */}
                     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-0 pointer-events-none"></div>

                     <div className="container mx-auto px-4 md:px-6 relative z-10 hero-content">
                            <div className="max-w-5xl mx-auto text-center">
                                   <motion.div
                                          initial={{ opacity: 0, y: 30 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.8, ease: "easeOut" }}
                                          className="flex flex-col items-center mt-16 md:mt-24"
                                   >
                                          <h1 className="text-5xl md:text-7xl lg:text-[85px] text-white font-black mb-6 leading-[1.05] tracking-tight">
                                                 La batería de tu auto <br className="hidden md:block" />
                                                 <span className="relative inline-block mt-2">
                                                        <span className="bg-gradient-to-r from-primary via-[#FFE58F] to-primary bg-clip-text text-transparent">
                                                               en tiempo récord.
                                                        </span>
                                                 </span>
                                          </h1>

                                          <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl font-light leading-relaxed mx-auto">
                                                 Revolucionamos la asistencia automotriz. Llevamos e instalamos la batería que tu vehículo necesita, <strong className="text-white font-semibold">donde estés, cuando la necesites.</strong>
                                          </p>

                                          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                                                 <a href="#selector" className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto group">
                                                        Buscar Batería <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                                 </a>
                                                 <button className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2">
                                                        Atención Rápida
                                                 </button>
                                          </div>
                                   </motion.div>

                                   <motion.div
                                          initial={{ opacity: 0, y: 40 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ delay: 0.4, duration: 1 }}
                                          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24"
                                   >
                                          {[
                                                 { icon: <Clock className="text-primary" size={28} />, title: "< 50 Minutos", text: "Tiempo máximo de llegada en zona" },
                                                 { icon: <Zap className="text-primary" size={28} />, title: "Garantía Oficial", text: "Directo de fábrica por 12 meses" },
                                                 { icon: <ShieldCheck className="text-primary" size={28} />, title: "Instalación Segura", text: "Mano de obra certificada por expertos" }
                                          ].map((item, i) => (
                                                 <div key={i} className="card-glass flex flex-col items-center text-center p-8 group">
                                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:shadow-[0_0_30px_rgba(247,206,60,0.2)] group-hover:border-primary/30 transition-all duration-500 inline-flex">
                                                               {item.icon}
                                                        </div>
                                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                                        <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                                                 </div>
                                          ))}
                                   </motion.div>

                                   {/* Trust Badge */}
                                   <motion.div
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 0.8 }}
                                          className="mt-16 flex items-center justify-center gap-4 text-gray-400 text-sm font-medium"
                                   >
                                          <div className="flex -space-x-3">
                                                 {[1, 2, 3, 4].map(i => (
                                                        <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                                                 ))}
                                          </div>
                                          <div className="flex flex-col items-start">
                                                 <div className="flex items-center gap-1 text-primary">
                                                        <Star size={14} fill="currentColor" />
                                                        <Star size={14} fill="currentColor" />
                                                        <Star size={14} fill="currentColor" />
                                                        <Star size={14} fill="currentColor" />
                                                        <Star size={14} fill="currentColor" />
                                                 </div>
                                                 <span className="text-white/80">+1000 clientes satisfechos</span>
                                          </div>
                                   </motion.div>
                            </div>
                     </div>
              </section>
       );
};

export default Hero;
