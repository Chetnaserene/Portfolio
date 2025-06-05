import React from 'react';
import TimelineItem from '../components/TimelineItem';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'M.Tech Research Assistant',
      period: 'July 2022 – Dec 2022',
      company: 'IIT Hyderabad',
      responsibilities: [
        'Developed Python data pipelines with Pandas, NumPy, and SciPy for catalytic reactor datasets, using parallel processing to model reaction kinetics for 5+ studies.',
        'Designed Java algorithms with graph-based structures and Dijkstra\'s algorithm for process network optimization, improving simulation efficiency by 20%.',
        'Built interactive Matplotlib and Seaborn dashboards for research seminars, contributing to a departmental technical report.'
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-light-blue">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              title={exp.title}
              period={exp.period}
              company={exp.company}
              responsibilities={exp.responsibilities}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;