import React from 'react';
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

        {/* Primeiros 4 cards em grid responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {contacts.slice(0, 4).map((contact, index) => {
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
                  className={`group bg-light-bg dark:bg-dark p-4 sm:p-6 rounded-xl border border-light-border dark:border-dark-border ${contact.hoverColor} transition-all duration-300 card-hover hover-lift hover-border-expand click-effect block w-full h-full ${contact.label === 'E-mail' ? 'overflow-visible' : ''}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 h-full">
                    <div className="p-2 sm:p-3 bg-light-hover dark:bg-dark-lighter rounded-lg group-hover:scale-110 transition-transform hover-magnetic flex-shrink-0">
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${contact.color}`} />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <p className="text-xs sm:text-sm text-light-text-secondary dark:text-gray-500 mb-1 transition-colors duration-300">{contact.label}</p>
                      <p className={`text-sm sm:text-base font-semibold text-light-text-primary dark:text-gray-100 group-hover:text-primary transition-colors leading-tight ${contact.label === 'E-mail' ? 'whitespace-nowrap' : 'break-words'}`}>
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Card do LinkedIn centralizado */}
        {contacts.length > 4 && (
          <div className="flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md">
              <AnimatedSection 
                animation="scale-in"
                delay={200 + (4 * 100)}
              >
                <a
                  href={contacts[4].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-light-bg dark:bg-dark p-4 sm:p-6 rounded-xl border border-light-border dark:border-dark-border ${contacts[4].hoverColor} transition-all duration-300 card-hover hover-lift hover-border-expand click-effect block w-full`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-light-hover dark:bg-dark-lighter rounded-lg group-hover:scale-110 transition-transform hover-magnetic flex-shrink-0">
                      {React.createElement(contacts[4].icon, { className: `w-5 h-5 sm:w-6 sm:h-6 ${contacts[4].color}` })}
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <p className="text-xs sm:text-sm text-light-text-secondary dark:text-gray-500 mb-1 transition-colors duration-300">{contacts[4].label}</p>
                      <p className="text-sm sm:text-base font-semibold text-light-text-primary dark:text-gray-100 group-hover:text-primary transition-colors break-words leading-tight">
                        {contacts[4].value}
                      </p>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
