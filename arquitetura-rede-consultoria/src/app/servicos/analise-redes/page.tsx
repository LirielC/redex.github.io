"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RiDashboardLine,
  RiLineChartLine,
  RiWifiLine,
  RiAlertLine,
  RiCheckLine,
  RiArrowRightLine,
  RiSpeedLine,
  RiSearchLine,
  RiBarChartBoxLine
} from "react-icons/ri";

export default function AnaliseRedesPage() {
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
                Análise de Redes
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Otimize o desempenho da sua rede com análises detalhadas, 
                monitoramento em tempo real e diagnósticos precisos.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/contato">
                  Solicitar Análise
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
                Nossa análise de redes utiliza ferramentas e metodologias avançadas 
                para identificar e resolver problemas de performance.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedElement type="slide-up" delay={0.1}>
                <FeatureCard
                  icon={<RiDashboardLine size={32} />}
                  title="Monitoramento 24/7"
                  description="Acompanhamento contínuo do desempenho e disponibilidade da rede."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <FeatureCard
                  icon={<RiLineChartLine size={32} />}
                  title="Análise de Tráfego"
                  description="Identificação de gargalos e padrões de utilização da rede."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <FeatureCard
                  icon={<RiSearchLine size={32} />}
                  title="Diagnóstico Preciso"
                  description="Identificação da causa raiz de problemas de performance."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.4}>
                <FeatureCard
                  icon={<RiBarChartBoxLine size={32} />}
                  title="Relatórios Detalhados"
                  description="Documentação completa com métricas e recomendações."
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Metodologia */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Nossa Metodologia
              </h2>
              <p className="text-text-secondary">
                Processo estruturado para garantir uma análise completa da sua infraestrutura.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedElement type="slide-right">
                <ProcessCard
                  title="Coleta e Análise"
                  features={[
                    "Levantamento da topologia atual",
                    "Coleta de dados de performance",
                    "Análise de logs e eventos",
                    "Mapeamento de recursos",
                    "Identificação de pontos críticos"
                  ]}
                />
              </AnimatedElement>

              <AnimatedElement type="slide-left">
                <ProcessCard
                  title="Otimização e Recomendações"
                  features={[
                    "Diagnóstico de problemas",
                    "Propostas de melhorias",
                    "Plano de otimização",
                    "Implementação de soluções",
                    "Acompanhamento de resultados"
                  ]}
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Ferramentas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Ferramentas Especializadas
              </h2>
              <p className="text-text-secondary">
                Utilizamos as melhores ferramentas do mercado para análise e monitoramento.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <AnimatedElement type="slide-up" delay={0.1}>
                <ToolCard
                  title="Análise de Pacotes"
                  description="Captura e análise detalhada do tráfego de rede"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <ToolCard
                  title="Monitoramento SNMP"
                  description="Coleta de métricas de dispositivos de rede"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <ToolCard
                  title="Análise de Protocolos"
                  description="Avaliação do comportamento dos protocolos de rede"
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
                Otimize o desempenho da sua rede
              </h2>
              <p className="text-text-secondary mb-8">
                Solicite uma análise completa da sua infraestrutura e descubra como melhorar a performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contato">
                    Agendar Análise
                    <RiArrowRightLine />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projetos">
                    Ver Cases
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

function ProcessCard({
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

function ToolCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-elegant border border-border-light hover:shadow-card-hover transition-all duration-300 text-center">
      <div className="text-primary-500 mb-4">
        <RiSpeedLine size={32} className="mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
} 