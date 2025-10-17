import { Mail, Instagram, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'E-mail',
      value: 'viniciusmoraestavares2020@gmail.com',
      href: 'mailto:viniciusmoraestavares2020@gmail.com',
      color: 'text-primary',
      hoverColor: 'hover:bg-primary/10 hover:border-primary',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@vini.mooraes',
      href: 'https://instagram.com/vini.mooraes',
      color: 'text-pink-500',
      hoverColor: 'hover:bg-pink-500/10 hover:border-pink-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub',
      href: '#',
      color: 'text-gray-400',
      hoverColor: 'hover:bg-gray-400/10 hover:border-gray-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn',
      href: '#',
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-white transition-colors duration-300">
            Vamos <span className="text-gradient">Conversar?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-light-text-secondary dark:text-gray-300 transition-colors duration-300">
            Aberto a novas ideias, projetos e boas conversas sobre código.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-light-bg dark:bg-dark p-6 rounded-xl border border-light-border dark:border-dark-border ${contact.hoverColor} transition-all duration-300 card-hover`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-light-hover dark:bg-dark-lighter rounded-lg group-hover:scale-110 transition-transform">
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
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="mailto:viniciusmoraestavares2020@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
          >
            <Send className="w-5 h-5" />
            Enviar Mensagem
          </a>
        </div>
      </div>
    </section>
  );
}
