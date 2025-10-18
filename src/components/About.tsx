import { Star, Heart, Lightbulb, Zap, GraduationCap, Code, Target, Clock, CheckCircle, ArrowRight, Calendar, MapPin, Award, Rocket, Briefcase, } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { LazyImage } from './LazyImage';

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
    <section id="sobre" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      {/* Padrões de fundo estratégicos para profundidade */}
      <div className="absolute inset-0 depth-pattern-organic opacity-30 dark:opacity-60"></div>
      <div className="absolute inset-0 texture-noise opacity-20 dark:opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-50/50 to-transparent dark:from-purple-900/20 dark:to-transparent"></div>
      
      {/* Elementos de profundidade com camadas */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-100/30 dark:bg-primary/10 rounded-full blur-3xl depth-layer-1"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-100/20 dark:bg-accent/5 rounded-full blur-3xl depth-layer-2"></div>
      <div className="absolute top-1/2 right-1/6 w-48 h-48 bg-indigo-100/25 dark:bg-primary/8 rounded-full blur-2xl depth-layer-3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-in" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-display-md mb-6">
              <span className="gradient-text-primary">Sobre Mim</span>
            </h2>
            <p className="text-heading-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-500">
              Desenvolvedor apaixonado por criar soluções que fazem a diferença
            </p>
          </div>
        </AnimatedSection>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo */}
          <AnimatedSection animation="slide-in-left" delay={200}>
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative hover-lift">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-20 dark:opacity-40 scale-105 transition-opacity duration-500"></div>
                <LazyImage
                  src="/images/foto_vinicius.png"
                  alt="Vinicius Moraes Tavares"
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-xl dark:shadow-2xl border-4 border-gray-200 dark:border-gray-700 hover-magnetic transition-all duration-500"
                  threshold={0.1}
                  rootMargin="100px"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Story */}
          <AnimatedSection animation="slide-in-right" delay={300}>
            <div className="order-1 lg:order-2 space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-500">
              <p className="text-xl font-medium text-gray-800 dark:text-white transition-colors duration-500">
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
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-colors duration-500">
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
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover-lift hover-tilt group text-center click-effect shadow-sm dark:shadow-lg">
                    <Icon className={`w-12 h-12 ${value.color} mb-4 mx-auto group-hover:scale-110 transition-transform hover-magnetic`} />
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-500">{value.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">{value.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Work Method */}
        <div className="mb-20">
          <AnimatedSection animation="slide-in-up" delay={900}>
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-colors duration-500">
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
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover-lift hover-border-expand group h-full click-effect shadow-sm dark:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 hover-magnetic">
                          {method.step}
                        </div>
                        <Icon className={`w-6 h-6 ${method.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3 transition-colors duration-500">{method.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">{method.description}</p>
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
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-colors duration-500">
              Minha <span className="text-gradient">Jornada</span>
            </h3>
          </AnimatedSection>
          <div className="relative">
            {/* Timeline line - centralizada para todos os tamanhos */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>

            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <AnimatedSection 
                    key={index}
                    animation="fade-in"
                    delay={1700 + (index * 200)}
                  >
                    <div className="relative">
                      {/* Layout Mobile e Tablet - Cards centralizados */}
                      <div className="block lg:hidden">
                        <div className="flex flex-col items-center">
                          {/* Ícone central */}
                          <div className="flex-shrink-0 mb-6 z-10 relative">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900 hover-lift hover-magnetic transition-all duration-500 shadow-lg">
                              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                            </div>
                          </div>
                          
                          {/* Card centralizado */}
                          <div className="w-full max-w-md mx-auto px-4">
                            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover-lift hover-tilt click-effect shadow-sm dark:shadow-lg text-center">
                              <div className="flex items-center justify-center mb-4">
                                <Calendar className="w-4 h-4 text-primary mr-2 hover-magnetic" />
                                <span className="text-primary font-bold text-lg">{item.year}</span>
                              </div>
                              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-500 leading-tight">{item.title}</h4>
                              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-500 leading-relaxed">{item.description}</p>
                              <div className="flex items-center justify-center text-sm text-accent">
                                <MapPin className="w-4 h-4 mr-1 hover-magnetic" />
                                {item.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Layout Desktop - Alternado */}
                      <div className="hidden lg:flex items-center">
                        <div className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                          <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover-lift hover-tilt click-effect shadow-sm dark:shadow-lg">
                              <div className={`flex items-center mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                <Calendar className="w-4 h-4 text-primary mr-2 hover-magnetic" />
                                <span className="text-primary font-bold text-lg">{item.year}</span>
                              </div>
                              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-500">{item.title}</h4>
                              <p className="text-gray-600 dark:text-gray-400 mb-3 transition-colors duration-500">{item.description}</p>
                              <div className={`flex items-center text-sm text-accent ${isEven ? 'justify-end' : 'justify-start'}`}>
                                <MapPin className="w-4 h-4 mr-1 hover-magnetic" />
                                {item.location}
                              </div>
                            </div>
                          </div>

                          {/* Timeline dot desktop */}
                          <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900 hover-lift hover-magnetic transition-all duration-500">
                            <Icon className="w-6 h-6 text-white" />
                          </div>

                          <div className="w-1/2"></div>
                        </div>
                      </div>
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
