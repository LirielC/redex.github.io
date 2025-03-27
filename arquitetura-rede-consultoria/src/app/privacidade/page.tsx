"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RiShieldCheckLine,
  RiLockLine,
  RiUserLine,
  RiFileTextLine,
  RiArrowRightLine,
  RiGlobalLine
} from "react-icons/ri";

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-primary-50 text-primary-600 rounded-full mb-4 text-sm font-medium">
                Sua Privacidade é Nossa Prioridade
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5">
                Política de Privacidade
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Entenda como protegemos e tratamos seus dados pessoais em conformidade 
                com a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement type="fade">
                {/* Princípios */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <RiShieldCheckLine className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Segurança</h3>
                    <p className="text-text-secondary">
                      Proteção robusta dos seus dados com criptografia e controles de acesso.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <RiLockLine className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Privacidade</h3>
                    <p className="text-text-secondary">
                      Seus dados são tratados com total confidencialidade e respeito.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <RiUserLine className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Transparência</h3>
                    <p className="text-text-secondary">
                      Clareza total sobre como seus dados são utilizados.
                    </p>
                  </div>
                </div>

                {/* Seções Detalhadas */}
                <div className="space-y-16">
                  <section>
                    <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                      <RiFileTextLine className="text-primary-500" />
                      Dados que Coletamos
                    </h2>
                    <div className="prose prose-lg max-w-none text-text-secondary">
                      <p className="mb-4">
                        Coletamos apenas dados necessários para a prestação dos nossos serviços:
                      </p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>Dados de identificação (nome, e-mail, telefone)</li>
                        <li>Informações profissionais</li>
                        <li>Dados técnicos da infraestrutura de rede</li>
                        <li>Registros de interações com nosso suporte</li>
                        <li>Informações de uso dos nossos serviços</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                      <RiGlobalLine className="text-primary-500" />
                      Como Utilizamos seus Dados
                    </h2>
                    <div className="prose prose-lg max-w-none text-text-secondary">
                      <p className="mb-4">
                        Seus dados são utilizados exclusivamente para:
                      </p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>Prestação dos serviços contratados</li>
                        <li>Personalização da experiência do cliente</li>
                        <li>Comunicações sobre projetos e serviços</li>
                        <li>Melhorias em nossos processos e serviços</li>
                        <li>Cumprimento de obrigações legais</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                      <RiShieldCheckLine className="text-primary-500" />
                      Proteção de Dados
                    </h2>
                    <div className="prose prose-lg max-w-none text-text-secondary">
                      <p className="mb-4">
                        Implementamos medidas rigorosas de segurança:
                      </p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>Criptografia de dados em trânsito e em repouso</li>
                        <li>Controles de acesso baseados em função</li>
                        <li>Monitoramento contínuo de segurança</li>
                        <li>Backups regulares e redundância</li>
                        <li>Treinamento de equipe em segurança</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                      <RiUserLine className="text-primary-500" />
                      Seus Direitos
                    </h2>
                    <div className="prose prose-lg max-w-none text-text-secondary">
                      <p className="mb-4">
                        De acordo com a LGPD, você tem direito a:
                      </p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>Acessar seus dados pessoais</li>
                        <li>Corrigir dados incompletos ou desatualizados</li>
                        <li>Solicitar a exclusão de seus dados</li>
                        <li>Revogar consentimento para uso dos dados</li>
                        <li>Solicitar portabilidade dos dados</li>
                        <li>Ser informado sobre compartilhamento</li>
                      </ul>
                    </div>
                  </section>
                </div>

                {/* Contato DPO */}
                <div className="bg-background-secondary rounded-xl p-8 mt-16">
                  <div className="flex items-start gap-4">
                    <div className="text-primary-500">
                      <RiShieldCheckLine size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        Fale com Nosso DPO
                      </h3>
                      <p className="text-text-secondary mb-4">
                        Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento 
                        dos seus dados, entre em contato com nosso Encarregado de Proteção de Dados.
                      </p>
                      <Button asChild size="lg" className="gap-2">
                        <Link href="/contato">
                          Contatar DPO
                          <RiArrowRightLine />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Última Atualização */}
                <p className="text-sm text-text-secondary text-center mt-16">
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