
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
          ¿Listo para Descubrir Más?
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Próximamente lanzamos nuestra tienda online. Mantente informado sobre nuestros productos únicos.
        </p>
        
        <Card className="max-w-md mx-auto p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mantente Conectado
          </h3>
          <p className="text-gray-600 mb-6">
            Sé el primero en conocer nuestros nuevos productos y ofertas exclusivas
          </p>
          <div className="space-y-4">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Suscribirse al Newsletter
            </Button>
            <Button variant="outline" className="w-full border-2 border-gray-300 hover:border-blue-500 py-3 rounded-full transition-all duration-300 hover:scale-105">
              Contactar por WhatsApp
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
