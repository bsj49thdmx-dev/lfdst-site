export default function Equipe() {
  return (
    <div className="min-h-screen bg-black px-6 py-20 flex flex-col items-center">
      <div className="max-w-3xl text-center mb-20">
        <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">L'ASSOCIATION</span>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-8">L'art de raconter.</h1>
        <p className="text-gray-400 font-light text-sm leading-8">
          « Les Films Dans Sa Tête » (LFDST) est un collectif de création audiovisuelle né à Paris.
          Nous mettons en lumière les talents émergents et accompagnons chaque projet de l’écriture à la diffusion.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-4xl w-full">
        {/* Membre 1 */}
        <div className="text-center">
          <div className="w-60 h-80 bg-[#111] mx-auto mb-6 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Photo Placeholder */}
             <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-serif text-white">JOËL MAS</h3>
          <p className="text-gold text-[10px] uppercase tracking-widest mt-2">Fondateur</p>
        </div>

        {/* Membre 2 */}
        <div className="text-center">
          <div className="w-60 h-80 bg-[#111] mx-auto mb-6 grayscale hover:grayscale-0 transition-all duration-500">
             <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-serif text-white">ARMAND RAYAUME</h3>
          <p className="text-gold text-[10px] uppercase tracking-widest mt-2">Chef Opérateur</p>
        </div>
      </div>
    </div>
  );
}