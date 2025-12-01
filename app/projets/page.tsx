import Image from "next/image";

const projects = [
  { title: "Chronologie d'un jugement", cat: "Court-métrage", year: "2025", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059" },
  { title: "Un matin", cat: "Court-métrage", year: "2024", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025" },
  { title: "Même pas mal", cat: "Court-métrage", year: "2025", img: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=2028" },
  { title: "D-12", cat: "En Production", year: "2026", img: "https://images.unsplash.com/photo-1596727147705-54a71280dd20?q=80&w=2000" },
];

export default function Projets() {
  return (
    <div className="min-h-screen bg-black px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h1 className="font-serif text-4xl text-white mb-16 text-center">Nos Réalisations</h1>
        
        {/* GRILLE : Images plus petites, format carte */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Conteneur Image avec taille maîtrisée */}
              <div className="relative aspect-video bg-[#111] border border-white/10 overflow-hidden mb-4">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              
              <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors">{p.title}</h3>
                <span className="text-gold text-[10px] font-bold">{p.year}</span>
              </div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-2">{p.cat}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}