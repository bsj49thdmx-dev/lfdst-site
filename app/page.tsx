import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-black">
      {/* Fond avec grain cinéma */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')] bg-cover bg-center grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight leading-none">
          LES FILMS<br /><span className="text-gray-500">DANS SA TÊTE</span>
        </h1>
        
        <div className="w-16 h-[1px] bg-gold mx-auto mb-8"></div>

        <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-bold mb-12">
          Association de production audiovisuelle
        </p>
        
        <Link href="/projets" className="group inline-flex items-center gap-3 text-white text-[11px] uppercase tracking-[0.2em] border-b border-white/30 pb-2 hover:border-gold hover:text-gold transition-all">
          Voir le portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
        </Link>
      </div>
    </main>
  );
}