import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Resume } from './types/resume';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [resumeData, setResumeData] = useState<Resume | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await axios.get<Resume>('/api/resume'); // Replace with your API endpoint
        // Normalize the data to ensure arrays exist even if they're null/undefined in the response
        const normalizedData: Resume = {
          ...response.data,
          education: response.data.education || [],
          skills: response.data.skills || [],
          projects: response.data.projects || [],
          experience: response.data.experience || [],
        };
        setResumeData(normalizedData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch resume data');
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);
  
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    if (resumeData) {
      document.title = `${resumeData.name} | Portfolio`;
    }
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [resumeData]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !resumeData) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-red-500">{error || 'Failed to load resume data'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero resume={resumeData} darkMode={darkMode} />
      <About resume={resumeData} darkMode={darkMode} />
      <Skills resume={resumeData} darkMode={darkMode} />
      <Projects resume={resumeData} darkMode={darkMode} />
      <Education resume={resumeData} darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;