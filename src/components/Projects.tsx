import { useState } from 'react';
import { FaDatabase, FaExternalLinkAlt, FaGlobe, FaChevronDown, FaChevronUp, FaCode, FaChartLine, FaLightbulb, FaCog, FaRocket, FaUsers, FaClock, FaCheckCircle } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

interface CaseStudy {
  id: string;
  title: string;
  category: 'system' | 'website';
  url?: string;
  thumbnail?: string;
  overview: string;
  problem: {
    context: string;
    challenges: string[];
    stakeholders: string[];
  };
  solution: {
    approach: string;
    keyFeatures: string[];
  };
  development: {
    methodology: string;
    phases: {
      name: string;
      duration: string;
      activities: string[];
    }[];
    keyDecisions: {
      decision: string;
      rationale: string;
    }[];
  };
  technologies: {
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'tools';
    justification: string;
  }[];
  results: {
    metrics: {
      label: string;
      value: string;
      improvement?: string;
    }[];
    outcomes: string[];
    userFeedback?: string;
  };
  screenshots?: string[];
  demoUrl?: string;
  timeline: string;
  teamSize: number;
}

export default function Projects() {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 'sistema-comissao',
      title: 'Sistema de Comissão',
      category: 'system',
      url: 'https://revendaspharmacia.com.br',
      overview: 'Sistema completo para automatização de cálculos de comissões, dashboards executivos e relatórios gerenciais.',
      problem: {
        context: 'A empresa enfrentava dificuldades no controle manual de comissões de vendedores, resultando em erros de cálculo, atrasos nos pagamentos e falta de transparência nos resultados.',
        challenges: [
          'Cálculos manuais propensos a erros',
          'Falta de visibilidade em tempo real',
          'Processo demorado de fechamento mensal',
          'Dificuldade na auditoria de comissões'
        ],
        stakeholders: ['Gerência Comercial', 'Equipe de Vendas', 'Departamento Financeiro', 'Auditoria']
      },
      solution: {
        approach: 'Desenvolvimento de uma plataforma web completa com dashboards interativos, automatização de cálculos e sistema de relatórios.',
        keyFeatures: [
          'Cálculo automatizado de comissões',
          'Dashboard executivo em tempo real',
          'Sistema de relatórios customizáveis',
          'Auditoria completa de transações',
          'Notificações automáticas'
        ]
      },
      development: {
        methodology: 'Metodologia Ágil com Sprints de 2 semanas',
        phases: [
          {
            name: 'Descoberta e Planejamento',
            duration: '2 semanas',
            activities: ['Levantamento de requisitos', 'Análise de processos atuais', 'Definição de arquitetura']
          },
          {
            name: 'Desenvolvimento MVP',
            duration: '6 semanas',
            activities: ['Desenvolvimento do core do sistema', 'Implementação de cálculos', 'Testes unitários']
          },
          {
            name: 'Dashboards e Relatórios',
            duration: '4 semanas',
            activities: ['Desenvolvimento de dashboards', 'Sistema de relatórios', 'Integração com APIs']
          },
          {
            name: 'Testes e Deploy',
            duration: '2 semanas',
            activities: ['Testes de integração', 'Treinamento de usuários', 'Deploy em produção']
          }
        ],
        keyDecisions: [
          {
            decision: 'Uso do MySQL como banco principal',
            rationale: 'Necessidade de transações ACID e consultas complexas para cálculos de comissão'
          },
          {
            decision: 'Arquitetura de microserviços',
            rationale: 'Escalabilidade e manutenibilidade do sistema'
          }
        ]
      },
      technologies: [
        {
          name: 'Node.js',
          category: 'backend',
          justification: 'Performance superior para operações I/O intensivas e ecossistema robusto'
        },
        {
          name: 'React',
          category: 'frontend',
          justification: 'Interface reativa e componentização para dashboards complexos'
        },
        {
          name: 'MySQL',
          category: 'database',
          justification: 'Transações ACID e suporte avançado para consultas analíticas'
        },
        {
          name: 'TypeScript',
          category: 'tools',
          justification: 'Tipagem estática para reduzir bugs em cálculos críticos'
        }
      ],
      results: {
        metrics: [
          { label: 'Redução no tempo de fechamento', value: '85%', improvement: 'De 5 dias para 12 horas' },
          { label: 'Precisão nos cálculos', value: '99.9%', improvement: 'Eliminação de erros manuais' },
          { label: 'Satisfação dos usuários', value: '4.8/5', improvement: 'Aumento de 60% na satisfação' },
        ],
        outcomes: [
          'Automatização completa do processo de comissões',
          'Transparência total para equipe de vendas',
          'Redução significativa de erros e retrabalho',
          'Melhoria na tomada de decisões gerenciais'
        ],
        userFeedback: 'O sistema revolucionou nossa gestão de comissões. Agora temos visibilidade total e os vendedores confiam 100% nos cálculos.'
      },
      timeline: '14 semanas',
      teamSize: 3
    },
    {
      id: 'sorteio-familia-altar',
      title: 'Sorteio Família do Altar',
      category: 'system',
      overview: 'Sistema Desktop offline para gerenciamento de sorteios da IPB Santa Gertrudes.',
      problem: {
        context: 'A igreja necessitava de um sistema confiável para realizar sorteios justos durante os Cultos, sem depender de conexão com internet.',
        challenges: [
          'Necessidade de funcionamento offline',
          'Garantia de transparência nos sorteios',
          'Interface simples para operadores não técnicos',
          'Histórico completo de sorteios realizados'
        ],
        stakeholders: ['Liderança da Igreja', 'Organizadores de Eventos', 'Membros da Congregação']
      },
      solution: {
        approach: 'Desenvolvimento de aplicação desktop multiplataforma com banco de dados local e interface intuitiva.',
        keyFeatures: [
          'Sistema de sorteio com algoritmo verificável',
          'Cadastro e gestão de participantes',
          'Histórico completo de sorteios',
          'Relatórios de eventos',
          'Backup automático de dados'
        ]
      },
      development: {
        methodology: 'Desenvolvimento iterativo com feedback contínuo',
        phases: [
          {
            name: 'Análise de Requisitos',
            duration: '1 semana',
            activities: ['Entrevistas com stakeholders', 'Definição de funcionalidades', 'Prototipagem']
          },
          {
            name: 'Desenvolvimento Core',
            duration: '4 semanas',
            activities: ['Implementação do sistema de sorteio', 'Interface de usuário', 'Banco de dados local']
          },
          {
            name: 'Testes e Refinamentos',
            duration: '2 semanas',
            activities: ['Testes com usuários reais', 'Ajustes de usabilidade', 'Documentação']
          }
        ],
        keyDecisions: [
          {
            decision: 'Python com PySide como framework principal',
            rationale: 'Necessidade de aplicação desktop nativa com interface moderna e performance otimizada'
          },
          {
            decision: 'SQLite como banco de dados',
            rationale: 'Simplicidade, confiabilidade e funcionamento offline'
          }
        ]
      },
      technologies: [
        {
          name: 'Python',
          category: 'backend',
          justification: 'Linguagem principal para desenvolvimento do sistema desktop offline'
        },
        {
          name: 'PySide',
          category: 'frontend',
          justification: 'Criação da interface gráfica do sistema com componentes nativos'
        },
        {
          name: 'PyInstaller',
          category: 'tools',
          justification: 'Empacotamento do sistema em executável para instalação local no computador da igreja'
        },
        {
          name: 'SQLite',
          category: 'database',
          justification: 'Banco de dados local confiável, sem necessidade de servidor'
        }
      ],

      results: {
        metrics: [
          { label: 'Sorteios realizados', value: '50+', improvement: 'Desde o lançamento' },
          { label: 'Participantes cadastrados', value: '100+', improvement: 'Base de dados ativa' },
          { label: 'Tempo de setup', value: '1 min', improvement: 'Redução de 90% no tempo' },
          { label: 'Taxa de erro', value: '0%', improvement: 'Zero falhas em sorteios' }
        ],
        outcomes: [
          'Transparência total nos processos de sorteio',
          'Redução significativa no tempo de organização',
          'Maior confiança da congregação nos resultados',
          'Histórico completo para auditoria'
        ],
        userFeedback: 'O sistema trouxe muita transparência e agilidade para nossos eventos. É muito fácil de usar!'
      },
      timeline: '7 semanas',
      teamSize: 1
    }
  ];

  const websites = [
    {
      title: 'Açúcar e Afeto',
      url: 'https://acucareafeto.com.br',
      tech: ['React', 'Tailwind'],
      description: 'Site institucional para confeitaria artesanal'
    },
    {
      title: 'MB Materiais para Construção',
      url: 'https://mbmateriaisparaconstrucao.com.br',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'Portal comercial para loja de materiais'
    },
    {
      title: 'Algo Doce e Salgado',
      url: 'https://algodoceesalgado.com.br',
      tech: ['React', 'Tailwind'],
      description: 'Plataforma de encomendas online'
    },
    {
      title: 'Ideal Embalagem',
      url: 'https://idealembalagem.com',
      tech: ['Next.js', 'TypeScript'],
      description: 'E-commerce de embalagens industriais'
    },
    {
      title: 'Boletim IPB Santa Gertrudes',
      url: 'https://boletim-ipbsg.netlify.app',
      tech: ['React', 'Netlify'],
      description: 'Sistema de boletins digitais'
    },
    {
      title: 'Amanda Novais Sobrancelhas',
      url: 'https://amandanovaissobrancelhas.com.br',
      tech: ['React', 'Tailwind'],
      description: 'Site de agendamentos para estética'
    },
    {
      title: 'Myelin',
      url: 'https://myelin.com.br',
      tech: ['Next.js', 'TypeScript'],
      description: 'Portal corporativo de tecnologia'
    }
  ];

  const toggleExpanded = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  const getCategoryIcon = (category: string) => {
    return category === 'system' ? FaDatabase : FaGlobe;
  };

  const getTechCategoryColor = (category: string) => {
    const colors = {
      frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      backend: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      database: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      tools: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  return (
    <section id="projetos" className="py-24 bg-light-bg-secondary dark:bg-dark-lighter relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection animation="fade-in" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-white transition-colors duration-300">
              Estudos de <span className="text-gradient">Caso</span>
            </h2>
            <p className="text-xl text-light-text-secondary dark:text-gray-400 mb-6 max-w-3xl mx-auto">
              Análises detalhadas dos projetos desenvolvidos, incluindo desafios, soluções e resultados alcançados
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        {/* Estudos de Caso Detalhados */}
        <div className="mb-16">
          <AnimatedSection animation="slide-in-left" delay={200}>
            <div className="flex items-center gap-3 mb-8">
              <FaLightbulb className="w-8 h-8 text-primary hover-magnetic" />
              <h3 className="text-3xl font-bold text-light-text-primary dark:text-gray-100 transition-colors duration-300">
                Estudos de Caso Detalhados
              </h3>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {caseStudies.map((caseStudy, index) => {
              const Icon = getCategoryIcon(caseStudy.category);
              const isExpanded = expandedCase === caseStudy.id;

              return (
                <AnimatedSection 
                  key={caseStudy.id}
                  animation="slide-in-up"
                  delay={300 + (index * 200)}
                >
                  <div className="bg-light-card dark:bg-dark rounded-xl border border-light-border dark:border-dark-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover-lift hover-border-expand">
                    {/* Header do Case Study */}
                    <div className="p-6 border-b border-light-border dark:border-dark-border">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="p-3 bg-primary/10 rounded-lg hover-magnetic">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-2xl font-bold text-light-text-primary dark:text-gray-100">
                                {caseStudy.title}
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-light-text-secondary dark:text-gray-400">
                                <FaClock className="w-4 h-4 hover-magnetic" />
                                <span>{caseStudy.timeline}</span>
                                <FaUsers className="w-4 h-4 ml-2 hover-magnetic" />
                                <span>{caseStudy.teamSize} pessoa{caseStudy.teamSize > 1 ? 's' : ''}</span>
                              </div>
                            </div>
                            <p className="text-light-text-secondary dark:text-gray-400 leading-relaxed mb-4">
                              {caseStudy.overview}
                            </p>
                            {caseStudy.url && (
                              <a
                                href={caseStudy.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold transition-colors hover-magnetic click-effect"
                              >
                                Ver Projeto <FaExternalLinkAlt className="w-4 h-4" />
                              </a>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleExpanded(caseStudy.id)}
                        className="p-2 hover:bg-light-hover dark:hover:bg-dark-lighter rounded-lg transition-colors hover-lift click-effect"
                      >
                        {isExpanded ? (
                          <FaChevronUp className="w-5 h-5 text-light-text-secondary dark:text-gray-400 hover-magnetic" />
                        ) : (
                          <FaChevronDown className="w-5 h-5 text-light-text-secondary dark:text-gray-400 hover-magnetic" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Conteúdo Expandido */}
                  {isExpanded && (
                    <div className="p-6 space-y-8 animate-fade-in">
                      {/* Problema/Desafio */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <FaLightbulb className="w-5 h-5 text-red-500 hover-magnetic" />
                          <h5 className="text-xl font-bold text-light-text-primary dark:text-gray-100">
                            Problema/Desafio
                          </h5>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4 hover-lift">
                          <p className="text-light-text-secondary dark:text-gray-300 leading-relaxed">
                            {caseStudy.problem.context}
                          </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h6 className="font-semibold text-light-text-primary dark:text-gray-200 mb-3">
                              Principais Desafios:
                            </h6>
                            <ul className="space-y-2">
                              {caseStudy.problem.challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start gap-2 hover-lift">
                                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-light-text-secondary dark:text-gray-400">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold text-light-text-primary dark:text-gray-200 mb-3">
                              Stakeholders:
                            </h6>
                            <ul className="space-y-2">
                              {caseStudy.problem.stakeholders.map((stakeholder, index) => (
                                <li key={index} className="flex items-center gap-2 hover-lift">
                                  <FaUsers className="w-4 h-4 text-primary hover-magnetic" />
                                  <span className="text-light-text-secondary dark:text-gray-400">{stakeholder}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Processo de Desenvolvimento */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <FaCog className="w-5 h-5 text-blue-500" />
                          <h5 className="text-xl font-bold text-light-text-primary dark:text-gray-100">
                            Processo de Desenvolvimento
                          </h5>
                        </div>
                        <div className="mb-4">
                          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                            {caseStudy.development.methodology}
                          </span>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div>
                            <h6 className="font-semibold text-light-text-primary dark:text-gray-200 mb-3">
                              Fases do Projeto:
                            </h6>
                            <div className="space-y-4">
                              {caseStudy.development.phases.map((phase, index) => (
                                <div key={index} className="border-l-4 border-blue-500 pl-4">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h6 className="font-semibold text-light-text-primary dark:text-gray-200">
                                      {phase.name}
                                    </h6>
                                    <span className="text-sm text-light-text-secondary dark:text-gray-400">
                                      ({phase.duration})
                                    </span>
                                  </div>
                                  <ul className="space-y-1">
                                    {phase.activities.map((activity, actIndex) => (
                                      <li key={actIndex} className="text-sm text-light-text-secondary dark:text-gray-400 flex items-start gap-2">
                                        <FaCheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                        {activity}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h6 className="font-semibold text-light-text-primary dark:text-gray-200 mb-3">
                              Decisões Técnicas Chave:
                            </h6>
                            <div className="space-y-4">
                              {caseStudy.development.keyDecisions.map((decision, index) => (
                                <div key={index} className="bg-light-hover dark:bg-dark-lighter p-4 rounded-lg">
                                  <h6 className="font-semibold text-light-text-primary dark:text-gray-200 block mb-2">
                                    {decision.decision}
                                  </h6>
                                  <p className="text-sm text-light-text-secondary dark:text-gray-400">
                                    {decision.rationale}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tecnologias */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <FaCode className="w-5 h-5 text-green-500" />
                          <h5 className="text-xl font-bold text-light-text-primary dark:text-gray-100">
                            Tecnologias e Justificativas
                          </h5>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {caseStudy.technologies.map((tech, index) => (
                            <div key={index} className="bg-light-hover dark:bg-dark-lighter p-4 rounded-lg">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="font-semibold text-light-text-primary dark:text-gray-200">
                                  {tech.name}
                                </span>
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTechCategoryColor(tech.category)}`}>
                                  {tech.category}
                                </span>
                              </div>
                              <p className="text-sm text-light-text-secondary dark:text-gray-400">
                                {tech.justification}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Resultados */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <FaChartLine className="w-5 h-5 text-green-500" />
                          <h5 className="text-xl font-bold text-light-text-primary dark:text-gray-100">
                            Resultados e Impacto
                          </h5>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                          {caseStudy.results.metrics.map((metric, index) => (
                            <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-lg text-center">
                              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                                {metric.value}
                              </div>
                              <div className="text-sm font-semibold text-light-text-primary dark:text-gray-200 mb-1">
                                {metric.label}
                              </div>
                              {metric.improvement && (
                                <div className="text-xs text-light-text-secondary dark:text-gray-400">
                                  {metric.improvement}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h6 className="font-semibold text-light-text-primary dark:text-gray-200 mb-3">
                              Principais Resultados:
                            </h6>
                            <ul className="space-y-2">
                              {caseStudy.results.outcomes.map((outcome, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <FaRocket className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-light-text-secondary dark:text-gray-400">{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {caseStudy.results.userFeedback && (
                            <div>
                              <h6 className="font-semibold text-light-text-primary dark:text-gray-200 mb-3">
                                Feedback do Cliente:
                              </h6>
                              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="text-light-text-secondary dark:text-gray-300 italic">
                                  "{caseStudy.results.userFeedback}"
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Sites Desenvolvidos */}
        <div>
          <AnimatedSection animation="slide-in-right" delay={400}>
            <div className="flex items-center gap-3 mb-8">
              <FaGlobe className="w-8 h-8 text-accent hover-magnetic" />
              <h3 className="text-3xl font-bold text-light-text-primary dark:text-gray-100 transition-colors duration-300">
                Sites Desenvolvidos
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {websites.map((site, index) => (
              <AnimatedSection 
                key={index}
                animation="scale-in"
                delay={500 + (index * 100)}
              >
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-light-card dark:bg-dark p-6 rounded-xl border border-light-border dark:border-dark-border hover:border-accent/50 transition-all duration-300 card-hover block hover-lift hover-border-expand click-effect"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-light-text-primary dark:text-gray-100 group-hover:text-accent transition-colors flex-1">
                      {site.title}
                    </h4>
                    <FaExternalLinkAlt className="w-5 h-5 text-light-text-secondary dark:text-gray-500 group-hover:text-accent transition-colors hover-magnetic" />
                  </div>
                  <p className="text-sm text-light-text-secondary dark:text-gray-400 mb-4">
                    {site.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {site.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-light-hover dark:bg-dark-lighter text-light-text-secondary dark:text-gray-400 text-xs font-semibold rounded transition-colors duration-300 hover-lift"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
