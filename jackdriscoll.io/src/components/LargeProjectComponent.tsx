import React, { useState } from 'react';
import ProjectDetailsModal from './ProjectModalComponent';

interface LargeProjectProps {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    modalContent: React.ReactNode; // Making this required since we'll always have a modal
  }
  
  const LargeProjectComponent: React.FC<LargeProjectProps> = ({ id, title, description, technologies, modalContent }) => {
    const [isModalOpen, setIsModalOpen] = useState(() => {
        // Check if the URL hash matches this modal's id on initial load
        return window.location.hash === `#${id}`;
    });
  
    // Add effect to handle hash changes
    React.useEffect(() => {
        const handleHashChange = () => {
            setIsModalOpen(window.location.hash === `#${id}`);
        };
  
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [id]);
  
    const openModal = () => {
        window.location.hash = id;
        setIsModalOpen(true);
    };
  
    const closeModal = () => {
        window.history.pushState(null, '', window.location.pathname);
        setIsModalOpen(false);
    };
  
    return (
      <>
        <div 
          className="w-full h-48 md:h-40 cursor-pointer transition-all duration-300 ease-in-out hover:ring-2 hover:ring-accent hover:shadow-lg rounded-lg"
          onClick={openModal}
        >
          <div className="w-full h-full bg-white shadow-md rounded-lg p-3 md:p-4 relative">
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
          onClose={closeModal}
          title={title}
        >
          {modalContent}
        </ProjectDetailsModal>
      </>
    );
  };
  
  export default LargeProjectComponent;