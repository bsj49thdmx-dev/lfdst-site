"use client";

import { useState } from "react";
import { Menu, ArrowRight, ArrowLeft, PlayCircle, X } from "lucide-react";

// --- DONNÉES ---
const projectsData: Record<string, any> = {
  'chronologie': {
      title: "Chronologie d’un jugement",
      year: "2025",
      director: "JOËL MAS",
      synopsis: "Une introspection en noir et blanc sur la justice. Le film explore les méandres d'un verdict à travers le regard subjectif de l'accusé.",
      cast: [],
      crew: [ "Scénario : Joël Mas", "Image : Armand Rayaume" ]
  },
  'unmatin': {
      title: "Un matin",
      year: "2024",
      director: "JOËL MAS",
      synopsis: "À l'aube d'une journée qui semble ordinaire, tout bascule.",
      cast: [],
      crew: [ "Scénario : Joël Mas" ]
  },
  'd12': {
      title: "D-12",
      year: "2026",
      director: "LÉA ÉLIDRISSI",
      synopsis: "Projet à venir.",
      cast: [],
      crew: []
  }
};

export default function Home() {
  const [activePage, setActivePage] = useState('home');
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openProject = (id: string) => {
    setCurrentProject(id);
    setActivePage('project-detail');
    window.scrollTo(0, 0);
  };

  const project = currentProject ? projectsData[currentProject] : null;

  return (
    // ICI : On force le texte en BLANC (text-white) et le fond en NOIR (bg-black)
    <div className="min-h-screen w-full bg-black text-white font-sans selection:bg-gold selection:text-black">
      
      {/* === NAVIGATION === */}
      <nav className="fixed top-0 left-0 w-full z-50 py-8 px-6 md:px-12 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          {/* LOGO */}
          <button onClick={() => setActivePage('home')} className="hover:opacity-80 transition-opacity">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
              LFDST<span className="text-gold">.</span>
            </span>
          </button>
          
          {/* MENU MOBILE ICONE */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
          
          {/* MENU DESKTOP */}
          <div className="hidden md:flex gap-12 text-[11px] tracking-[0.25em] uppercase font-medium items-center text-gray-300">
            {['projets', 'lequipe', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => setActivePage(item)} 
                className={`hover:text-gold transition-colors duration-300 ${activePage === item ? 'text-white' : ''}`}
              >
                {item === 'lequipe' ? "L'Équipe" : item}
              </button>
            ))}
            <button onClick={() => setActivePage('adhesion')} className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500">
                Adhésion
            </button>
          </div>
        </div>

        {/* MENU MOBILE OVERLAY */}
        {mobileMenuOpen && (
           <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8">
              {['home', 'projets', 'lequipe', 'contact', 'adhesion'].map((item) => (
                <button key={item} onClick={() => { setActivePage(item); setMobileMenuOpen(false); }} className="text-white text-3xl uppercase tracking-widest font-serif font-light">
                  {item}
                </button>
              ))}
           </div>
        )}
      </nav>

      {/* === CONTENU === */}
      <main className="w-full">

        {/* === PAGE: HOME === */}
        {activePage === 'home' && (
          <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
             {/* IMAGE DE FOND (avec opacité réglée pour que le texte blanc ressorte) */}
             <div className="absolute inset-0 opacity-50">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')] bg-cover bg-center grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
            </div>

            <div className="relative z-10 text-center px-6 mt-12 max-w-4xl mx-auto">
                <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white leading-[0.9]">
                    LES FILMS<br />DANS SA TÊTE
                </h1>
                <div className="w-12 h-0.5 bg-gold mx-auto mb-8"></div>
                <p className="text-gray-200 text-xs md:text-sm tracking-[0.4em] uppercase font-semibold mb-12">
                    Association de production audiovisuelle
                </p>
                <button onClick={() => setActivePage('projets')} className="text-white hover:text-gold transition-colors uppercase text-[10px] md:text-xs tracking-[0.3em] flex items-center gap-3 mx-auto border-b border-white/30 pb-2 hover:border-gold">
                    Voir le portfolio <ArrowRight className="w-4 h-4" />
                </button>
            </div>
          </section>
        )}

        {/* === PAGE: PROJETS === */}
        {activePage === 'projets' && (
          <div className="min-h-screen bg-black pt-40 px-6 pb-20">
             <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-serif text-white mb-24 text-center">Nos Films</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
                    {/* CARTE FILM 1 */}
                    <div className="group cursor-pointer" onClick={() => openProject('chronologie')}>
                        <div className="aspect-video w-full bg-[#0a0a0a] mb-6 overflow-hidden relative">
                             <div className="w-full h-full bg-[#111] group-hover:scale-105 transition-transform duration-1000 flex items-center justify-center text-gray-800 text-xs tracking-[0.3em]">AFFICHE</div>
                        </div>
                        <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors duration-500">Chronologie d’un jugement</h3>
                        <div className="flex justify-between items-end mt-2 border-b border-white/10 pb-2">
                             <p className="text-gray-400 text-[10px] uppercase tracking-widest">Court-métrage</p>
                             <p className="text-gold text-[10px] font-bold">2025</p>
                        </div>
                    </div>

                    {/* CARTE FILM 2 */}
                    <div className="group cursor-pointer" onClick={() => openProject('unmatin')}>
                        <div className="aspect-video w-full bg-[#0a0a0a] mb-6 overflow-hidden relative">
                             <div className="w-full h-full bg-[#111] group-hover:scale-105 transition-transform duration-1000 flex items-center justify-center text-gray-800 text-xs tracking-[0.3em]">AFFICHE</div>
                        </div>
                        <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors duration-500">Un matin</h3>
                        <div className="flex justify-between items-end mt-2 border-b border-white/10 pb-2">
                             <p className="text-gray-400 text-[10px] uppercase tracking-widest">Court-métrage</p>
                             <p className="text-gold text-[10px] font-bold">2024</p>
                        </div>
                    </div>

                     {/* CARTE FILM 3 */}
                    <div className="group cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-500" onClick={() => openProject('d12')}>
                        <div className="aspect-video w-full bg-[#0a0a0a] mb-6 overflow-hidden relative">
                             <div className="w-full h-full bg-[#111] flex items-center justify-center text-gray-800 text-xs tracking-[0.3em]">AFFICHE</div>
                        </div>
                        <h3 className="text-2xl font-serif text-white">D-12</h3>
                        <div className="flex justify-between items-end mt-2 border-b border-white/10 pb-2">
                             <p className="text-gray-400 text-[10px] uppercase tracking-widest">En production</p>
                             <p className="text-gold text-[10px] font-bold">2026</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )}

        {/* === PAGE: DÉTAIL === */}
        {activePage === 'project-detail' && project && (
          <div className="min-h-screen bg-black pt-40 px-6 pb-20 animate-in fade-in duration-700">
             <div className="max-w-5xl mx-auto">
                <button onClick={() => setActivePage('projets')} className="mb-16 flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-[10px] uppercase tracking-[0.3em]">
                    <ArrowLeft className="w-4 h-4" /> Retour
                </button>

                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-8xl font-serif text-white mb-8">{project.title}</h2>
                    <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-12">{project.director} — {project.year}</p>
                    <p className="text-gray-300 text-xl md:text-2xl font-serif font-light italic max-w-3xl mx-auto leading-relaxed">"{project.synopsis}"</p>
                </div>

                <div className="aspect-video w-full bg-[#0a0a0a] mb-32 flex items-center justify-center group cursor-pointer border border-white/5 hover:border-white/20 transition-all">
                    <PlayCircle className="w-16 h-16 text-white/20 group-hover:text-gold transition-colors duration-500" />
                </div>

                <div className="grid md:grid-cols-2 gap-20">
                    <div>
                        <h4 className="text-white text-sm font-serif mb-8 uppercase tracking-widest border-b border-white/20 pb-4 inline-block">Casting</h4>
                         <p className="text-gray-500 text-sm italic">Casting en cours...</p>
                    </div>
                    <div>
                         <h4 className="text-white text-sm font-serif mb-8 uppercase tracking-widest border-b border-white/20 pb-4 inline-block">Équipe Technique</h4>
                         <ul className="space-y-6">
                            {project.crew.map((item: string, i: number) => (
                                <li key={i} className="flex justify-between text-sm group">
                                    <span className="text-gray-500 group-hover:text-gray-300 transition-colors">{item.split(':')[0]}</span>
                                    <span className="text-white font-serif">{item.split(':')[1]}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        )}

        {/* === PAGE: L'ÉQUIPE === */}
        {activePage === 'lequipe' && (
          <div className="min-h-screen bg-black pt-40 px-6 flex flex-col items-center">
            <div className="max-w-3xl text-center mb-24">
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">L'Équipe</h2>
                <p className="text-gray-300 font-light text-xl leading-relaxed">
                    Le collectif derrière l'association.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-24">
                <div className="text-center group">
                    <div className="w-72 h-96 bg-[#111] mx-auto mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"></div>
                    <h3 className="text-3xl font-serif text-white mb-2">JOËL MAS</h3>
                    <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">Fondateur</p>
                </div>
                <div className="text-center group">
                    <div className="w-72 h-96 bg-[#111] mx-auto mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"></div>
                    <h3 className="text-3xl font-serif text-white mb-2">ARMAND RAYAUME</h3>
                    <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">Chef Opérateur</p>
                </div>
            </div>
          </div>
        )}

        {/* === PAGE: CONTACT / ADHESION === */}
        {(activePage === 'contact' || activePage === 'adhesion') && (
           <div className="min-h-screen bg-black pt-40 px-6 flex justify-center">
            <div className="w-full max-w-lg">
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-16 text-center">
                    {activePage === 'contact' ? 'Contact' : 'Adhésion'}
                </h2>
                <form className="space-y-12">
                    <div className="group">
                        <label className="block text-[10px] text-gold uppercase tracking-[0.2em] mb-2 group-focus-within:text-white transition-colors">Votre Email</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg font-light focus:outline-none focus:border-gold transition-all duration-500"/>
                    </div>
                    <div className="group">
                        <label className="block text-[10px] text-gold uppercase tracking-[0.2em] mb-2 group-focus-within:text-white transition-colors">Votre Message</label>
                        <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg font-light focus:outline-none focus:border-gold transition-all duration-500"></textarea>
                    </div>
                    <button className="w-full bg-white text-black py-5 uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-black transition-colors font-bold mt-8">
                        Envoyer
                    </button>
                </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}