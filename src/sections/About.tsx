import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="slide-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl mb-4 text-gray-800">Education & Background</h3>
            <p className="mb-4">
              I hold an M.Tech in Chemical Engineering from IIT Hyderabad (2021–2023, CGPA: 8.3) and a B.Tech from GGSIPU (2015–2019, CGPA: 7.79).
            </p>
            <p className="mb-4">
              I've mastered Java, JavaScript, TypeScript, React, Spring Boot, and Node.js through rigorous training and hands-on projects.
            </p>
            <p className="mb-4">
              My transition from Chemical Engineering to Software Development has equipped me with unique problem-solving abilities and analytical skills that I bring to every project.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://linkedin.com/in/chetna-godara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rani-pink hover:text-rani-pink-50 transition-colors duration-300 flex items-center"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Chetnaserene" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rani-pink hover:text-rani-pink-50 transition-colors duration-300 flex items-center"
              >
                <Github size={20} className="mr-2" />
                GitHub
              </a>
            </div>
          </div>
          
          <div className="slide-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl mb-4 text-gray-800">Achievements</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-rani-pink mr-2">•</span>
                <span>Solved 200+ LeetCode problems, showcasing strong problem-solving skills and algorithm mastery</span>
              </li>
              <li className="flex items-start">
                <span className="text-rani-pink mr-2">•</span>
                <span>Ranked in the top 10% in DSA Java certification from Coding Blocks</span>
              </li>
              <li className="flex items-start">
                <span className="text-rani-pink mr-2">•</span>
                <span>Certified in Machine Learning and Data Science from GeeksforGeeks (GFG)</span>
              </li>
              <li className="flex items-start">
                <span className="text-rani-pink mr-2">•</span>
                <span>Developed 7+ full-stack applications with modern technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-rani-pink mr-2">•</span>
                <span>Contributed to research at IIT Hyderabad, combining technical skills with domain knowledge</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About