
import { Smartphone, Home, Coffee, Volume2, Gamepad2, UtensilsCrossed } from "lucide-react";

export const Categories = () => {
  const categories = [
    {
      icon: Smartphone,
      title: "Tecnología",
      description: "Smartphones, tablets, accesorios y gadgets de última generación",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Home,
      title: "Hogar",
      description: "Sábanas, decoración y artículos para el hogar de calidad premium",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Coffee,
      title: "Cocina",
      description: "Freidoras, accesorios de cocina y electrodomésticos modernos",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Volume2,
      title: "Audio",
      description: "Auriculares, parlantes y equipos de sonido de alta calidad",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: UtensilsCrossed,
      title: "Mates y Termos",
      description: "Mates premium, termos y accesorios para disfrutar tu mate",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Accesorios gaming, controles y equipamiento para gamers",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="productos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestras Categorías
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Explora nuestra amplia gama de productos importados, cuidadosamente seleccionados para ofrecerte lo mejor en calidad y diseño.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
