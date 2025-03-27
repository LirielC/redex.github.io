"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RiShieldLine,
  RiLockLine,
  RiEyeLine,
  RiAlertLine,
  RiCheckLine,
  RiArrowRightLine,
  RiFireLine,
  RiShieldCheckLine
} from "react-icons/ri";

export default function SegurancaRedesPage() {
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
                Segurança de Redes
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Proteja sua infraestrutura de rede contra ameaças cibernéticas com soluções 
                avançadas de segurança e monitoramento contínuo.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/contato">
                  Avaliar Segurança
                  <RiArrowRightLine />
                </Link>
              </Button>
            </AnimatedElement>
          </div>
        </section>

        {/* Ameaças */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Proteja sua empresa contra ameaças digitais
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                O cenário de ameaças cibernéticas está em constante evolução. 
                Mantenha sua rede protegida com nossas soluções especializadas.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedElement type="slide-up" delay={0.1}>
                <ThreatCard
                  icon={<RiFireLine size={32} />}
                  title="Ataques DDoS"
                  description="Proteção contra ataques de negação de serviço que podem derrubar sua rede."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <ThreatCard
                  icon={<RiLockLine size={32} />}
                  title="Ransomware"
                  description="Prevenção contra sequestro de dados e sistemas críticos."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <ThreatCard
                  icon={<RiEyeLine size={32} />}
                  title="Espionagem"
                  description="Detecção e prevenção de tentativas de roubo de informações."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.4}>
                <ThreatCard
                  icon={<RiAlertLine size={32} />}
                  title="Invasões"
                  description="Proteção contra tentativas de acesso não autorizado à sua rede."
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
                Nossas Soluções de Segurança
              </h2>
              <p className="text-text-secondary">
                Oferecemos um conjunto completo de soluções para proteger sua infraestrutura.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedElement type="slide-right">
                <SolutionCard
                  title="Proteção Preventiva"
                  features={[
                    "Firewall de próxima geração",
                    "Sistema de detecção de intrusão (IDS/IPS)",
                    "Proteção contra malware avançado",
                    "Controle de acesso granular",
                    "VPN segura para acesso remoto"
                  ]}
                />
              </AnimatedElement>

              <AnimatedElement type="slide-left">
                <SolutionCard
                  title="Monitoramento e Resposta"
                  features={[
                    "Monitoramento 24x7 de segurança",
                    "Análise de vulnerabilidades",
                    "Resposta a incidentes",
                    "Backup e recuperação de dados",
                    "Relatórios de segurança detalhados"
                  ]}
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Certificações */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Certificações e Conformidade
              </h2>
              <p className="text-text-secondary">
                Nossa equipe possui as principais certificações do mercado em segurança de redes.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <AnimatedElement type="slide-up" delay={0.1}>
                <CertificationCard
                  title="ISO 27001"
                  description="Certificação internacional em gestão de segurança da informação"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <CertificationCard
                  title="CISSP"
                  description="Profissionais certificados em segurança de sistemas de informação"
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <CertificationCard
                  title="CompTIA Security+"
                  description="Expertise comprovada em segurança de redes e infraestrutura"
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
                Garanta a segurança da sua rede agora
              </h2>
              <p className="text-text-secondary mb-8">
                Solicite uma avaliação gratuita da segurança da sua infraestrutura de rede.
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
                    Conhecer Cases
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

function ThreatCard({
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
              <RiShieldCheckLine size={18} />
            </span>
            <span className="text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CertificationCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-elegant border border-border-light hover:shadow-card-hover transition-all duration-300 text-center">
      <div className="text-primary-500 mb-4">
        <RiShieldLine size={32} className="mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
} 