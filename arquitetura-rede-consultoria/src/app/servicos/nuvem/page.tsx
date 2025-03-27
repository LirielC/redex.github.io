"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RiCloudLine,
  RiServerLine,
  RiShieldLine,
  RiExchangeLine,
  RiCheckLine,
  RiArrowRightLine,
  RiSettings4Line,
  RiLineChartLine,
  RiGlobalLine
} from "react-icons/ri";

export default function NuvemPage() {
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
                Integração em Nuvem
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Transforme sua infraestrutura com soluções cloud que combinam 
                flexibilidade, segurança e alta performance.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/contato">
                  Iniciar Migração
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
                Vantagens da Nuvem
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Descubra como a integração em nuvem pode transformar sua empresa com 
                benefícios imediatos e escalabilidade para o futuro.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedElement type="slide-up" delay={0.1}>
                <BenefitCard
                  icon={<RiLineChartLine size={32} />}
                  title="Escalabilidade"
                  description="Recursos flexíveis que crescem de acordo com sua demanda."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <BenefitCard
                  icon={<RiShieldLine size={32} />}
                  title="Segurança"
                  description="Proteção avançada e conformidade com padrões internacionais."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <BenefitCard
                  icon={<RiSettings4Line size={32} />}
                  title="Automação"
                  description="Processos automatizados para maior eficiência operacional."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.4}>
                <BenefitCard
                  icon={<RiGlobalLine size={32} />}
                  title="Disponibilidade"
                  description="Acesso global com alta disponibilidade e redundância."
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
                Nossas Soluções Cloud
              </h2>
              <p className="text-text-secondary">
                Oferecemos um conjunto completo de serviços para sua jornada à nuvem.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedElement type="slide-right">
                <SolutionCard
                  title="Migração e Implementação"
                  features={[
                    "Análise de infraestrutura atual",
                    "Planejamento de migração",
                    "Implementação de ambientes cloud",
                    "Configuração de serviços AWS/Azure/GCP",
                    "Otimização de recursos e custos"
                  ]}
                />
              </AnimatedElement>

              <AnimatedElement type="slide-left">
                <SolutionCard
                  title="Gestão e Otimização"
                  features={[
                    "Monitoramento 24x7",
                    "Gerenciamento de custos",
                    "Backup e disaster recovery",
                    "Segurança e compliance",
                    "Suporte especializado"
                  ]}
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Plataformas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Plataformas Cloud
              </h2>
              <p className="text-text-secondary">
                Expertise nas principais plataformas de computação em nuvem do mercado.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <AnimatedElement type="slide-up" delay={0.1}>
                <PlatformCard
                  title="Amazon AWS"
                  description="Líder global em serviços de computação em nuvem"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <PlatformCard
                  title="Microsoft Azure"
                  description="Plataforma completa para soluções empresariais"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <PlatformCard
                  title="Google Cloud"
                  description="Inovação e escalabilidade para seu negócio"
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
                Comece sua jornada para a nuvem
              </h2>
              <p className="text-text-secondary mb-8">
                Agende uma consultoria gratuita para avaliar as melhores soluções para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contato">
                    Agendar Consultoria
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

function PlatformCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-elegant border border-border-light hover:shadow-card-hover transition-all duration-300 text-center">
      <div className="text-primary-500 mb-4">
        <RiCloudLine size={32} className="mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
} 