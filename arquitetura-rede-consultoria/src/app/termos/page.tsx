"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiArrowRightLine, RiShieldCheckLine } from "react-icons/ri";

export default function TermosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5">
                Termos de Uso e Privacidade
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Nosso compromisso com a transparência e proteção dos seus dados.
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement type="fade">
                {/* Termos de Uso */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-text-primary mb-8">
                    Termos de Uso
                  </h2>

                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      1. Aceitação dos Termos
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Ao acessar e utilizar os serviços da Arquitetura de Redes Consultoria, 
                      você concorda com estes termos de uso e todas as condições aqui estabelecidas. 
                      Recomendamos a leitura atenta de todo o conteúdo.
                    </p>

                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      2. Serviços Oferecidos
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Nossos serviços incluem consultoria em redes, implementação de soluções, 
                      suporte técnico e treinamentos. Todos os serviços são prestados por 
                      profissionais qualificados e seguem as melhores práticas do mercado.
                    </p>

                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      3. Responsabilidades
                    </h3>
                    <p className="text-text-secondary mb-6">
                      A empresa se compromete a executar os serviços conforme acordado em contrato, 
                      mantendo a confidencialidade das informações e garantindo a qualidade das 
                      implementações.
                    </p>

                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      4. Propriedade Intelectual
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Todo o conteúdo apresentado em nosso site e materiais é de propriedade 
                      exclusiva da empresa, sendo protegido por leis de propriedade intelectual.
                    </p>
                  </div>
                </div>

                {/* Política de Privacidade */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-text-primary mb-8">
                    Política de Privacidade
                  </h2>

                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      1. Coleta de Dados
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Coletamos apenas as informações necessárias para a prestação dos nossos 
                      serviços, incluindo dados de contato e informações técnicas sobre sua 
                      infraestrutura de rede.
                    </p>

                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      2. Uso das Informações
                    </h3>
                    <p className="text-text-secondary mb-6">
                      As informações coletadas são utilizadas exclusivamente para:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-text-secondary">
                      <li>Prestação dos serviços contratados</li>
                      <li>Comunicação sobre andamento de projetos</li>
                      <li>Melhorias em nossos serviços</li>
                      <li>Envio de atualizações técnicas relevantes</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      3. Proteção de Dados
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Implementamos medidas técnicas e organizacionais para proteger seus dados, 
                      seguindo as melhores práticas de segurança e atendendo às regulamentações 
                      aplicáveis, incluindo a LGPD.
                    </p>

                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      4. Seus Direitos
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Você tem direito a:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-text-secondary">
                      <li>Acessar seus dados pessoais</li>
                      <li>Solicitar correções ou atualizações</li>
                      <li>Solicitar a exclusão de seus dados</li>
                      <li>Revogar consentimento para uso dos dados</li>
                    </ul>
                  </div>
                </div>

                {/* Contato para Dúvidas */}
                <div className="bg-background-secondary rounded-xl p-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="text-primary-500">
                      <RiShieldCheckLine size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        Dúvidas sobre Privacidade?
                      </h3>
                      <p className="text-text-secondary mb-4">
                        Se você tiver qualquer dúvida sobre nossa política de privacidade 
                        ou como tratamos seus dados, entre em contato conosco.
                      </p>
                      <Button asChild size="lg" className="gap-2">
                        <Link href="/contato">
                          Entrar em Contato
                          <RiArrowRightLine />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Última Atualização */}
                <p className="text-sm text-text-secondary text-center">
                  Última atualização: Janeiro de 2024
                </p>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 