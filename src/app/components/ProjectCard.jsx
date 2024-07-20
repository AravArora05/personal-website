import React from 'react';
import { Icon } from '@iconify/react';

const ProjectCard = ({ project }) => (
  <div className="flex flex-col lg:flex-row bg-white border border-gray-300 pt-8 rounded-lg overflow-hidden w-full shadow-lg transition-all duration-300 hover:bg-gray-100 mb-8 group">
    <div className="w-full lg:w-3/5 px-8 pb-4">
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="text-2xl font-bold text-black">{project.title}</h3>
        <span className="text-gray-600 text-xs italic ml-2">{project.date}</span>
      </div>
      <div className="flex items-center mb-4 space-x-2">
        <span className="text-sm text-gray-600">Made with:</span>
        {project.techStack.map((tech, index) => (
          <Icon key={index} icon={tech.icon} className="w-8 h-8" />
        ))}
      </div>
      <p className="mb-4 text-gray-700 text-sm" style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
      <div className="flex space-x-4">
        {
          <a target="_blank" href={project.demoLink} className="bg-gray-900 text-white py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-gray-700 transition-colors">
            <svg width="14" height="14" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 22V34C32 35.0609 31.5786 36.0783 30.8284 36.8284C30.0783 37.5786 29.0609 38 28 38H6C4.93913 38 3.92172 37.5786 3.17157 36.8284C2.42143 36.0783 2 35.0609 2 34V12C2 10.9391 2.42143 9.92172 3.17157 9.17157C3.92172 8.42143 4.93913 8 6 8H18M26 2H38M38 2V14M38 2L16 24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Live</span>
          </a>
        }
        <a href={project.githubLink} target="_blank" className="border border-gray-900 text-gray-900 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.455-1.157-1.11-1.466-1.11-1.466-.907-.62.069-.607.069-.607 1.002.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.981 1.03-2.678-.103-.253-.446-1.271.098-2.65 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0112 6.845c.85.004 1.705.115 2.506.338 1.909-1.294 2.748-1.025 2.748-1.025.545 1.379.202 2.397.099 2.65.64.697 1.029 1.589 1.029 2.678 0 3.842-2.338 4.684-4.565 4.93.359.309.678.92.678 1.855 0 1.338-.012 2.418-.012 2.747 0 .269.181.58.688.482C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </div>
    <div className="hidden lg:block lg:w-2/5 relative overflow-hidden group-hover:opacity-75 transition-opacity duration-300">
      {project.demoLink !== 'N/A' ? (
        <a href={project.demoLink} target="_blank">
          <img 
            src={project.image}
            alt={project.title} 
            className="absolute top-0 left-0 w-full h-full object-cover object-left transform transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
          />
        </a>
      ) : (
        <img 
          src={project.image}
          alt={project.title} 
          className="absolute top-0 left-0 w-full h-full object-cover object-left transform transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
        />
      )}
    </div>
  </div>
);

export default ProjectCard;
