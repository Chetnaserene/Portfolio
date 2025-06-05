import React from 'react';
import profilePic from '../assets/images/chetnaserene.jpg';

const Home: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-light-blue to-light-blue-50 pt-16"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg fade-in">
          <img 
            src={profilePic} 
            alt="Chetna Godara" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 fade-in" style={{animationDelay: '0.2s'}}>
          Chetna Godara
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 fade-in" style={{animationDelay: '0.4s'}}>
          IIT Hyderabad M.Tech | Full-Stack Developer & Java Expert
        </p>
        
        <p className="max-w-2xl mx-auto text-lg mb-8 fade-in" style={{animationDelay: '0.6s'}}>
          I'm a passionate software developer with a strong foundation in Java, React, and Spring Boot. 
          Transitioning from Chemical Engineering, I build innovative, scalable solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in" style={{animationDelay: '0.8s'}}>
          <a href="#projects" className="btn btn-primary scale-up">
            Explore Projects
          </a>
          <a href="#contact" className="btn btn-secondary scale-up">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;