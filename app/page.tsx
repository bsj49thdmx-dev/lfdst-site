"use client";

import { useState } from "react";
import { Menu, ArrowRight, ArrowLeft, PlayCircle, Instagram } from "lucide-react";

// --- DONNÉES ---
const projectsData: Record<string, any> = {
  'chronologie': {
      title: "Chronologie d’un jugement",
      year: "2025",
      director: "RÉALISÉ PAR JOËL MAS",
      synopsis: "Une introspection en noir et blanc sur la justice. Le film explore les méandres d'un verdict à travers le regard subjectif de l'accusé, déconstruisant la notion de culpabilité image par image.",
      gallery: [], 
      cast: [
          { name: "Jean Dujardin", role: "L'Accusé", img: "https://via.placeholder.com/150/333/gold?text=Jean" },
          { name: "Marion Cotillard", role: "L'Avocate", img: "https://via.placeholder.com/150/333/gold?text=Marion" }
      ],
      crew: [ "Scénario : Joël Mas", "Image : Armand Rayaume", "Montage : Sarah K.", "Son : Pierre D." ]
  },
  'unmatin': {
      title: "Un matin",
      year: "2024",
      director: "RÉALISÉ PAR JOËL MAS",
      synopsis: "À l'aube d'une journée qui semble ordinaire, tout bascule. Un récit poétique sur l'acceptation.",
      gallery: [],
      cast: [],
      crew: [ "Scénario : Joël Mas", "Lumière : Armand Rayaume", "Décors : Marie L." ]
  },
  'memepasmal': {
      title: "Même pas mal",
      year: "2025",
      director: "RÉALISÉ PAR ARMAND RAYAUME",
      synopsis: "L'histoire brute d'une enfance écorchée mais lumineuse.",
      gallery: [],
      cast: [],
      crew: [ "Réalisation : Armand Rayaume", "Image : Clara V." ]
  },
  'd12': {
      title: "D-12",
      year: "2026",
      director: "LÉA ÉLIDRISSI & OURANA GUERMAH",
      synopsis: "Projet à venir.",
      gallery: [],
      cast: [],
      crew: []
  },
  'couleurs': {
      title: "Les couleurs de maman",
      year: "2026",
      director: "RÉALISÉ PAR ROMAN CLEMENTZ PIETRI",
      synopsis: "En cours de production.",
      gallery: [],
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
    <div className="min-h-screen bg-bg text-gray-100 font-sans selection:bg-gold selection:text-black">
      
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] bg-grain mix-blend-overlay"></div>

      {/* === NAVIGATION === */}
      <nav className="fixed top-0 w-full z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <button onClick={() => setActivePage('home')} className="font-serif text-2xl font-bold text-white">
            LFDST<span className="text-gold">.</span>
          </button>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu />
          </button>
          
          {/* MENU DESKTOP */}
          <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase font-medium">
            {['projets', 'lequipe', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => setActivePage(item)} 
                className={`hover:text-gold transition-colors ${activePage === item ? 'text-gold' : 'text-white'}`}
              >
                {item === 'lequipe' ? "L'Équipe" : item}
              </button>
            ))}
          </div>
          
          {/* BOUTON ADHÉSION */}
          <button onClick={() => setActivePage('adhesion')} className="hidden md:block border border-white/20 px-4 py-2 rounded-full text-[10px] hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 uppercase tracking-widest ml-4">
              Demande d'adhésion
          </button>
        </div>

        {/* MENU MOBILE */}
        {mobileMenuOpen && (
           <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 py-4 flex flex-col items-center gap-4">
              {['home', 'projets', 'lequipe', 'contact', 'adhesion'].map((item) => (
                <button key={item} onClick={() => { setActivePage(item); setMobileMenuOpen(false); }} className="text-white uppercase tracking-widest text-sm hover:text-gold">
                  {item}
                </button>
              ))}
           </div>
        )}
      </nav>

      {/* === CONTENU === */}
      <div className={`${activePage === 'home' ? '' : 'pt-24'}`}>

        {/* === PAGE: HOME === */}
        {activePage === 'home' && (
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')] bg-cover bg-center opacity-60 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-black/30"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white drop-shadow-lg">LES FILMS DANS SA TÊTE</h1>
                <p className="text-gold text-xs md:text-sm tracking-[0.2em] uppercase font-bold mb-8 drop-shadow-md">ASSOCIATION DE PRODUCTION AUDIOVISUELLE</p>
                <button onClick={() => setActivePage('projets')} className="group flex items-center justify-center gap-2 text-white border-b border-gold pb-1 hover:text-gold transition-colors uppercase text-sm tracking-widest mx-auto">
                    Découvrir nos projets <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </section>
        )}

        {/* === PAGE: PROJETS === */}
        {activePage === 'projets' && (
          <div className="container mx-auto px-6 py-12 animate-in fade-in duration-500">
             <div className="mb-12 text-center">
                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">PORTFOLIO</span>
                <h2 className="text-4xl md:text-6xl font-serif text-white">Nos Films</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="group cursor-pointer" onClick={() => openProject('chronologie')}>
                    <div className="relative aspect-video overflow-hidden mb-4 bg-gray-900 border border-white/5">
                        <div className="w-full h-full bg-gray-800 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-gray-600 text-xs">AFFICHE CHRONOLOGIE</div>
                    </div>
                    <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors">Chronologie d’un jugement</h3>
                    <p className="text-xs text-gold uppercase mt-1">Court-métrage (2025)</p>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">Réalisé par Joel MAS</p>
                </div>

                <div className="group cursor-pointer" onClick={() => openProject('unmatin')}>
                    <div className="relative aspect-video overflow-hidden mb-4 bg-gray-900 border border-white/5">
                        <div className="w-full h-full bg-gray-800 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-gray-600 text-xs">AFFICHE UN MATIN</div>
                    </div>
                    <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors">Un matin</h3>
                    <p className="text-xs text-gold uppercase mt-1">Court-métrage (2024)</p>
                </div>

                <div className="group cursor-pointer opacity-75" onClick={() => openProject('d12')}>
                    <div className="relative aspect-video overflow-hidden mb-4 bg-gray-900 border border-white/5">
                         <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600 text-xs">AFFICHE D12</div>
                         <div className="absolute top-2 right-2 bg-gold/90 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">À venir</div>
                    </div>
                    <h3 className="text-2xl font-serif text-white">D-12</h3>
                    {/* C'est ICI que l'erreur était : j'ai mis className au lieu de class */}
                    <p className="text-xs text-gold uppercase mt-1">Court-métrage (2026)</p>
                </div>

            </div>
          </div>
        )}

        {/* === PAGE: DÉTAIL PROJET === */}
        {activePage === 'project-detail' && project && (
          <div className="container mx-auto px-6 py-12 animate-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActivePage('projets')} className="mb-8 flex items-center gap-2 text-gray-500 hover:text-gold transition-colors text-xs uppercase tracking-widest">
                <ArrowLeft className="w-4 h-4" /> Retour aux films
            </button>

            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">{project.title}</h2>
                <div className="flex justify-center gap-6 text-xs text-gold uppercase tracking-widest font-bold mb-8">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.director}</span>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-light italic">"{project.synopsis}"</p>
            </div>

            <div className="max-w-5xl mx-auto mb-20">
                <div className="aspect-video w-full bg-black border border-white/10 relative group flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white/50 group-hover:text-gold transition-colors" />
                    <p className="absolute bottom-4 text-gray-500 text-xs uppercase tracking-widest">Bande Annonce (Bientôt disponible)</p>
                </div>
            </div>

            <div className="mb-20">
                <h3 className="text-2xl font-serif text-white mb-8 pl-4 border-l-2 border-gold">Le Casting</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {project.cast.length > 0 ? project.cast.map((actor: any, i: number) => (
                        <div key={i} className="text-center">
                             <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white/10 bg-gray-800">
                                <div className="w-full h-full bg-gray-700"></div>
                             </div>
                             <h4 className="text-white font-serif font-bold">{actor.name}</h4>
                             <p className="text-gold text-xs uppercase tracking-widest mt-1">{actor.role}</p>
                        </div>
                    )) : <p className="text-gray-500 italic">Casting à venir...</p>}
                </div>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white/5 p-8 border border-white/10">
                <h3 className="text-xl font-serif text-white mb-6 text-center">Équipe Technique</h3>
                <ul className="space-y-3 text-sm text-gray-400 font-light">
                    {project.crew.map((item: string, i: number) => (
                        <li key={i} className="flex justify-between border-b border-white/5 pb-2">
                             <span>{item.split(':')[0]}</span> <span className="text-white">{item.split(':')[1]}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        )}

        {/* === PAGE: L'ÉQUIPE === */}
        {activePage === 'lequipe' && (
          <div className="container mx-auto px-6 py-12 animate-in fade-in duration-500">
            <div className="max-w-3xl mx-auto text-center mb-20">
                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">L'ASSOCIATION</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">L'art de raconter.</h2>
                <p className="text-gray-400 leading-relaxed font-light text-lg">
                    <strong className="text-white">« Les Films Dans Sa Tête »</strong> (LFDST) est un collectif de création audiovisuelle né à Paris.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                <div className="group text-center">
                    <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-900 grayscale group-hover:grayscale-0 transition-all duration-700">
                         <div className="w-full h-full bg-gray-800"></div>
                    </div>
                    <h3 className="text-xl font-serif text-white mb-2 tracking-wide">JOËL MAS</h3>
                    <p className="text-gold text-[10px] uppercase tracking-widest font-bold">Fondateur & Réalisateur</p>
                </div>
                <div className="group text-center">
                    <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-900 grayscale group-hover:grayscale-0 transition-all duration-700">
                         <div className="w-full h-full bg-gray-800"></div>
                    </div>
                    <h3 className="text-xl font-serif text-white mb-2 tracking-wide">ARMAND RAYAUME</h3>
                    <p className="text-gold text-[10px] uppercase tracking-widest font-bold">Chef Opérateur</p>
                </div>
            </div>
          </div>
        )}

        {/* === PAGE: CONTACT === */}
        {activePage === 'contact' && (
           <div className="container mx-auto px-6 py-12 max-w-2xl animate-in fade-in duration-500">
            <div className="text-center mb-12">
                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">CONTACT</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white">Parlons projet.</h2>
            </div>
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="Nom" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold placeholder:text-gray-600"/>
                    <input type="text" placeholder="Email" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold placeholder:text-gray-600"/>
                </div>
                <textarea rows={4} placeholder="Votre message..." className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold placeholder:text-gray-600"></textarea>
                <button className="w-full bg-white/5 border border-white/10 text-white py-4 uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all">Envoyer</button>
            </form>
            <div className="mt-12 text-center flex flex-col items-center gap-4">
                <a href="mailto:lesfilmsdanssatete@gmail.com" className="text-gray-500 text-sm hover:text-gold transition-colors">lesfilmsdanssatete@gmail.com</a>
                <a href="https://www.instagram.com/lesfilmsdanssatete/" target="_blank" className="flex items-center gap-2 text-gray-500 text-sm hover:text-gold transition-colors">
                    <Instagram className="w-4 h-4" /> @lesfilmsdanssatete
                </a>
            </div>
          </div>
        )}

        {/* === PAGE: ADHÉSION === */}
        {activePage === 'adhesion' && (
            <div className="container mx-auto px-6 py-12 max-w-2xl animate-in fade-in duration-500">
                <div className="text-center mb-12">
                    <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">NOUS REJOINDRE</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white">Demande d'adhésion</h2>
                </div>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <input type="text" placeholder="Nom" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold placeholder:text-gray-600"/>
                        <input type="text" placeholder="Prénom" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold placeholder:text-gray-600"/>
                    </div>
                    <input type="text" placeholder="Contact (Email/Tel)" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold placeholder:text-gray-600"/>
                    <textarea rows={4} placeholder="Quelques lignes sur moi..." className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold placeholder:text-gray-600"></textarea>
                    <button className="w-full bg-white/5 border border-white/10 text-white py-4 uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all">Envoyer ma demande</button>
                </form>
            </div>
        )}

      </div>
    </div>
  );
}