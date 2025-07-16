import React from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import img from "../assets/logoff.svg"

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={img} alt="icon" className="w-[40px] md:w-[40px]  "/>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              WhatsApp Extractor
            </span>
          </button>
          
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('problem')} className="text-gray-700 hover:text-[#874EFF] transition-colors">
              Problem
            </button>
            <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-[#874EFF] transition-colors">
              Solution
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-[#874EFF] transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-[#874EFF] transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-[#874EFF] transition-colors">
              Blog
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Join the Waitlist
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#874EFF] transition-colors p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transform transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transform transition-transform duration-300 rotate-0" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      <div className={`lg:hidden bg-white border-b border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {[
            { label: 'Problem', section: 'problem' },
            { label: 'Solution', section: 'solution' },
            { label: 'Features', section: 'features' },
            { label: 'Pricing', section: 'pricing' },
            { label: 'Blog', section: 'blog' }
          ].map((item, index) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-[#874EFF] hover:bg-gray-50 rounded-lg transition-all duration-200 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('pricing')}
            className={`block w-full text-left px-3 py-2 mt-2 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;