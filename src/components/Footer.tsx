import { useRef, useState, type FC } from 'react';
import {
  Mail,
  Linkedin,
  Plus,
  Instagram,
  Facebook,
  Minus,
  MessageCircle,
} from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  key: string;
  title: string;
  links: FooterLink[];
}

const footerData: FooterSection[] = [
  {
  key: 'contact',
  title: 'Contact',
  links: [
    { label: 'Email Us', href: 'mailto:info@oscillion.com' },
    { label: 'Contact Form', href: '/contact' },
    { label: 'Office Locations', href: '/company/locations' },
    { label: 'Request a Quote', href: '/request-quote' },
  ],
},
{
  key: 'information',
  title: 'Information',
  links: [
    { label: 'FAQs', href: '/resources/faqs' },
    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
    { label: 'Terms of Use', href: '/legal/terms-of-use' },
    { label: 'Cookie Policy', href: '/legal/cookie-policy' },
  ],
},
{
  key: 'about',
  title: 'Company',
  links: [
    { label: 'About Us', href: '/company/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Careers', href: '/company/careers' },
    { label: 'Partner With Us', href: '/company/strategic-partners' },
    { label: 'Free Tools', href: '/resources/free-development-tools' },
  ],
},
{
  key: 'community',
  title: 'Community',
  links: [
    { label: 'Instagram', href: 'https://www.instagram.com/oscillion', icon: Instagram },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/oscillion', icon: Linkedin },
    { label: 'Facebook', href: 'https://www.facebook.com/oscillion', icon: Facebook },
    { label: 'WhatsApp', href: 'https://wa.me/919999999999', icon: MessageCircle },
  ],
},
{
  key: 'account',
  title: 'My Account',
  links: [
    { label: 'Client Login', href: '/login' },
    { label: 'Partner Portal', href: '/partner-login' },
    { label: 'Request Access', href: '/request-access' },
    { label: 'Support Center', href: '/support' },
  ],
},


];

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleSection = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Desktop View */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-5 gap-8 mb-12">
          {footerData.map((col) =>
            col.key === 'signin' ? (
              <div key={col.key}>
                <h4 className="text-lg font-semibold text-black mb-4">{col.title}</h4>
                <p className="text-gray-600 text-sm mb-3">JOIN NOW FOR EXCLUSIVE ACCESS</p>
                <div className="flex items-center border-b border-gray-300 pb-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full text-sm text-gray-600 outline-none"
                  />
                  <Mail className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            ) : (
              <div key={col.key}>
                <h4 className="text-lg font-semibold text-black mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((ln) => (
                    <li key={ln.label}>
                      <a
                        href={ln.href}
                        className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
                      >
                        {ln.icon && <ln.icon className="w-4 h-4" />} {ln.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="lg:hidden max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <div className="divide-y divide-gray-200">
          {footerData.map((sec, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={sec.key} className="py-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-between"
                  onClick={() => toggleSection(index)}
                >
                  <span className="text-sm font-semibold text-black tracking-wide">
                    {sec.title}
                  </span>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? contentRefs.current[index]?.scrollHeight : 0 }}
                >
                  <div className="pt-4">
                    {sec.key === 'signin' ? (
                      <>
                        <p className="text-gray-600 text-sm mb-3">
                          JOIN NOW FOR EXCLUSIVE ACCESS
                        </p>
                        <div className="flex items-center border-b border-gray-300 pb-2">
                          <input
                            type="email"
                            placeholder="Your email"
                            className="w-full text-sm text-gray-600 outline-none"
                          />
                          <Mail className="w-4 h-4 text-gray-600" />
                        </div>
                      </>
                    ) : (
                      <ul className="space-y-3">
                        {sec.links.map((ln) => (
                          <li key={ln.label}>
                            <a
                              href={ln.href}
                              className="flex items-center gap-2 text-gray-600 text-sm hover:text-black transition-colors duration-300"
                            >
                              {ln.icon && <ln.icon className="w-4 h-4" />} {ln.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center text-gray-600 py-6">
        <p>Oscillion Software Services LLP - ©{currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
