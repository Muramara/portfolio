import React from 'react';
import SectionHeader from './common/SectionHeader';
import { skills, SkillCategory } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skills"
          subtitle="Technical expertise & toolset"
          description="A comprehensive overview of my technical skills, tools, and areas of expertise."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div 
              key={category}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                {category}
              </h3>
              
              <div className="space-y-4">
                {skillsList.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-800 dark:text-slate-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-teal-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;