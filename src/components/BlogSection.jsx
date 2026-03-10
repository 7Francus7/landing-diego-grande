import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
       {
              id: 1,
              title: "¿Cómo saber si tu batería está por agotarse?",
              category: "Mantenimiento",
              readTime: "3 min",
              image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              excerpt: "Conocé las señales clave que indican que es momento de cambiar la batería de tu auto antes de quedarte a pie."
       },
       {
              id: 2,
              title: "Mitos y verdades sobre el arranque en frío",
              category: "Consejos",
              readTime: "5 min",
              image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              excerpt: "El invierno es la época más dura para el sistema eléctrico de tu auto. ¿Qué es cierto y qué no?"
       },
       {
              id: 3,
              title: "Alternador o Batería: ¿Cuál es el problema?",
              category: "Diagnóstico",
              readTime: "4 min",
              image: "https://images.unsplash.com/photo-1498887960847-2a5e46312788?auto=format&fit=crop&w=800&q=80",
              excerpt: "Muchos problemas que parecen de batería en realidad son culpa del alternador. Aprendé a diferenciarlos."
       }
];

const BlogSection = () => {
       return (
              <section id="blog" className="py-32 bg-[#050505] relative border-b border-white/5">
                     <div className="container mx-auto px-4 md:px-6 relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                                   <div className="max-w-xl">
                                          <h2 className="text-4xl md:text-6xl mb-6 text-white font-black tracking-tight">Nuestro <span className="text-primary italic">Blog</span></h2>
                                          <p className="text-gray-400 text-xl font-light">Consejos y guías para mantener tu sistema eléctrico al 100%.</p>
                                   </div>
                                   <button className="hidden md:flex items-center gap-2 font-bold text-primary hover:text-white transition-colors uppercase tracking-widest text-sm">
                                          Ver todos los artículos <ArrowRight size={20} />
                                   </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                   {posts.map((post) => (
                                          <div key={post.id} className="card-glass p-0 overflow-hidden group">
                                                 <div className="h-64 overflow-hidden relative">
                                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                                        <img
                                                               src={post.image}
                                                               alt={post.title}
                                                               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                                        />
                                                        <div className="absolute top-6 left-6 z-20">
                                                               <span className="bg-black/50 backdrop-blur-md border border-white/10 text-xs font-bold px-4 py-2 rounded-full text-white uppercase tracking-wider">
                                                                      {post.category}
                                                               </span>
                                                        </div>
                                                 </div>
                                                 <div className="p-8">
                                                        <div className="flex items-center gap-4 mb-4">
                                                               <span className="flex h-1 w-1 rounded-full bg-primary"></span>
                                                               <p className="text-xs text-primary font-bold uppercase tracking-widest">{post.readTime} de lectura</p>
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-primary transition-colors">
                                                               {post.title}
                                                        </h3>
                                                        <p className="text-gray-400 mb-8 font-light leading-relaxed">{post.excerpt}</p>
                                                        <button className="flex items-center gap-2 font-bold text-white group-hover:text-primary transition-colors uppercase tracking-widest text-sm">
                                                               Leer más <ArrowRight size={16} />
                                                        </button>
                                                 </div>
                                          </div>
                                   ))}
                            </div>

                            <button className="w-full md:hidden mt-12 btn-outline flex items-center justify-center gap-2 text-sm">
                                   Ver todos los artículos <ArrowRight size={20} />
                            </button>
                     </div>
              </section>
       );
};

export default BlogSection;
