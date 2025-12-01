import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Les Films Dans Sa Tête | Production Audiovisuelle",
  description: "Association et société de production audiovisuelle fondée par Joël Mas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${playfair.variable} ${montserrat.variable} bg-background text-text-main antialiased selection:bg-gold selection:text-black overflow-x-hidden`}>
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-grain mix-blend-overlay"></div>
        {children}
      </body>
    </html>
  );
}