
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Check, ArrowRight } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: 'Consultoria Estratégica',
      description: 'Análises e planejamentos personalizados para o crescimento do seu negócio.',
      icon: '📊',
      link: '/servicos#consultoria'
    },
    {
      title: 'Desenvolvimento de Soluções',
      description: 'Criamos soluções tecnológicas sob medida para atender suas necessidades.',
      icon: '💻',
      link: '/servicos#desenvolvimento'
    },
    {
      title: 'Marketing Digital',
      description: 'Estratégias de marketing para aumentar a visibilidade da sua marca.',
      icon: '📱',
      link: '/servicos#marketing'
    },
    {
      title: 'Gestão de Projetos',
      description: 'Gerenciamento completo de seus projetos para garantir resultados.',
      icon: '📈',
      link: '/servicos#gestao'
    },
  ];

  const testimonials = [
    {
      quote: "A parceria com a empresa transformou completamente a nossa estratégia digital. Resultados impressionantes!",
      author: "Maria Silva",
      position: "CEO, Empresa ABC",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      quote: "Excelente atendimento e profissionalismo. A equipe entendeu perfeitamente nossas necessidades.",
      author: "João Pereira",
      position: "Diretor de Marketing, XYZ Corp.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      quote: "O projeto superou todas as nossas expectativas. Ganhos reais para o nosso negócio.",
      author: "Ana Oliveira",
      position: "COO, Startup Tech",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Soluções inovadoras para o sucesso do seu negócio"
        subtitle="Somos especialistas em transformação digital, oferecendo serviços personalizados para ajudar sua empresa a alcançar novos patamares."
        ctaText="Conheça nossos serviços"
        ctaLink="/servicos"
        secondaryCtaText="Entre em contato"
        secondaryCtaLink="/contato"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Bem-vindo à Nossa Empresa</h2>
            <p className="text-lg text-gray-600 mb-8">
              Há mais de uma década entregando excelência e inovação. Nossa empresa é reconhecida no mercado
              por desenvolver soluções personalizadas e eficientes, sempre focadas nos resultados dos clientes.
            </p>
            <div className="flex justify-center">
              <Link to="/sobre" className="inline-flex items-center text-company-600 font-medium hover:text-company-700">
                Conheça nossa história <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Nossos Serviços"
            subtitle="Oferecemos um conjunto completo de soluções para impulsionar seu negócio"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md card-hover"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-company-600 font-medium hover:text-company-700"
                >
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Por que escolher nossa empresa?</h2>
              <p className="text-gray-600 mb-8">
                Somos apaixonados por resolver problemas complexos e transformar ideias em realidade.
                Nossa abordagem combina expertise técnica com um profundo entendimento do seu negócio.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Equipe altamente especializada',
                  'Abordagem personalizada para cada cliente',
                  'Comprometimento com resultados mensuráveis',
                  'Uso das mais recentes tecnologias e métodos',
                  'Suporte contínuo e parceria de longo prazo'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-company-600" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Nossa equipe" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute bg-company-600 text-white p-6 rounded-lg shadow-lg max-w-xs -bottom-8 -left-8">
                <p className="text-lg font-medium">
                  "Nossa missão é impulsionar o sucesso dos nossos clientes através da inovação e excelência."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="O que nossos clientes dizem"
            subtitle="Construímos relacionamentos sólidos baseados em confiança e resultados"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md card-hover">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
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

      {/* CTA Section */}
      <section className="bg-company-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Entre em contato hoje mesmo para uma consulta gratuita e descubra como 
            podemos ajudar a impulsionar sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contato" className="btn-primary bg-white text-company-700 hover:bg-gray-100">
              Fale conosco
            </Link>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary bg-transparent border-white text-white hover:bg-white/10"
            >
              Whatsapp direto
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
