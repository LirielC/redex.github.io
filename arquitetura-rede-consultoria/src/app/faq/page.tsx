"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RiArrowRightLine,
  RiQuestionLine,
  RiAddLine,
  RiSubtractLine
} from "react-icons/ri";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

const faqItems: FaqItem[] = [
  {
    category: "Serviços",
    question: "Quais são os principais serviços oferecidos?",
    answer: "Oferecemos consultoria em redes corporativas, segurança de redes, automação de infraestrutura, análise de redes, redes sem fio e integração em nuvem. Nossos serviços são personalizados para atender às necessidades específicas de cada cliente."
  },
  {
    category: "Serviços",
    question: "Como funciona o processo de consultoria?",
    answer: "Nosso processo começa com uma avaliação detalhada da sua infraestrutura atual, seguida por um planejamento estratégico. Após a aprovação, implementamos as soluções de forma controlada e oferecemos monitoramento contínuo e otimizações."
  },
  {
    category: "Custos",
    question: "Como é calculado o valor dos serviços?",
    answer: "O valor é personalizado de acordo com a complexidade do projeto, tamanho da infraestrutura e escopo dos serviços necessários. Realizamos uma avaliação inicial gratuita para fornecer um orçamento detalhado."
  },
  {
    category: "Custos",
    question: "Existe um contrato mínimo de serviço?",
    answer: "Trabalhamos com diferentes modalidades de contrato, desde projetos pontuais até contratos de manutenção contínua. O período mínimo varia conforme o tipo de serviço contratado."
  },
  {
    category: "Suporte",
    question: "Qual é o tempo de resposta para suporte?",
    answer: "Oferecemos diferentes níveis de SLA conforme a criticidade. Para clientes com contrato de suporte premium, garantimos resposta em até 15 minutos para incidentes críticos, 24/7."
  },
  {
    category: "Suporte",
    question: "Como funciona o suporte pós-implementação?",
    answer: "Fornecemos suporte técnico especializado, monitoramento proativo, manutenção preventiva e relatórios periódicos de desempenho. Também oferecemos treinamento para sua equipe interna."
  },
  {
    category: "Tecnologia",
    question: "Quais tecnologias e ferramentas são utilizadas?",
    answer: "Utilizamos as mais recentes tecnologias do mercado, incluindo soluções de automação como Ansible e Terraform, ferramentas de monitoramento avançado e plataformas líderes de cloud computing."
  },
  {
    category: "Tecnologia",
    question: "Como é garantida a segurança dos dados?",
    answer: "Implementamos múltiplas camadas de segurança, seguimos as melhores práticas do mercado e normas internacionais (ISO 27001, NIST). Todos os dados são criptografados e protegidos conforme padrões regulatórios."
  }
];

export default function FaqPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5">
                Perguntas Frequentes
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Encontre respostas para as principais dúvidas sobre nossos serviços 
                e como podemos ajudar sua empresa.
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <AnimatedElement type="fade" delay={categoryIndex * 0.1}>
                    <h2 className="text-2xl font-bold text-text-primary mb-6">
                      {category}
                    </h2>
                    <div className="space-y-4">
                      {faqItems
                        .filter(item => item.category === category)
                        .map((item, index) => {
                          const itemIndex = categoryIndex * 100 + index;
                          const isOpen = openItems.includes(itemIndex);
                          
                          return (
                            <div
                              key={index}
                              className="border border-border-light rounded-lg overflow-hidden"
                            >
                              <button
                                onClick={() => toggleItem(itemIndex)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-background-secondary transition-colors duration-200"
                              >
                                <span className="text-lg font-medium text-text-primary">
                                  {item.question}
                                </span>
                                <span className="text-primary-500 ml-4">
                                  {isOpen ? <RiSubtractLine size={24} /> : <RiAddLine size={24} />}
                                </span>
                              </button>
                              
                              <div
                                className={`overflow-hidden transition-all duration-200 ${
                                  isOpen ? "max-h-96" : "max-h-0"
                                }`}
                              >
                                <p className="p-6 pt-0 text-text-secondary">
                                  {item.answer}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </AnimatedElement>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Ainda tem dúvidas?
              </h2>
              <p className="text-text-secondary mb-8">
                Nossa equipe está pronta para ajudar. Entre em contato para uma conversa personalizada.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/contato">
                  Falar com Especialista
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