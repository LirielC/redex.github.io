"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiCheckboxCircleLine, RiShieldLine, RiTimeLine } from "react-icons/ri";
import { AnimatedElement, AnimatedText } from "./ui/motion";
import { useEffect, useState } from "react";
import { stagger, useAnimate } from "framer-motion";

export default function Hero() {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    if (isVisible) {
      const networkAnimation = async () => {
        await animate(
          ".network-node",
          { opacity: [0, 1] },
          { duration: 0.5, delay: stagger(0.1) }
        );

        await animate(
          ".network-line",
          { opacity: [0, 0.2, 0.5], pathLength: [0, 1] },
          { duration: 0.6, delay: stagger(0.2) }
        );
      };

      networkAnimation();
    }
  }, [animate, isVisible]);

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-background-secondary">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern bg-no-repeat bg-center opacity-30"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/2 -left-64 w-96 h-96 bg-primary-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-1/4 -right-44 w-80 h-80 bg-accent-400 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-600">
              <span className="mr-1.5 h-2 w-2 animate-pulse rounded-full bg-primary-500"></span>
              Arquitetura de Redes de Excelência
            </div>

            <AnimatedText
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight"
              once
              staggerChildren={0.01}
            >
              Arquitetura de Redes com Excelência e Inovação
            </AnimatedText>

            <AnimatedElement
              type="slide-up"
              delay={0.3}
              className="text-lg md:text-xl text-text-secondary mb-8 max-w-xl"
            >
              Soluções completas em design, implementação e otimização de infraestrutura de redes
              para empresas que buscam eficiência, segurança e escalabilidade.
            </AnimatedElement>

            <AnimatedElement type="slide-up" delay={0.5} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/servicos">
                  Conheça Nossos Serviços
                  <RiArrowRightLine />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contato">Agende uma Consultoria</Link>
              </Button>
            </AnimatedElement>

            {/* Key Benefits */}
            <AnimatedElement
              type="slide-up"
              delay={0.7}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-1.5 bg-primary-500/10 text-primary-500 rounded-lg">
                  <RiShieldLine size={22} />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Infraestrutura Robusta</h3>
                  <p className="text-text-tertiary text-sm">Redes empresariais de alta disponibilidade</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-1.5 bg-primary-500/10 text-primary-500 rounded-lg">
                  <RiCheckboxCircleLine size={22} />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Segurança Avançada</h3>
                  <p className="text-text-tertiary text-sm">Proteção completa de dados</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-1.5 bg-primary-500/10 text-primary-500 rounded-lg">
                  <RiTimeLine size={22} />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Escalabilidade</h3>
                  <p className="text-text-tertiary text-sm">Soluções que crescem com sua empresa</p>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Network Visualization */}
          <AnimatedElement
            className="hidden lg:block relative"
            type="fade"
            delay={0.4}
          >
            <div
              ref={scope}
              className="w-full h-[500px] relative rounded-2xl overflow-hidden bg-white/50 shadow-elegant p-4"
            >
              <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Network lines */}
                <path
                  d="M250 120 L150 230 L250 380 L350 230 L250 120"
                  className="network-line"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0"
                  strokeLinecap="round"
                />
                <path
                  d="M150 230 L80 300"
                  className="network-line"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0"
                  strokeLinecap="round"
                />
                <path
                  d="M350 230 L420 300"
                  className="network-line"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0"
                  strokeLinecap="round"
                />
                <path
                  d="M250 380 L180 440"
                  className="network-line"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0"
                  strokeLinecap="round"
                />
                <path
                  d="M250 380 L320 440"
                  className="network-line"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0"
                  strokeLinecap="round"
                />

                {/* Network nodes */}
                <circle
                  cx="250"
                  cy="120"
                  r="30"
                  fill="#EEF5FF"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  className="network-node"
                  opacity="0"
                />
                <circle
                  cx="150"
                  cy="230"
                  r="25"
                  fill="#EEF5FF"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  className="network-node"
                  opacity="0"
                />
                <circle
                  cx="350"
                  cy="230"
                  r="25"
                  fill="#EEF5FF"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  className="network-node"
                  opacity="0"
                />
                <circle
                  cx="250"
                  cy="380"
                  r="30"
                  fill="#EEF5FF"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  className="network-node"
                  opacity="0"
                />
                <circle
                  cx="80"
                  cy="300"
                  r="20"
                  fill="#EEF5FF"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  className="network-node"
                  opacity="0"
                />
                <circle
                  cx="420"
                  cy="300"
                  r="20"
                  fill="#EEF5FF"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  className="network-node"
                  opacity="0"
                />
                <circle
                  cx="180"
                  cy="440"
                  r="20"
                  fill="#EEF5FF"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  className="network-node"
                  opacity="0"
                />
                <circle
                  cx="320"
                  cy="440"
                  r="20"
                  fill="#EEF5FF"
                  stroke="#2B6DFA"
                  strokeWidth="2"
                  className="network-node"
                  opacity="0"
                />

                {/* Labels */}
                <text x="250" y="125" textAnchor="middle" fill="#2B6DFA" className="network-node" opacity="0" fontSize="12">Gateway</text>
                <text x="150" y="235" textAnchor="middle" fill="#2B6DFA" className="network-node" opacity="0" fontSize="10">Router</text>
                <text x="350" y="235" textAnchor="middle" fill="#2B6DFA" className="network-node" opacity="0" fontSize="10">Switch</text>
                <text x="250" y="385" textAnchor="middle" fill="#2B6DFA" className="network-node" opacity="0" fontSize="12">Server</text>
              </svg>

              {/* Floating card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-elegant-lg p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-success-500"></span>
                  <span className="text-text-primary font-semibold text-sm">99.9% Uptime</span>
                </div>
                <p className="text-xs text-text-tertiary">Monitoramento 24/7 para garantir a disponibilidade da sua rede.</p>
              </motion.div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg className="relative block w-full h-12 md:h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#ffffff"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#ffffff"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
