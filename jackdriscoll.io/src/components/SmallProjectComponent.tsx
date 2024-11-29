import React, { useState } from 'react';


interface SmallProjectProps {
    title: string;
    description: string;
    technologies: string[];
    backContent: React.ReactNode;
  }
  
  const SmallProjectComponent: React.FC<SmallProjectProps> = ({ title, description, technologies, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    return (
      <div 
        className="w-full h-40 perspective-1000 cursor-pointer transition-all duration-300 ease-in-out hover:ring-2 hover:ring-accent hover:shadow-lg rounded-lg"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-x-180' : ''}`}>
          {/* Front of card */}
          <div className="absolute w-full h-full bg-white shadow-md rounded-lg p-3 backface-hidden">
            <div className="flex justify-between items-start">
              <h2 className="text-sm font-semibold mb-2 text-charcoal">{title}</h2>
              <button className="text-[10px] text-accent hover:text-accent/80">
                Click to flip ↻
              </button>
            </div>
            <p className="text-xs text-gray-600 mb-4">{description}</p>
            <div className="absolute bottom-3 left-3 right-3">
              <div className="text-[10px] text-gray-500 flex flex-wrap items-center justify-center gap-2">
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
  
          {/* Back of card */}
          <div className="absolute w-full h-full bg-white text-charcoal shadow-md rounded-lg p-4 backface-hidden rotate-x-180 flex justify-center items-center">
            {backContent}
          </div>
        </div>
      </div>
    );
  };

export default SmallProjectComponent;