"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { RiDoubleQuotesL, RiStarFill } from "react-icons/ri";
import { AnimatedElement } from "@/components/ui/motion";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
};

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Mendes",
      position: "Diretor de TI",
      company: "Tecnologias Avançadas S.A.",
      content: "A consultoria da NetArchitect transformou nossa infraestrutura de rede. Tivemos uma redução de 40% nos incidentes e o desempenho melhorou significativamente. A equipe técnica é altamente qualificada e entregou o projeto no prazo estabelecido.",
      rating: 5
    },
    {
      id: 2,
      name: "Ana Luiza Gomes",
      position: "CTO",
      company: "Inovação Digital Ltda",
      content: "Trabalhamos com a NetArchitect para implementar nossa solução de segurança de rede. A atenção aos detalhes e o conhecimento técnico nos impressionaram desde o início. O suporte pós-implementação continua excelente meses depois.",
      rating: 5
    },
    {
      id: 3,
      name: "Ricardo Oliveira",
      position: "Gerente de Infraestrutura",
      company: "Grupo Financeiro Nacional",
      content: "A migração para a nuvem parecia um desafio imenso até contratarmos a NetArchitect. Sua abordagem metodológica e experiência nos guiaram por todo o processo com segurança. Os resultados superaram nossas expectativas.",
      rating: 4
    },
    {
      id: 4,
      name: "Mariana Costa",
      position: "CEO",
      company: "Startec Inovações",
      content: "Como uma startup em crescimento, precisávamos de uma infraestrutura escalável desde o início. A consultoria da NetArchitect nos ajudou a construir uma base sólida que acompanha nosso crescimento sem dores de cabeça.",
      rating: 5
    },
    {
      id: 5,
      name: "Fernando Santos",
      position: "Diretor de Operações",
      company: "Rede Comércio Eletrônico",
      content: "Após vários problemas recorrentes com nosso provedor anterior, a NetArchitect implementou uma solução que eliminou nossas quedas de conexão e melhorou significativamente a experiência de nossos clientes online.",
      rating: 5
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    dragFree: true,
    containScroll: "trimSnaps"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-background-tertiary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -right-20 top-10 w-64 h-64 bg-primary-100 rounded-full opacity-70 blur-xl"></div>
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-40 bg-gradient-primary opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement type="fade" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-text-secondary">
            Conheça as experiências de sucesso de empresas que transformaram
            sua infraestrutura de rede com nossos serviços de consultoria.
          </p>
        </AnimatedElement>

        <div className="max-w-[1000px] mx-auto relative px-8">
          <div className="relative overflow-hidden -mx-4" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-8 bg-primary-500"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 p-3 rounded-full border border-gray-200 bg-white shadow-sm hover:border-primary-200 hover:shadow-md transition-all duration-300 focus:outline-none"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 p-3 rounded-full border border-gray-200 bg-white shadow-sm hover:border-primary-200 hover:shadow-md transition-all duration-300 focus:outline-none"
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="text-primary-500 mb-4">
        <RiDoubleQuotesL size={28} className="opacity-80" />
      </div>

      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <RiStarFill
            key={i}
            size={18}
            className={i < testimonial.rating ? "text-yellow-400" : "text-gray-200"}
          />
        ))}
      </div>

      <p className="text-text-secondary text-base leading-relaxed mb-8 line-clamp-3">
        "{testimonial.content}"
      </p>

      <div className="border-t border-gray-100 pt-6 mt-auto">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-700 font-semibold">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-0.5">{testimonial.name}</h4>
            <p className="text-text-tertiary text-sm">{testimonial.position}, {testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
