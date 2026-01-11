import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Fonte Inter (Padrão profissional)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ryan Vitor | Desenvolvedor Full Stack",
  description:
    "Portfólio de Ryan Vitor Silva Cerqueira. Desenvolvedor Full Stack especializado em Python (Django), React e Next.js.",
  keywords: [
    "Desenvolvedor Full Stack",
    "Python",
    "Django",
    "React",
    "Next.js",
    "Portfólio",
    "Programador",
  ],
  authors: [{ name: "Ryan Vitor" }],
  creator: "Ryan Vitor",
  openGraph: {
    title: "Ryan Vitor | Desenvolvedor Full Stack",
    description:
      "Transformando ideias complexas em software escalável e interfaces modernas.",
    url: "https://portfolio-ryan.vercel.app",
    siteName: "Portfólio Ryan Vitor",
    images: [
      {
        url: "/img/perfil.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#030712] text-white antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
