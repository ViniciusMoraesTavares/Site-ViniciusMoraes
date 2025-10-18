import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      <div className="absolute inset-0 texture-organic opacity-30"></div>

      {/* Elementos de fundo com efeito parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)`,
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 dark:bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * -0.15}px)`,
          }}
        ></div>
        
        {/* Elementos parallax adicionais */}
        <div 
          className="absolute top-1/2 left-1/6 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
          style={{
            transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.1}deg)`,
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-primary/8 rounded-full blur-2xl"
          style={{
            transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.1}deg)`,
          }}
        ></div>
      </div>

      <div 
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="glass-card glass-card-dark p-8 rounded-3xl mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase text-micro">Desenvolvedor Full Stack</span>
            <Sparkles className="w-6 h-6 text-primary/70" />
          </div>

          <h1 className="text-display-xl mb-6 animate-fade-in-up">
            <span className="gradient-text-primary glow">Vinicius Moraes</span>
          </h1>

          <p className="text-heading-lg text-light-text-primary dark:text-gray-300 mb-8 animate-fade-in-up delay-200 transition-colors duration-300">
            Automação, modernidade e criatividade a serviço de soluções reais
          </p>

          <p className="text-body-lg text-light-text-secondary dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300 transition-colors duration-300">
            Sou o Vini, desenvolvedor full stack com foco em backend. Gosto de criar soluções que tornam o trabalho das pessoas mais fácil e inteligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <button
              onClick={() => scrollToSection('projetos')}
              className="modern-button group flex items-center justify-center gap-2"
            >
              Ver Projetos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contato')}
              className="glass-button px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              Entrar em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
