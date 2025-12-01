import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// On charge les polices avec les graisses élégantes (Light, Regular, Bold)
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
  title: "LFDST | Production Audiovisuelle",
  description: "Les Films Dans Sa Tête - Association de production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* On applique la police Montserrat par défaut et le fond NOIR (bg-black) */}
      <body className={`${playfair.variable} ${montserrat.variable} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}