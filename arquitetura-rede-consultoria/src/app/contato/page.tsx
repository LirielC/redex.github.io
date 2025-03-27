"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { AnimatedElement } from "@/components/ui/motion";
import { RiQuestionLine, RiCloseLine, RiAddLine } from "react-icons/ri";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qual é o prazo médio para implementação de um projeto de rede?",
      answer: "O prazo varia de acordo com a complexidade e tamanho do projeto. Projetos menores podem levar de 2 a 4 semanas, enquanto implementações mais complexas podem levar de 2 a 6 meses. Durante a fase de consultoria, fornecemos um cronograma detalhado com todas as etapas e prazos."
    },
    {
      question: "Como é feito o processo de diagnóstico da infraestrutura atual?",
      answer: "Realizamos uma análise completa da infraestrutura existente, incluindo mapeamento de rede, avaliação de equipamentos, análise de desempenho e identificação de vulnerabilidades. Utilizamos ferramentas especializadas e nossa equipe de consultores avalia todos os aspectos técnicos e operacionais."
    },
    {
      question: "A NetArchitect oferece suporte após a implementação do projeto?",
      answer: "Sim, oferecemos diversos níveis de suporte pós-implementação, desde monitoramento contínuo até suporte técnico 24/7. Temos planos de suporte que podem ser personalizados de acordo com as necessidades específicas de cada cliente."
    },
    {
      question: "Quais certificações e qualificações a equipe técnica possui?",
      answer: "Nossa equipe é composta por profissionais certificados nas principais tecnologias e fabricantes do mercado, incluindo Cisco (CCNA, CCNP, CCIE), Microsoft, AWS, CompTIA, ITIL, e certificações em segurança como CISSP e CEH, entre outras."
    },
    {
      question: "A NetArchitect trabalha com empresas de pequeno porte?",
      answer: "Sim, atendemos empresas de todos os portes, desde startups até grandes corporações. Temos soluções escaláveis que podem ser adaptadas de acordo com o tamanho e necessidades específicas de cada organização."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
                Fale Conosco
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5">Entre em Contato</h1>
              <p className="text-lg text-text-secondary mb-8">
                Estamos aqui para responder suas dúvidas e ajudar sua empresa a implementar
                a melhor infraestrutura de rede para suas necessidades.
              </p>
            </AnimatedElement>
          </div>
        </section>

        <ContactSection />

        <section className="py-20 bg-background-tertiary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
                Dúvidas Frequentes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
                Perguntas Frequentes
              </h2>
              <p className="text-text-secondary">
                Confira algumas das dúvidas mais comuns sobre nossos serviços e processos.
              </p>
            </AnimatedElement>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border-light rounded-xl overflow-hidden bg-white hover:shadow-elegant transition-all duration-300"
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-medium"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-primary-500">
                        <RiQuestionLine size={20} />
                      </div>
                      <span className="text-text-primary font-semibold">
                        {faq.question}
                      </span>
                    </div>
                    <div className="text-text-tertiary">
                      {openFaq === index ? <RiCloseLine size={20} /> : <RiAddLine size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-5 border-t border-border-light bg-background-secondary">
                          <p className="text-text-secondary">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
