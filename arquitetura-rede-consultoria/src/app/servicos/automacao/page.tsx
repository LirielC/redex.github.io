"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RiCodeLine,
  RiSettings4Line,
  RiFlowChart,
  RiTimeLine,
  RiCheckLine,
  RiArrowRightLine,
  RiCommandLine,
  RiToolsLine,
  RiShieldCheckLine
} from "react-icons/ri";

export default function AutomacaoPage() {
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
                Automação de Redes
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Modernize sua infraestrutura com soluções automatizadas que aumentam 
                a eficiência e reduzem erros operacionais.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/contato">
                  Modernizar Infraestrutura
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
                Benefícios da Automação
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Descubra como a automação de redes pode transformar sua operação, 
                reduzindo custos e aumentando a confiabilidade.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedElement type="slide-up" delay={0.1}>
                <BenefitCard
                  icon={<RiTimeLine size={32} />}
                  title="Maior Agilidade"
                  description="Implantações e mudanças mais rápidas com processos automatizados."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <BenefitCard
                  icon={<RiShieldCheckLine size={32} />}
                  title="Menos Erros"
                  description="Redução de erros humanos com processos padronizados."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <BenefitCard
                  icon={<RiToolsLine size={32} />}
                  title="Eficiência"
                  description="Otimização de recursos e redução de custos operacionais."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.4}>
                <BenefitCard
                  icon={<RiCommandLine size={32} />}
                  title="Controle Total"
                  description="Visibilidade e controle centralizado da infraestrutura."
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
                Nossas Soluções
              </h2>
              <p className="text-text-secondary">
                Implementamos soluções de automação adaptadas às necessidades do seu negócio.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedElement type="slide-right">
                <SolutionCard
                  title="Automação de Configuração"
                  features={[
                    "Gerenciamento automatizado de configurações",
                    "Implantação padronizada de dispositivos",
                    "Controle de versão de configurações",
                    "Backup automático",
                    "Validação de conformidade"
                  ]}
                />
              </AnimatedElement>

              <AnimatedElement type="slide-left">
                <SolutionCard
                  title="Orquestração de Rede"
                  features={[
                    "Provisionamento automatizado",
                    "Gestão de políticas de rede",
                    "Integração com SDN",
                    "Workflows personalizados",
                    "Monitoramento inteligente"
                  ]}
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Tecnologias */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Tecnologias Utilizadas
              </h2>
              <p className="text-text-secondary">
                Trabalhamos com as principais ferramentas e frameworks de automação.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <AnimatedElement type="slide-up" delay={0.1}>
                <TechCard
                  title="Ansible"
                  description="Automação de configuração e orquestração de rede"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <TechCard
                  title="Python"
                  description="Scripts personalizados e integração com APIs"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <TechCard
                  title="Terraform"
                  description="Infraestrutura como código para ambientes cloud"
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
                Automatize sua infraestrutura
              </h2>
              <p className="text-text-secondary mb-8">
                Entre em contato para uma avaliação gratuita e descubra como podemos automatizar sua rede.
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

function TechCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-elegant border border-border-light hover:shadow-card-hover transition-all duration-300 text-center">
      <div className="text-primary-500 mb-4">
        <RiCodeLine size={32} className="mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
} 