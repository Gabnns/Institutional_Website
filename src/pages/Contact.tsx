
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import ContactForm from '@/components/ui/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <HeroSection
        title="Entre em Contato"
        subtitle="Estamos prontos para ajudar a impulsionar seu negócio"
        backgroundImage="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop"
      />

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Vamos conversar</h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário e entraremos em contato o mais breve possível. Você também pode nos contatar diretamente por telefone, email ou visitar nosso escritório.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-company-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-company-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                    <p className="text-gray-600">(11) 5555-5555</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-company-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-company-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">contato@empresa.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-company-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-company-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                    <p className="text-gray-600">Av. Empresarial, 1000, Centro, São Paulo - SP</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-company-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-company-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </div>
              
              <div className="border p-6 rounded-lg bg-gray-50">
                <h3 className="text-lg font-semibold mb-3">Atendimento via WhatsApp</h3>
                <p className="text-gray-600 mb-4">
                  Prefere uma resposta mais rápida? Entre em contato diretamente pelo WhatsApp e responderemos o mais breve possível.
                </p>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-green-700"
                >
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Nosso Escritório"
            subtitle="Estamos localizados em uma região central de fácil acesso"
            centered
          />
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* This would be replaced by an actual map integration */}
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 text-center">
                Mapa seria exibido aqui <br/>
                <span className="text-sm">(Integrações como Google Maps, Mapbox, etc.)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Perguntas Frequentes"
            subtitle="Respostas para as dúvidas mais comuns sobre nossos serviços"
            centered
          />

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Quanto tempo leva para desenvolver um projeto?",
                answer: "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Após a análise inicial, fornecemos um cronograma detalhado com prazos e entregas."
              },
              {
                question: "Como funciona o processo de orçamento?",
                answer: "Realizamos uma reunião inicial para entender suas necessidades, seguida por uma análise detalhada. Em seguida, enviamos uma proposta com escopo, prazos e investimento."
              },
              {
                question: "Vocês atendem empresas de pequeno porte?",
                answer: "Sim, temos soluções para empresas de todos os portes. Nossos serviços são escaláveis e adaptados às necessidades e orçamentos específicos de cada cliente."
              },
              {
                question: "Após a entrega do projeto, vocês oferecem suporte?",
                answer: "Sim, oferecemos planos de suporte e manutenção contínuos para garantir que sua solução continue funcionando perfeitamente e se adapte às mudanças do seu negócio."
              },
              {
                question: "Vocês trabalham com projetos internacionais?",
                answer: "Sim, temos experiência em projetos internacionais e capacidade para atender clientes em diferentes fusos horários e idiomas."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-company-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para começar seu projeto?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Entre em contato hoje mesmo e descubra como podemos ajudar a transformar sua visão em realidade.
          </p>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-company-700 shadow transition-colors hover:bg-gray-100"
          >
            Fale pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
