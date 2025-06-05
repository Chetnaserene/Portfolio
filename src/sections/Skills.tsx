import React from 'react';
import SkillBar from '../components/SkillBar';

const Skills: React.FC = () => {
  const mainSkills = [
    { name: 'Java', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'Spring Boot', percentage: 80 },
    { name: 'Node.js', percentage: 75 },
    { name: 'SQL', percentage: 80 },
  ];

  const otherSkills = [
    'JavaScript', 'TypeScript', 'Express.js', 'MySQL', 
    'MongoDB', 'Git', 'Postman', 'Tailwind CSS'
  ];

  const coreCS = [
    'Data Structures & Algorithms', 'Object-Oriented Programming',
    'Database Management Systems', 'Operating Systems', 'Computer Networks'
  ];

  const certifications = [
    'DSA Java (Coding Blocks)',
    'Machine Learning and Data Science (GeeksforGeeks)'
  ];

  return (
    <section id="skills" className="section bg-light-blue">
      <div className="container mx-auto">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Main Skills with Progress Bars */}
          <div className="slide-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl mb-6 text-gray-800">Main Skills</h3>
            {mainSkills.map((skill, index) => (
              <SkillBar 
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 200}
              />
            ))}
          </div>
          
          {/* Other Skills */}
          <div className="slide-in" style={{animationDelay: '0.4s'}}>
            <div className="mb-8">
              <h3 className="text-2xl mb-4 text-gray-800">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map(skill => (
                  <span 
                    key={skill}
                    className="bg-white px-3 py-1 rounded-full text-sm text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl mb-4 text-gray-800">Core Computer Science</h3>
              <ul className="space-y-2">
                {coreCS.map(skill => (
                  <li key={skill} className="flex items-start">
                    <span className="text-rani-pink mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl mb-4 text-gray-800">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map(cert => (
                  <li key={cert} className="flex items-start">
                    <span className="text-rani-pink mr-2">•</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;