import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NetArchitect - Consultoria em Arquitetura de Redes",
  description: "Soluções completas em design, implementação e otimização de infraestrutura de redes para empresas que buscam eficiência, segurança e escalabilidade.",
  keywords: [
    "arquitetura de redes",
    "consultoria de redes",
    "infraestrutura de TI",
    "redes corporativas",
    "segurança de redes",
    "redes sem fio",
    "consultoria em TI"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
