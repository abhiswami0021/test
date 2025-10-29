import { useParams, Navigate } from 'react-router-dom';
import {
  Shield,
  Lock,
  Heart,
  Building2,
  ShoppingBag,
  Sprout,
  UtensilsCrossed,
  Plane,
  Film,
  Trophy,
  GraduationCap,
  Truck,
  Sparkles,
  PawPrint,
  DollarSign,
} from 'lucide-react';
import industriesData from '../data/industry.json';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  lock: Lock,
  heart: Heart,
  building: Building2,
  shoppingbag: ShoppingBag,
  sprout: Sprout,
  utensils: UtensilsCrossed,
  plane: Plane,
  film: Film,
  trophy: Trophy,
  graduationcap: GraduationCap,
  truck: Truck,
  sparkles: Sparkles,
  pawprint: PawPrint,
  dollarsign: DollarSign,
};

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface IndustryData {
  slug: string;
  title: string;
  description: string;
  hero: {
    heading: string;
    description: string;
    gradient: string;
  };
  features: Feature[];
  benefits: string[];
}

const DynamicIndustryPage = () => {
  const { sector, industryType } = useParams<{ sector: string; industryType: string }>();

  const slug = `${sector}/${industryType}`;
  const industry = (industriesData as Record<string, IndustryData>)[slug];

  if (!industry) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-br ${industry.hero.gradient} text-white py-24`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{industry.hero.heading}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{industry.hero.description}</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className={`grid md:grid-cols-${industry.features.length === 3 ? '3' : '2'} gap-8 mb-16`}>
          {industry.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Shield;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        {industry.benefits && industry.benefits.length > 0 && (
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {industry.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicIndustryPage;
