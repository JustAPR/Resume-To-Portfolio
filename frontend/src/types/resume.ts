export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  link: string | null;
  technologies?: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Resume {
  name: string;
  title: string | null;
  summary: string;
  skills: string[];
  projects: Array<{
    "Project Title": string;
    "Project Description": string;
    "Project Link": string | null;
  }>;
  experience: Experience[];
  education: Education[];
}