import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar seção ativa
      const sections = ['inicio', 'sobre', 'trajetoria', 'projetos', 'tecnologias', 'contato'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } else {
      // Fallback para scroll para o topo se o elemento não for encontrado
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-light-bg/95 dark:bg-dark/95 backdrop-blur-xl shadow-xl border-b border-light-border/50 dark:border-dark-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#inicio');
            }}
            className="flex items-center gap-2 font-bold text-xl group"
          >
            <Code2 className="w-6 h-6 text-primary group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-gradient">Vini Dev</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`font-medium transition-all duration-300 relative group ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-light-text-secondary dark:text-gray-300 hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              );
            })}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-light-card dark:bg-dark-lighter border border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-300 group"
              aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-light-text-secondary dark:text-gray-300 group-hover:text-primary transition-colors" />
              ) : (
                <Sun className="w-5 h-5 text-light-text-secondary dark:text-gray-300 group-hover:text-primary transition-colors" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-light-card dark:bg-dark-lighter border border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-300"
              aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-light-text-secondary dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-light-text-secondary dark:text-gray-300" />
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-light-text-secondary dark:text-gray-300 hover:text-primary transition-colors"
              aria-label="Menu de navegação"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-light-card/95 dark:bg-dark-lighter/95 backdrop-blur-xl border-t border-light-border/50 dark:border-dark-border/50">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`block font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-light-text-secondary dark:text-gray-300 hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
