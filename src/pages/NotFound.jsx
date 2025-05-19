
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-9xl font-bold text-company-600 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! Página não encontrada</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível.
        </p>
        <Link to="/" className="btn-primary">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
