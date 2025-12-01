"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight, Instagram, ChevronDown } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    title: "Chronologie d’un jugement",
    category: "Court-métrage (2025)",
    desc: "Une introspection en noir et blanc sur la justice.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Un matin",
    category: "Court-métrage (2024)",
    desc: "L'aube d'une nouvelle ère narrative.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Nuit Blanche Taipei",
    category: "Institutionnel",
    desc: "Vidéo officielle pour le Bureau Français.",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=2028&auto=format&fit=crop",
  },
];

const SERVICES = [
  { title: "Production Complète", desc: "De l'écriture au montage final." },
  { title: "Clips Musicaux", desc: "Identité visuelle forte pour artistes." },
  { title: "Institutionnel", desc: "Publicités et vidéos promotionnelles." },
  { title: "Direction Artistique", desc: "Consulting et accompagnement." },
];

const SectionTitle = ({ children, subtitle }: { children: string, subtitle?: string }) => (
  <div className="mb-12 md:mb-20">
    {subtitle && <span className="text-gold uppercase tracking-[0.2em] text-xs font-sans font-bold mb-2 block">{subtitle}</span>}
    <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
      {children}
    </h2>
    <div className="h-1 w-20 bg-gold mt-6"></div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md py-4" : "bg-transparent py-8"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-serif text-2xl font-bold tracking-tighter text-white">
          LFDST<span className="text-gold">.</span>
        </div>
        <div className="hidden md:flex gap-8 font-sans text-sm tracking-widest uppercase">
          {["Projets", "Services", "L'Équipe", "Adhésion", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="hover:text-gold transition-colors">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="border border-white/20 px-6 py-2 rounded-full text-sm font-sans hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
          Proposer un projet
        </a>
      </div>
    </nav>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="bg-background min-h-screen text-text-main font-sans selection:bg-gold selection:text-black">
      <Navbar />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-white"
          >
            LFDST
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-3xl font-light font-serif italic text-white/90 mb-8"
          >
            « Créer des images qui restent. »
          </motion.p>
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8, duration: 1 }}
             className="flex flex-col items-center gap-4"
          >
            <p className="max-w-xl mx-auto text-sm md:text-base text-gray-400 mb-8 leading-relaxed">
              Association et société de production audiovisuelle fondée par Joël Mas. 
              Dédiée aux films, clips et créations visuelles à forte identité.
            </p>
            <a href="#projets" className="group flex items-center gap-2 text-white border-b border-gold pb-1 hover:text-gold transition-colors">
              Découvrir nos projets <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown />
        </motion.div>
      </section>

      <section id="lequipe" className="py-24 md:py-32 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] overflow-hidden group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop" 
              alt="Joël Mas" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-2xl font-serif text-white">Joël Mas</h3>
              <p className="text-gold text-sm font-sans tracking-widest">FONDATEUR & RÉALISATEUR</p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <SectionTitle subtitle="L'ASSOCIATION">L'art de raconter.</SectionTitle>
            <p className="text-gray-400 mb-6 leading-relaxed font-light text-lg">
              <strong className="text-white">« Les Films Dans Sa Tête »</strong> (LFDST) est un collectif de création audiovisuelle né à Paris.
              Nous produisons des courts-métrages, clips et contenus narratifs avec une obsession : l'émotion.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
              Nous mettons en lumière les talents émergents et accompagnons chaque projet de l’écriture à la diffusion. 
              Notre esprit : cinéma d’auteur moderne, contrastes forts, ambiance élégante.
            </p>
            <div className="space-y-4 border-l border-white/10 pl-6 mt-12">
              <div>
                <h4 className="text-white font-serif text-xl">Armand Rayaume</h4>
                <p className="text-gray-500 text-sm">Chef Opérateur / Collaborateur</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projets" className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="PORTFOLIO">Nos Dernières Créations</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden mb-4 bg-black">
                  <Image src={project.image} alt={project.title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-4 h-4 fill-white" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-4 group-hover:border-gold transition-colors duration-300">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-1">{project.title}</h3>
                    <p className="text-xs text-gold uppercase tracking-widest">{project.category}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-2 font-light">{project.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button className="px-8 py-3 border border-white text-white font-sans hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest uppercase">
              Voir tout le catalogue
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 container mx-auto px-6">
         <SectionTitle subtitle="SAVOIR-FAIRE">Services & Expertises</SectionTitle>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
               <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/5 hover:border-gold/30 hover:bg-white/5 transition-all duration-300 group"
               >
                 <div className="w-2 h-2 bg-gold mb-6 rounded-full group-hover:w-4 transition-all" />
                 <h3 className="text-xl font-serif text-white mb-3">{service.title}</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
               </motion.div>
            ))}
         </div>
      </section>

      <section id="adhesion" className="py-24 bg-gold/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Rejoindre LFDST</h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8 font-light">
            Devenez membre de l'association, accédez au groupe WhatsApp exclusif, participez à nos ateliers et rejoignez nos équipes de tournage.
          </p>
          <a href="#" className="inline-block bg-gold text-black px-8 py-4 font-sans font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300">
            Devenir Adhérent
          </a>
        </div>
      </section>

      <section id="contact" className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                 <SectionTitle>Démarrons un projet.</SectionTitle>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div>
                        <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Email</h4>
                        <a href="mailto:lesfilmsdanssatete@gmail.com" className="text-2xl font-serif text-white hover:text-gold transition-colors">lesfilmsdanssatete@gmail.com</a>
                    </div>
                    <div>
                        <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Social</h4>
                        <a href="#" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
                            <Instagram className="w-5 h-5" /> @lesfilmsdanssatete
                        </a>
                    </div>
                </div>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <input type="text" placeholder="Nom" className="bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-gray-600" />
                        <input type="text" placeholder="Email" className="bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-gray-600" />
                    </div>
                    <textarea rows={4} placeholder="Parlez-nous de votre projet..." className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-gray-600" />
                    <button className="w-full bg-white/5 border border-white/10 text-white py-4 font-sans uppercase tracking-widest text-sm hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                        Envoyer le message
                    </button>
                </form>
            </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-12 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Les Films Dans Sa Tête. Tous droits réservés.
          </div>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-gold">Mentions Légales</a>
            <a href="#" className="hover:text-gold">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}