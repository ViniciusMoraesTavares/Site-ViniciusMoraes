import { Briefcase, GraduationCap, Rocket } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      year: '2023-2024',
      title: 'Estágio - Prefeitura de Rio Claro',
      description: 'Desenvolvimento e manutenção de sites institucionais, suporte técnico e participação em sistema em Node.js.',
      icon: Briefcase,
      color: 'from-accent to-accent-dark',
    },
    {
      year: '2024-Atual',
      title: 'Desenvolvedor Full Stack - Myelin',
      description: 'Criação e manutenção de sistemas e sites institucionais utilizando Node.js, React, TypeScript, HTML, CSS, MySQL e PostgreSQL. Foco em automação de processos e deploys.',
      icon: Rocket,
      color: 'from-primary to-primary-dark',
    },
    {
      year: '2025',
      title: 'Formação Acadêmica',
      description: 'Conclusão do curso de Análise e Desenvolvimento de Sistemas - Faculdade Claretiano.',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="trajetoria" className="py-24 bg-light-bg dark:bg-dark relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-white transition-colors duration-300">
            Minha <span className="text-gradient">Trajetória</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-purple-500"></div>

          <div className="space-y-12">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-light-card dark:bg-dark-lighter p-6 rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all duration-300 card-hover">
                      <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-sm mb-4`}>
                        {event.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-light-text-primary dark:text-gray-100 transition-colors duration-300">{event.title}</h3>
                      <p className="text-light-text-secondary dark:text-gray-400 leading-relaxed transition-colors duration-300">{event.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="w-full md:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
