import { Star, Heart, Lightbulb, Zap, GraduationCap, Code, Target, Clock, CheckCircle, ArrowRight, Calendar, MapPin, Award, Rocket, Briefcase, } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function About() {
  const values = [
    {
      icon: Zap,
      title: 'Automação',
      color: 'text-primary',
      description: 'Transformo processos repetitivos em soluções inteligentes e eficientes'
    },
    {
      icon: Lightbulb,
      title: 'Criatividade',
      color: 'text-accent',
      description: 'Busco sempre soluções inovadoras e maneiras novas de resolver problemas'
    },
    {
      icon: Heart,
      title: 'Excelência',
      color: 'text-red-400',
      description: 'Compromisso em entregar qualidade e clareza em cada projeto que desenvolvo'
    },
    {
      icon: Star,
      title: 'Propósito',
      color: 'text-yellow-400',
      description: 'Tudo que faço é guiado pela fé e pelo desejo de criar soluções que realmente importam'
    },
  ];

  const workMethod = [
    {
      step: 1,
      title: 'Explorar & Entender',
      description: 'Começo testando, quebrando problemas e entendendo a lógica por trás de cada desafio antes de tocar no código.',
      icon: Target,
      color: 'text-blue-500'
    },
    {
      step: 2,
      title: 'Experimentar & Planejar',
      description: 'Planejo como resolver de forma prática, escolho tecnologias que realmente fazem sentido e crio pequenos protótipos.',
      icon: Code,
      color: 'text-green-500'
    },
    {
      step: 3,
      title: 'Construir & Testar',
      description: 'Desenvolvo iterativamente, testando cada funcionalidade, ajustando rapidamente e garantindo que tudo seja útil de verdade.',
      icon: Clock,
      color: 'text-orange-500'
    },
    {
      step: 4,
      title: 'Refinar & Entregar',
      description: 'Finalizo com atenção a detalhes, documentação mínima mas clara, deploy funcional e soluções que realmente ajudam o usuário.',
      icon: CheckCircle,
      color: 'text-purple-500'
    }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Início da Faculdade em ADS',
      description: 'Comecei o curso de Análise e Desenvolvimento de Sistemas, mergulhando de cabeça no mundo da programação.',
      icon: GraduationCap,
      location: 'Claretiano'
    },
    {
      year: '2023',
      title: 'Primeiras Páginas e Joguinhos',
      description: 'Criei minhas primeiras páginas web e pequenos jogos, explorando HTML, CSS, JS e lógica de programação.',
      icon: Code,
      location: 'Autodidata'
    },
    {
      year: '2023',
      title: 'Cursos e Expansão de Conhecimentos',
      description: 'Aprofundei em tecnologias full-stack, estudando Node.js, React, bancos de dados e metodologias ágeis.',
      icon: Lightbulb,
      location: 'Estudos Avançados'
    },
    {
      year: '2024',
      title: 'Primeiro Projeto Full Stack (Estação para Faculdade)',
      description: 'Desenvolvi um sistema completo como projeto acadêmico, aplicando backend, frontend e banco de dados.',
      icon: Rocket,
      location: 'Acadêmico'
    },
    {
      year: '2025',
      title: 'Primeiro Sistema Real',
      description: 'Desenvolvi meu primeiro sistema para uso real, automatizando processos e entregando valor para usuários.',
      icon: Award,
      location: 'Freelancer'
    },
    {
      year: '2025 - Atual',
      title: 'Desenvolvedor Full Stack',
      description: 'Atuo profissionalmente desenvolvendo sistemas e sites, focando em automação, performance e soluções úteis.',
      icon: Briefcase,
      location: 'Profissional'
    }
  ];


  return (
    <section id="sobre" className="py-24 bg-light-bg-secondary dark:bg-dark-lighter relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-in" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-white transition-colors duration-300">
              Quem é o <span className="text-gradient">Vini</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo */}
          <AnimatedSection animation="slide-in-left" delay={200}>
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative hover-lift">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-30 scale-105"></div>
                <img
                  src="/images/foto_vinicius.png"
                  alt="Vinicius Moraes Tavares"
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 hover-magnetic"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Story */}
          <AnimatedSection animation="slide-in-right" delay={300}>
            <div className="order-1 lg:order-2 space-y-6 text-lg text-light-text-secondary dark:text-gray-300 leading-relaxed transition-colors duration-300">
              <p className="text-xl font-medium text-light-text-primary dark:text-white">
                Sou Vinicius, desenvolvedor full stack movido por <span className="text-primary font-semibold">curiosidade</span> e <span className="text-accent font-semibold">propósito</span>.
                Mineiro e cruzeirense, desde criança exploro tecnologia como quem decifra um mistério, dos videogames ao código.
                Hoje, transformo ideias em soluções reais, unindo <span className="text-primary font-semibold">criatividade</span>,
                <span className="text-accent font-semibold"> lógica</span> e <span className="text-primary font-semibold">fé</span>.
                Acredito que a tecnologia deve simplificar, automatizar e servir, tudo para a glória de Deus.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Professional Values */}
        <div className="mb-20">
          <AnimatedSection animation="slide-in-up" delay={400}>
            <h3 className="text-3xl font-bold text-center mb-12 text-light-text-primary dark:text-white">
              Meus <span className="text-gradient">Valores</span>
            </h3>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection 
                  key={index}
                  animation="scale-in"
                  delay={500 + (index * 100)}
                >
                  <div className="bg-light-card dark:bg-dark p-6 rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all duration-300 hover-lift hover-tilt group text-center click-effect">
                    <Icon className={`w-12 h-12 ${value.color} mb-4 mx-auto group-hover:scale-110 transition-transform hover-magnetic`} />
                    <h4 className="text-xl font-bold text-light-text-primary dark:text-gray-100 mb-2">{value.title}</h4>
                    <p className="text-sm text-light-text-secondary dark:text-gray-400">{value.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Work Method */}
        <div className="mb-20">
          <AnimatedSection animation="slide-in-up" delay={900}>
            <h3 className="text-3xl font-bold text-center mb-12 text-light-text-primary dark:text-white">
              Meu <span className="text-gradient">Método de Trabalho</span>
            </h3>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workMethod.map((method, index) => {
              const Icon = method.icon;
              return (
                <AnimatedSection 
                  key={index}
                  animation="slide-in-up"
                  delay={1000 + (index * 150)}
                >
                  <div className="relative">
                    <div className="bg-light-card dark:bg-dark p-6 rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all duration-300 hover-lift hover-border-expand group h-full click-effect">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 hover-magnetic">
                          {method.step}
                        </div>
                        <Icon className={`w-6 h-6 ${method.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <h4 className="text-lg font-bold text-light-text-primary dark:text-gray-100 mb-3">{method.title}</h4>
                      <p className="text-sm text-light-text-secondary dark:text-gray-400 leading-relaxed">{method.description}</p>
                    </div>
                    {index < workMethod.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-primary hover-magnetic" />
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Professional Timeline */}
        <div>
          <AnimatedSection animation="slide-in-up" delay={1600}>
            <h3 className="text-3xl font-bold text-center mb-12 text-light-text-primary dark:text-white">
              Minha <span className="text-gradient">Jornada</span>
            </h3>
          </AnimatedSection>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <AnimatedSection 
                    key={index}
                    animation={isEven ? "slide-in-left" : "slide-in-right"}
                    delay={1700 + (index * 200)}
                  >
                    <div className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="bg-light-card dark:bg-dark p-6 rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all duration-300 hover-lift hover-tilt click-effect">
                          <div className={`flex items-center mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
                            <Calendar className="w-4 h-4 text-primary mr-2 hover-magnetic" />
                            <span className="text-primary font-bold text-lg">{item.year}</span>
                          </div>
                          <h4 className="text-xl font-bold text-light-text-primary dark:text-gray-100 mb-2">{item.title}</h4>
                          <p className="text-light-text-secondary dark:text-gray-400 mb-3">{item.description}</p>
                          <div className={`flex items-center text-sm text-accent ${isEven ? 'justify-end' : 'justify-start'}`}>
                            <MapPin className="w-4 h-4 mr-1 hover-magnetic" />
                            {item.location}
                          </div>
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center border-4 border-light-bg-secondary dark:border-dark-lighter hover-lift hover-magnetic">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="w-1/2"></div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
