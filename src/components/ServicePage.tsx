import { useState, FormEvent } from 'react';
import { CheckCircle, TrendingUp, Shield, Clock, Users, Zap, ChevronDown, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { submitServiceInquiry, ServiceInquiry } from '../lib/supabase';

export default function ServicePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const inquiry: ServiceInquiry = {
        service_type: 'AI-Powered Chatbot Development',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        message: formData.message
      };

      await submitServiceInquiry(inquiry);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Your AI chatbot works round the clock, providing instant responses to customer queries at any time of day or night.'
    },
    {
      icon: Users,
      title: 'Improved Customer Satisfaction',
      description: 'Deliver instant, accurate responses that keep your customers happy and engaged with your brand.'
    },
    {
      icon: TrendingUp,
      title: 'Increased Conversions',
      description: 'Guide visitors through their journey with personalized interactions that drive more sales and sign-ups.'
    },
    {
      icon: Shield,
      title: 'Reduced Support Costs',
      description: 'Automate up to 80% of routine inquiries, allowing your team to focus on complex, high-value interactions.'
    },
    {
      icon: Zap,
      title: 'Scalable Solution',
      description: 'Handle thousands of conversations simultaneously without compromising on response quality or speed.'
    },
    {
      icon: CheckCircle,
      title: 'Data-Driven Insights',
      description: 'Gain valuable insights into customer behavior, pain points, and preferences through conversation analytics.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business goals, customer needs, and current pain points to create a tailored chatbot strategy.'
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team designs conversation flows and develops your AI chatbot using cutting-edge NLP and machine learning technologies.'
    },
    {
      step: '03',
      title: 'Training & Testing',
      description: 'We train your chatbot with industry-specific knowledge and rigorously test it to ensure accurate, helpful responses.'
    },
    {
      step: '04',
      title: 'Deployment & Integration',
      description: 'Seamlessly integrate the chatbot into your website, app, or messaging platforms with full technical support.'
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and AI training ensure your chatbot improves over time and adapts to changing customer needs.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Proven Expertise',
      description: 'Over 5 years of experience delivering AI solutions to businesses across 15+ industries.'
    },
    {
      title: 'Custom Solutions',
      description: 'We build tailored chatbots that align with your unique business requirements, not one-size-fits-all templates.'
    },
    {
      title: 'Advanced Technology',
      description: 'Leveraging the latest in GPT-4, natural language processing, and machine learning for superior results.'
    },
    {
      title: 'Dedicated Support',
      description: '24/7 technical support and ongoing optimization to ensure your chatbot performs at its best.'
    },
    {
      title: 'ROI Focused',
      description: 'Our solutions are designed to deliver measurable results and positive ROI within 90 days.'
    },
    {
      title: 'Transparent Process',
      description: 'Clear communication, regular updates, and full visibility into development progress at every stage.'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to develop and deploy a chatbot?',
      answer: 'The timeline varies based on complexity, but typically ranges from 4-8 weeks. A basic chatbot can be deployed in 4 weeks, while more advanced solutions with multiple integrations may take 6-8 weeks. We provide a detailed timeline during the discovery phase.'
    },
    {
      question: 'Can the chatbot integrate with our existing systems?',
      answer: 'Yes! Our chatbots can integrate with most CRM systems, databases, e-commerce platforms, and business tools including Salesforce, HubSpot, Shopify, Zendesk, and custom APIs. We ensure seamless data flow between your chatbot and existing infrastructure.'
    },
    {
      question: 'What languages does the chatbot support?',
      answer: 'Our AI chatbots support 50+ languages including English, Spanish, French, German, Chinese, Japanese, and more. We can configure multilingual support based on your target audience and automatically detect and respond in the user\'s preferred language.'
    },
    {
      question: 'How do you ensure the chatbot provides accurate responses?',
      answer: 'We use a multi-layered approach: comprehensive training with your business data, continuous testing with real scenarios, confidence thresholds to escalate uncertain queries to humans, and regular monitoring with feedback loops to improve accuracy over time.'
    },
    {
      question: 'What happens when the chatbot cannot answer a question?',
      answer: 'When the chatbot encounters a query it cannot confidently answer, it gracefully escalates to a human agent with full conversation context. You can customize escalation rules, and we track these instances to continuously improve the bot\'s knowledge base.'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Absolutely! We provide comprehensive training for your team including how to manage the chatbot, update responses, review analytics, and optimize performance. We also provide detailed documentation and ongoing support.'
    },
    {
      question: 'What kind of analytics and reporting do you provide?',
      answer: 'You\'ll receive detailed analytics including conversation volume, resolution rate, customer satisfaction scores, common questions, user intent analysis, conversion metrics, and escalation patterns. Custom reports can be created based on your specific KPIs.'
    },
    {
      question: 'How much does an AI chatbot cost?',
      answer: 'Pricing varies based on features, integrations, and scale. Basic chatbots start at $5,000 with monthly fees from $500. Enterprise solutions range from $15,000-50,000+ with custom pricing. We offer flexible payment plans and can provide a detailed quote after understanding your requirements.'
    }
  ];

  const partners = [
    { name: 'OpenAI', logo: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Google Cloud', logo: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'AWS', logo: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Microsoft Azure', logo: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Twilio', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Salesforce', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-white bg-opacity-10 rounded-full text-sm font-medium mb-6">
                AI-Powered Solutions
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Transform Your Customer Experience with AI Chatbots
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Automate customer support, boost engagement, and increase conversions 24/7 with intelligent conversational AI tailored to your business.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>90% Faster Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>80% Cost Reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>3x Lead Generation</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h3>
              <p className="text-gray-600 mb-6">Fill out the form and our experts will contact you within 24 hours</p>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  Thank you! We'll contact you shortly.
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-900"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-900"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-900"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your project *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-900"
                    placeholder="Describe your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request a Free Consultation'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is AI Chatbot Development?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              AI chatbot development involves creating intelligent virtual assistants powered by artificial intelligence and natural language processing. These advanced systems understand context, learn from interactions, and provide human-like conversations that enhance customer experience.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our custom chatbot solutions go beyond simple scripted responses. We build sophisticated AI agents that can handle complex queries, integrate with your business systems, qualify leads, process transactions, and provide personalized recommendations based on user behavior and preferences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need customer support automation, lead generation, e-commerce assistance, or internal helpdesk solutions, our AI chatbots are designed to deliver measurable business results while providing exceptional user experiences.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="AI Chatbot Interface"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-sm">Customer Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Benefits of AI Chatbots
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI-powered chatbots can transform your business operations and customer engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 5-step methodology to deliver AI chatbots that exceed expectations
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-700 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-black to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a free consultation with our AI experts and discover how a custom chatbot can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors border-2 border-white"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@aiexperts.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional AI chatbot solutions backed by expertise, technology, and results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100"
              >
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our AI chatbot development services
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
                    className={`w-6 h-6 text-black flex-shrink-0 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
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
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted Technology Partners
            </h2>
            <p className="text-xl text-gray-600">
              We leverage industry-leading platforms to build robust AI solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Your Business with AI Today
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join 500+ companies that have revolutionized their customer experience with our AI chatbot solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
