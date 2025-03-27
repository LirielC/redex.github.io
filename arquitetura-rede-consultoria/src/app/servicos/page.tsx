"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/motion";
import { motion } from "framer-motion";
import {
  RiServerLine,
  RiShieldKeyholeLine,
  RiWifiLine,
  RiCloudLine,
  RiLineChartLine,
  RiCodeSSlashLine,
  RiArrowRightLine,
  RiCheckLine,
  RiArrowRightUpLine,
  RiAlertLine,
  RiToolsLine,
  RiCheckboxCircleLine
} from "react-icons/ri";

export default function ServicesPage() {
  const services = [
    {
      icon: <RiServerLine className="text-white" size={28} />,
      iconBg: "bg-primary-500",
      title: "Redes Corporativas",
      description: "Projetamos e implementamos infraestruturas de rede corporativas de alto desempenho, incluindo LANs, WANs, e redes de campus.",
      features: [
        "Design e implementação de redes",
        "Atualização de infraestrutura existente",
        "Migração de equipamentos legados",
        "Documentação e padronização"
      ],
      href: "/servicos/redes-corporativas"
    },
    {
      icon: <RiShieldKeyholeLine className="text-white" size={28} />,
      iconBg: "bg-accent-600",
      title: "Segurança de Rede",
      description: "Proteja sua infraestrutura contra ameaças cibernéticas com nossas soluções avançadas de segurança de rede.",
      features: [
        "Firewalls de próxima geração",
        "VPNs e acesso remoto seguro",
        "Detecção e prevenção de intrusões",
        "Criptografia e segmentação de rede"
      ],
      href: "/servicos/seguranca-redes"
    },
    {
      icon: <RiWifiLine className="text-white" size={28} />,
      iconBg: "bg-green-500",
      title: "Redes Sem Fio",
      description: "Implantamos soluções WiFi empresariais de alto desempenho com cobertura otimizada e gerenciamento centralizado.",
      features: [
        "Site surveys e planejamento de RF",
        "Implementação de WLANs corporativas",
        "Otimização de cobertura e capacidade",
        "Segurança em redes wireless"
      ],
      href: "/servicos/redes-sem-fio"
    },
    {
      icon: <RiCloudLine className="text-white" size={28} />,
      iconBg: "bg-blue-500",
      title: "Integração em Nuvem",
      description: "Conecte ambientes on-premises com plataformas de nuvem de forma segura e eficiente.",
      features: [
        "Conectividade híbrida segura",
        "Migração para a nuvem",
        "SD-WAN e otimização de tráfego",
        "Gerenciamento de multicloud"
      ],
      href: "/servicos/nuvem"
    },
    {
      icon: <RiLineChartLine className="text-white" size={28} />,
      iconBg: "bg-purple-500",
      title: "Análise de Desempenho",
      description: "Monitoramento contínuo e análise de desempenho para garantir operação eficiente e identificar gargalos.",
      features: [
        "Monitoramento e alertas em tempo real",
        "Análise de tráfego e largura de banda",
        "Otimização de desempenho",
        "Relatórios periódicos e dashboards"
      ],
      href: "/servicos/analise-redes"
    },
    {
      icon: <RiCodeSSlashLine className="text-white" size={28} />,
      iconBg: "bg-orange-500",
      title: "Automação de Rede",
      description: "Implemente soluções de automação para simplificar operações e reduzir erros humanos.",
      features: [
        "Redes definidas por software (SDN)",
        "Automação de configuração",
        "Orquestração de infraestrutura",
        "DevOps para redes"
      ],
      href: "/servicos/automacao"
    }
  ];

  const processSteps = [
    {
      icon: <RiAlertLine />,
      number: "01",
      title: "Diagnóstico e Planejamento",
      description: "Analisamos sua infraestrutura atual e necessidades para desenvolver um plano detalhado."
    },
    {
      icon: <RiToolsLine />,
      number: "02",
      title: "Design e Implementação",
      description: "Projetamos a solução ideal e a implementamos com mínimo impacto nas operações."
    },
    {
      icon: <RiCheckboxCircleLine />,
      number: "03",
      title: "Validação e Suporte",
      description: "Testamos exaustivamente a solução implementada e oferecemos suporte contínuo."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
                Nossas Soluções
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5">Nossos Serviços</h1>
              <p className="text-lg text-text-secondary mb-8">
                Oferecemos soluções completas em arquitetura de redes, desde o projeto
                até a implementação e manutenção contínua.
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* Serviços Principais */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedElement key={service.title} type="slide-up" delay={0.1 * index}>
                  <div className="h-full border border-border-light rounded-xl p-8 hover:shadow-card-hover transition-all duration-300 bg-white flex flex-col">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${service.iconBg}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary mb-6">
                      {service.description}
                    </p>

                    <div className="mt-auto space-y-6">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <RiCheckLine className="text-success-500 mt-1 flex-shrink-0" />
                            <span className="text-text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* Metodologia */}
        <section className="py-20 bg-background-tertiary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
                Nossa Abordagem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
                Metodologia de Trabalho
              </h2>
              <p className="text-text-secondary">
                Seguimos um processo estruturado para garantir que cada projeto seja entregue
                com excelência, dentro do prazo e do orçamento.
              </p>
            </AnimatedElement>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                  <AnimatedElement key={step.number} type="slide-up" delay={0.2 * index}>
                    <div className="bg-white p-8 rounded-xl shadow-elegant border border-border-light hover:shadow-card-hover transition-all duration-300 h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                          {step.number}
                        </div>
                        <div className="text-primary-600 w-10 h-10 flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold text-xl text-text-primary mb-3">{step.title}</h3>
                      <p className="text-text-secondary">{step.description}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua infraestrutura de rede?</h2>
              <p className="text-xl opacity-90 mb-8">
                Entre em contato com nossa equipe para uma consultoria inicial gratuita
                e conheça como podemos ajudar sua empresa.
              </p>
              <Button asChild size="lg" variant="secondary" className="font-medium text-primary-600">
                <Link href="/contato" className="gap-2">
                  Agendar Consultoria
                  <RiArrowRightUpLine />
                </Link>
              </Button>
            </AnimatedElement>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
