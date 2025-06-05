import React from 'react';

interface TimelineItemProps {
  title: string;
  period: string;
  company: string;
  responsibilities: string[];
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  period,
  company,
  responsibilities,
  delay = 0,
}) => {
  return (
    <div 
      className="relative pl-8 pb-8 border-l-2 border-light-blue last:border-0 slide-in"
      style={{animationDelay: `${delay}s`}}
    >
      {/* Timeline dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-rani-pink"></div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <h3 className="text-xl font-bold text-rani-pink">{title}</h3>
          <span className="text-sm text-gray-800 font-medium bg-light-blue px-3 py-1 rounded-full mt-2 md:mt-0 inline-block">
            {period}
          </span>
        </div>
        
        <p className="text-gray-800 font-medium mb-4">{company}</p>
        
        <ul className="space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-rani-pink mr-2">•</span>
              <span className="text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;