"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiMenuLine,
  RiCloseLine,
  RiArrowRightUpLine,
  RiArrowDownSLine,
  RiHome4Line,
  RiGroupLine,
  RiFileList3Line,
  RiChat3Line,
  RiQuestionLine
} from "react-icons/ri";

// Animações
const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Tipos para navegação
type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: "Início",
    href: "/",
    icon: <RiHome4Line />
  },
  {
    label: "Serviços",
    href: "/servicos",
    icon: <RiFileList3Line />,
    children: [
      { label: "Redes Corporativas", href: "/servicos/redes-corporativas" },
      { label: "Segurança de Redes", href: "/servicos/seguranca-redes" },
      { label: "Redes Sem Fio", href: "/servicos/redes-sem-fio" },
      { label: "Integração em Nuvem", href: "/servicos/nuvem" },
      { label: "Análise de Desempenho", href: "/servicos/analise-redes" },
      { label: "Automação de Rede", href: "/servicos/automacao" }
    ]
  },
  {
    label: "Sobre Nós",
    href: "/sobre",
    icon: <RiGroupLine />,
    children: [
      { label: "Nossa História", href: "/sobre#historia" },
      { label: "Equipe", href: "/sobre#equipe" },
      { label: "Certificações", href: "/sobre#certificacoes" }
    ]
  },
  {
    label: "Projetos",
    href: "/projetos",
    icon: <RiFileList3Line />
  },
  {
    label: "FAQ",
    href: "/faq",
    icon: <RiQuestionLine />
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Controla o efeito de scroll do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu mobile quando uma rota muda
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_8px_rgba(20,32,88,0.06)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="relative z-20 flex items-center gap-2"
        >
          <span className="text-primary-500 font-bold text-xl sm:text-2xl">
            NetArchitect
          </span>
          {!isScrolled && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden md:inline-block px-2 py-1 text-xs font-medium bg-primary-500/10 rounded-full text-primary-600"
            >
              Consultoria
            </motion.span>
          )}
        </Link>

        {/* Menu desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative group"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => item.children && setActiveDropdown(null)}
            >
              <div
                className="flex items-center gap-1 px-4 py-6 -my-4 text-text-secondary hover:text-primary-500 transition-colors cursor-pointer"
              >
                <Link href={item.href} className="font-medium">
                  {item.label}
                </Link>
                {item.children && <RiArrowDownSLine className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </div>

              {/* Dropdown para items com subitems */}
              {item.children && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={menuVariants}
                      className="absolute top-[calc(100%-8px)] left-0 bg-white rounded-md shadow-lg py-2 min-w-[220px] border border-border-light"
                    >
                      <div className="absolute top-0 left-0 right-0 h-4 -translate-y-full" />
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-text-secondary hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}

          <div className="ml-4">
            <Button asChild size="sm" className="gap-1 font-medium">
              <Link href="/contato">
                Fale Conosco
                <RiArrowRightUpLine />
              </Link>
            </Button>
          </div>
        </nav>

        {/* Botão Menu Mobile */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden relative z-20 text-primary-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isMenuOpen ? (
            <RiCloseLine size={28} />
          ) : (
            <RiMenuLine size={28} />
          )}
        </motion.button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="fixed inset-0 top-[72px] bg-white z-10 pt-4 pb-6 lg:hidden overflow-y-auto"
          >
            <div className="container mx-auto px-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-b-0">
                  {item.children ? (
                    <div className="flex flex-col">
                      <div
                        className="flex items-center justify-between py-4 w-full"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon && <span className="text-primary-500">{item.icon}</span>}
                          <span className="font-medium text-text-primary">{item.label}</span>
                        </div>
                        <RiArrowDownSLine
                          className={`text-lg transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                        />
                      </div>

                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-8 mb-2 border-l-2 border-primary-100 pl-4"
                          >
                            {item.children.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="block py-3 text-text-secondary hover:text-primary-500"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 py-4 text-text-primary hover:text-primary-500"
                    >
                      {item.icon && <span className="text-primary-500">{item.icon}</span>}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-6">
                <Button asChild className="w-full gap-2 justify-center">
                  <Link href="/contato">
                    <RiChat3Line />
                    Fale Conosco
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
