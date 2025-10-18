import { FaEnvelope, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const contacts = [
    {
      icon: FaEnvelope,
      label: 'E-mail',
      value: 'viniciusmoraestavares2020@gmail.com',
      href: 'mailto:viniciusmoraestavares2020@gmail.com',
      color: 'text-primary',
      hoverColor: 'hover:bg-primary/10 hover:border-primary',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '(19) 98245-7962',
      href: 'https://wa.me/5519982457962?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site',
      color: 'text-green-500',
      hoverColor: 'hover:bg-green-500/10 hover:border-green-500',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      value: '@vini.mooraes',
      href: 'https://www.instagram.com/vini.mooraes/',
      color: 'text-pink-500',
      hoverColor: 'hover:bg-pink-500/10 hover:border-pink-500',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'ViniciusMoraesTavares',
      href: 'https://github.com/ViniciusMoraesTavares',
      color: 'text-gray-400',
      hoverColor: 'hover:bg-gray-400/10 hover:border-gray-400',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Vinicius Moraes',
      href: 'https://www.linkedin.com/in/vinicius-moraes-25992b217/',
      color: 'text-accent',
      hoverColor: 'hover:bg-accent/10 hover:border-accent',
    },
  ];

  return (
    <section id="contato" className="py-24 bg-light-card dark:bg-dark-lighter relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-in" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-white transition-colors duration-300">
              Vamos <span className="text-gradient">Conversar?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-light-text-secondary dark:text-gray-300 transition-colors duration-300">
              Aberto a novas ideias, projetos e boas conversas sobre código.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <AnimatedSection 
                key={index}
                animation="scale-in"
                delay={200 + (index * 100)}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-light-bg dark:bg-dark p-6 rounded-xl border border-light-border dark:border-dark-border ${contact.hoverColor} transition-all duration-300 card-hover hover-lift hover-border-expand click-effect`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-light-hover dark:bg-dark-lighter rounded-lg group-hover:scale-110 transition-transform hover-magnetic">
                      <Icon className={`w-6 h-6 ${contact.color}`} />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm text-light-text-secondary dark:text-gray-500 mb-1 transition-colors duration-300">{contact.label}</p>
                      <p className="font-semibold text-light-text-primary dark:text-gray-100 group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
