import React from 'react';
import { Resume } from '../types/resume';
import { GraduationCap, CalendarDays } from 'lucide-react';

interface EducationProps {
  resume: Resume;
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ resume, darkMode }) => {
  return (
    <section 
      id="education" 
      className={`py-20 px-6 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-blue-300' : 'text-blue-600'
          }`}>
            Education
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${
            darkMode ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
          <p className={`mt-4 max-w-xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My academic journey and qualifications.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-0 md:left-1/2 h-full w-0.5 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-300'
          } transform md:translate-x-px hidden md:block`}></div>
          
          <div className="space-y-12">
            {resume.education.map((edu, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  {/* Timeline dot - visible only on larger screens */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      darkMode 
                        ? 'bg-blue-600 border-blue-300' 
                        : 'bg-blue-600 border-white'
                    }`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${
                    index % 2 === 0 
                      ? 'md:pr-12 md:text-right' 
                      : 'md:pl-12'
                  }`}>
                    <div className={`p-6 rounded-xl shadow-lg ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    } transform transition-transform duration-300 hover:scale-105`}>
                      <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} items-start gap-3 mb-3`}>
                        <div className={`p-2 rounded-lg ${
                          darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'
                        } ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                          <GraduationCap size={20} />
                        </div>
                        <h3 className={`text-lg font-bold ${
                          darkMode ? 'text-blue-300' : 'text-blue-700'
                        }`}>
                          {edu.institution}
                        </h3>
                      </div>
                      
                      <div className={`ml-11 md:ml-0 ${index % 2 === 0 ? 'md:mr-11' : 'md:ml-11'}`}>
                        <p className={`text-base font-medium mb-2 ${
                          darkMode ? 'text-gray-200' : 'text-gray-800'
                        }`}>
                          {edu.degree.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < edu.degree.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </p>
                        
                        <div className={`flex items-center gap-2 text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <CalendarDays size={14} />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;