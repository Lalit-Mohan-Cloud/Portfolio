import React, { useState, useEffect } from 'react';
import lmImage from '../assets/image1.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center font-bold text-blue-600 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            <div className="w-20 sm:w-20 md:w-24 mt-3 -mr-5 -ml-5">
              <img src={lmImage} alt="Lalit Maurya Logo" className="w-full h-auto object-contain" />
            </div>
            <span className="hidden sm:inline">Lalit Maurya</span>
          </div>



          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-bold">
              About
            </button>
            <button onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-bold">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-bold">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-bold">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </button>
              <button onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
