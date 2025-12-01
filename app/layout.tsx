import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Les Films Dans Sa Tête",
  description: "Association de production audiovisuelle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${playfair.variable} ${montserrat.variable} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}