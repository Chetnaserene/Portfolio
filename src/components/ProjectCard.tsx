import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  github: string;
  demo?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  features,
  tech,
  image,
  github,
  demo,
  delay = 0,
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 slide-in"
      style={{animationDelay: `${delay}s`}}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {tech.map((item) => (
            <span
              key={item}
              className="bg-light-blue px-2 py-1 rounded-full text-xs text-gray-800"
            >
              {item}
            </span>
          ))}
        </div>
        
        <p className="text-gray-800 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-800 mb-2">Key Features:</h4>
          <ul className="text-sm space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-rani-pink mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex space-x-3 mt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm bg-rani-pink text-white px-3 py-2 rounded hover:bg-rani-pink/90 transition-colors scale-up"
          >
            <Github size={16} className="mr-2" />
            GitHub
          </a>
          
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm bg-light-blue text-gray-800 px-3 py-2 rounded hover:bg-light-blue/90 transition-colors scale-up"
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;