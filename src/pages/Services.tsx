
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const servicesDetails = [
    {
      id: 'consultoria',
      title: 'Consultoria Estratégica',
      description: 'Análises profundas e planejamentos personalizados para impulsionar o crescimento do seu negócio.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      benefits: [
        'Diagnóstico completo da situação atual',
        'Identificação de oportunidades de mercado',
        'Desenvolvimento de planos estratégicos',
        'Otimização de processos empresariais',
        'Acompanhamento contínuo de indicadores'
      ],
      subservices: [
        'Análise de mercado',
        'Redesenho de processos',
        'Planejamento estratégico',
        'Gestão de mudanças'
      ]
    },
    {
      id: 'desenvolvimento',
      title: 'Desenvolvimento de Soluções',
      description: 'Criamos soluções tecnológicas sob medida para atender as necessidades específicas do seu negócio.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
      benefits: [
        'Soluções personalizadas para seu negócio',
        'Uso das tecnologias mais recentes',
        'Desenvolvimento ágil e entregas contínuas',
        'Integração com sistemas existentes',
        'Escalabilidade e manutenção simplificada'
      ],
      subservices: [
        'Desenvolvimento de aplicativos',
        'Sistemas web corporativos',
        'Integrações de sistemas',
        'Automação de processos'
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing Digital',
      description: 'Estratégias de marketing completas para aumentar a visibilidade da sua marca e converter leads em clientes.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop',
      benefits: [
        'Aumento de visibilidade online',
        'Geração qualificada de leads',
        'Estratégias baseadas em dados',
        'Otimização contínua de campanhas',
        'Monitoramento de ROI em tempo real'
      ],
      subservices: [
        'SEO e SEM',
        'Gestão de mídias sociais',
        'Email marketing',
        'Marketing de conteúdo'
      ]
    },
    {
      id: 'gestao',
      title: 'Gestão de Projetos',
      description: 'Gerenciamento completo de seus projetos para garantir entregas no prazo, dentro do orçamento e com qualidade.',
      image: 'https://images.unsplash.com/photo-1460794418188-1dadda7c95bd?q=80&w=2070&auto=format&fit=crop',
      benefits: [
        'Planejamento detalhado e realista',
        'Controle eficiente de cronograma e custos',
        'Gestão de riscos preventiva',
        'Comunicação clara e transparente',
        'Adaptabilidade a mudanças de escopo'
      ],
      subservices: [
        'PMO como serviço',
        'Metodologias ágeis (Scrum, Kanban)',
        'Gestão de portfólio',
        'Acompanhamento de indicadores'
      ]
    }
  ];

  return (
    <>
      <HeroSection
        title="Nossos Serviços"
        subtitle="Conheça nossas soluções personalizadas para impulsionar seu negócio"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Como podemos ajudar seu negócio</h2>
            <p className="text-lg text-gray-600 mb-8">
              Oferecemos um conjunto completo de serviços para atender às necessidades 
              específicas da sua empresa, desde consultoria estratégica até implementação 
              tecnológica e marketing digital.
            </p>
            <div className="flex justify-center">
              <Link to="/contato" className="btn-primary">
                Solicite uma consulta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {servicesDetails.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`section-padding ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-600 mb-8">{service.description}</p>
                
                <h3 className="text-xl font-semibold mb-4">Benefícios</h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-1">
                        <Check className="h-5 w-5 text-company-600" />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">O que oferecemos</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.subservices.map((subservice, i) => (
                    <div key={i} className="p-4 bg-gray-100 rounded-lg">
                      {subservice}
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contato" 
                  className="inline-flex items-center text-company-600 font-medium hover:text-company-700"
                >
                  Fale com um especialista <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Methodology */}
      <section className="section-padding bg-company-700 text-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Nossa Metodologia"
            subtitle="Como trabalhamos para entregar resultados excepcionais"
            centered
            className="text-white"
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Análise',
                description: 'Compreendemos profundamente seu negócio, desafios e objetivos.'
              },
              {
                step: '02',
                title: 'Estratégia',
                description: 'Desenvolvemos um plano personalizado baseado em dados e experiência.'
              },
              {
                step: '03',
                title: 'Implementação',
                description: 'Executamos as soluções com metodologias ágeis e acompanhamento contínuo.'
              },
              {
                step: '04',
                title: 'Otimização',
                description: 'Monitoramos resultados e refinamos estratégias para maximizar o ROI.'
              }
            ].map((item, index) => (
              <div key={index} className="relative p-6 border border-white/20 rounded-lg">
                <div className="text-5xl font-bold text-white/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para impulsionar seu negócio?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Entre em contato conosco hoje mesmo para uma análise gratuita das necessidades da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contato" className="btn-primary">
              Solicite um orçamento
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              Ver nossos projetos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
