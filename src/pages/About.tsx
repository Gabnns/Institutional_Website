
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';

const About = () => {
  const teamMembers = [
    {
      name: 'Ana Oliveira',
      position: 'CEO & Fundadora',
      bio: 'Com mais de 15 anos de experiência em consultoria empresarial, Ana lidera nossa visão estratégica.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      name: 'Carlos Santos',
      position: 'Diretor de Tecnologia',
      bio: 'Especialista em transformação digital, Carlos supervisiona todas as soluções tecnológicas desenvolvidas.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      name: 'Mariana Costa',
      position: 'Diretora de Marketing',
      bio: 'Com background em marketing digital, Mariana lidera as estratégias de comunicação e branding.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      name: 'Rafael Lima',
      position: 'Gerente de Projetos',
      bio: 'Certificado em metodologias ágeis, Rafael garante a entrega pontual e eficiente de todos os projetos.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
  ];

  const values = [
    {
      title: 'Excelência',
      description: 'Buscamos a excelência em tudo o que fazemos, sempre superando as expectativas dos clientes.',
      icon: '🏆',
    },
    {
      title: 'Inovação',
      description: 'Estamos constantemente inovando, encontrando novas soluções para desafios complexos.',
      icon: '💡',
    },
    {
      title: 'Integridade',
      description: 'Agimos com transparência e honestidade em todos os nossos relacionamentos.',
      icon: '🤝',
    },
    {
      title: 'Colaboração',
      description: 'Acreditamos no poder do trabalho em equipe e da colaboração para alcançar resultados superiores.',
      icon: '👥',
    },
    {
      title: 'Compromisso',
      description: 'Estamos comprometidos com o sucesso dos nossos clientes e o impacto positivo na sociedade.',
      icon: '✓',
    },
    {
      title: 'Responsabilidade',
      description: 'Assumimos responsabilidade por nossas ações e decisões, priorizando práticas sustentáveis.',
      icon: '🌱',
    },
  ];

  return (
    <>
      <HeroSection
        title="Sobre Nossa Empresa"
        subtitle="Conheça nossa história, nossos valores e a equipe por trás do nosso sucesso"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Nossa História */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                Fundada em 2010, nossa empresa nasceu da visão de transformar o mercado através de soluções 
                inovadoras e personalizadas. O que começou como uma pequena equipe de consultores apaixonados 
                por tecnologia e negócios, evoluiu para uma empresa de referência no setor.
              </p>
              <p className="text-gray-600 mb-4">
                Ao longo dos anos, expandimos nossa atuação para diferentes segmentos, sempre mantendo nosso 
                compromisso com a excelência e a satisfação dos clientes. Cada desafio superado e cada case 
                de sucesso contribuíram para construir a sólida reputação que temos hoje.
              </p>
              <p className="text-gray-600">
                Nossa trajetória é marcada por constante aprendizado e adaptação às mudanças do mercado, 
                sempre na vanguarda das novas tecnologias e metodologias para oferecer o melhor aos nossos clientes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-company-600 mb-2">2010</div>
                  <p className="text-gray-700">Fundação da empresa</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-company-600 mb-2">100+</div>
                  <p className="text-gray-700">Clientes atendidos</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-company-600 mb-2">30+</div>
                  <p className="text-gray-700">Profissionais especialistas</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-company-600 mb-2">500+</div>
                  <p className="text-gray-700">Projetos concluídos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Missão, Visão e Valores"
            subtitle="Os pilares que guiam nosso trabalho e nossas decisões"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-company-600">Missão</h3>
              <p className="text-gray-600">
                Oferecer soluções inovadoras que transformem negócios, gerando valor real e resultados 
                mensuráveis para nossos clientes, colaboradores e a sociedade.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-company-600">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como referência em excelência e inovação, liderando a transformação 
                digital e contribuindo para o sucesso sustentável das organizações.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-company-600">Propósito</h3>
              <p className="text-gray-600">
                Impulsionar o potencial humano através da tecnologia e da inovação, criando um 
                impacto positivo e duradouro no mundo dos negócios e na sociedade.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl mb-3">{value.icon}</div>
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Nossa Equipe"
            subtitle="Conheça os profissionais que fazem a diferença todos os dias"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-company-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Nossos Parceiros"
            subtitle="Trabalhamos com as melhores empresas e tecnologias do mercado"
            centered
          />

          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="w-36 h-36 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <div className="text-gray-400 text-3xl font-light">Logo {index}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
