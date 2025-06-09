"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { RiTeamLine, RiMedalLine, RiHeartLine, RiPieChart2Line, RiStarFill } from "react-icons/ri";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
                Nossa História
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5">Sobre a Redex Cloud</h1>
              <p className="text-lg text-text-secondary mb-8">
                Somos uma consultoria especializada em arquitetura de redes, dedicada a transformar a infraestrutura
                tecnológica de empresas através de soluções inovadoras e eficientes.
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedElement type="slide-right">
                <h2 className="text-3xl font-bold text-text-primary mb-6">Nossa Trajetória</h2>
                <p className="text-text-secondary mb-6">
                  Fundada em 2012 por um grupo de engenheiros apaixonados por tecnologia, a Redex Cloud nasceu
                  com a missão de oferecer consultoria de alto nível em arquitetura de redes para empresas de todos os portes.
                </p>
                <p className="text-text-secondary mb-6">
                  Ao longo dos anos, expandimos nossa equipe e áreas de atuação, incorporando especialistas
                  em segurança, automação de redes e soluções em nuvem, sempre acompanhando as tendências e
                  inovações do mercado.
                </p>
                <p className="text-text-secondary">
                  Hoje, somos reconhecidos por entregar projetos complexos com excelência, mantendo um
                  relacionamento próximo e transparente com nossos clientes, o que nos permitiu crescer
                  de forma consistente e sustentável.
                </p>
              </AnimatedElement>

              <AnimatedElement type="slide-left" delay={0.2}>
                <div className="bg-background-tertiary rounded-xl overflow-hidden shadow-elegant p-8">
                  <div className="relative">
                    <div className="w-full h-auto bg-gradient-primary rounded-lg p-8 text-white">
                      <h3 className="text-2xl font-bold mb-6 text-center">Timeline da Nossa Jornada</h3>
                      <div className="space-y-8 mt-8 relative">
                        {/* Linha vertical */}
                        <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-white/30"></div>

                        <TimelineItem
                          year="2012"
                          title="Fundação da empresa"
                          description="Início da operação com foco em redes locais"
                        />
                        <TimelineItem
                          year="2014"
                          title="Expansão para segurança"
                          description="Incorporação de serviços de segurança de redes"
                        />
                        <TimelineItem
                          year="2016"
                          title="Certificação ISO"
                          description="Primeira certificação ISO 9001 e ISO 27001"
                        />
                        <TimelineItem
                          year="2019"
                          title="Integração com nuvem"
                          description="Serviços de integração com plataformas cloud"
                        />
                        <TimelineItem
                          year="2023"
                          title="Automação de redes"
                          description="Lançamento da divisão de automação de redes"
                        />
                      </div>
                    </div>

                    {/* Elemento decorativo */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full -z-10"></div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20 bg-background-secondary" id="valores">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
                Nossos Princípios
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">Valores que nos guiam</h2>
              <p className="text-text-secondary">
                Nossos valores fundamentais orientam todas as nossas decisões e interações, tanto com nossos clientes quanto entre nossa equipe.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <AnimatedElement type="slide-up" delay={0.1}>
                <ValueCard
                  icon={<RiMedalLine size={28} />}
                  title="Excelência"
                  description="Buscamos a qualidade máxima em todos os projetos e soluções que desenvolvemos."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <ValueCard
                  icon={<RiTeamLine size={28} />}
                  title="Colaboração"
                  description="Trabalhamos juntos, compartilhando conhecimento e ideias para alcançar os melhores resultados."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <ValueCard
                  icon={<RiHeartLine size={28} />}
                  title="Integridade"
                  description="Agimos com ética, transparência e honestidade em todos os relacionamentos."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.4}>
                <ValueCard
                  icon={<RiPieChart2Line size={28} />}
                  title="Inovação"
                  description="Estamos constantemente buscando novas tecnologias e abordagens para resolver desafios."
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="py-20 bg-white" id="equipe">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
                Nossos Especialistas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">Conheça Nossa Equipe</h2>
              <p className="text-text-secondary">
                Contamos com profissionais altamente qualificados e certificados nas principais tecnologias do mercado.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <AnimatedElement type="slide-up" delay={0.1}>
                <TeamMember
                  name="Melyssa Souza"
                  position="CEO & Fundadora"
                  bio="Especialista em redes com mais de 15 anos de experiência e certificações CCIE e CISSP."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.2}>
                <TeamMember
                  name="Liriel Castro"
                  position="Diretora de Operações"
                  bio="Mestre em segurança da informação com vasta experiência em gestão de projetos complexos."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.3}>
                <TeamMember
                  name="Marcelo Avelino"
                  position="Arquiteto de Soluções"
                  bio="Especialista em automação e implementação de redes SDN com certificações AWS e Azure."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.4}>
                <TeamMember
                  name="Luisa Guedes"
                  position="Especialista em Segurança"
                  bio="Profissional com amplo conhecimento em cibersegurança e conformidade com normativas internacionais."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.5}>
                <TeamMember
                  name="Gabriela Martins"
                  position="Engenheira de Redes Sênior"
                  bio="Especialista em infraestrutura com foco em alta disponibilidade e redundância."
                />
              </AnimatedElement>

              <AnimatedElement type="slide-up" delay={0.6}>
                <TeamMember
                  name="Julia Nunes"
                  position="Consultora de Cloud"
                  bio="Especialista em soluções híbridas e migração de infraestrutura para nuvem."
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Certificações */}
        <section className="py-20 bg-background-secondary" id="certificacoes">
          <div className="container mx-auto px-4">
            <AnimatedElement type="fade" className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
                Reconhecimento
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
                Certificações e Parcerias
              </h2>
              <p className="text-text-secondary">
                Somos parceiros certificados das principais empresas de tecnologia do mercado,
                garantindo acesso às melhores soluções e suporte técnico especializado.
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
              {/* Aqui seriam inseridos logos das certificações e parceiros kkkkk */}
              <Partner name="Cisco" />
              <Partner name="Microsoft" />
              <Partner name="AWS" />
              <Partner name="Fortinet" />
              <Partner name="VMware" />
              <Partner name="Palo Alto" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function TimelineItem({
  year,
  title,
  description
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-3.5 h-3.5 rounded-full bg-white z-10"></div>
      </div>
      <div className="flex-1 -mt-2">
        <div className="flex items-center gap-3 mb-1">
          <span className="font-bold text-lg">{year}</span>
          <div className="h-px w-6 bg-white/50"></div>
          <h4 className="font-semibold">{title}</h4>
        </div>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-elegant border border-border-light hover:shadow-card-hover transition-all duration-300 h-full">
      <div className="text-primary-500 mb-6 bg-primary-50 w-16 h-16 flex items-center justify-center rounded-lg">
        {icon}
      </div>
      <h3 className="font-semibold text-xl text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}

function TeamMember({
  name,
  position,
  bio
}: {
  name: string;
  position: string;
  bio: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-elegant border border-border-light hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
      <div className="mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
          <span className="text-2xl font-bold">{name.split(' ').map(n => n[0]).join('')}</span>
        </div>
        <h3 className="font-semibold text-xl text-text-primary mb-1 text-center">{name}</h3>
        <p className="text-primary-600 font-medium mb-2 text-center">{position}</p>

        <div className="flex justify-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <RiStarFill key={i} className="text-yellow-400" size={16} />
          ))}
        </div>
      </div>

      <div className="bg-background-tertiary p-4 rounded-lg mt-auto">
        <p className="text-text-secondary text-sm">{bio}</p>
      </div>
    </div>
  );
}

function Partner({
  name
}: {
  name: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white h-20 rounded-lg shadow-elegant flex items-center justify-center p-4 hover:shadow-card-hover transition-all duration-300 border border-border-light"
    >
      <div className="text-primary-600 font-semibold">{name}</div>
    </motion.div>
  );
}
