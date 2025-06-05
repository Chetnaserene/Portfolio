import React from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="slide-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl mb-6 text-gray-800">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone size={20} className="text-rani-pink mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p>+91 9899095327</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={20} className="text-rani-pink mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p>chetnacodes@gmail.com</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="font-medium text-gray-800 mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/chetna-godara" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="bg-light-blue p-3 rounded-full text-rani-pink hover:bg-light-blue/80 transition-colors duration-300 scale-up"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://github.com/Chetnaserene" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="bg-light-blue p-3 rounded-full text-rani-pink hover:bg-light-blue/80 transition-colors duration-300 scale-up"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="slide-in" style={{animationDelay: '0.4s'}}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact