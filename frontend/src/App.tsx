// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Upload, FileUp, Loader2 } from 'lucide-react';
// import { Resume } from './types/resume';

// function App() {
//   const [darkMode, setDarkMode] = useState<boolean>(false);
//   const [file, setFile] = useState<File | null>(null);
//   const [uploading, setUploading] = useState<boolean>(false);
//   const [resumeData, setResumeData] = useState<Resume | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setDarkMode(true);
//     }
    
//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     const handleChange = (e: MediaQueryListEvent) => {
//       setDarkMode(e.matches);
//     };
    
//     mediaQuery.addEventListener('change', handleChange);
//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, []);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//       setError(null);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setError('Please select a file first');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     setUploading(true);
//     setError(null);

//     try {
//       const response = await axios.post('http://localhost:8000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const normalizedData: Resume = {
//         ...response.data,
//         education: response.data.education || [],
//         skills: response.data.skills || [],
//         projects: response.data.projects || [],
//         experience: response.data.experience || [],
//       };
      
//       setResumeData(normalizedData);
//     } catch (err) {
//       setError('Failed to upload file. Please try again.');
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
//       <div className="container mx-auto px-4 py-16">
//         <div className={`max-w-xl mx-auto rounded-xl shadow-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//           <div className="text-center mb-8">
//             <Upload className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
//             <h1 className="text-2xl font-bold mb-2">Upload Your Resume</h1>
//             <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//               Upload your PDF resume to generate a beautiful portfolio
//             </p>
//           </div>

//           <div className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 ${
//             darkMode 
//               ? 'border-gray-700 bg-gray-800/50' 
//               : 'border-gray-300 bg-gray-50'
//           }`}>
//             <input
//               type="file"
//               accept=".pdf"
//               onChange={handleFileChange}
//               className="hidden"
//               id="file-upload"
//             />
//             <label
//               htmlFor="file-upload"
//               className="cursor-pointer flex flex-col items-center"
//             >
//               <FileUp className={`w-12 h-12 mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
//               <span className="text-sm font-medium">
//                 {file ? file.name : 'Click to upload or drag and drop'}
//               </span>
//               <span className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
//                 PDF (max. 10MB)
//               </span>
//             </label>
//           </div>

//           {error && (
//             <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-700 text-sm">
//               {error}
//             </div>
//           )}

//           <button
//             onClick={handleUpload}
//             disabled={!file || uploading}
//             className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center ${
//               !file || uploading
//                 ? 'bg-gray-300 cursor-not-allowed'
//                 : darkMode
//                 ? 'bg-blue-600 hover:bg-blue-700'
//                 : 'bg-blue-600 hover:bg-blue-700 text-white'
//             }`}
//           >
//             {uploading ? (
//               <>
//                 <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                 Uploading...
//               </>
//             ) : (
//               'Upload Resume'
//             )}
//           </button>
//         </div>

//         {resumeData && (
//           <div className={`mt-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
//             <h2 className="text-xl font-bold mb-4">Parsed Resume Data</h2>
//             <pre className="overflow-auto p-4 rounded bg-gray-100 text-gray-800">
//               {JSON.stringify(resumeData, null, 2)}
//             </pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Upload, FileUp, Loader2 } from 'lucide-react';

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
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [resumeData, setResumeData] = useState<Resume | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Detect system dark mode preference and listen for changes
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Apply/remove dark class on root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Update page title after resume data loads
  useEffect(() => {
    if (resumeData) {
      document.title = `${resumeData.name} | Portfolio`;
    } else {
      document.title = 'Upload Your Resume';
    }
  }, [resumeData]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    // Optional: file size check here (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Normalize resume data with empty arrays fallback
      const normalizedData: Resume = {
        ...response.data,
        education: response.data.education || [],
        skills: response.data.skills || [],
        projects: response.data.projects || [],
        experience: response.data.experience || [],
      };

      setResumeData(normalizedData);
      setFile(null);
    } catch (err) {
      setError('Failed to upload file. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  // If resumeData exists, show portfolio, else show upload form
  if (resumeData) {
    return (
      <div className={darkMode ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-gray-50 text-gray-900 min-h-screen'}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="container mx-auto px-4 py-8">
          <Hero resume={resumeData} darkMode={darkMode} />
          <About resume={resumeData} darkMode={darkMode} />
          <Skills resume={resumeData} darkMode={darkMode} />
          <Projects resume={resumeData} darkMode={darkMode} />
          <Education resume={resumeData} darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    );
  }

  // Upload form UI
  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-gray-50 text-gray-900 min-h-screen'}>
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className={`max-w-xl w-full rounded-xl shadow-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="text-center mb-8">
            <Upload className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h1 className="text-2xl font-bold mb-2">Upload Your Resume</h1>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Upload your PDF resume to generate a beautiful portfolio
            </p>
          </div>

          <div className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 ${
            darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-300 bg-gray-50'
          }`}>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
              <FileUp className={`w-12 h-12 mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className="text-sm font-medium">
                {file ? file.name : 'Click to upload or drag and drop'}
              </span>
              <span className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                PDF (max. 10MB)
              </span>
            </label>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-700 text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center ${
              !file || uploading
                ? 'bg-gray-300 cursor-not-allowed'
                : darkMode
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {uploading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              'Upload Resume'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
