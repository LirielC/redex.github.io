"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RiInformationLine,
  RiShieldCheckLine,
  RiTimeLine,
  RiSettings4Line,
  RiArrowRightLine,
  RiCheckLine
} from "react-icons/ri";

type CookieType = {
  category: string;
  description: string;
  examples: string[];
  necessary: boolean;
};

const cookieTypes: CookieType[] = [
  {
    category: "Cookies Essenciais",
    description: "Necessários para o funcionamento básico do site. O site não funciona adequadamente sem estes cookies.",
    examples: [
      "Cookies de sessão para manter você conectado",
      "Cookies de segurança para proteção contra fraudes",
      "Cookies técnicos para funcionamento da interface"
    ],
    necessary: true
  },
  {
    category: "Cookies de Desempenho",
    description: "Nos ajudam a entender como os visitantes interagem com o site, fornecendo informações sobre as áreas visitadas, tempo de visita e problemas encontrados.",
    examples: [
      "Google Analytics",
      "Métricas de tempo de carregamento",
      "Análise de uso de funcionalidades"
    ],
    necessary: false
  },
  {
    category: "Cookies Funcionais",
    description: "Permitem que o site lembre de escolhas que você fez para proporcionar uma experiência mais personalizada.",
    examples: [
      "Preferências de idioma",
      "Localização geográfica",
      "Configurações de visualização"
    ],
    necessary: false
  },
  {
    category: "Cookies de Marketing",
    description: "Utilizados para rastrear visitantes em diferentes websites, permitindo a exibição de anúncios relevantes.",
    examples: [
      "Remarketing",
      "Análise de campanhas",
      "Personalização de anúncios"
    ],
    necessary: false
  }
];

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-primary-50 text-primary-600 rounded-full mb-4 text-sm font-medium">
                Transparência e Controle
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5">
                Política de Cookies
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Entenda como utilizamos cookies para melhorar sua experiência 
                e proteger sua privacidade em nosso site.
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement type="fade">
                {/* O que são Cookies */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                    <RiInformationLine className="text-primary-500" />
                    O que são Cookies?
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Cookies são pequenos arquivos de texto que são armazenados em seu 
                    dispositivo quando você visita um website. Eles servem para lembrar 
                    suas preferências, melhorar sua experiência e nos ajudar a entender 
                    como você utiliza nosso site.
                  </p>
                </div>

                {/* Tipos de Cookies */}
                <div className="space-y-8 mb-16">
                  <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                    <RiSettings4Line className="text-primary-500" />
                    Tipos de Cookies que Utilizamos
                  </h2>
                  
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className="bg-white border border-border-light rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="min-w-[24px] mt-1">
                          <RiCheckLine className="text-primary-500" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text-primary mb-2">
                            {cookie.category}
                            {cookie.necessary && (
                              <span className="ml-2 text-sm bg-primary-50 text-primary-600 px-2 py-1 rounded-full">
                                Necessário
                              </span>
                            )}
                          </h3>
                          <p className="text-text-secondary mb-4">{cookie.description}</p>
                          <div className="bg-background-secondary p-4 rounded-lg">
                            <p className="text-sm font-medium text-text-primary mb-2">Exemplos:</p>
                            <ul className="list-disc pl-4 text-sm text-text-secondary">
                              {cookie.examples.map((example, i) => (
                                <li key={i}>{example}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Como Gerenciar Cookies */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                    <RiTimeLine className="text-primary-500" />
                    Como Gerenciar Cookies
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Você pode gerenciar suas preferências de cookies através das configurações 
                    do seu navegador. Lembre-se que desabilitar certos cookies pode afetar 
                    a funcionalidade do site.
                  </p>
                  <div className="bg-background-secondary p-6 rounded-lg">
                    <p className="text-sm text-text-secondary mb-4">
                      Para gerenciar cookies, você pode:
                    </p>
                    <ul className="list-disc pl-6 text-sm text-text-secondary">
                      <li>Acessar as configurações do seu navegador</li>
                      <li>Selecionar a opção de privacidade/segurança</li>
                      <li>Encontrar a seção de cookies</li>
                      <li>Escolher suas preferências de cookies</li>
                    </ul>
                  </div>
                </div>

                {/* Contato para Dúvidas */}
                <div className="bg-background-secondary rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-primary-500">
                      <RiShieldCheckLine size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        Dúvidas sobre Cookies?
                      </h3>
                      <p className="text-text-secondary mb-4">
                        Se você tiver qualquer dúvida sobre como utilizamos cookies 
                        ou sobre suas configurações de privacidade, entre em contato conosco.
                      </p>
                      <Button asChild size="lg" className="gap-2">
                        <Link href="/contato">
                          Falar Conosco
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