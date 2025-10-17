import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-dark-border py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="font-semibold text-gradient">Vinicius Moraes</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Desenvolvido com</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>e muito café</span>
          </div>

          <div className="text-gray-500 text-sm">
            © {currentYear} Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
}
