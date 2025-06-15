
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FerreArt
            </span>
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Inicio
            </a>
            <a href="#quienes-somos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Quiénes Somos
            </a>
            <a href="#como-comprar" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Cómo Comprar
            </a>
            <a href="#productos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Productos
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contacto
            </a>
          </div>

          {/* Botones de sesión */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
              Iniciar Sesión
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Registrarse
            </Button>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium">
                Inicio
              </a>
              <a href="#quienes-somos" className="text-gray-700 hover:text-blue-600 font-medium">
                Quiénes Somos
              </a>
              <a href="#como-comprar" className="text-gray-700 hover:text-blue-600 font-medium">
                Cómo Comprar
              </a>
              <a href="#productos" className="text-gray-700 hover:text-blue-600 font-medium">
                Productos
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium">
                Contacto
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                  Iniciar Sesión
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
