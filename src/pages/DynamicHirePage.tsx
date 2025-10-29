import { useParams, Navigate } from 'react-router-dom';
import {
  Shield, Lock, Laptop, FileLock, Lightbulb, Code, Plug, Users, Cloud, Server, Database
} from 'lucide-react';
import hireusData from '../data/hireus.json';

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

interface HireUsEntry {
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

const DynamicHirePage = () => {
  const { teamType, developerType } = useParams<{ teamType: string; developerType: string }>();

  const slug = `${teamType}/${developerType}`;
  const hireus = (hireusData as Record<string, HireUsEntry>)[slug];

  if (!hireus) return <Navigate to="/" replace />;

  return (
    <div className="pt-20">
      <div className={`relative bg-gradient-to-br ${hireus.hero.gradient} text-white py-24`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{hireus.hero.heading}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{hireus.hero.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className={`grid md:grid-cols-${hireus.features.length === 3 ? '3' : '2'} gap-8 mb-16`}>
          {hireus.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Shield;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition">
                <div className="flex items-center mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {hireus.benefits?.length > 0 && (
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {hireus.benefits.map((benefit, index) => (
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

export default DynamicHirePage;
