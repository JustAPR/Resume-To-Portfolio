import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { theme } from '../utils/theme';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-gray-900 shadow-md' 
            : 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}
        >
          PR
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks darkMode={darkMode} scrollToSection={scrollToSection} />
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 mr-2 rounded-full ${
              darkMode 
                ? 'text-white hover:bg-gray-700' 
                : 'text-gray-800 hover:bg-gray-200'
            } transition-colors`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleMenu}
            className={`p-2 rounded-md ${
              darkMode 
                ? 'text-white hover:bg-gray-700' 
                : 'text-gray-800 hover:bg-gray-200'
            } transition-colors`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden fixed inset-0 z-40 pt-16 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="px-6 py-4 flex flex-col space-y-6">
            <NavLinks darkMode={darkMode} scrollToSection={scrollToSection} />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  darkMode: boolean;
  scrollToSection: (id: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ darkMode, scrollToSection }) => {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(link.id);
          }}
          className={`font-medium hover:text-primary-500 transition-colors ${
            darkMode ? 'text-gray-100' : 'text-gray-800'
          } md:inline-block block text-center py-2 md:py-0`}
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default Header;