import React from 'react';
import { Activity, Wrench, Cpu, Truck, CreditCard, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
       {
              icon: <Activity className="w-8 h-8 text-black" />,
              title: "Venta de Alternadores",
              description: "Distribuidor oficial y marcas líderes. Alternadores para autos, camionetas, utilitarios y más.",
       },
       {
              icon: <Cpu className="w-8 h-8 text-black" />,
              title: "Diagnóstico Eléctrico",
              description: "Análisis computarizado con herramientas digitales de alta precisión. Detectamos fallas reales, no adivinamos.",
       },
       {
              icon: <Wrench className="w-8 h-8 text-black" />,
              title: "Alternadores y Arranques",
              description: "Reparación y reemplazo de motores de arranque y alternadores. Servicio especializado con garantía.",
       },
       {
              icon: <Truck className="w-8 h-8 text-black" />,
              title: "Instalación Express",
              description: "Reparamos o instalamos tu alternador en tiempo récord. Servicio rápido, profesional y sin sorpresas.",
       },
       {
              icon: <CreditCard className="w-8 h-8 text-black" />,
              title: "Formas de Pago",
              description: "Aceptamos efectivo, transferencias, tarjetas de débito y crédito. Consultá por financiación.",
       },
       {
              icon: <Clock className="w-8 h-8 text-black" />,
              title: "Atención Personalizada",
              description: "Turnos y consultas vía WhatsApp. Te asesoramos antes de comprar para encontrar el repuesto ideal.",
       }
];

const Services = () => {
       return (
              <section id="servicios" className="py-32 bg-black relative overflow-hidden border-b border-white/5">
                     <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full pointer-events-none"></div>
                     <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>

                     <div className="container mx-auto px-4 md:px-6 relative z-10">
                            <motion.div
                                   initial={{ opacity: 0, y: 30 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ duration: 0.8 }}
                                   className="text-center mb-20"
                            >
                                   <h2 className="text-4xl md:text-6xl mb-6 text-white font-black tracking-tight">
                                          Nuestros <span className="text-primary italic">Servicios</span>
                                   </h2>
                                   <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
                                          Electricidad automotor integral. Todo lo que tu vehículo necesita en un solo lugar.
                                   </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                   {services.map((service, index) => (
                                          <motion.div
                                                 key={index}
                                                 initial={{ opacity: 0, y: 20 }}
                                                 whileInView={{ opacity: 1, y: 0 }}
                                                 viewport={{ once: true }}
                                                 transition={{ delay: index * 0.1, duration: 0.6 }}
                                                 className="card-glass group transition-all duration-500 hover:-translate-y-2"
                                          >
                                                 <div className="mb-6 p-5 bg-primary rounded-2xl w-fit shadow-[0_0_20px_rgba(247,206,60,0.3)] group-hover:scale-110 transition-transform duration-500">
                                                        {service.icon}
                                                 </div>
                                                 <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                                 <p className="text-gray-400 leading-relaxed font-light">{service.description}</p>
                                          </motion.div>
                                   ))}
                            </div>

                            <motion.div
                                   initial={{ opacity: 0 }}
                                   whileInView={{ opacity: 1 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.6 }}
                                   className="mt-16 text-center"
                            >
                                   <a
                                          href="https://wa.me/5493525618338"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="btn-primary inline-flex items-center gap-2"
                                   >
                                          Consultá por WhatsApp
                                   </a>
                            </motion.div>
                     </div>
              </section>
       );
};

export default Services;
