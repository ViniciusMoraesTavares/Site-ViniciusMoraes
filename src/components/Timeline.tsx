import { Briefcase, GraduationCap, Rocket } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Timeline() {
  const events = [
    {
      year: '2023-2025',
      title: 'Formação Acadêmica',
      description: 'Curso de Análise e Desenvolvimento de Sistemas - Faculdade Claretiano.',
      icon: GraduationCap,
      color: 'from-purple-600 to-pink-600',
    },
    {
      year: '2023-2024',
      title: 'Estágio - Prefeitura de Rio Claro',
      description: 'Desenvolvimento e manutenção de sites institucionais, suporte técnico e participação em sistema em Node.js.',
      icon: Briefcase,
      color: 'from-emerald-600 to-teal-700',
    },
    {
      year: '2025-Atual',
      title: 'Desenvolvedor Full Stack - Myelin',
      description: 'Criação e manutenção de sistemas e sites institucionais utilizando Node.js, React, TypeScript, HTML, CSS, MySQL e PostgreSQL. Foco em automação de processos e deploys.',
      icon: Rocket,
      color: 'from-blue-600 to-indigo-700',
    },
  ];

  return (
    <section id="trajetoria" className="py-16 sm:py-20 lg:py-24 bg-light-bg dark:bg-dark relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-light-text-primary dark:text-white transition-colors duration-300">
              Minha <span className="text-gradient">Trajetória</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Linha vertical central para todos os tamanhos */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-purple-500"></div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <AnimatedSection 
                  key={index}
                  animation="fade-in"
                  delay={300 + index * 200}
                >
                  <div className="relative">
                    {/* Layout Mobile e Tablet - Cards centralizados */}
                    <div className="block lg:hidden">
                      <div className="flex flex-col items-center">
                        {/* Ícone central */}
                        <div className="flex-shrink-0 mb-6 z-10 relative">
                          <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg`}>
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Card centralizado */}
                        <div className="w-full max-w-md mx-auto px-4">
                          <div className="bg-light-card dark:bg-dark-lighter p-6 sm:p-8 rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all duration-300 card-hover shadow-sm hover:shadow-md text-center">
                            <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-sm mb-4`}>
                              {event.year}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-light-text-primary dark:text-gray-100 transition-colors duration-300 leading-tight">
                              {event.title}
                            </h3>
                            <p className="text-base sm:text-lg text-light-text-secondary dark:text-gray-400 leading-relaxed transition-colors duration-300">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Layout Desktop - Alternado com alinhamento perfeito */}
                    <div className="hidden lg:block">
                      <div className="relative flex items-center min-h-[200px]">
                        {/* Card do lado esquerdo */}
                        <div className={`absolute ${isLeft ? 'left-0 right-1/2 pr-12' : 'left-1/2 right-0 pl-12'}`}>
                          <div className={`${isLeft ? 'text-right' : 'text-left'}`}>
                            <div className="bg-light-card dark:bg-dark-lighter p-6 lg:p-8 rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all duration-300 card-hover shadow-sm hover:shadow-md">
                              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-sm mb-4`}>
                                {event.year}
                              </div>
                              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-light-text-primary dark:text-gray-100 transition-colors duration-300 leading-tight">
                                {event.title}
                              </h3>
                              <p className="text-base lg:text-lg text-light-text-secondary dark:text-gray-400 leading-relaxed transition-colors duration-300">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Ícone central - posicionado absolutamente no centro */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                          <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900`}>
                            <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
