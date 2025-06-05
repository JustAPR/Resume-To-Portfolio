import React from 'react';
import { Resume } from '../types/resume';
import { formatSkills } from '../utils/formatSkills';
import { CheckCircle } from 'lucide-react';

interface SkillsProps {
  resume: Resume;
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ resume, darkMode }) => {
  const formattedSkills = formatSkills(resume.skills);

  return (
    <section 
      id="skills" 
      className={`py-20 px-6 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-blue-300' : 'text-blue-600'
          }`}>
            My Skills
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${
            darkMode ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
          <p className={`mt-4 max-w-xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are the technologies and skills I've mastered throughout my academic and project work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formattedSkills.map((skillCategory, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 pb-2 border-b ${
                darkMode ? 'text-blue-300 border-gray-700' : 'text-blue-600 border-gray-200'
              }`}>
                {parseSkillCategory(skillCategory.category)}
              </h3>
              <ul className="space-y-2">
                {parseSkillItems(skillCategory.category, skillCategory.items).map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-2">
                    <CheckCircle 
                      size={18} 
                      className={`mt-0.5 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                    />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to parse and format skill categories
const parseSkillCategory = (category: string): string => {
  // Clean up the category name
  return category
    .replace(/Languages/i, 'Programming Languages')
    .replace(/Web/i, 'Web Development')
    .replace(/Database/i, 'Database Technologies')
    .replace(/Machine Learning/i, 'Machine Learning & AI')
    .replace(/DSA/i, 'Data Structures & Algorithms')
    .replace(/Version Control/i, 'Version Control')
    .replace(/Soft Skills/i, 'Professional Skills');
};

// Helper function to parse skill items
const parseSkillItems = (category: string, items: string[]): string[] => {
  // If the category contains the items, extract them
  if (items.length === 1 && items[0].includes(',')) {
    return items[0].split(',').map(item => item.trim());
  }
  
  return items;
};

export default Skills;