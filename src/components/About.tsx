import { Coffee, Heart, Lightbulb, Zap } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Zap, title: 'Automação', color: 'text-primary' },
    { icon: Lightbulb, title: 'Criatividade', color: 'text-accent' },
    { icon: Heart, title: 'Excelência', color: 'text-red-400' },
    { icon: Coffee, title: 'Café', color: 'text-amber-400' },
  ];

  return (
    <section id="sobre" className="py-24 bg-light-bg-secondary dark:bg-dark-lighter relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-white transition-colors duration-300">
            Quem é o <span className="text-gradient">Vini</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-light-text-secondary dark:text-gray-300 leading-relaxed transition-colors duration-300">
            <p>
              Meu interesse por tecnologia começou cedo, pela curiosidade de entender como as coisas funcionam.
            </p>
            <p>
              Hoje, sou um desenvolvedor full stack que ama transformar ideias em soluções reais — de sistemas internos a sites modernos e bem pensados.
            </p>
            <p>
              Valorizo <span className="text-primary font-semibold">responsabilidade</span>, <span className="text-accent font-semibold">excelência</span> e <span className="text-primary font-semibold">criatividade</span>. Busco sempre automatizar e simplificar processos, sem abrir mão de qualidade e modernidade.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-light-card dark:bg-dark p-6 rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all duration-300 card-hover group"
                >
                  <Icon className={`w-10 h-10 ${value.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-bold text-light-text-primary dark:text-gray-100 transition-colors duration-300">{value.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
