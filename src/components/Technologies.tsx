import { Database, Code, Layers, Wrench } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Technologies() {
  const techStack = [
    {
      category: 'Backend',
      icon: Database,
      color: 'text-primary',
      borderColor: 'border-primary/30',
      technologies: [
        { name: 'Node.js', description: 'Runtime JavaScript server-side' },
        { name: 'Express', description: 'Framework web minimalista' },
        { name: 'NestJS', description: 'Framework progressivo e escalável' },
        { name: 'Python', description: 'FastAPI para APIs rápidas' },
      ],
    },
    {
      category: 'Frontend',
      icon: Code,
      color: 'text-accent',
      borderColor: 'border-accent/30',
      technologies: [
        { name: 'React', description: 'Biblioteca para interfaces' },
        { name: 'Next.js', description: 'Framework React full-stack' },
        { name: 'TypeScript', description: 'JavaScript com tipagem' },
        { name: 'Tailwind CSS', description: 'Framework CSS utility-first' },
      ],
    },
    {
      category: 'Banco de Dados',
      icon: Layers,
      color: 'text-purple-400',
      borderColor: 'border-purple-400/30',
      technologies: [
        { name: 'PostgreSQL', description: 'Banco relacional avançado' },
        { name: 'MySQL', description: 'Banco relacional popular' },
        { name: 'Redis', description: 'Cache e armazenamento em memória' },
      ],
    },
    {
      category: 'Ferramentas',
      icon: Wrench,
      color: 'text-amber-400',
      borderColor: 'border-amber-400/30',
      technologies: [
        { name: 'Git', description: 'Controle de versão' },
        { name: 'Vercel', description: 'Deploy e hospedagem' },
        { name: 'AWS', description: 'Cloud computing' },
        { name: 'CI/CD', description: 'Integração e entrega contínua' },
      ],
    },
  ];

  return (
    <section id="tecnologias" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.3)_1px,_transparent_0)] bg-[length:20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.5)_1px,_transparent_0)]"></div>
      </div>
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/40 dark:bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 dark:bg-accent/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection animation="slide-in-up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-heading-xl mb-4 text-gray-800 dark:text-white transition-colors duration-500">
              Stack e <span className="gradient-text-accent">Ferramentas</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {techStack.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <AnimatedSection 
                key={index}
                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                delay={200 + (index * 150)}
              >
                <div
                  className={`bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border ${stack.borderColor} hover:border-opacity-100 transition-all duration-500 hover-lift hover-border-expand shadow-lg dark:shadow-xl`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg transition-colors duration-500 hover-magnetic">
                      <Icon className={`w-8 h-8 ${stack.color}`} />
                    </div>
                    <h3 className="text-heading-md text-gray-800 dark:text-gray-100 transition-colors duration-500">{stack.category}</h3>
                  </div>

                  <div className="space-y-md">
                    {stack.technologies.map((tech, i) => (
                      <AnimatedSection
                        key={i}
                        animation="scale-in"
                        delay={400 + (index * 150) + (i * 100)}
                      >
                        <div className="group bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-500 cursor-pointer hover-tilt click-effect shadow-sm dark:shadow-md">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-body-lg font-bold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-primary transition-colors duration-500">
                                {tech.name}
                              </h4>
                              <p className="text-caption text-gray-600 dark:text-gray-400 transition-colors duration-500">{tech.description}</p>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
