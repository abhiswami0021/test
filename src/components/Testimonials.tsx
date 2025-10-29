import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechVision Inc',
      content: 'Oscillion transformed our digital presence with their innovative solutions. Their team\'s expertise in web development and AI integration exceeded our expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Global Logistics Solutions',
      content: 'Working with Oscillion was a game-changer for our business. They delivered a robust cloud infrastructure that scaled perfectly with our growth. Exceptional service and support!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'StyleHub Fashion',
      content: 'The eCommerce platform Oscillion built for us increased our sales by 150%. Their attention to detail and understanding of our industry made all the difference.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Director of IT',
      company: 'HealthCare Plus',
      content: 'Security was our top priority, and Oscillion delivered beyond expectations. Their cybersecurity solutions give us peace of mind knowing our patient data is protected.',
      rating: 5,
    },
    {
      name: 'Lisa Wang',
      role: 'VP of Marketing',
      company: 'EduTech Academy',
      content: 'The mobile app Oscillion developed has revolutionized how our students learn. Intuitive design, seamless functionality, and outstanding performance across all devices.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses worldwide for delivering exceptional results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 relative animate-fadeIn">
            <Quote className="w-16 h-16 text-gray-200 absolute top-8 left-8" />

            <div className="relative z-10">
              <div className="flex mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                "{currentTestimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-black text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
