import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50 -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50 -bottom-48 -right-48 animate-float-delayed"></div>

        <div className="absolute top-32 left-10 animate-float">
          <Zap className="w-16 h-16 text-black/10" />
        </div>
        <div className="absolute bottom-40 right-20 animate-float-delayed">
          <Shield className="w-20 h-20 text-black/10" />
        </div>
        <div className="absolute top-48 right-32 animate-float">
          <Code className="w-12 h-12 text-black/10" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 animate-fadeInUp">
          Empowering Digital
          <br />
          <span className="bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
            Innovation
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
          We build scalable web, app, and AI solutions for modern businesses
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/cyber-security"
            className="group inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black border-2 border-black rounded-md hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;
