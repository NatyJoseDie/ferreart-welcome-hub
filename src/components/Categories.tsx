
import { Tv, Headphones, ShoppingCart, Image, Music, Book } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    title: "Tecnología",
    description: "Los dispositivos más innovadores del mercado",
    icon: Tv,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    title: "Audio Premium",
    description: "Sonido de alta calidad para verdaderos amantes",
    icon: Headphones,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    title: "Cocina & Hogar",
    description: "Accesorios que transforman tu espacio",
    icon: ShoppingCart,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  },
  {
    title: "Textiles Premium",
    description: "Sábanas y textiles de lujo importados",
    icon: Image,
    gradient: "from-green-500 to-teal-500",
    bgGradient: "from-green-50 to-teal-50"
  },
  {
    title: "Mates Artesanales",
    description: "Tradición argentina con diseño moderno",
    icon: Music,
    gradient: "from-amber-500 to-yellow-500",
    bgGradient: "from-amber-50 to-yellow-50"
  },
  {
    title: "Electrodomésticos",
    description: "Freidoras y más para tu cocina inteligente",
    icon: Book,
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50"
  }
];

export const Categories = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Nuestras Categorías
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada producto seleccionado cuidadosamente para ofrecerte la mejor calidad y diseño
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${category.bgGradient} border-0 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.gradient} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">
                  {category.description}
                </p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
