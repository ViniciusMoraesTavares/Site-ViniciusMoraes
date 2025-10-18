import { Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-bg dark:bg-dark border-t border-light-border dark:border-dark-border py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-light-text-secondary dark:text-gray-400 transition-colors duration-300">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="font-semibold text-gradient">Vinicius Moraes</span>
          </div>

          <div className="flex items-center gap-2 text-light-text-secondary dark:text-gray-400 text-sm transition-colors duration-300">
            <span>Compilado com café, fé e uns palpites aleatórios da IA ☕⚡</span>
          </div>

          <div className="text-light-text-secondary dark:text-gray-500 text-sm transition-colors duration-300">
            © {currentYear} Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
}