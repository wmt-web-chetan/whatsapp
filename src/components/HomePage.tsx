import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Components
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import VideoSection from './VideoSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import PricingSection from './PricingSection';
import PrivacySecuritySection from './PrivacySecuritySection';
import BetaTestimonialsSection from './BetaTestimonialsSection';
import BlogSection from './BlogSection';
import Footer from './Footer';

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupEmail, setPopupEmail] = useState('');

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };


  const handlePopupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Popup email submitted:', popupEmail);
    setPopupEmail('');
    setShowPopup(false);
    alert('Thank you for joining our waitlist!');
  };

  const handleJoinWaitlist = () => {
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-white   ">
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <div className="overflow-x-hidden">
      <HeroSection scrollToSection={scrollToSection} />
      
      <VideoSection />
      <ProblemSection scrollToSection={scrollToSection} />
      <SolutionSection scrollToSection={scrollToSection} />
      <HowItWorksSection scrollToSection={scrollToSection} />
      <FeaturesSection />
      <PrivacySecuritySection scrollToSection={scrollToSection} />
      <BetaTestimonialsSection scrollToSection={scrollToSection} />
      <PricingSection onJoinWaitlist={handleJoinWaitlist} />
      <BlogSection />
      
      <Footer />

      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl transform animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">🚀 Join Our Waitlist</h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Be among the first to experience the future of WhatsApp communication. 
              Get early access and exclusive updates!
            </p>
            <form onSubmit={handlePopupSubmit} className="space-y-6">
              <input
                type="email"
                value={popupEmail}
                onChange={(e) => setPopupEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#874EFF] focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                🎯 Secure My Spot
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;