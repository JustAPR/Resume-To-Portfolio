import React from 'react';
import { Resume } from '../types/resume';
import { Book, Code, Cpu, Database, GitBranch, Globe, Sparkles } from 'lucide-react';

interface AboutProps {
  resume: Resume;
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ resume, darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 px-6 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-blue-300' : 'text-blue-600'
          }`}>
            About Me
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${
            darkMode ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`rounded-xl p-8 shadow-lg ${
            darkMode ? 'bg-gray-700' : 'bg-blue-50'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${
              darkMode ? 'text-blue-300' : 'text-blue-700'
            }`}>
              Who I Am
            </h3>
            <p className={`text-base leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {resume.summary}
            </p>
            <h3 className={`text-xl font-semibold mb-4 ${
              darkMode ? 'text-blue-300' : 'text-blue-700'
            }`}>
              My Focus Areas
            </h3>
            <ul className="space-y-3">
              <FocusItem 
                icon={<Cpu size={20} />}
                text="Artificial Intelligence & Machine Learning"
                darkMode={darkMode}
              />
              <FocusItem 
                icon={<Code size={20} />}
                text="Full Stack Development"
                darkMode={darkMode}
              />
              <FocusItem 
                icon={<Sparkles size={20} />}
                text="Generative AI & LLMs"
                darkMode={darkMode}
              />
              <FocusItem 
                icon={<Database size={20} />}
                text="Data Structures & Algorithms"
                darkMode={darkMode}
              />
              <FocusItem 
                icon={<GitBranch size={20} />}
                text="Version Control & Collaborative Development"
                darkMode={darkMode}
              />
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className={`rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105 ${
              darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-50 to-teal-50'
            }`}>
              <div className="flex gap-4 items-start">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-blue-600' : 'bg-blue-100'
                }`}>
                  <Book size={24} className={darkMode ? 'text-white' : 'text-blue-700'} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-blue-300' : 'text-blue-700'
                  }`}>
                    Computer Science Student
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Specializing in AI & ML with a passion for building intelligent applications
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105 ${
              darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-50 to-purple-50'
            }`}>
              <div className="flex gap-4 items-start">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-teal-600' : 'bg-teal-100'
                }`}>
                  <Globe size={24} className={darkMode ? 'text-white' : 'text-teal-700'} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-teal-300' : 'text-teal-700'
                  }`}>
                    Full Stack Developer
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Building end-to-end web applications with modern technologies
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105 ${
              darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-teal-50 to-orange-50'
            }`}>
              <div className="flex gap-4 items-start">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-purple-600' : 'bg-purple-100'
                }`}>
                  <Sparkles size={24} className={darkMode ? 'text-white' : 'text-purple-700'} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-purple-300' : 'text-purple-700'
                  }`}>
                    AI Enthusiast
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Working with LLMs, transformers, and building intelligent systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FocusItemProps {
  icon: React.ReactNode;
  text: string;
  darkMode: boolean;
}

const FocusItem: React.FC<FocusItemProps> = ({ icon, text, darkMode }) => (
  <li className="flex items-center gap-3">
    <div className={`p-1.5 rounded-md ${
      darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'
    }`}>
      {icon}
    </div>
    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
      {text}
    </span>
  </li>
);

export default About;