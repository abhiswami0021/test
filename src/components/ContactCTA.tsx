import { ArrowRight, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="quote" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl opacity-5 -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl opacity-5 -bottom-48 -right-48 animate-float-delayed"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <MessageCircle className="w-16 h-16 text-white mx-auto mb-6 animate-fadeInUp" />

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fadeInUp animation-delay-200">
          Let's Build Something Great Together
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fadeInUp animation-delay-400">
          Ready to transform your business with cutting-edge technology? Our team of experts is here to help you achieve your digital goals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeInUp animation-delay-600">
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 bg-white text-black rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-md hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fadeInUp animation-delay-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">&lt;48hrs</div>
            <div className="text-gray-400">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">Free</div>
            <div className="text-gray-400">Consultation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
