import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Sparkles,
  Cloud,
  Globe,
  Smartphone,
  Code,
  ShoppingCart,
  FileText,
  TrendingUp,
  Palette,
  Wrench
} from 'lucide-react';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

const Services = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const services: ServiceCard[] = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cyber Security',
      description: 'Protect your digital assets with enterprise-grade security solutions and threat prevention.',
      link: '/services/cyber-security',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Generative AI',
      description: 'Leverage cutting-edge AI technology to automate processes and enhance decision-making.',
      link: '/services/generative-ai',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure solutions for seamless business operations and growth.',
      link: '/services/cloud-services',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks for optimal performance.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Front-End Development',
      description: 'Beautiful, responsive interfaces that engage users and drive conversions.',
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'eCommerce',
      description: 'Complete eCommerce solutions that maximize sales and customer satisfaction.',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'CMS Development',
      description: 'Flexible content management systems for easy content updates and management.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'SEO & Marketing',
      description: 'Data-driven strategies to boost your online visibility and attract customers.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Designing',
      description: 'Stunning UI/UX designs that create memorable brand experiences.',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Support & Testing',
      description: 'Comprehensive QA testing and ongoing support to ensure peak performance.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 150);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 hidden lg:block"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 hidden lg:block"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 px-2 scroll-smooth hide-scrollbar snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {services.map((service, index) => {
              const CardContent = (
                <>
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500 blur-xl" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-black to-gray-700 text-white rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-gray-700">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center text-black font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm">Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-black transition-all duration-500 pointer-events-none" />
                </>
              );

              const className = `group flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 snap-center ${
                isScrolling ? '' : 'hover:-translate-y-3'
              } ${service.link ? 'cursor-pointer' : ''}`;

              const style = {
                animation: `slideInFromRight 0.6s ease-out ${index * 0.1}s both`,
              };

              return service.link ? (
                <Link
                  key={service.title}
                  to={service.link}
                  className={className}
                  style={style}
                >
                  {CardContent}
                </Link>
              ) : (
                <div
                  key={service.title}
                  className={className}
                  style={style}
                >
                  {CardContent}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default Services;
