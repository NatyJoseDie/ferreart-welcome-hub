
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Por qué FerreArt?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Más que una tienda, somos curadores de productos excepcionales
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-white mb-3">Importación Directa</h3>
            <p className="text-blue-100">
              Traemos los mejores productos directamente desde su origen
            </p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-white mb-3">Calidad Premium</h3>
            <p className="text-blue-100">
              Cada producto es seleccionado por su calidad excepcional
            </p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-white mb-3">Diseño Único</h3>
            <p className="text-blue-100">
              Productos con diseño innovador que marcan la diferencia
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
