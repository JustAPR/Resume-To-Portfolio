import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-10 px-6 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2"></h3>
            <p className="text-sm text-gray-300"></p>
          </div>
          
          <div className="flex gap-4">
            <SocialLink 
              href="https://github.com/username" 
              icon={<Github size={20} />} 
              label="GitHub"
            />
            <SocialLink 
              href="https://linkedin.com/in/username" 
              icon={<Linkedin size={20} />} 
              label="LinkedIn"
            />
            <SocialLink 
              href="mailto:example@email.com" 
              icon={<Mail size={20} />} 
              label="Email"
            />
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} All rights reserved.
          </p>
          
          <p className="text-sm text-gray-400 flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" fill="currentColor" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;