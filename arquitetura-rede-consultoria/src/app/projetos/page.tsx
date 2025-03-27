"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  RiCheckLine,
  RiArrowRightLine,
  RiBuilding4Line,
  RiHospitalLine,
  RiShoppingBag3Line,
  RiGovernmentLine
} from "react-icons/ri";

export default function ProjetosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5">
                Nossos Projetos
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Conheça alguns dos nossos casos de sucesso e como ajudamos empresas 
                a transformar sua infraestrutura de rede.
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* Cases de Sucesso */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <AnimatedElement type="slide-right">
                <ProjectCard
                  icon={<RiBuilding4Line size={32} />}
                  title="Empresa de Tecnologia"
                  description="Implementação de automação completa da infraestrutura de rede para uma empresa com mais de 1000 funcionários."
                  results={[
                    "Redução de 70% no tempo de configuração",
                    "Economia de 40% em custos operacionais",
                    "Zero downtime em 6 meses",
                    "Aumento de 95% na satisfação da equipe"
                  ]}
                />
              </AnimatedElement>

              <AnimatedElement type="slide-left">
                <ProjectCard
                  icon={<RiHospitalLine size={32} />}
                  title="Rede Hospitalar"
                  description="Modernização da infraestrutura de rede com foco em segurança e alta disponibilidade."
                  results={[
                    "99.999% de uptime",
                    "Conformidade com LGPD e HIPAA",
                    "Redução de 60% em incidentes",
                    "Monitoramento em tempo real"
                  ]}
                />
              </AnimatedElement>

              <AnimatedElement type="slide-right">
                <ProjectCard
                  icon={<RiShoppingBag3Line size={32} />}
                  title="Varejo Nacional"
                  description="Implementação de SD-WAN e automação para rede de mais de 200 lojas."
                  results={[
                    "Economia de 50% em links",
                    "Deployment automatizado",
                    "Gestão centralizada",
                    "ROI em 8 meses"
                  ]}
                />
              </AnimatedElement>

              <AnimatedElement type="slide-left">
                <ProjectCard
                  icon={<RiGovernmentLine size={32} />}
                  title="Órgão Público"
                  description="Modernização da infraestrutura com foco em segurança e compliance."
                  results={[
                    "100% conformidade regulatória",
                    "Automação de 80% dos processos",
                    "Redução de 45% em custos",
                    "Aumento de 90% em visibilidade"
                  ]}
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
                Processo estruturado para garantir o sucesso de cada projeto.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <AnimatedElement type="slide-up" delay={0.1}>
                <MethodologyStep
                  number="01"
                  title="Análise"
                  description="Avaliação completa da infraestrutura e necessidades"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <MethodologyStep
                  number="02"
                  title="Planejamento"
                  description="Definição de estratégia e cronograma detalhado"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <MethodologyStep
                  number="03"
                  title="Implementação"
                  description="Execução controlada e monitorada das soluções"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.4}>
                <MethodologyStep
                  number="04"
                  title="Otimização"
                  description="Monitoramento contínuo e melhorias"
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
                Pronto para transformar sua infraestrutura?
              </h2>
              <p className="text-text-secondary mb-8">
                Entre em contato para uma avaliação gratuita e descubra como podemos ajudar sua empresa.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/contato">
                  Iniciar Projeto
                  <RiArrowRightLine />
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

function ProjectCard({
  icon,
  title,
  description,
  results
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  results: string[];
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-elegant border border-border-light hover:shadow-card-hover transition-all duration-300">
      <div className="text-primary-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary mb-6">{description}</p>
      <div className="space-y-3">
        {results.map((result, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-primary-500 mt-1">
              <RiCheckLine size={18} />
            </span>
            <span className="text-text-secondary">{result}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MethodologyStep({
  number,
  title,
  description
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary-500 mb-4">{number}</div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
} 