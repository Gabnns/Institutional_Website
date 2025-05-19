
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">EmpresaLogo</h3>
            <p className="text-gray-300 mb-4">
              Oferecemos soluções inovadoras e personalizadas para o crescimento do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-company-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-company-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-company-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-company-400 transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-company-400 transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-company-400 transition-colors">Serviços</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-company-400 transition-colors">Portfólio</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-company-400 transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos#consultoria" className="text-gray-300 hover:text-company-400 transition-colors">Consultoria Estratégica</Link>
              </li>
              <li>
                <Link to="/servicos#desenvolvimento" className="text-gray-300 hover:text-company-400 transition-colors">Desenvolvimento de Soluções</Link>
              </li>
              <li>
                <Link to="/servicos#marketing" className="text-gray-300 hover:text-company-400 transition-colors">Marketing Digital</Link>
              </li>
              <li>
                <Link to="/servicos#gestao" className="text-gray-300 hover:text-company-400 transition-colors">Gestão de Projetos</Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Entre em Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 text-company-400" />
                <span className="text-gray-300">Av. Empresarial, 1000, Centro, São Paulo - SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-company-400" />
                <span className="text-gray-300">(11) 5555-5555</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-company-400" />
                <a href="mailto:contato@empresa.com" className="text-gray-300 hover:text-company-400 transition-colors">
                  contato@empresa.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} EmpresaLogo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
