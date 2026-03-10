import React from 'react';
import { Phone, Truck, ShieldCheck } from 'lucide-react';

const HowItWorks = () => {
       const steps = [
              {
                     number: "01",
                     title: "Solicitá tu alternador",
                     description: "Elegí tu modelo de auto en el buscador o llamanos por teléfono. Un especialista te asesorará al instante.",
                     icon: <Phone className="w-8 h-8 text-black" />,
              },
              {
                     number: "02",
                     title: "Recibí donde estés",
                     description: "Nuestras unidades móviles están preparadas para llegar a cualquier punto de la zona en solo 15 minutos.",
                     icon: <Truck className="w-8 h-8 text-black" />,
              },
              {
                     number: "03",
                     title: "Diagnóstico y garantía",
                     description: "Diagnosticamos con escáner profesional batería, alternador y arranque. Entregamos certificado de garantía oficial.",
                     icon: <ShieldCheck className="w-8 h-8 text-black" />,
              }
       ];

       return (
              <section id="how-it-works" className="py-32 bg-[#050505] relative overflow-hidden border-b border-white/5">
                     <div className="container mx-auto px-4 md:px-6 relative z-10">
                            <div className="text-center mb-24 relative">
                                   <h2 className="text-4xl md:text-6xl mb-6 text-white font-black tracking-tight">El proceso <span className="text-primary italic">más rápido</span></h2>
                                   <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">Servicio profesional, transparente y sin demoras molestas.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                                   {steps.map((step, index) => (
                                          <div key={index} className="card-glass relative group z-10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                                 <span className="absolute top-2 right-4 text-[120px] font-black text-white/[0.03] group-hover:text-primary/[0.05] transition-colors pointer-events-none leading-none select-none">
                                                        {step.number}
                                                 </span>
                                                 <div className="relative z-10">
                                                        <div className="mb-8 p-5 bg-primary rounded-2xl w-fit shadow-[0_0_20px_rgba(247,206,60,0.3)] group-hover:scale-110 transition-transform duration-500">
                                                               {step.icon}
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                                        <p className="text-gray-400 leading-relaxed font-light">
                                                               {step.description}
                                                        </p>
                                                 </div>
                                          </div>
                                   ))}
                            </div>
                     </div>

                     {/* Decorative Elements */}
                     <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
                     <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
              </section>
       );
};

export default HowItWorks;
