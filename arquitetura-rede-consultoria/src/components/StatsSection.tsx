"use client";

import { AnimatedElement } from "@/components/ui/motion";
import { useState, useEffect, useRef } from "react";
import {
  RiProjectorLine,
  RiTimer2Line,
  RiUserSmileLine,
  RiCalendarCheckLine
} from "react-icons/ri";

type StatItem = {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ElementType;
  duration?: number;
};

const stats: StatItem[] = [
  {
    value: 150,
    suffix: "+",
    label: "Projetos Entregues",
    description: "Implementações bem-sucedidas",
    icon: RiProjectorLine,
    duration: 1500
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime Garantido",
    description: "Disponibilidade contínua",
    icon: RiTimer2Line,
    duration: 1000
  },
  {
    value: 80,
    suffix: "+",
    label: "Clientes Satisfeitos",
    description: "Parceiros de sucesso",
    icon: RiUserSmileLine,
    duration: 1500
  },
  {
    value: 10,
    suffix: "+",
    label: "Anos de Experiência",
    description: "Expertise comprovada",
    icon: RiCalendarCheckLine,
    duration: 1000
  }
];

function AnimatedNumber({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Definir valor inicial baseado no valor final
          let start = value > 90 ? 98 : 0;
          const end = value;
          
          // Ajustes específicos para diferentes faixas de valores
          const steps = value > 90 ? 20 : // Menos steps para números altos
                       value > 50 ? 30 :
                       40;
          
          const increment = (end - start) / steps;
          const intervalTime = Math.min(duration / steps, 50); // Máximo de 50ms por step
          
          const timer = setInterval(() => {
            start = Math.min(start + increment, end);
            setCount(start);
            
            if (Math.abs(start - end) < 0.1) {
              setCount(end);
              clearInterval(timer);
            }
          }, intervalTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value, duration, hasAnimated]);

  // Formatação do número com precisão apropriada
  const formattedNumber = isNaN(count) ? 0 : 
    value === 99.9 ? count.toFixed(1) : // Caso específico para 99.9
    value > 90 ? Math.round(count).toString() :
    Number.isInteger(value) ? Math.round(count).toString() :
    count.toFixed(1);

  return (
    <span ref={elementRef} className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
      {formattedNumber}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative">
        <AnimatedElement type="fade">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="relative group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-card-hover transition-all duration-300 relative z-10">
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary-500" />
                      </div>
                      <AnimatedNumber 
                        value={stat.value} 
                        suffix={stat.suffix}
                        duration={stat.duration || 2000}
                      />
                      <h3 className="text-xl font-semibold text-text-primary mt-2">
                        {stat.label}
                      </h3>
                      <p className="text-text-secondary mt-1">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
