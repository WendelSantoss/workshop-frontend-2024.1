import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/componentes/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desafio Netflix - FDS",
  description: "Desafio da Fábrica de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
        <Header/>
        
        {children}
        
      </body>
    
    </html>
  );
}
