import React, { useState, useMemo } from 'react';
import { Search, Car, Battery, Info, CheckCircle2, Zap } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { motion, AnimatePresence } from 'framer-motion';

const VehicleSelector = () => {
       const [searchTerm, setSearchTerm] = useState('');
       const [selectedVehicle, setSelectedVehicle] = useState(null);
       const [showResults, setShowResults] = useState(false);

       const filteredVehicles = useMemo(() => {
              if (!searchTerm) return [];

              let results = [];
              vehicles.forEach(make => {
                     make.models.forEach(model => {
                            if (
                                   make.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                   model.name.toLowerCase().includes(searchTerm.toLowerCase())
                            ) {
                                   model.years.forEach(year => {
                                          results.push({
                                                 id: `${make.make}-${model.name}-${year}`,
                                                 make: make.make,
                                                 model: model.name,
                                                 year: year,
                                                 battery: model.battery
                                          });
                                   });
                            }
                     });
              });
              return results.slice(0, 5);
       }, [searchTerm]);

       const handleSelect = (vehicle) => {
              setSelectedVehicle(vehicle);
              setSearchTerm(`${vehicle.make} ${vehicle.model} (${vehicle.year})`);
              setShowResults(true);
       };

       return (
              <section id="selector" className="py-32 bg-black relative overflow-hidden">
                     {/* Background details */}
                     <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

                     <div className="container mx-auto px-4 md:px-6 relative z-10">
                            <div className="max-w-4xl mx-auto text-center mb-16">
                                   <h2 className="text-4xl md:text-6xl mb-6 text-white font-black tracking-tight">¿Qué batería lleva <span className="text-primary italic">tu auto?</span></h2>
                                   <p className="text-gray-400 text-xl font-light">Buscá tu marca y modelo para una recomendación precisa.</p>
                            </div>

                            <div className="max-w-3xl mx-auto relative">
                                   <div className="relative group z-30">
                                          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none transition-colors">
                                                 <Search size={24} className="text-gray-500 group-focus-within:text-primary transition-colors" />
                                          </div>
                                          <input
                                                 type="text"
                                                 className="w-full pl-16 pr-6 py-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-full focus:outline-none focus:border-primary/50 focus:shadow-[0_0_30px_rgba(247,206,60,0.2)] transition-all text-xl text-white placeholder-gray-500"
                                                 placeholder="Ej: Ford Fiesta, Fiat Cronos..."
                                                 value={searchTerm}
                                                 onChange={(e) => {
                                                        setSearchTerm(e.target.value);
                                                        if (!e.target.value) setShowResults(false);
                                                 }}
                                                 onFocus={() => setShowResults(false)}
                                          />

                                          {/* Search Suggestions */}
                                          {!showResults && searchTerm.length > 1 && filteredVehicles.length > 0 && (
                                                 <div className="absolute top-full left-0 right-0 mt-4 bg-[#111] border border-white/10 shadow-2xl rounded-3xl overflow-hidden z-40 backdrop-blur-xl max-h-[320px] overflow-y-auto">
                                                        {filteredVehicles.map((v) => (
                                                               <button
                                                                      key={v.id}
                                                                      onClick={() => handleSelect(v)}
                                                                      className="w-full text-left px-8 py-5 hover:bg-white/5 flex items-center justify-between transition-colors border-b border-white/5 last:border-0"
                                                               >
                                                                      <div className="flex items-center gap-5">
                                                                             <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                                                                                    <Car size={24} />
                                                                             </div>
                                                                             <div>
                                                                                    <p className="font-bold text-white text-lg">{v.make} {v.model}</p>
                                                                                    <p className="text-sm text-gray-400">{v.year}</p>
                                                                             </div>
                                                                      </div>
                                                                      <Info size={20} className="text-gray-600" />
                                                               </button>
                                                        ))}
                                                 </div>
                                          )}
                                   </div>

                                   {/* Selection Result Card */}
                                   <AnimatePresence>
                                          {showResults && selectedVehicle && (
                                                 <motion.div
                                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                        className="mt-12 backdrop-blur-xl bg-white/[0.02] rounded-[2.5rem] overflow-hidden border border-primary/30 shadow-[0_0_50px_rgba(247,206,60,0.1)] relative z-20"
                                                 >
                                                        <div className="p-10 md:flex gap-12 items-center">
                                                               <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                                                                      <div className="relative">
                                                                             <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full animate-pulse-glow pointer-events-none"></div>
                                                                             <Battery size={120} className="relative text-white" strokeWidth={0.5} />
                                                                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                                                                    <Zap size={40} className="text-primary" />
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <div className="md:w-2/3">
                                                                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mb-4">
                                                                             <CheckCircle2 size={16} className="text-primary" />
                                                                             <span className="font-bold text-xs uppercase tracking-wider text-primary">Batería Recomendada</span>
                                                                      </div>
                                                                      <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{selectedVehicle.battery.model}</h3>
                                                                      <p className="text-gray-400 mb-8 font-light text-lg">{selectedVehicle.battery.specs}</p>

                                                                      <div className="flex items-center justify-between mb-10 p-6 rounded-2xl bg-black/50 border border-white/5">
                                                                             <div>
                                                                                    <p className="text-sm text-gray-500 mb-1 font-medium">Precio Final (con entrega)</p>
                                                                                    <p className="text-5xl font-black text-primary">${selectedVehicle.battery.price.toLocaleString('es-AR')}</p>
                                                                             </div>
                                                                             <div className="text-right">
                                                                                    <div className="flex items-center gap-2 justify-end mb-1">
                                                                                           <span className="relative flex h-3 w-3">
                                                                                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                                                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                                                                           </span>
                                                                                    </div>
                                                                                    <p className="text-sm text-green-500 font-bold uppercase tracking-wider">Stock Disponible</p>
                                                                             </div>
                                                                      </div>

                                                                      <div className="flex flex-col sm:flex-row gap-4">
                                                                             <button className="btn-primary flex-1 flex items-center justify-center gap-2 text-lg">
                                                                                    Comprar ahora
                                                                             </button>
                                                                             <button
                                                                                    className="btn-outline flex-1 text-lg"
                                                                                    onClick={() => {
                                                                                           setShowResults(false);
                                                                                           setSearchTerm('');
                                                                                    }}
                                                                             >
                                                                                    Cambiar Vehículo
                                                                             </button>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div className="bg-primary/5 border-t border-primary/10 p-6 text-center backdrop-blur-xl">
                                                               <p className="text-gray-300">¿Dudas? <span className="text-primary font-bold underline cursor-pointer hover:text-white transition-colors">Hablá con un técnico por WhatsApp</span></p>
                                                        </div>
                                                 </motion.div>
                                          )}
                                   </AnimatePresence>
                            </div>
                     </div>
              </section>
       );
};

export default VehicleSelector;
