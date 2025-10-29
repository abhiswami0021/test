import { useParams, Navigate } from 'react-router-dom';
import { Shield, Lock, Laptop, FileLock, Lightbulb, Code, Plug, Users, Cloud, Server, Database } from 'lucide-react';
import ProductusData from '../data/product.json';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  lock: Lock,
  laptop: Laptop,
  'file-lock': FileLock,
  lightbulb: Lightbulb,
  code: Code,
  plug: Plug,
  users: Users,
  cloud: Cloud,
  server: Server,
  database: Database,
};

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface ProductusData {
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

const DynamicProductPage = () => {
  const { ProductusSlug } = useParams<{ ProductusSlug: string }>();

  const Productus = ProductusSlug ? (ProductusData as Record<string, ProductusData>)[ProductusSlug] : null;

  if (!Productus) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20">
      <div className={`relative bg-gradient-to-br ${Productus.hero.gradient} text-white py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">{Productus.hero.heading}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {Productus.hero.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`grid md:grid-cols-${Productus.features.length === 3 ? '3' : '2'} gap-8 mb-16`}>
          {Productus.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Shield;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {Productus.benefits && Productus.benefits.length > 0 && (
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {Productus.benefits.map((benefit, index) => (
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
      {/* <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our AI chatbot development Productuss
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-black flex-shrink-0 transition-transform ${openFaq === index ? 'transform rotate-180' : ''
                      }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DynamicProductPage;
