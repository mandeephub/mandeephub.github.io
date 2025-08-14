import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { developerInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{developerInfo.name}</h3>
            <p className="text-gray-300 mb-4">
              {developerInfo.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              Currently learning MERN stack and Python to expand my full-stack development skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-300 hover:text-white transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {developerInfo.email}
              </p>
              <div className="flex space-x-4">
                <a
                  href={developerInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={developerInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} {developerInfo.name}. Made with{' '}
            <Heart className="h-4 w-4 mx-1 text-red-500" fill="currentColor" />{' '}
            using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;