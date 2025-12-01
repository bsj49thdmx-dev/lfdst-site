"use client";

import { useState } from "react";
import { Menu, ArrowRight, ArrowLeft, PlayCircle, Instagram, X } from "lucide-react";

// --- DONNÉES ---
const projectsData: Record<string, any> = {
  'chronologie': {
      title: "Chronologie d’un jugement",
      year: "2025",
      director: "RÉALISÉ PAR JOËL MAS",
      synopsis: "Une introspection en noir et blanc sur la justice. Le film explore les méandres d'un verdict à travers le regard subjectif de l'accusé, déconstruisant la notion de culpabilité image par image.",
      cast: [
          { name: "Jean Dujardin", role: "L'Accusé", img: "" },
          { name: "Marion Cotillard", role: "L'Avocate", img: "" }
      ],
      crew: [ "Scénario : Joël Mas", "Image : Armand Rayaume", "Montage : Sarah K.", "Son : Pierre D." ]
  },
  'unmatin': {
      title: "Un matin",
      year: "2024",
      director: "RÉALISÉ PAR JOËL MAS",
      synopsis: "À l'aube d'une journée qui semble ordinaire, tout bascule. Un récit poétique sur l'acceptation.",
      cast: [],
      crew: [ "Scénario : Joël Mas", "Lumière : Armand Rayaume", "Décors : Marie L." ]
  },
  'd12': {
      title: "D-12",
      year: "2026",
      director: "LÉA ÉLIDRISSI & OURANA GUERMAH",
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
    <div className="min-h-screen w-full bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col">
      
      {/* Grain Overlay - Opacité réduite pour garder le noir profond */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-grain mix-blend-overlay"></div>

      {/* === NAVIGATION === */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center w-full">
          {/* LOGO */}
          <button onClick={() => setActivePage('home')} className="font-serif text-2xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
            LFDST<span className="text-[#D4AF37]">.</span>
          </button>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
          
          {/* MENU DESKTOP */}
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase font-medium items-center">
            {['projets', 'lequipe', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => setActivePage(item)} 
                className={`hover:text-[#D4AF37] transition-colors duration-300 ${activePage === item ? 'text-[#D4AF37]' : 'text-white'}`}
              >
                {item === 'lequipe' ? "L'Équipe" : item}
              </button>
            ))}
             {/* BOUTON ADHÉSION */}
            <button onClick={() => setActivePage('adhesion')} className="border border-white/20 px-5 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300">
                Adhésion
            </button>
          </div>
        </div>

        {/* MENU MOBILE OVERLAY */}
        {mobileMenuOpen && (
           <div className="fixed inset-0 top-20 z-40 bg-[#050505] flex flex-col items-center justify-center gap-8 md:hidden">
              {['home', 'projets', 'lequipe', 'contact', 'adhesion'].map((item) => (
                <button key={item} onClick={() => { setActivePage(item); setMobileMenuOpen(false); }} className="text-white text-xl uppercase tracking-widest font-serif hover:text-[#D4AF37]">
                  {item}
                </button>
              ))}
           </div>
        )}
      </nav>

      {/* === CONTENU === */}
      {/* pt-20 compense exactement la hauteur de la navbar */}
      <main className={`flex-grow w-full ${activePage === 'home' ? '' : 'pt-28 pb-12'}`}>

        {/* === PAGE: HOME === */}
        {activePage === 'home' && (
          <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')] bg-cover bg-center opacity-40 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-black/40"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
                <h1 className="font-serif text-4xl md:text-7xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
                    LES FILMS DANS SA TÊTE
                </h1>
                <p className="text-[#D4AF37] text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-10 drop-shadow-md">
                    ASSOCIATION DE PRODUCTION AUDIOVISUELLE
                </p>
                <button onClick={() => setActivePage('projets')} className="group flex items-center justify-center gap-3 text-white border-b border-[#D4AF37] pb-2 hover:text-[#D4AF37] transition-colors uppercase text-sm tracking-widest mx-auto">
                    Découvrir nos projets <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </section>
        )}

        {/* === PAGE: PROJETS === */}
        {activePage === 'projets' && (
          <div className="container mx-auto px-6 animate-in fade-in duration-700">
             <div className="mb-16 text-center">
                <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-4 block">PORTFOLIO</span>
                <h2 className="text-4xl md:text-6xl font-serif text-white">Nos Films</h2>
                <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Projet 1 */}
                <div className="group cursor-pointer" onClick={() => openProject('chronologie')}>
                    <div className="relative aspect-video overflow-hidden mb-5 bg-[#111] border border-white/5">
                        <div className="w-full h-full bg-[#1a1a1a] group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-gray-600 text-xs tracking-widest">AFFICHE</div>
                    </div>
                    <h3 className="text-2xl font-serif text-white group-hover:text-[#D4AF37] transition-colors">Chronologie d’un jugement</h3>
                    <p className="text-xs text-[#D4AF37] uppercase mt-2 tracking-widest">Court-métrage (2025)</p>
                </div>

                {/* Projet 2 */}
                <div className="group cursor-pointer" onClick={() => openProject('unmatin')}>
                    <div className="relative aspect-video overflow-hidden mb-5 bg-[#111] border border-white/5">
                        <div className="w-full h-full bg-[#1a1a1a] group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-gray-600 text-xs tracking-widest">AFFICHE</div>
                    </div>
                    <h3 className="text-2xl font-serif text-white group-hover:text-[#D4AF37] transition-colors">Un matin</h3>
                    <p className="text-xs text-[#D4AF37] uppercase mt-2 tracking-widest">Court-métrage (2024)</p>
                </div>

                 {/* Projet 3 */}
                <div className="group cursor-pointer opacity-60 hover:opacity-100 transition-opacity" onClick={() => openProject('d12')}>
                    <div className="relative aspect-video overflow-hidden mb-5 bg-[#111] border border-white/5">
                         <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center text-gray-600 text-xs tracking-widest">AFFICHE</div>
                         <div className="absolute top-3 right-3 bg-[#D4AF37] text-black text-[9px] font-bold px-2 py-1 uppercase tracking-widest">À venir</div>
                    </div>
                    <h3 className="text-2xl font-serif text-white">D-12</h3>
                    <p className="text-xs text-[#D4AF37] uppercase mt-2 tracking-widest">Court-métrage (2026)</p>
                </div>
            </div>
          </div>
        )}

        {/* === PAGE: DÉTAIL === */}
        {activePage === 'project-detail' && project && (
          <div className="container mx-auto px-6 animate-in slide-in-from-bottom-8 duration-500">
            <button onClick={() => setActivePage('projets')} className="mb-10 flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors text-xs uppercase tracking-widest">
                <ArrowLeft className="w-4 h-4" /> Retour au catalogue
            </button>

            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-none">{project.title}</h2>
                <div className="flex justify-center items-center gap-4 text-[10px] md:text-xs text-[#D4AF37] uppercase tracking-[0.2em] font-bold mb-8">
                    <span>{project.year}</span>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span>{project.director}</span>
                </div>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-serif italic opacity-80">"{project.synopsis}"</p>
            </div>

            <div className="max-w-5xl mx-auto mb-24">
                <div className="aspect-video w-full bg-black border border-white/10 relative group flex items-center justify-center cursor-pointer hover:border-[#D4AF37]/50 transition-colors">
                    <PlayCircle className="w-20 h-20 text-white/20 group-hover:text-[#D4AF37] transition-all scale-100 group-hover:scale-110" />
                </div>
            </div>

            <div className="mb-24">
                <h3 className="text-3xl font-serif text-white mb-10 text-center">Casting & Équipe</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <div className="bg-[#111] p-8 border border-white/5">
                        <h4 className="text-[#D4AF37] text-xs uppercase tracking-widest mb-6 font-bold">Acteurs</h4>
                        <ul className="space-y-4">
                            {project.cast.length > 0 ? project.cast.map((actor: any, i: number) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                                    <div>
                                        <p className="text-white font-serif">{actor.name}</p>
                                        <p className="text-gray-500 text-xs uppercase tracking-wider">{actor.role}</p>
                                    </div>
                                </li>
                            )) : <p className="text-gray-600 italic text-sm">Casting en cours...</p>}
                        </ul>
                    </div>
                    <div className="bg-[#111] p-8 border border-white/5">
                         <h4 className="text-[#D4AF37] text-xs uppercase tracking-widest mb-6 font-bold">Technique</h4>
                         <ul className="space-y-3 text-sm text-gray-400 font-light">
                            {project.crew.map((item: string, i: number) => (
                                <li key={i} className="flex justify-between border-b border-white/5 pb-2">
                                    <span>{item.split(':')[0]}</span> <span className="text-white font-medium">{item.split(':')[1]}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        )}

        {/* === PAGE: L'ÉQUIPE (Simplifiée et centrée) === */}
        {activePage === 'lequipe' && (
          <div className="container mx-auto px-6 h-full flex flex-col justify-center animate-in fade-in duration-700">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-4 block">L'ASSOCIATION</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">L'art de raconter.</h2>
                <p className="text-gray-400 leading-relaxed font-light text-lg">
                    <strong className="text-white">« Les Films Dans Sa Tête »</strong> (LFDST) est un collectif de création audiovisuelle né à Paris.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                <div className="group text-center">
                    <div className="relative aspect-[3/4] w-64 mx-auto overflow-hidden mb-6 bg-[#111] grayscale group-hover:grayscale-0 transition-all duration-700">
                         <div className="w-full h-full bg-[#1a1a1a]"></div>
                    </div>
                    <h3 className="text-xl font-serif text-white mb-2 tracking-wide">JOËL MAS</h3>
                    <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">Fondateur & Réalisateur</p>
                </div>
                <div className="group text-center">
                    <div className="relative aspect-[3/4] w-64 mx-auto overflow-hidden mb-6 bg-[#111] grayscale group-hover:grayscale-0 transition-all duration-700">
                         <div className="w-full h-full bg-[#1a1a1a]"></div>
                    </div>
                    <h3 className="text-xl font-serif text-white mb-2 tracking-wide">ARMAND RAYAUME</h3>
                    <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">Chef Opérateur</p>
                </div>
            </div>
          </div>
        )}

        {/* === PAGE: CONTACT === */}
        {activePage === 'contact' && (
           <div className="container mx-auto px-6 max-w-xl animate-in fade-in duration-700">
            <div className="text-center mb-12">
                <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-2 block">CONTACT</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white">Parlons projet.</h2>
            </div>
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="Nom" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#D4AF37] placeholder:text-gray-700 transition-colors"/>
                    <input type="text" placeholder="Email" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#D4AF37] placeholder:text-gray-700 transition-colors"/>
                </div>
                <textarea rows={4} placeholder="Votre message..." className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#D4AF37] placeholder:text-gray-700 transition-colors"></textarea>
                <button className="w-full bg-white/5 border border-white/10 text-white py-4 uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300">Envoyer</button>
            </form>
            <div className="mt-16 text-center flex flex-col items-center gap-6">
                <a href="mailto:lesfilmsdanssatete@gmail.com" className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors">lesfilmsdanssatete@gmail.com</a>
                <a href="https://www.instagram.com/lesfilmsdanssatete/" target="_blank" className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#D4AF37] transition-colors">
                    <Instagram className="w-4 h-4" /> @lesfilmsdanssatete
                </a>
            </div>
          </div>
        )}

        {/* === PAGE: ADHÉSION === */}
        {activePage === 'adhesion' && (
            <div className="container mx-auto px-6 max-w-xl animate-in fade-in duration-700">
                <div className="text-center mb-12">
                    <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-2 block">NOUS REJOINDRE</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white">Demande d'adhésion</h2>
                </div>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <input type="text" placeholder="Nom" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] placeholder:text-gray-700"/>
                        <input type="text" placeholder="Prénom" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] placeholder:text-gray-700"/>
                    </div>
                    <input type="text" placeholder="Email" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] placeholder:text-gray-700"/>
                    <textarea rows={4} placeholder="Quelques lignes sur moi..." className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] placeholder:text-gray-700"></textarea>
                    <button className="w-full bg-white/5 border border-white/10 text-white py-4 uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-black transition-all">Envoyer ma demande</button>
                </form>
            </div>
        )}

      </main>
    </div>
  );
}