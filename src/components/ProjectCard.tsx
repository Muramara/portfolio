import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-90' : 'opacity-60'
        }`} />
        
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-600/90 text-white rounded-full mb-2">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <p className="text-slate-700 dark:text-slate-300 mb-4 flex-grow">
          {project.summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex space-x-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="View GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="View Live Site"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          
          <a 
            href={`#project-${project.id}`} 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
          >
            <span className="mr-1">Details</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;