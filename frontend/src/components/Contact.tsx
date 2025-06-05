import React from 'react';
import { Mail, Linkedin, Github, FileText, MapPin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section 
      id="contact" 
      className={`py-20 px-6 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-blue-300' : 'text-blue-600'
          }`}>
            Get In Touch
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${
            darkMode ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
          <p className={`mt-4 max-w-xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Interested in working together? Feel free to reach out through any of these channels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className={`rounded-xl p-8 shadow-lg ${
            darkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <h3 className={`text-xl font-bold mb-6 ${
              darkMode ? 'text-blue-300' : 'text-blue-700'
            }`}>
              Connect With Me
            </h3>
            
            <div className="space-y-6">
              <ContactItem 
                icon={<Mail size={20} />}
                label="Email"
                value="example@email.com"
                link="mailto:example@email.com"
                darkMode={darkMode}
              />
              
              <ContactItem 
                icon={<Linkedin size={20} />}
                label="LinkedIn"
                value="linkedin.com/in/username"
                link="https://linkedin.com/in/username"
                darkMode={darkMode}
              />
              
              <ContactItem 
                icon={<Github size={20} />}
                label="GitHub"
                value="github.com/username"
                link="https://github.com/username"
                darkMode={darkMode}
              />
              
              <ContactItem 
                icon={<FileText size={20} />}
                label="Resume"
                value="Download CV"
                link="#"
                darkMode={darkMode}
              />
              
              <ContactItem 
                icon={<MapPin size={20} />}
                label="Location"
                value="Hyderabad, India"
                darkMode={darkMode}
              />
            </div>
          </div>
          
          <div className={`rounded-xl p-8 shadow-lg ${
            darkMode ? 'bg-gray-700' : 'bg-blue-50'
          }`}>
            <h3 className={`text-xl font-bold mb-6 ${
              darkMode ? 'text-blue-300' : 'text-blue-700'
            }`}>
              Send Me a Message
            </h3>
            
            <form className="space-y-4">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:outline-none ${
                    darkMode 
                      ? 'bg-gray-800 border border-gray-600 text-white focus:ring-blue-500' 
                      : 'bg-white border border-gray-300 text-gray-900 focus:ring-blue-500'
                  }`}
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:outline-none ${
                    darkMode 
                      ? 'bg-gray-800 border border-gray-600 text-white focus:ring-blue-500' 
                      : 'bg-white border border-gray-300 text-gray-900 focus:ring-blue-500'
                  }`}
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:outline-none ${
                    darkMode 
                      ? 'bg-gray-800 border border-gray-600 text-white focus:ring-blue-500' 
                      : 'bg-white border border-gray-300 text-gray-900 focus:ring-blue-500'
                  }`}
                  placeholder="Hello, I'd like to discuss a potential opportunity..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
  darkMode: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, link, darkMode }) => (
  <div className="flex items-start gap-4">
    <div className={`p-2 rounded-lg ${
      darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-700'
    }`}>
      {icon}
    </div>
    <div>
      <h4 className={`text-sm font-medium ${
        darkMode ? 'text-gray-400' : 'text-gray-500'
      }`}>
        {label}
      </h4>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-base font-medium hover:underline ${
            darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'
          }`}
        >
          {value}
        </a>
      ) : (
        <p className={`text-base font-medium ${
          darkMode ? 'text-gray-200' : 'text-gray-800'
        }`}>
          {value}
        </p>
      )}
    </div>
  </div>
);

export default Contact;