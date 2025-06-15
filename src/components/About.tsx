
import { Users, ShoppingBag, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            FerreArt es tu socio confiable en productos importados de calidad premium. 
            Ofrecemos dos modalidades de compra para adaptarnos a tus necesidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
              Conectamos a nuestros clientes con productos importados de la más alta calidad, 
              desde tecnología de vanguardia hasta artículos para el hogar que transforman tu vida cotidiana.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Con años de experiencia en importación, garantizamos productos auténticos, 
              precios competitivos y un servicio excepcional.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-100 font-light">Productos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-blue-100 font-light">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5</div>
                  <div className="text-blue-100 font-light">Años</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-blue-100 font-light">Satisfacción</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modalidades de compra */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Compra Minorista</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed font-light">
              Perfecto para compras personales. Accede a nuestro catálogo completo con precios especiales para consumidor final.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <Award className="w-5 h-5 text-blue-500 mr-3" />
                <span className="font-light">Precios competitivos</span>
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 text-blue-500 mr-3" />
                <span className="font-light">Envío a todo el país</span>
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 text-blue-500 mr-3" />
                <span className="font-light">Garantía en todos los productos</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-purple-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Portal Revendedor</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed font-light">
              ¿Querés emprender o expandir tu negocio? Registrate y accedé a nuestro portal exclusivo para comerciantes.
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-center">
                <Award className="w-5 h-5 text-purple-500 mr-3" />
                <span className="font-light">Precios mayoristas especiales</span>
              </li>
              <li className="flex items-center">
                <Download className="w-5 h-5 text-purple-500 mr-3" />
                <span className="font-light">Catálogo descargable para clientes</span>
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 text-purple-500 mr-3" />
                <span className="font-light">Soporte comercial dedicado</span>
              </li>
            </ul>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white w-full font-medium">
              Registrarse como Revendedor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
