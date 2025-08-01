import React, { useState, useEffect } from 'react';
import lmImage from '../assets/image2.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hey, I'm Lalit Maurya 👋";

  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 100);
      }
    };
    typeText();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-36 h-36 mx-auto mb-5 rounded-full flex items-center justify-center ">
            <img src={lmImage} alt="React Image" className="w-full h-full object-cover rounded-full" />  
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-bold">
            Developer. Dreamer. Doer.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Me</span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">Projects</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">Skills</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full">Fun</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get in Touch
            </button>
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              View Projects
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Need an intern?</p>
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
