import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-light-blue py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© 2025 Chetna Godara</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://linkedin.com/in/chetna-godara" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-rani-pink hover:text-rani-pink-50 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/Chetnaserene" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-rani-pink hover:text-rani-pink-50 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer