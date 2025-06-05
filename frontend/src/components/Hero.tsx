import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Resume } from '../types/resume';

interface HeroProps {
  resume: Resume;
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ resume, darkMode }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className={`min-h-screen flex flex-col justify-center items-center px-6 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-gray-100 text-gray-900'
      }`}
    >
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-6 relative">
          <div className="inline-block relative">
            <span className={`absolute -inset-1 blur opacity-30 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-400'}`}></span>
            <h1 className={`relative text-4xl md:text-6xl font-bold mb-2 tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {resume.name}
            </h1>
          </div>
        </div>
        
        <h2 className={`text-xl md:text-2xl font-medium mb-6 ${
          darkMode ? 'text-blue-300' : 'text-blue-700'
        }`}>
          {resume.title || "Computer Science Student & AI Enthusiast"}
        </h2>
        
        <p className={`text-lg leading-relaxed mb-10 max-w-2xl mx-auto ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {resume.summary}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={scrollToAbout}
            className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Explore My Work
          </button>
          
          <a 
            href="#contact" 
            className={`px-8 py-3 rounded-lg font-medium border-2 transition-all transform hover:scale-105 ${
              darkMode 
                ? 'border-white text-white hover:bg-white hover:text-gray-900' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className={`p-2 rounded-full ${
            darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;