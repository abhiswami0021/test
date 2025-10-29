import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import DynamicServicePage from './pages/DynamicServicePage';
import DynamicHirePage from './pages/DynamicHirePage';
import DynamicIndustryPage from './pages/DynamicIndustryPage';
import DynamicProductPage from './pages/DynamicProductPage';
import AboutPage from './pages/About';
import CareerPage from './pages/Careers';
import TestimonialPage from './pages/Testimonials';
import FaqPage from './pages/Faq';
import BlogPage from './pages/Blogs';
import ContactPage from './pages/Contact';
import FreeToolPage from './pages/FreeToolPage';
import PricingPage from './pages/PricingPage';

import RequestQuotePage from './pages/RequestQuotePage';
import TrainingPage from './pages/TrainingPage';
import LeadershipPage from './pages/LeadershipPage';
import CoreValuesPage from './pages/CoreValuesPage';
import PartnersPage from './pages/PartnersPage';
import PressMediaPage from './pages/PressMediaPage';
import LocationsPage from './pages/LocationsPage';
import EngagementModelsPage from './pages/EngagementModelsPage';
import ConfidentialityPage from './pages/ConfidentialityPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PartnerLoginPage from './pages/PartnerLoginPage';
import RequestAccessPage from './pages/RequestAccessPage';
import SupportPage from './pages/SupportPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          {/* === CORE PAGES === */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/training-programs" element={<TrainingPage />} />

          {/* === COMPANY === */}
          <Route path="/company/about" element={<AboutPage />} />
          <Route path="/company/leadership-team" element={<LeadershipPage />} />
          <Route path="/company/core-values" element={<CoreValuesPage />} />
          <Route path="/company/careers" element={<CareerPage />} />
          <Route path="/company/client-testimonials" element={<TestimonialPage />} />
          <Route path="/company/strategic-partners" element={<PartnersPage />} />
          <Route path="/company/press-media-center" element={<PressMediaPage />} />
          <Route path="/company/locations" element={<LocationsPage />} />

          {/* === SERVICES === */}
          <Route path="/services/:category/:subSlug" element={<DynamicServicePage />} />

          {/* === INDUSTRIES === */}
          <Route path="/industry/:sector/:industryType" element={<DynamicIndustryPage />} />

          {/* === HIRE US === */}
          <Route path="/hire/:teamType/:developerType" element={<DynamicHirePage />} />

          {/* === PRODUCTS === */}
          <Route path="/product/:category/:productType" element={<DynamicProductPage />} />

          {/* === RESOURCES === */}
          <Route path="/resources/engagement-models" element={<EngagementModelsPage />} />
          <Route path="/resources/confidentiality-compliance" element={<ConfidentialityPage />} />
          <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
          <Route path="/resources/faqs" element={<FaqPage />} />
          <Route path="/resources/free-development-tools" element={<FreeToolPage />} />

          {/* === LEGAL === */}
          <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/legal/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicyPage />} />

          {/* === ACCOUNT === */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/partner-login" element={<PartnerLoginPage />} />
          <Route path="/request-access" element={<RequestAccessPage />} />
          <Route path="/support" element={<SupportPage />} />

          {/* === BLOG === */}
          <Route path="/blog" element={<BlogPage />} />

          {/* === FALLBACK === */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>


        <Footer />
        <Chatbot />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
