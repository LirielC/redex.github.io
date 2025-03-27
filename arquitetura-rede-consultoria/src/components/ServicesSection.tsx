"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  RiServerLine,
  RiShieldKeyholeLine,
  RiWifiLine,
  RiCloudLine,
  RiLineChartLine,
  RiCodeSSlashLine,
  RiArrowRightLine
} from "react-icons/ri";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      }
    })
  };

  const services = [
    {
      icon: <RiServerLine size={24} />,
      title: "Redes Corporativas",
      description: "Projetamos e implementamos redes empresariais completas, incluindo LAN, WAN, e infraestrutura de data center.",
      href: "/servicos/redes-corporativas",
      color: "bg-primary-500"
    },
    {
      icon: <RiShieldKeyholeLine size={24} />,
      title: "Segurança de Rede",
      description: "Soluções de segurança robustas com firewalls, VPNs, detecção de intrusão e proteção avançada contra ameaças.",
      href: "/servicos/seguranca-redes",
      color: "bg-accent-600"
    },
    {
      icon: <RiWifiLine size={24} />,
      title: "Redes Sem Fio",
      description: "Implementação de redes Wi-Fi de alto desempenho com cobertura otimizada para ambientes empresariais.",
      href: "/servicos/redes-sem-fio",
      color: "bg-green-500"
    },
    {
      icon: <RiCloudLine size={24} />,
      title: "Integração em Nuvem",
      description: "Soluções de conectividade e integração segura entre infraestruturas on-premises e ambientes de nuvem.",
      href: "/servicos/nuvem",
      color: "bg-blue-400"
    },
    {
      icon: <RiLineChartLine size={24} />,
      title: "Análise de Desempenho",
      description: "Monitoramento e otimização contínua de desempenho, garantindo eficiência e disponibilidade da rede.",
      href: "/servicos/analise-redes",
      color: "bg-purple-500"
    },
    {
      icon: <RiCodeSSlashLine size={24} />,
      title: "Automação de Rede",
      description: "Implementação de soluções SDN e automação para gerenciamento eficiente e escalável da infraestrutura.",
      href: "/servicos/automacao",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-50 opacity-70"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent-50 opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement type="fade" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
            Nossas Soluções Especializadas
          </h2>
          <p className="text-text-secondary text-lg">
            Oferecemos um conjunto completo de serviços para projetar, implementar e
            otimizar sua infraestrutura de rede com as melhores práticas do mercado.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group"
            >
              <div className="h-full border border-border-light rounded-xl p-6 hover:shadow-card-hover transition-all duration-300 bg-white flex flex-col">
                <div className={`w-12 h-12 rounded-lg text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-5 flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedElement type="slide-up" delay={0.6} className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="font-medium">
            <Link href="/servicos" className="gap-2">
              Ver Todos os Serviços
              <RiArrowRightLine />
            </Link>
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
}
