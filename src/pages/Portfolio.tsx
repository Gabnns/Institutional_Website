
import React, { useState } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Desenvolvimento Web' },
    { id: 'mobile', name: 'Aplicativos Mobile' },
    { id: 'branding', name: 'Branding' },
    { id: 'marketing', name: 'Marketing Digital' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Redesign de E-commerce',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1561997968-aa846c2bf255?q=80&w=1770&auto=format&fit=crop',
      client: 'VarejoTech',
      description: 'Redesign completo da plataforma de e-commerce, aumentando as conversões em 40% e melhorando a experiência do usuário.',
      tags: ['UI/UX', 'E-commerce', 'Web Development']
    },
    {
      id: 2,
      title: 'Aplicativo de Gestão Financeira',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1770&auto=format&fit=crop',
      client: 'FinancePro',
      description: 'Desenvolvimento de aplicativo mobile para gestão financeira pessoal, integrado com principais bancos e instituições financeiras.',
      tags: ['Mobile', 'Fintech', 'UI/UX']
    },
    {
      id: 3,
      title: 'Rebranding Completo',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1770&auto=format&fit=crop',
      client: 'Construtora ABC',
      description: 'Reposicionamento completo da marca, incluindo nova identidade visual, tom de voz e estratégia de comunicação.',
      tags: ['Branding', 'Design', 'Estratégia']
    },
    {
      id: 4,
      title: 'Campanha Digital Integrada',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1770&auto=format&fit=crop',
      client: 'InsureTech',
      description: 'Estratégia omnichannel para lançamento de produto, resultando em 200% de aumento nas vendas durante o primeiro trimestre.',
      tags: ['Marketing Digital', 'SEO', 'Mídias Sociais']
    },
    {
      id: 5,
      title: 'Portal Institucional',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770&auto=format&fit=crop',
      client: 'Universidade XYZ',
      description: 'Desenvolvimento de portal institucional com área de alunos, professores e integrações com sistemas acadêmicos.',
      tags: ['Web Development', 'UX/UI', 'Integração']
    },
    {
      id: 6,
      title: 'App de Delivery',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1770&auto=format&fit=crop',
      client: 'FoodExpress',
      description: 'Aplicativo de delivery com rastreamento em tempo real, sistema de avaliação e programa de fidelidade integrado.',
      tags: ['Mobile App', 'Geolocation', 'UI/UX']
    },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<null | number>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <HeroSection
        title="Nosso Portfólio"
        subtitle="Conheça alguns dos projetos que desenvolvemos para nossos clientes"
        backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Portfolio Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-company-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-company-600 font-medium mb-2">{project.client}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for project details */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                  
                  {projects.find(p => p.id === selectedProject) && (
                    <>
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={projects.find(p => p.id === selectedProject)?.image} 
                          alt={projects.find(p => p.id === selectedProject)?.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="p-8">
                        <div className="text-sm text-company-600 font-medium mb-2">
                          {projects.find(p => p.id === selectedProject)?.client}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                          {projects.find(p => p.id === selectedProject)?.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {projects.find(p => p.id === selectedProject)?.tags.map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-2">Sobre o Projeto</h4>
                        <p className="text-gray-600 mb-6">
                          {projects.find(p => p.id === selectedProject)?.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="text-lg font-semibold mb-2">Desafio</h4>
                            <p className="text-gray-600">
                              O cliente precisava de uma solução que aumentasse suas conversões e melhorasse a experiência do usuário.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2">Solução</h4>
                            <p className="text-gray-600">
                              Desenvolvemos uma abordagem personalizada com foco em usabilidade e otimização da jornada do usuário.
                            </p>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-2">Resultados</h4>
                        <ul className="list-disc pl-5 mb-6 text-gray-600">
                          <li>Aumento de 40% nas conversões</li>
                          <li>Redução de 25% na taxa de abandono</li>
                          <li>Melhoria de 60% no tempo de carregamento</li>
                        </ul>
                        
                        <Link to="/contato" className="btn-primary">
                          Quero um projeto assim
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Depoimentos de Clientes"
            subtitle="O que nossos clientes dizem sobre os projetos que desenvolvemos"
            centered
          />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "A equipe superou nossas expectativas em todas as etapas do projeto. O resultado foi um aumento significativo nas vendas e na satisfação dos nossos clientes.",
                author: "Carlos Mendes",
                position: "CEO, VarejoTech",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              },
              {
                quote: "A metodologia de trabalho transparente e os resultados alcançados nos fizeram estender a parceria para novos projetos. Recomendo fortemente.",
                author: "Ana Silva",
                position: "CMO, InsureTech",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md card-hover">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Vamos criar algo incrível juntos?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Estamos prontos para transformar sua ideia em realidade. Entre em contato e descubra como podemos ajudar.
          </p>
          <Link to="/contato" className="btn-primary">
            Iniciar um projeto
          </Link>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
