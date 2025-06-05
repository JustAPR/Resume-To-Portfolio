import { Project } from '../types/resume';

// Function to format the projects array from the API response
export const formatProjects = (projects: Array<{
  "Project Title": string;
  "Project Description": string;
  "Project Link": string | null;
}>): Project[] => {
  return projects.map(project => ({
    title: project["Project Title"],
    description: project["Project Description"],
    link: project["Project Link"],
    // Extract technologies from description (this is a simplistic approach)
    technologies: extractTechnologies(project["Project Description"])
  }));
};

// Helper function to extract potential technologies from project descriptions
const extractTechnologies = (description: string): string[] => {
  const techKeywords = [
    'React.js', 'React', 'Flask', 'T5', 'Hugging Face', 
    'MERN', 'MongoDB', 'Express.js', 'Node.js', 
    'LSTM', 'Streamlit', 'RSI', 'MA20',
    'transformers', 'PDF', 'AI', 'Google'
  ];
  
  const foundTechnologies: string[] = [];
  
  techKeywords.forEach(tech => {
    if (description.includes(tech)) {
      foundTechnologies.push(tech);
    }
  });
  
  return foundTechnologies;
};