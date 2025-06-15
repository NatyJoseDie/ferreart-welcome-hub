
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Store, Download, Users, CheckCircle } from "lucide-react";

export const About = () => {
  return (
    <section id="quienes-somos" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Quiénes Somos – Distribuidora FerreArt
          </h2>
          <div className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              En Distribuidora FerreArt somos una empresa dedicada a la comercialización y distribución de artículos de ferretería, hogar y electrodomésticos.
            </p>
            <p>
              Desde nuestros inicios, nos enfocamos en ofrecer productos de calidad, precios competitivos y una atención personalizada, tanto a clientes minoristas como mayoristas.
            </p>
            <p>
              Trabajamos con marcas líderes del mercado y contamos con un catálogo en constante crecimiento, adaptado a las necesidades de cada cliente.
            </p>
            <p className="font-semibold text-gray-800">
              Nuestro objetivo es ser tu socio confiable para que cada proyecto, obra o reparación cuente con los materiales adecuados, al mejor precio y en el momento justo.
            </p>
          </div>
          
          {/* Valores */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12 mb-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-lg font-semibold text-gray-800">Compromiso</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-lg font-semibold text-gray-800">Agilidad</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-lg font-semibold text-gray-800">Confianza</span>
            </div>
          </div>
          
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ¡Gracias por elegirnos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Compra Minorista */}
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Compra Minorista
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Accede a nuestro catálogo completo con precios de venta al público. 
                Productos únicos y de calidad premium para tu hogar o negocio.
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Ver Productos
              </Button>
            </div>
          </Card>

          {/* Revendedor */}
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ser Revendedor
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Registrate como revendedor y accede a precios especiales, 
                catálogos descargables y herramientas exclusivas para hacer crecer tu negocio.
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Ser Revendedor
              </Button>
            </div>
          </Card>
        </div>

        {/* Portal para Comerciantes */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">
            Portal para Comerciantes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Precios Especiales</h4>
              <p className="text-gray-300">Accede a lista de precios mayorista con descuentos exclusivos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Catálogos Descargables</h4>
              <p className="text-gray-300">Descarga catálogos actualizados para mostrar a tus clientes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Herramientas de Venta</h4>
              <p className="text-gray-300">Acceso a materiales promocionales y soporte comercial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
