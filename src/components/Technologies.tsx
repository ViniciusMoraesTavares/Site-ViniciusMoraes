import { Database, Code, Layers, Wrench } from 'lucide-react';

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
    <section id="tecnologias" className="py-24 bg-light-bg dark:bg-dark relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-white transition-colors duration-300">
            Stack e <span className="text-gradient">Ferramentas</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techStack.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <div
                key={index}
                className={`bg-light-card dark:bg-dark-lighter p-8 rounded-xl border ${stack.borderColor} hover:border-opacity-100 transition-all duration-300 card-hover`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-light-hover dark:bg-dark rounded-lg transition-colors duration-300">
                    <Icon className={`w-8 h-8 ${stack.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-light-text-primary dark:text-gray-100 transition-colors duration-300">{stack.category}</h3>
                </div>

                <div className="space-y-4">
                  {stack.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="group p-4 bg-light-hover dark:bg-dark rounded-lg border border-light-border dark:border-dark-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-light-text-primary dark:text-gray-100 mb-1 group-hover:text-primary transition-colors">
                            {tech.name}
                          </h4>
                          <p className="text-sm text-light-text-secondary dark:text-gray-400 transition-colors duration-300">{tech.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
