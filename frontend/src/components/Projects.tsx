import React, { useState } from 'react';
import { Resume } from '../types/resume';
import { formatProjects } from '../utils/formatProjects';
import { ExternalLink, Code, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectsProps {
  resume: Resume;
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ resume, darkMode }) => {
  const formattedProjects = formatProjects(resume.projects);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (projectTitle: string) => {
    if (expandedProject === projectTitle) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectTitle);
    }
  };

  return (
    <section 
      id="projects" 
      className={`py-20 px-6 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-blue-300' : 'text-blue-600'
          }`}>
            My Projects
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${
            darkMode ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
          <p className={`mt-4 max-w-xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some of the projects I've worked on, showcasing my skills and experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {formattedProjects.map((project, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-700 hover:shadow-blue-900/20' : 'bg-gray-50 hover:shadow-blue-500/20'
              } ${expandedProject === project.title ? 'ring-2 ring-blue-500' : ''}`}
            >
              <div className={`p-6 ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30' 
                  : 'bg-gradient-to-r from-blue-50 to-indigo-50'
              }`}>
                <div className="flex justify-between items-start">
                  <h3 className={`text-xl font-bold mb-2 ${
                    darkMode ? 'text-blue-300' : 'text-blue-700'
                  }`}>
                    {project.title}
                  </h3>
                  <button
                    onClick={() => toggleProject(project.title)}
                    className={`p-1 rounded-full ${
                      darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                    }`}
                    aria-label={expandedProject === project.title ? "Collapse project details" : "Expand project details"}
                  >
                    {expandedProject === project.title ? (
                      <ChevronUp size={20} className={darkMode ? 'text-gray-300' : 'text-gray-600'} />
                    ) : (
                      <ChevronDown size={20} className={darkMode ? 'text-gray-300' : 'text-gray-600'} />
                    )}
                  </button>
                </div>
                
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode 
                            ? 'bg-blue-900/50 text-blue-200' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } ${expandedProject === project.title ? '' : 'line-clamp-2'}`}>
                  {project.description.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < project.description.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                
                <div className="flex items-center gap-3">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-sm font-medium ${
                        darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      <ExternalLink size={16} />
                      <span>View Project</span>
                    </a>
                  )}
                  
                  <button
                    onClick={() => toggleProject(project.title)}
                    className={`flex items-center gap-1 text-sm font-medium ${
                      darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <Code size={16} />
                    <span>{expandedProject === project.title ? 'Show Less' : 'Show More'}</span>
                  </button>
                </div>
              </div>
              
              {expandedProject === project.title && (
                <div className={`p-6 border-t ${
                  darkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-200 bg-white'
                }`}>
                  <h4 className={`text-sm font-semibold mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Project Highlights
                  </h4>
                  <ul className={`list-disc pl-5 space-y-1 text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description.split('\n').filter(line => line.trim()).map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;