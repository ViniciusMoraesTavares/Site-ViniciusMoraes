import { ArrowRight, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark opacity-90"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
          <Code2 className="w-6 h-6 text-primary" />
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Desenvolvedor Full Stack</span>
          <Sparkles className="w-6 h-6 text-accent" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="text-gradient glow">Vinicius Moraes</span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold animate-fade-in-up delay-200">
          Automação, modernidade e criatividade a serviço de soluções reais
        </p>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
          Sou o Vini, desenvolvedor full stack com foco em backend. Gosto de criar soluções que tornam o trabalho das pessoas mais fácil e inteligente.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
          <button
            onClick={() => scrollToSection('projetos')}
            className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-dark font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
          >
            Ver Projetos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('contato')}
            className="px-8 py-4 bg-dark-lighter border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-dark transition-all duration-300 shadow-lg"
          >
            Entrar em Contato
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
