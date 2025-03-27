"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RiShieldCheckLine,
  RiSpeedLine,
  RiSettings4Line,
  RiLineChartLine,
  RiCheckLine,
  RiArrowRightLine
} from "react-icons/ri";

export default function RedesCorporativasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
                Serviços
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5">
                Redes Corporativas
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Soluções completas em infraestrutura de rede para empresas, garantindo alta disponibilidade, 
                segurança e performance para seu negócio.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/contato">
                  Solicitar Consultoria
                  <RiArrowRightLine />
                </Link>
              </Button>
            </AnimatedElement>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Por que escolher nossa solução?
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Oferecemos um serviço completo de planejamento, implementação e manutenção 
                de redes corporativas, adaptado às necessidades do seu negócio.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedElement type="slide-up" delay={0.1}>
                <BenefitCard
                  icon={<RiShieldCheckLine size={32} />}
                  title="Segurança Avançada"
                  description="Proteção robusta contra ameaças e controle de acesso granular para seus dados."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <BenefitCard
                  icon={<RiSpeedLine size={32} />}
                  title="Alta Performance"
                  description="Redes otimizadas para máximo desempenho e mínima latência."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <BenefitCard
                  icon={<RiSettings4Line size={32} />}
                  title="Escalabilidade"
                  description="Infraestrutura flexível que cresce junto com sua empresa."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.4}>
                <BenefitCard
                  icon={<RiLineChartLine size={32} />}
                  title="Monitoramento 24/7"
                  description="Acompanhamento em tempo real do desempenho da sua rede."
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Serviços Detalhados */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Nossos Serviços em Redes Corporativas
              </h2>
              <p className="text-text-secondary">
                Soluções completas para atender todas as necessidades da sua infraestrutura de rede.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedElement type="slide-right">
                <ServiceCard
                  title="Projeto e Implementação"
                  features={[
                    "Análise de requisitos e planejamento",
                    "Dimensionamento de infraestrutura",
                    "Implementação de redes LAN/WAN",
                    "Configuração de equipamentos",
                    "Documentação técnica completa"
                  ]}
                />
              </AnimatedElement>

              <AnimatedElement type="slide-left">
                <ServiceCard
                  title="Gestão e Manutenção"
                  features={[
                    "Monitoramento proativo",
                    "Suporte técnico especializado",
                    "Manutenção preventiva",
                    "Atualizações de segurança",
                    "Relatórios de desempenho"
                  ]}
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Pronto para modernizar sua rede corporativa?
              </h2>
              <p className="text-text-secondary mb-8">
                Entre em contato conosco para uma avaliação gratuita das necessidades da sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contato">
                    Solicitar Orçamento
                    <RiArrowRightLine />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projetos">
                    Ver Projetos
                  </Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function BenefitCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-elegant border border-border-light hover:shadow-card-hover transition-all duration-300">
      <div className="text-primary-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}

function ServiceCard({
  title,
  features
}: {
  title: string;
  features: string[];
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-elegant border border-border-light hover:shadow-card-hover transition-all duration-300">
      <h3 className="text-xl font-semibold text-text-primary mb-6">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-primary-500 mt-1">
              <RiCheckLine size={18} />
            </span>
            <span className="text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 