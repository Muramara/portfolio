import React, { useState } from 'react';
import SectionHeader from './common/SectionHeader';
import { experiences } from '../data/experience';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
  
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experience"
          subtitle="Professional journey & education"
          description="An overview of my professional experience and educational background."
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          {/* Tab Controls */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <button
                onClick={() => setActiveTab('work')}
                className={`flex items-center px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'work'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Briefcase size={16} className="mr-2" />
                Work Experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'education'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <GraduationCap size={16} className="mr-2" />
                Education
              </button>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="relative border-l-2 border-blue-200 dark:border-blue-900 pl-8 ml-4">
            {experiences
              .filter(exp => exp.type === activeTab)
              .map((experience, index) => (
                <div 
                  key={index}
                  className="mb-12 relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[35px] bg-blue-600 w-6 h-6 rounded-full border-4 border-blue-100 dark:border-slate-800" />
                  
                  {/* Date tag */}
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mb-3">
                    {experience.period}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg font-medium text-blue-700 dark:text-blue-400 mb-3">
                    {experience.organization}
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    {experience.description}
                  </p>
                  
                  {experience.highlights && (
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 ml-1 space-y-1">
                      {experience.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;