"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedElement } from "@/components/ui/motion";
import {
  RiTeamLine,
  RiTimeLine,
  RiBubbleChartLine,
  RiShieldCheckLine,
  RiLineChartLine,
  RiCheckboxCircleLine,
  RiLightbulbFlashLine,
  RiInstallLine,
  RiRocket2Line
} from "react-icons/ri";

export default function WhyChooseUsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <RiTeamLine size={24} />,
      title: "Equipe Especializada",
      description: "Profissionais certificados com ampla experiência em projetos complexos"
    },
    {
      icon: <RiShieldCheckLine size={24} />,
      title: "Segurança em Primeiro Lugar",
      description: "Todas as nossas soluções priorizam a proteção dos seus dados e sistemas"
    },
    {
      icon: <RiBubbleChartLine size={24} />,
      title: "Soluções Personalizadas",
      description: "Adaptamos cada projeto às necessidades específicas do seu negócio"
    },
    {
      icon: <RiTimeLine size={24} />,
      title: "Suporte Contínuo",
      description: "Atendimento e monitoramento 24/7 para garantir o funcionamento ideal"
    },
    {
      icon: <RiLineChartLine size={24} />,
      title: "Melhoria Contínua",
      description: "Análise e otimização constante para aumentar o desempenho da rede"
    }
  ];

  const processSteps = [
    {
      icon: <RiLightbulbFlashLine />,
      title: "Consultoria e Planejamento",
      description: "Entendemos suas necessidades e desenhamos a solução ideal.",
      delay: 0.1
    },
    {
      icon: <RiInstallLine />,
      title: "Implementação",
      description: "Executamos o projeto com mínimo impacto nas operações.",
      delay: 0.3
    },
    {
      icon: <RiRocket2Line />,
      title: "Otimização e Suporte",
      description: "Garantimos o funcionamento contínuo e eficiente dos sistemas.",
      delay: 0.5
    }
  ];

  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary-50 opacity-70"></div>
      <div className="absolute top-1/4 -left-40 -rotate-12 w-80 h-80 bg-blue-50 rounded-3xl opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent-50 rounded-full opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={containerRef}>
          <div>
            <AnimatedElement type="fade">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
                Por que escolher a NetArchitect
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
                Excelência em cada detalhe do seu projeto
              </h2>

              <p className="text-text-secondary text-lg mb-8">
                Somos uma equipe de especialistas em arquitetura de redes com mais de 15 anos
                de experiência, oferecendo soluções personalizadas que atendem às necessidades
                específicas de cada cliente.
              </p>
            </AnimatedElement>

            <ul className="space-y-5">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-4"
                >
                  <div className="mt-1 p-2 rounded-lg bg-primary-50 text-primary-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{feature.title}</h3>
                    <p className="text-text-secondary">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 bg-white rounded-xl p-6 border border-border-light shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <RiCheckboxCircleLine className="text-success-500" size={24} />
                <h3 className="font-semibold text-text-primary">Garantia de qualidade</h3>
              </div>
              <p className="text-text-secondary pl-9">
                Todos os nossos projetos são entregues com garantia de funcionamento e suporte técnico especializado.
              </p>
            </div>
          </div>

          <div className="lg:ml-12 relative">
            {/* Ilustração de processo */}
            <div className="bg-white rounded-xl overflow-hidden shadow-elegant p-8 relative z-10">
              <h3 className="text-2xl font-bold text-text-primary text-center mb-8">Nossa Metodologia</h3>

              <div className="space-y-12 relative pb-6">
                {/* Linha conectora */}
                <div className="absolute left-16 top-0 bottom-0 w-1 bg-primary-50"></div>

                {processSteps.map((step, index) => (
                  <AnimatedElement
                    key={index}
                    type="slide-right"
                    delay={step.delay}
                    className="relative"
                  >
                    <div className="flex items-start gap-8">
                      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center relative z-10">
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">{step.title}</h4>
                        <p className="text-text-secondary">{step.description}</p>
                      </div>
                    </div>

                    {index < processSteps.length - 1 && (
                      <div className="absolute left-6 top-12 h-6 w-0.5 bg-gray-200"></div>
                    )}
                  </AnimatedElement>
                ))}
              </div>
            </div>

            {/* Elemento de design */}
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl -z-10 opacity-10 blur-xl"></div>

            {/* Card flutuante */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-lg shadow-elegant-lg max-w-[250px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-success-50 flex items-center justify-center text-success-500">
                  <RiCheckboxCircleLine size={24} />
                </div>
                <div>
                  <span className="block text-text-primary font-semibold">99.9%</span>
                  <span className="text-text-tertiary text-sm">Satisfação dos clientes</span>
                </div>
              </div>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-sm text-text-secondary">
                "Resolveram rapidamente problemas que nos afligiam há anos."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
