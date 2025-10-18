import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import ParticleSystem from './ParticleSystem';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-bg via-light-bg-secondary to-light-accent dark:from-dark-bg dark:via-dark-lighter dark:to-dark-accent perspective-container">
      {/* Sistema de Partículas Dinâmico */}
      <ParticleSystem
        particleCount={60}
        colors={['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B']}
        speed={0.8}
        size={{ min: 1, max: 4 }}
        opacity={{ min: 0.1, max: 0.7 }}
        interactive={true}
        className="z-0"
      />

      {/* Elementos de fundo com parallax 3D */}
      <div 
        className="absolute inset-0 opacity-30 parallax-3d-layer-1"
        style={{
          transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0) translateY(${scrollY * 0.1}px)`
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl depth-layer-1"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-2xl depth-layer-2"></div>
      </div>

      <div 
        className="absolute inset-0 opacity-20 parallax-3d-layer-2"
        style={{
          transform: `translate3d(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px, 0) translateY(${scrollY * 0.2}px)`
        }}
      >
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-primary/25 rounded-full blur-xl depth-layer-3"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-accent/20 rounded-full blur-2xl depth-layer-1"></div>
      </div>

      {/* Padrões de fundo estratégicos */}
      <div className="absolute inset-0 depth-pattern-dots opacity-40"></div>
      <div className="absolute inset-0 texture-noise opacity-30"></div>

      {/* Círculos animados com efeitos 3D */}
      <div 
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl animate-float float-3d"
        style={{
          transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, 10px) translateY(${scrollY * 0.15}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-l from-accent/40 to-primary/40 rounded-full blur-lg animate-pulse float-3d"
        style={{
          transform: `translate3d(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px, 20px) translateY(${scrollY * 0.1}px)`
        }}
      ></div>
      <div 
        className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-br from-primary/50 to-accent/50 rounded-full blur-md animate-bounce float-3d"
        style={{
          transform: `translate3d(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px, 15px) translateY(${scrollY * 0.25}px)`
        }}
      ></div>

      {/* Conteúdo principal com efeitos 3D */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto transform-3d">
        <div 
          className="glass-card glass-3d p-8 rounded-3xl mb-8 card-3d layered-depth depth-shadow-strong"
          style={{
            transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 30px) translateY(${scrollY * 0.05}px)`
          }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-accent text-white text-sm font-medium rounded-full mb-6 isometric">
            Desenvolvedor Full Stack
          </span>
        </div>
        
        <h1 
          className="text-6xl md:text-8xl font-bold mb-6 text-light-text-primary dark:text-white leading-tight transform-3d"
          style={{
            transform: `translate3d(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px, 40px) translateY(${scrollY * 0.03}px)`
          }}
        >
          <span className="gradient-text-primary">Vinicius</span><br />
          <span className="gradient-text-accent">Moraes</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-light-text-secondary dark:text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto transform-3d"
          style={{
            transform: `translate3d(${mousePosition.x * 0.006}px, ${mousePosition.y * 0.006}px, 35px) translateY(${scrollY * 0.04}px)`
          }}
        >
          Transformo ideias em soluções digitais inovadoras, criando experiências que conectam tecnologia e propósito
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center transform-3d"
          style={{
            transform: `translate3d(${mousePosition.x * 0.004}px, ${mousePosition.y * 0.004}px, 25px) translateY(${scrollY * 0.06}px)`
          }}
        >
          <button 
            onClick={() => scrollToSection('projetos')}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 card-3d isometric scroll-interactive"
          >
            Ver Projetos
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="px-8 py-4 border-2 border-primary text-primary dark:text-white font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 card-3d scroll-interactive"
          >
            Entrar em Contato
          </button>
        </div>
      </div>

      {/* Indicador de scroll com efeito 3D */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer transform-3d"
        onClick={() => scrollToSection('sobre')}
        style={{
          transform: `translate3d(-50%, ${mousePosition.y * 0.02}px, 20px) translateY(${scrollY * 0.1}px)`
        }}
      >
        <ChevronDown className="w-8 h-8 text-light-text-secondary dark:text-gray-400 rotate-3d-hover" />
      </div>
    </section>
  );
}