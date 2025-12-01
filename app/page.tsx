"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* === NAVBAR === */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 py-5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO GAUCHE */}
          <div className="flex items-center gap-2">
            <div className="bg-[#D4AF37] w-1 h-6"></div> {/* Petite barre or déco */}
            <span className="text-white font-serif font-bold text-lg tracking-wider">LFDST</span>
          </div>

          {/* MENU CENTRE (Desktop) */}
          <div className="hidden md:flex gap-10">
            {['PROJETS', "L'ÉQUIPE", 'CONTACT'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace("'", "").replace("é", "e"))}
                className="text-[11px] tracking-[0.2em] font-medium text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* BOUTON DROITE */}
          <div className="hidden md:block">
            <button onClick={() => scrollTo('contact')} className="border border-white/20 rounded-full px-5 py-2 text-[10px] uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
              Demande d'adhésion
            </button>
          </div>

          {/* MENU MOBILE ICONE */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MENU MOBILE OVERLAY */}
        {mobileMenuOpen && (
           <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 py-10 flex flex-col items-center gap-6 md:hidden">
              {['PROJETS', "L'ÉQUIPE", 'CONTACT'].map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase().replace("'", "").replace("é", "e"))} className="text-xl font-serif text-white">
                  {item}
                </button>
              ))}
           </div>
        )}
      </nav>

      {/* === HERO SECTION === */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* FOND IMAGE */}
        <div className="absolute inset-0 z-0">
           {/* Image générique sombre et classe */}
           <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071" className="w-full h-full object-cover opacity-30 grayscale" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
           <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight leading-none">
             LES FILMS<br />DANS SA TÊTE
           </h1>
           <p className="text-[#D4AF37] text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold mb-12">
             Association de production audiovisuelle
           </p>
           
           <button onClick={() => scrollTo('projets')} className="group text-white text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 mx-auto border-b border-white/30 pb-2 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
             DÉCOUVRIR NOS PROJETS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
           </button>
        </div>
      </section>

      {/* === PORTFOLIO === */}
      <section id="projets" className="py-32 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-20">
             <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">PORTFOLIO</span>
             <h2 className="font-serif text-5xl text-white">Nos Films</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {/* FILM 1 */}
             <div className="group cursor-pointer">
                <div className="aspect-video w-full bg-[#111] mb-6 overflow-hidden relative border border-white/5">
                   <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-[#D4AF37] transition-colors">Chronologie d’un jugement</h3>
                <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest font-bold">COURT-MÉTRAGE (2025)</p>
                <p className="text-gray-500 text-[9px] uppercase tracking-widest mt-1">RÉALISÉ PAR JOEL MAS</p>
             </div>

             {/* FILM 2 */}
             <div className="group cursor-pointer">
                <div className="aspect-video w-full bg-[#111] mb-6 overflow-hidden relative border border-white/5">
                   <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-[#D4AF37] transition-colors">Un matin</h3>
                <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest font-bold">COURT-MÉTRAGE (2024)</p>
                <p className="text-gray-500 text-[9px] uppercase tracking-widest mt-1">RÉALISÉ PAR JOEL MAS</p>
             </div>

             {/* FILM 3 */}
             <div className="group cursor-pointer">
                <div className="aspect-video w-full bg-[#111] mb-6 overflow-hidden relative border border-white/5">
                   <img src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=2028" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-[#D4AF37] transition-colors">Même pas mal</h3>
                <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest font-bold">COURT-MÉTRAGE (2025)</p>
                <p className="text-gray-500 text-[9px] uppercase tracking-widest mt-1">RÉALISÉ PAR ARMAND RAYAUME</p>
             </div>
          </div>
        </div>
      </section>

      {/* === L'ÉQUIPE === */}
      <section id="lequipe" className="py-32 px-6 bg-black border-t border-white/5">
         <div className="container mx-auto">
            <div className="text-center mb-24 max-w-2xl mx-auto">
               <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">L'ASSOCIATION</span>
               <h2 className="font-serif text-5xl text-white mb-8">L'art de raconter.</h2>
               <p className="text-gray-400 font-light text-sm leading-relaxed">
                 « Les Films Dans Sa Tête » (LFDST) est un collectif de création audiovisuelle né à Paris.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
               {/* JOEL */}
               <div className="text-center group">
                  <div className="w-full aspect-[3/4] bg-[#111] mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden">
                     {/* Placeholder Image */}
                     <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-serif text-white">JOËL MAS</h3>
                  <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mt-2">FONDATEUR & RÉALISATEUR</p>
               </div>

               {/* ARMAND */}
               <div className="text-center group">
                  <div className="w-full aspect-[3/4] bg-[#111] mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden">
                     {/* Placeholder Image */}
                     <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-serif text-white">ARMAND RAYAUME</h3>
                  <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mt-2">CHEF OPÉRATEUR</p>
               </div>

                {/* MYSTERIOUS MEMBER (Pour l'équilibre grid 3) */}
               <div className="text-center group opacity-50">
                  <div className="w-full aspect-[3/4] bg-[#0a0a0a] mb-6 border border-white/5 flex items-center justify-center">
                     <span className="text-[#D4AF37] text-2xl font-serif">?</span>
                  </div>
                  <h3 className="text-xl font-serif text-gray-500">RECRUTEMENT</h3>
                  <p className="text-gray-600 text-[9px] uppercase tracking-widest mt-2">EN COURS</p>
               </div>
            </div>
         </div>
      </section>

      {/* === CONTACT === */}
      <section id="contact" className="py-32 px-6 bg-black border-t border-white/5">
         <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-16">
               <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">CONTACT</span>
               <h2 className="font-serif text-5xl text-white">Parlons projet.</h2>
            </div>

            <form className="space-y-12">
               <div className="grid grid-cols-2 gap-10">
                  <div className="group relative">
                     <input type="text" placeholder="Nom" className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:border-[#D4AF37] transition-colors" />
                  </div>
                  <div className="group relative">
                     <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:border-[#D4AF37] transition-colors" />
                  </div>
               </div>

               <div className="group relative">
                  <textarea rows={4} placeholder="Votre message..." className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:border-[#D4AF37] transition-colors"></textarea>
               </div>

               <button className="w-full border border-white/20 py-4 text-[11px] uppercase tracking-[0.2em] text-white hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300">
                  ENVOYER
               </button>
            </form>

            <div className="mt-20 text-center text-gray-500 text-[10px] tracking-widest leading-loose">
               <p className="hover:text-white transition-colors cursor-pointer">LESFILMSDANSSATETE@GMAIL.COM</p>
               <p>PARIS, FRANCE</p>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-black border-t border-white/5 text-center">
        <p className="text-gray-700 text-[9px] uppercase tracking-widest">© 2025 LFDST. TOUS DROITS RÉSERVÉS.</p>
      </footer>

    </div>
  );
}