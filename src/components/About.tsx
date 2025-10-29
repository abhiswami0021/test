import { Target, Eye, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Oscillion is a leading IT solutions provider specializing in cutting-edge
              technology services. With over 15 years of experience, we transform businesses
              through innovative digital solutions that drive growth and efficiency.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of expert developers, designers, and strategists work collaboratively
              to deliver world-class web applications, mobile solutions, AI implementations,
              and cybersecurity services tailored to your unique business needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower businesses with innovative technology solutions that drive
                    digital transformation and sustainable growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the most trusted technology partner for businesses worldwide,
                    recognized for excellence and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fadeInRight">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <Zap className="w-32 h-32 text-black opacity-20" />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 rounded-xl shadow-xl max-w-xs">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-sm">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
