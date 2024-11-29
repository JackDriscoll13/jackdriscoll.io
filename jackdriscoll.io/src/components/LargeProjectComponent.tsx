import React, { useState } from 'react';
import ProjectDetailsModal from './ProjectModalComponent';

interface LargeProjectProps {
    title: string;
    description: string;
    technologies: string[];
    modalContent: React.ReactNode; // Making this required since we'll always have a modal
  }
  
  const LargeProjectComponent: React.FC<LargeProjectProps> = ({ title, description, technologies, modalContent }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    return (
      <>
        <div 
          className="w-full h-48 md:h-40 cursor-pointer transition-all duration-300 ease-in-out hover:ring-2 hover:ring-accent hover:shadow-lg rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="w-full h-full bg-white shadow-md rounded-lg p-3 md:p-4">
            <div className="flex justify-between items-start">
              <h2 className="text-base md:text-lg font-semibold mb-2 text-charcoal">{title}</h2>
              <button className="text-[10px] md:text-xs text-accent hover:text-accent/80">
                View Details →
              </button>
            </div>
            <p className="text-xs md:text-sm text-gray-600 mb-4">{description}</p>
            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
              <div className="text-[10px] md:text-xs text-gray-500 flex flex-wrap items-center justify-center gap-2">
                {technologies.map((tech, index) => (
                  <React.Fragment key={index}>
                    <span className="hover:text-accent">{tech}</span>
                    {index < technologies.length - 1 && (
                      <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        <ProjectDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title}
        >
          {modalContent}
        </ProjectDetailsModal>
      </>
    );
  };
  
  export default LargeProjectComponent;