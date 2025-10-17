import { Database, ExternalLink, Globe } from 'lucide-react';

export default function Projects() {
  const systems = [
    {
      title: 'Sistema de Comissão',
      url: 'https://revendaspharmacia.com.br',
      description: 'Sistema completo para cálculo automatizado de comissões, dashboards e relatórios.',
      tech: ['Node.js', 'React', 'PostgreSQL', 'TypeScript'],
    },
    {
      title: 'Sorteio Família do Altar',
      url: null,
      description: 'Sistema Desktop Offline para sorteios e controle de eventos da IPB Santa Gertrudes.',
      tech: ['Electron', 'JavaScript', 'SQLite'],
    },
  ];

  const websites = [
    {
      title: 'Açúcar e Afeto',
      url: 'https://acucareafeto.com.br',
      tech: ['React', 'Tailwind'],
    },
    {
      title: 'MB Materiais para Construção',
      url: 'https://mbmateriaisparaconstrucao.com.br',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Algo Doce e Salgado',
      url: 'https://algodoceesalgado.com.br',
      tech: ['React', 'Tailwind'],
    },
    {
      title: 'Ideal Embalagem',
      url: 'https://idealembalagem.com',
      tech: ['Next.js', 'TypeScript'],
    },
    {
      title: 'Boletim IPB Santa Gertrudes',
      url: 'https://boletim-ipbsg.netlify.app',
      tech: ['React', 'Netlify'],
    },
    {
      title: 'Amanda Novais Sobrancelhas',
      url: 'https://amandanovaissobrancelhas.com.br',
      tech: ['React', 'Tailwind'],
    },
    {
      title: 'Myelin',
      url: 'https://myelin.com.br',
      tech: ['Next.js', 'TypeScript'],
    },
  ];

  return (
    <section id="projetos" className="py-24 bg-light-bg-secondary dark:bg-dark-lighter relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-white transition-colors duration-300">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Database className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-light-text-primary dark:text-gray-100 transition-colors duration-300">Sistemas</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {systems.map((project, index) => (
              <div
                key={index}
                className="bg-light-card dark:bg-dark p-6 rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all duration-300 card-hover group"
              >
                <h4 className="text-2xl font-bold mb-3 text-light-text-primary dark:text-gray-100 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-light-text-secondary dark:text-gray-400 mb-4 leading-relaxed transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-light-hover dark:bg-dark-lighter text-primary text-sm font-semibold rounded-full border border-primary/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold transition-colors"
                  >
                    Ver Projeto <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {!project.url && (
                  <span className="inline-flex items-center gap-2 text-light-text-secondary dark:text-gray-500 text-sm transition-colors duration-300">
                    Sistema Offline/Privado
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold text-light-text-primary dark:text-gray-100 transition-colors duration-300">Sites</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {websites.map((site, index) => (
              <a
                key={index}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-light-card dark:bg-dark p-6 rounded-xl border border-light-border dark:border-dark-border hover:border-accent/50 transition-all duration-300 card-hover block"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-light-text-primary dark:text-gray-100 group-hover:text-accent transition-colors flex-1">
                    {site.title}
                  </h4>
                  <ExternalLink className="w-5 h-5 text-light-text-secondary dark:text-gray-500 group-hover:text-accent transition-colors" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {site.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-light-hover dark:bg-dark-lighter text-light-text-secondary dark:text-gray-400 text-xs font-semibold rounded transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
