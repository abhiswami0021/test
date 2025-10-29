import { useState, useEffect } from 'react';

interface FaqItem {
  question: string;
  answer: JSX.Element;
}

interface FaqCategory {
  id: string;
  category: string;
  items: FaqItem[];
}

const FaqPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll to section and close sidebar on mobile
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsSidebarOpen(false); // Close sidebar on mobile after click
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = faqData.map((category) => category.id);
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqData: FaqCategory[] = [
    { id: 'about-oscillion-software', category: 'About Oscillion Software', items: [
      { question: 'How long have you been in business?', answer: <p>We have been providing IT consulting and software development services for 36 years, since 1989. In that time, we’ve completed over 4,200 projects and served more than 1,400 clients, from startups to Fortune 500 companies.</p> },
      { question: 'Where are you located? Do you offer on-site services?', answer: <p>We are headquartered in McKinney, TX, with another office in Atlanta, GA. We have branches in Fujairah (UAE), Riyadh (KSA), Mexico City (Mexico), Riga (Latvia), Vilnius (Lithuania), Warsaw (Poland), and Vantaa (Finland). We ensure compliance with standards like HIPAA, GDPR, and SAMA and offer on-site visits.</p> },
      { question: 'How big is your team?', answer: <p>Oscillion Software is a team of 750+ professionals, including IT consultants, project managers, and more, with over 50% being senior-level experts.</p> },
      { question: 'What types of customers do you serve?', answer: <p>We serve mid-sized and large enterprises, product companies, MSPs, and startups.</p> },
      { question: 'What industries do you specialize in?', answer: <p>We have experience in over 30 industries, focusing on sector-specific risks and best practices.</p> },
      { question: 'Can you provide examples of projects you’ve completed in my domain?', answer: <p>Explore our <a href="#" className="text-blue-600 hover:underline">case studies page</a> and contact us for references.</p> },
      { question: 'What sets your services apart from competitors?', answer: <p>We practice real project management and uphold a proprietary Code of Conduct for ethics and reliability.</p> },
      { question: 'What technologies do you work with?', answer: <p>Our team is proficient in Python, Java, C#, .NET, PHP, Golang, JavaScript, React Native, Swift, Objective-C, Kotlin, Azure, AWS, GCP, Kafka, Spark, Hadoop, Docker, Kubernetes, and advanced techs like blockchain, AR/VR, AI/ML, and IoT. Visit our <a href="#" className="text-blue-600 hover:underline">Technologies page</a> for a complete list.</p> },
      { question: 'Do you have partnerships with other technology vendors?', answer: <p>We have long-term partnerships with Microsoft, AWS, Oracle, Adobe, and ServiceNow. Visit our <a href="#" className="text-blue-600 hover:underline">Partners page</a> for more details.</p> },
      { question: 'Do you have client testimonials?', answer: <p>Over 150 satisfied clients have provided feedback. We can connect you with references in your industry or region. Explore detailed reviews on <a href="#" className="text-blue-600 hover:underline">Clutch</a>.</p> },
      { question: 'How do you stay informed about emerging technologies and industry best practices?', answer: <p>We engage in continuous learning, attend leading tech conferences, monitor industry publications, and invest in role-specific trainings and certifications.</p> },
      { question: 'Do your IT professionals hold role-specific certifications?', answer: <ul className="list-disc pl-5"><li>Project managers: PMP, PSM, PSPO, ICP-APM, SAFe PO/PM.</li><li>Business analysts: PMI-PBA, CBAP, IREB-CPRE.</li><li>Solution architects: TOGAF, AWS Solutions Architect, Microsoft Azure Solutions Architect, BTA Blockchain Solution Architect.</li><li>Software engineers: Microsoft Azure Developer Associate, AWS Certified Developer.</li><li>Security specialists: CISSP, CISM, CEH, ITIL.</li><li>QA engineers: ISTQB, CAT, CSQA.</li></ul> },
    ]},
    { id: 'pricing', category: 'Pricing', items: [
      { question: 'What is your pricing model?', answer: <p>We offer time and materials (T&M), T&M with a cap, fixed price, monthly subscription fee, or per-ticket fee. Learn more on our <a href="#" className="text-blue-600 hover:underline">Pricing Models page</a>.</p> },
      { question: 'How much will a specific service cost?', answer: <p>For a free ballpark estimate, visit our <a href="#" className="text-blue-600 hover:underline">Pricing page</a> with cost calculators. For a tailored quote, contact us via email, phone, live chat, or the quick request form.</p> },
      { question: 'I have a specific project in mind. How can I get a project estimate? Can you provide a detailed breakdown of the project cost?', answer: <p>Contact us for a rough estimate within 1–3 business days. For a precise quote with a detailed cost breakdown, we’ll need 1–2 weeks for discussions. If you have a project specification or RFP, this can be expedited.</p> },
      { question: 'What is your minimal project size?', answer: <ul className="list-disc pl-5"><li>Software engineering: $50,000 (custom software), $20,000 (low-code solutions).</li><li>Data analytics: $10,000 (consulting), $20,000 (solution implementation).</li><li>Help desk and managed IT services: $3,000/month.</li><li>SharePoint implementation and consulting: $15,000.</li><li>We’re open to smaller-scale trial projects.</li></ul> },
      { question: 'How do you manage the budget and prevent cost overruns? Are there any hidden costs?', answer: <p>We use realistic cost estimation, structured change management, and budget monitoring to prevent overruns. There are no hidden costs—everything is outlined upfront. Explore our <a href="#" className="text-blue-600 hover:underline">budget management practices</a>.</p> },
      { question: 'Do you offer project estimates for free?', answer: <p>Yes, we offer free project estimates as part of our commitment to transparency and client satisfaction.</p> },
    ]},
    { id: 'discussing-a-potential-project', category: 'Discussing a Potential Project', items: [
      { question: 'I have a project in mind. Who should I contact to discuss it?', answer: <ul className="list-disc pl-5"><li>Live chat: 30-second response time.</li><li>Email: <a href="mailto:contact@oscillionsoftware.com" className="text-blue-600 hover:underline">contact@oscillionsoftware.com</a> (1–2 hours to 1 business day response).</li><li>Phone: +1 214 306 68 37 or +1 972 454 47 30 (24/5).</li><li>Learn more: <a href="#" className="text-blue-600 hover:underline">How to start</a>.</li></ul> },
      { question: 'How can I book a meeting with a specialist?', answer: <p>Use live chat, email us at <a href="mailto:contact@oscillionsoftware.com" className="text-blue-600 hover:underline">contact@oscillionsoftware.com</a>, or call +1 214 306 68 37 or +1 972 454 47 30. Share a brief project description for a tailored discussion.</p> },
      { question: 'How do you sign NDAs? Can you use my preferred NDA template?', answer: <p>NDAs can be signed in person or remotely via scan or electronic signature. We can use our template or yours if it aligns with our policies.</p> },
      { question: 'How do you estimate timelines for new projects?', answer: <p>We define the project scope, break it into tasks, identify dependencies, and estimate effort. Small projects take days to 1–2 weeks, medium projects 2–4 weeks, and large projects 1–2 months for planning.</p> },
      { question: 'How do you estimate costs for new projects?', answer: <p>We analyze requirements, break the scope into measurable units, and estimate time and resources using tailored techniques and historical data. Learn more about our <a href="#" className="text-blue-600 hover:underline">cost estimation practices</a>.</p> },
      { question: 'Can you help with the feasibility study?', answer: <p>Yes, we conduct thorough feasibility studies analyzing technological, economic, and operational aspects. Request a <a href="#" className="text-blue-600 hover:underline">feasibility study</a>.</p> },
    ]},
    { id: 'starting-a-project', category: 'Starting a Project', items: [
      { question: 'Can you join our project at any stage?', answer: <p>Yes, we can join at any stage—design, development, or post-launch support—aligning quickly with your goals and workflows.</p> },
      { question: 'How will you integrate into our IT infrastructure?', answer: <p>We deploy services in your environment, grant guest access via secure methods (VPN, RBAC, SSO), synchronize ticketing systems, and integrate with your development pipelines using tools like Jenkins or Azure DevOps.</p> },
      { question: 'How does the project onboarding usually look like?', answer: <p>We understand your requirements, create a project plan, assign a project manager, integrate with your tools, and establish transparent communication. Learn more about our <a href="#" className="text-blue-600 hover:underline">onboarding process</a>.</p> },
      { question: 'Can you take over the project from a different IT vendor?', answer: <p>Yes, we conduct a comprehensive audit, perform knowledge transfer, and use a phased approach for a smooth handover. Learn more about our <a href="#" className="text-blue-600 hover:underline">vendor transition approach</a>.</p> },
      { question: 'Who will be the point of contact for my project?', answer: <p>For full outsourcing: a dedicated project manager and account manager. For dedicated teams: a project coordinator and technical lead. For team augmentation: an account manager handles administrative tasks.</p> },
    ]},
    { id: 'development-process-and-practices', category: 'Development Process and Practices', items: [
      { question: 'Do you sign an SLA?', answer: <p>Yes, our SLAs define service scope, timelines, metrics, change handling, issue resolution, and penalties for non-compliance.</p> },
      { question: 'How do you handle software licensing?', answer: <p>We assist with procurement, negotiate vendor terms, ensure license alignment, and provide detailed licensing reports.</p> },
      { question: 'How do you approach managing each project from start to finish?', answer: <p>We align with your goals, use Agile or traditional methods, and assign a dedicated project manager.</p> },
      { question: 'Do you offer a trial period for your services?', answer: <p>We approach trial periods case-by-case and are open to pilot projects or limited engagements tailored to your needs.</p> },
      { question: 'How do you handle communication and collaboration across different time zones?', answer: <p>We use synchronous and asynchronous tools, ensure a 2–6 hour work hour overlap, and align help desk services with your business hours.</p> },
      { question: 'What project reporting tools do you use?', answer: <p>We use Jira, Trello, Asana, Basecamp, and Azure DevOps. Learn more about our <a href="#" className="text-blue-600 hover:underline">reporting approach</a>.</p> },
      { question: 'Can you accommodate changes in project scope, and how does it impact the timeline and budget?', answer: <p>We manage scope changes through a dedicated process, analyzing impacts and obtaining customer approval. Learn more about <a href="#" className="text-blue-600 hover:underline">change management</a>.</p> },
      { question: 'What is your contingency plan for unexpected challenges or delays?', answer: <p>We use proactive risk identification, time and budget reserves, flexible methodologies, and transparent communication. Learn more about our <a href="#" className="text-blue-600 hover:underline">contingency planning</a>.</p> },
      { question: 'Which parts of the development process do you automate, from coding to deployment?', answer: <p>We automate code integration, testing, environment provisioning, deployment, and monitoring, achieving smooth releases and low failure rates.</p> },
      { question: 'How do you ensure the software is scalable and able to handle future growth?', answer: <p>We design scalable architectures, use autoscaling, conduct performance tests, and apply FinOps for cost optimization.</p> },
    ]},
    { id: 'service-quality', category: 'Service Quality', items: [
      { question: 'How do you ensure service quality?', answer: <p>We use a quality management system with KPIs and controls throughout the SDLC.</p> },
      { question: 'What is your uptime guarantee?', answer: <p>For cloud-hosted services, we align with providers’ SLAs (99.9%–99.99%). For dedicated hardware, uptime is outlined in a tailored SLA based on your infrastructure.</p> },
      { question: 'Are you ISO-certified?', answer: <p>Yes, we hold ISO 9001 (quality), ISO 27001 (security), and ISO 13485 (medical devices) certifications.</p> },
    ]},
    { id: 'testing-and-qa', category: 'Testing and QA', items: [
      { question: 'What is your testing process before launching the app?', answer: <p>We conduct UAT, functional, performance, and security testing with a test summary report.</p> },
      { question: 'How do you handle bug fixes and updates after the app is launched?', answer: <p>We provide a one-month post-launch warranty period, fixing critical or major issues at no additional cost.</p> },
    ]},
    { id: 'post-launch-support', category: 'Post-launch Support', items: [
      { question: 'Do you offer 24/7 support?', answer: <p>Yes, we provide 24/7 L1, L2, and L3 support.</p> },
      { question: 'Do you provide documentation for the implemented systems and solutions?', answer: <p>We provide comprehensive documentation and integrate knowledge sharing to ensure easy maintenance and evolution.</p> },
      { question: 'Do you provide ongoing support and maintenance after software delivery/modernization?', answer: <p>We offer 1–3 months of initial support, followed by optional continuous maintenance and L1–L3 support services.</p> },
      { question: 'Are there ongoing costs for maintenance and support after deployment?', answer: <p>A one-month warranty period is included at no cost. Ongoing maintenance costs range from $5,000 to $50,000+/month based on software type and requirements.</p> },
      { question: 'What does the knowledge transfer to our team look like? Do you provide training?', answer: <p>We provide structured documentation, hands-on training, Q&A sessions, and a feedback loop to ensure effective knowledge transfer.</p> },
    ]},
    { id: 'security-and-compliance', category: 'Security and Compliance', items: [
      { question: 'How do you guarantee the security of our data and assets?', answer: <p>With ISO 27001 certification, we use NDAs, isolated environments, and role-based access.</p> },
      { question: 'What happens if there’s a breach or a security incident?', answer: <p>Our 24/7 security operations center detects anomalies, isolates systems, notifies stakeholders, investigates, and implements fixes, followed by a post-incident review.</p> },
      { question: 'What steps do you take to ensure disaster recovery preparedness?', answer: <p>We develop tailored disaster recovery strategies with RTO/RPO objectives, conduct regular drills, and maintain detailed logs for audits.</p> },
      { question: 'How do you ensure compliance with data protection standards and regulations?', answer: <p>We embed compliance (HIPAA, PCI DSS, GDPR, etc.) into development, conduct privacy impact assessments, and maintain audit trails.</p> },
      { question: 'How do you handle our intellectual property? Who owns the code?', answer: <p>We sign NDAs and MSAs ensuring you retain legal ownership of all intellectual property, including code.</p> },
    ]},
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Find answers to common questions about Oscillion Software or{' '}
              <a href="mailto:contact@oscillionsoftware.com" className="text-blue-400 hover:underline">
                contact us
              </a>{' '}
              for assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-64 w-full lg:sticky lg:top-24">
          <button
            className="lg:hidden w-full bg-blue-600 text-white px-4 py-2 rounded mb-4"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
          </button>
          <nav
            className={`${
              isSidebarOpen ? 'block' : 'hidden'
            } lg:block p-4 lg:p-0`}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Popular Questions</h3>
            <ul className="space-y-2">
              {faqData.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(category.id)}
                    className={`w-full text-left px-3 py-2 rounded ${
                      activeSection === category.id
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category.category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* FAQ Content */}
        <div className="flex-1">
          {faqData.map((category, categoryIndex) => (
            <section id={category.id} key={categoryIndex} className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border rounded-lg bg-white shadow-sm">
                    <button
                      className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                      onClick={(e) => {
                        e.preventDefault();
                        const accordion = document.getElementById(`accordion-${categoryIndex}-${itemIndex}`);
                        const isOpen = accordion?.classList.contains('hidden');
                        accordion?.classList.toggle('hidden', !isOpen);
                      }}
                    >
                      <span className="text-lg font-medium text-gray-900">{item.question}</span>
                      <span className="text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    <div id={`accordion-${categoryIndex}-${itemIndex}`} className="hidden px-6 py-4 text-gray-600">
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Have a Question or Need Assistance?</h2>
          <p className="text-gray-600 text-lg mb-6">Our team is ready to help with your IT initiative.</p>
          <a
            href="mailto:contact@oscillionsoftware.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;