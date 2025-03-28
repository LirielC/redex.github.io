"use client";

import Link from "next/link";
import { AnimatedElement } from "@/components/ui/motion";
import {
  RiLinkedinFill,
  RiTwitterXFill,
  RiFacebookFill,
  RiInstagramLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiArrowRightSLine,
  RiTimeLine,
  RiComputerLine,
  RiShieldLine,
  RiWifiLine,
  RiCloudLine,
  RiRocketLine,
  RiHeartLine
} from "react-icons/ri";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Projetos", href: "/projetos" },
    { name: "Sobre", href: "/sobre" },
    { name: "FAQ", href: "/faq" },
    { name: "Contato", href: "/contato" },
  ];

  const services = [
    { name: "Redes Corporativas", href: "/servicos/redes-corporativas", icon: <RiComputerLine /> },
    { name: "Segurança de Redes", href: "/servicos/seguranca-redes", icon: <RiShieldLine /> },
    { name: "Redes Sem Fio", href: "/servicos/redes-sem-fio", icon: <RiWifiLine /> },
    { name: "Integração em Nuvem", href: "/servicos/nuvem", icon: <RiCloudLine /> },
    { name: "Automação de Rede", href: "/servicos/automacao", icon: <RiRocketLine /> },
  ];

  return (
    <footer className="bg-dark-950 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter section */}
        <div className="bg-gradient-primary rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden">
          {/* Background circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-white/5 rounded-full blur-xl"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold mb-3">Receba nossas novidades</h3>
              <p className="text-white/80">
                Inscreva-se para receber dicas, novidades e conteúdos exclusivos sobre arquitetura de redes.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-text-primary"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-gray-100 text-primary-600 font-medium px-5 py-3 rounded-r-lg transition-colors"
                >
                  Inscrever
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          <AnimatedElement type="fade" delay={0.1}>
            <div>
              <h3 className="font-bold text-xl mb-6">NetArchitect</h3>
              <p className="text-gray-400 mb-6 max-w-xs">
                Soluções completas em arquitetura de redes, garantindo eficiência,
                segurança e escalabilidade para seu negócio.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={<RiLinkedinFill />} href="https://linkedin.com" />
                <SocialIcon icon={<RiTwitterXFill />} href="https://twitter.com" />
                <SocialIcon icon={<RiFacebookFill />} href="https://facebook.com" />
                <SocialIcon icon={<RiInstagramLine />} href="https://instagram.com" />
              </div>

              <div className="mt-8 flex items-center gap-2 text-primary-400">
                <RiHeartLine />
                <span className="text-sm">Excelência em cada conexão</span>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement type="fade" delay={0.2}>
            <div>
              <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name} className="group">
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <RiArrowRightSLine className="invisible group-hover:visible text-primary-500" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>

          <AnimatedElement type="fade" delay={0.3}>
            <div>
              <h4 className="font-bold text-lg mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name} className="group">
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span className="text-primary-500">{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>

          <AnimatedElement type="fade" delay={0.4}>
            <div>
              <h4 className="font-bold text-lg mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <RiMapPinLine className="text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">
                    Av. Mendanha, 1000, 15º andar, Rio de Janeiro - RJ, 23010-100
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <RiMailLine className="text-primary-500 flex-shrink-0" />
                  <a href="mailto:contato@netarchitect.com.br" className="text-gray-400 hover:text-white">
                    contato@netarchitect.com.br
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <RiPhoneLine className="text-primary-500 flex-shrink-0" />
                  <a href="tel:+551198765-4321" className="text-gray-400 hover:text-white">
                    +55 (21) 98765-4321
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <RiTimeLine className="text-primary-500 flex-shrink-0" />
                  <span className="text-gray-400">
                    Segunda a Sexta: 9h às 18h
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedElement>
        </div>

        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} NetArchitect. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/termos" className="text-gray-400 hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-dark-800 hover:bg-primary-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
      aria-label="Siga-nos nas redes sociais"
    >
      {icon}
    </a>
  );
}
