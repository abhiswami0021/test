import { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Heart,
  BookOpen,
  Home,
  Shield,
  Truck,
  Shirt,
  Plane,
  Umbrella,
  Leaf,
  Radio,
  DollarSign,
  Trophy,
  Coffee,
  Dog,
  Utensils
} from 'lucide-react';

interface Industry {
  icon: React.ReactNode;
  name: string;
}

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const industries: Industry[] = [
    { icon: <ShoppingBag className="w-8 h-8" />, name: 'Ecommerce' },
    { icon: <Heart className="w-8 h-8" />, name: 'Healthcare' },
    { icon: <BookOpen className="w-8 h-8" />, name: 'Education' },
    { icon: <Home className="w-8 h-8" />, name: 'Real Estate' },
    { icon: <Shield className="w-8 h-8" />, name: 'Security' },
    { icon: <Truck className="w-8 h-8" />, name: 'Logistics' },
    { icon: <Shirt className="w-8 h-8" />, name: 'Fashion' },
    { icon: <Plane className="w-8 h-8" />, name: 'Travel' },
    { icon: <Umbrella className="w-8 h-8" />, name: 'Insurance' },
    { icon: <Leaf className="w-8 h-8" />, name: 'Agritech' },
    { icon: <Radio className="w-8 h-8" />, name: 'Media' },
    { icon: <DollarSign className="w-8 h-8" />, name: 'Finance' },
    { icon: <Trophy className="w-8 h-8" />, name: 'Sports' },
    { icon: <Coffee className="w-8 h-8" />, name: 'Food' },
    { icon: <Dog className="w-8 h-8" />, name: 'Pet' },
    { icon: <Utensils className="w-8 h-8" />, name: 'Kitchenware' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [industries.length]);

  const getVisibleIndustries = () => {
    const visible = [];
    for (let i = 0; i < 6; i++) {
      visible.push(industries[(currentIndex + i) % industries.length]);
    }
    return visible;
  };

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Industries We Cater
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized solutions across diverse industry verticals
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center space-x-4 sm:space-x-8">
            {getVisibleIndustries().map((industry, index) => (
              <div
                key={`${industry.name}-${index}`}
                className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 bg-gray-50 rounded-xl flex flex-col items-center justify-center p-4 hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md animate-fadeIn"
              >
                <div className="mb-3">{industry.icon}</div>
                <div className="text-sm font-semibold text-center">{industry.name}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-black mb-2">16+</div>
            <div className="text-gray-600">Industries Served</div>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-black mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-black mb-2">30+</div>
            <div className="text-gray-600">Countries Reached</div>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-black mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
