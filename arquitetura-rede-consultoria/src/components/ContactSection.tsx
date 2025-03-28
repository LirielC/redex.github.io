"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatedElement } from "@/components/ui/motion";
import { motion } from "framer-motion";
import {
  RiMapPin2Line,
  RiPhoneLine,
  RiMailLine,
  RiTimeLine,
  RiSendPlaneLine,
  RiCheckLine
} from "react-icons/ri";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulando envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });

      // Reset do feedback após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 bg-gradient-to-b from-primary-50 to-transparent w-1/3 h-1/2 rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-blue-50 to-transparent w-1/3 h-1/2 rounded-tr-full opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement type="fade" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
            Entre em Contato
          </h2>
          <p className="text-text-secondary text-lg">
            Estamos prontos para ajudar sua empresa a implementar a melhor solução
            de infraestrutura de rede para suas necessidades específicas.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Formulário de contato - 3 colunas */}
          <div className="lg:col-span-3">
            <AnimatedElement type="slide-up" className="bg-white rounded-xl overflow-hidden shadow-elegant">
              <div className="bg-gradient-primary text-white p-6">
                <h3 className="text-xl font-semibold">Envie sua mensagem</h3>
                <p className="text-white/80 text-sm">Nossa equipe responderá o mais breve possível</p>
              </div>

              <div className="p-8">
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-success-100 text-success-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <RiCheckLine size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">Mensagem Enviada!</h3>
                    <p className="text-text-secondary max-w-md mx-auto">
                      Agradecemos seu contato. Nossa equipe analisará sua solicitação e
                      entrará em contato em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-text-secondary">Nome Completo</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          className="border-border-light focus:border-primary-300"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-text-secondary">E-mail</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="border-border-light focus:border-primary-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-text-secondary">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          className="border-border-light focus:border-primary-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-text-secondary">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          placeholder="Nome da empresa"
                          className="border-border-light focus:border-primary-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-text-secondary">Mensagem</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Descreva sua necessidade..."
                        className="w-full px-4 py-3 rounded-md border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300 min-h-[150px] resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gap-2 justify-center"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <RiSendPlaneLine size={18} />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>

                    {/* Política de privacidade */}
                    <p className="text-text-tertiary text-xs text-center">
                      Ao enviar, você concorda com nossa <a href="/privacidade" className="text-primary-600 hover:underline">Política de Privacidade</a>
                    </p>
                  </form>
                )}
              </div>
            </AnimatedElement>
          </div>

          {/* Informações de contato - 2 colunas */}
          <div className="lg:col-span-2">
            <AnimatedElement type="slide-up" delay={0.2} className="space-y-8">
              <div className="bg-background-tertiary rounded-xl p-6">
                <h3 className="font-semibold text-lg text-text-primary mb-6">Informações de Contato</h3>

                <div className="space-y-6">
                  <ContactInfoItem
                    icon={<RiMapPin2Line size={22} />}
                    title="Endereço"
                    content="Av. Medanha, 1000, 15º andar, Rio de Janeiro - RJ, 23010-100"
                  />

                  <ContactInfoItem
                    icon={<RiPhoneLine size={22} />}
                    title="Telefone"
                    content="+55 (21) 98765-4321"
                  />

                  <ContactInfoItem
                    icon={<RiMailLine size={22} />}
                    title="E-mail"
                    content="contato@netarchitect.com.br"
                  />

                  <ContactInfoItem
                    icon={<RiTimeLine size={22} />}
                    title="Horário de Atendimento"
                    content="Segunda a Sexta: 9h às 18h"
                  />
                </div>
              </div>

              {/* Mapa ou CTA adicional */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-8">
                <h3 className="font-semibold text-xl mb-4">Consultoria Inicial Gratuita</h3>
                <p className="mb-6 text-white/80">
                  Entre em contato para uma avaliação inicial da sua infraestrutura sem nenhum compromisso.
                </p>
                <Button asChild variant="secondary" size="lg">
                  <a href="tel:+551198765-4321" className="gap-2">
                    <RiPhoneLine />
                    Ligar Agora
                  </a>
                </Button>
              </div>
            </AnimatedElement>

            {/* Selo de confiança */}
            <AnimatedElement type="slide-up" delay={0.4} className="mt-8 mx-auto max-w-xs">
              <div className="flex items-center justify-center gap-3 bg-white rounded-lg p-4 border border-border-light shadow-sm">
                <div className="bg-success-50 rounded-full p-2 text-success-500">
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-text-primary font-medium text-sm">Empresa certificada</p>
                  <p className="text-text-tertiary text-xs">ISO 9001 e ISO 27001</p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({
  icon,
  title,
  content
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 text-primary-600 mt-1 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-text-primary mb-1">{title}</h4>
        <p className="text-text-secondary text-sm">{content}</p>
      </div>
    </div>
  );
}
