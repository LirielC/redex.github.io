"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RiWifiLine,
  RiSignalTowerLine,
  RiSpeedLine,
  RiShieldLine,
  RiCheckLine,
  RiArrowRightLine,
  RiDashboardLine,
  RiMapLine
} from "react-icons/ri";

export default function RedesSemFioPage() {
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
                Redes Sem Fio
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Soluções Wi-Fi empresariais de alta performance para conectividade 
                confiável e segura em toda sua organização.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/contato">
                  Solicitar Projeto
                  <RiArrowRightLine />
                </Link>
              </Button>
            </AnimatedElement>
          </div>
        </section>

        {/* Recursos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Recursos Avançados
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Oferecemos soluções Wi-Fi corporativas com os recursos mais modernos 
                do mercado para garantir a melhor experiência aos seus usuários.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedElement type="slide-up" delay={0.1}>
                <FeatureCard
                  icon={<RiSignalTowerLine size={32} />}
                  title="Cobertura Total"
                  description="Análise de ambiente e posicionamento estratégico para cobertura sem pontos cegos."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <FeatureCard
                  icon={<RiSpeedLine size={32} />}
                  title="Alta Velocidade"
                  description="Suporte aos padrões mais recentes (Wi-Fi 6/6E) para máxima performance."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <FeatureCard
                  icon={<RiShieldLine size={32} />}
                  title="Segurança"
                  description="Criptografia avançada e isolamento de redes para proteção dos dados."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.4}>
                <FeatureCard
                  icon={<RiDashboardLine size={32} />}
                  title="Gestão Centralizada"
                  description="Controle unificado de toda a infraestrutura wireless da sua empresa."
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Soluções */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Nossas Soluções Wi-Fi
              </h2>
              <p className="text-text-secondary">
                Desenvolvemos projetos completos de redes sem fio para diferentes cenários e necessidades.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedElement type="slide-right">
                <SolutionCard
                  title="Projeto e Implementação"
                  features={[
                    "Site survey e análise de ambiente",
                    "Dimensionamento de equipamentos",
                    "Configuração de controladores Wi-Fi",
                    "Integração com infraestrutura existente",
                    "Otimização de canais e potência"
                  ]}
                />
              </AnimatedElement>

              <AnimatedElement type="slide-left">
                <SolutionCard
                  title="Gerenciamento e Suporte"
                  features={[
                    "Monitoramento de desempenho",
                    "Análise de interferências",
                    "Ajustes de configuração",
                    "Suporte técnico especializado",
                    "Relatórios de utilização"
                  ]}
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Aplicações */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Aplicações
              </h2>
              <p className="text-text-secondary">
                Soluções adaptadas para diferentes ambientes e necessidades.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <AnimatedElement type="slide-up" delay={0.1}>
                <ApplicationCard
                  title="Escritórios"
                  description="Redes corporativas de alta densidade para ambientes de trabalho"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <ApplicationCard
                  title="Indústrias"
                  description="Cobertura em áreas extensas com suporte à IoT industrial"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <ApplicationCard
                  title="Eventos"
                  description="Soluções temporárias de alta capacidade para grandes eventos"
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Modernize sua rede sem fio
              </h2>
              <p className="text-text-secondary mb-8">
                Entre em contato para uma avaliação gratuita do seu ambiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contato">
                    Solicitar Avaliação
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

function FeatureCard({
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

function SolutionCard({
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

function ApplicationCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-elegant border border-border-light hover:shadow-card-hover transition-all duration-300 text-center">
      <div className="text-primary-500 mb-4">
        <RiWifiLine size={32} className="mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
} 