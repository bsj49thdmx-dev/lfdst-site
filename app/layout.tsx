import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  title: "Les Films Dans Sa Tête",
  description: "Production Audiovisuelle",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${montserrat.variable} bg-black text-white antialiased`}>
        
        {/* --- NAVIGATION FIXE --- */}
        <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10 h-20 flex items-center">
          <div className="container mx-auto px-6 flex justify-between items-center">
            
            {/* LOGO */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="h-8 w-[1px] bg-gold rotate-12 group-hover:rotate-0 transition-transform duration-500"></div>
              <span className="font-serif text-xl font-bold tracking-widest text-white group-hover:text-gold transition-colors">LFDST</span>
            </Link>

            {/* ONGLETS (VRAIS LIENS) */}
            <div className="hidden md:flex gap-10">
              <Link href="/projets" className="text-[11px] uppercase tracking-[0.25em] font-medium text-gray-400 hover:text-gold transition-colors py-2">Projets</Link>
              <Link href="/lequipe" className="text-[11px] uppercase tracking-[0.25em] font-medium text-gray-400 hover:text-gold transition-colors py-2">L'Équipe</Link>
              <Link href="/contact" className="text-[11px] uppercase tracking-[0.25em] font-medium text-gray-400 hover:text-gold transition-colors py-2">Contact</Link>
            </div>

            {/* BOUTON */}
            <Link href="/contact" className="hidden md:block border border-white/20 px-6 py-2 rounded-full text-[10px] uppercase tracking-widest hover:bg-gold hover:text-black hover:border-gold transition-all">
              Adhésion
            </Link>
          </div>
        </nav>

        {/* CONTENU DES PAGES */}
        <div className="pt-20">
          {children}
        </div>

      </body>
    </html>
  );
}