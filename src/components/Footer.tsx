import { FaCode, FaHome, FaUser, FaBriefcase, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
  };

  const navigationLinks = [
    { id: 'inicio', label: 'Home', icon: FaHome },
    { id: 'sobre', label: 'Sobre', icon: FaUser },
    { id: 'projetos', label: 'Projetos', icon: FaBriefcase },
    { id: 'contato', label: 'Contato', icon: FaEnvelope },
  ];

  const socialLinks = [
    { 
      href: 'https://github.com/ViniciusMoraesTavares', 
      icon: FaGithub, 
      label: 'GitHub',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    { 
      href: 'https://www.linkedin.com/in/vinicius-moraes-25992b217/', 
      icon: FaLinkedin, 
      label: 'LinkedIn',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    { 
      href: 'https://www.instagram.com/vini.mooraes/', 
      icon: FaInstagram, 
      label: 'Instagram',
      color: 'hover:text-pink-600 dark:hover:text-pink-400'
    },
    { 
      href: 'https://wa.me/5519982457962?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site', 
      icon: FaWhatsapp, 
      label: 'WhatsApp',
      color: 'hover:text-green-600 dark:hover:text-green-400'
    },
    { 
      href: 'mailto:viniciusmoraestavares2020@gmail.com', 
      icon: FaEnvelope, 
      label: 'Email',
      color: 'hover:text-blue-500 dark:hover:text-blue-300'
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-light-bg via-light-bg to-gray-50 dark:from-dark dark:via-dark dark:to-gray-900 border-t border-light-border dark:border-dark-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg shadow-lg flex items-center justify-center">
                <img 
                  src="/images/vini-ico.png" 
                  alt="Vinicius Moraes" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gradient bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Vinicius Moraes
                </h3>
                <p className="text-sm text-light-text-secondary dark:text-gray-400">
                  Desenvolvedor Full Stack
                </p>
              </div>
            </div>
            
            {/* Fun Quote - Destacada */}
            <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 dark:from-primary/20 dark:to-blue-600/20 p-4 rounded-lg border border-primary/20 dark:border-primary/30 shadow-sm">
              <p className="text-sm font-medium text-primary dark:text-blue-400 leading-relaxed">
                "Assim, quer vocês comam, bebam ou façam qualquer outra coisa, façam tudo para a glória de Deus." 1Co 10:31
              </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="space-y-4">
            <h4 className="font-semibold text-light-text dark:text-white text-lg">Navegação</h4>
            <nav className="space-y-2">
              {navigationLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center gap-2 text-light-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1 group"
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-light-text dark:text-white text-lg">Contato</h4>
            <div className="space-y-3">
              <a 
                href="mailto:viniciusmoraestavares2020@gmail.com" 
                className="flex items-center gap-2 text-light-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 group"
              >
                <FaEnvelope className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">viniciusmoraestavares2020@gmail.com</span>
              </a>
              <a 
                href="tel:+5519982457962" 
                className="flex items-center gap-2 text-light-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 group"
              >
                <FaWhatsapp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm"> (19) 98245-7962</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-light-text dark:text-white text-lg">Redes Sociais</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-light-card dark:bg-gray-800 rounded-lg border border-light-border dark:border-gray-700 text-light-text-secondary dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 group`}
                    title={social.label}
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-light-border dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-light-text-secondary dark:text-gray-400 text-sm">
              © {currentYear} Vinicius Moraes. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-2 text-light-text-secondary dark:text-gray-400 text-sm">
              <span>Compilado com café, fé e uns palpites aleatórios da IA ☕⚡</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}