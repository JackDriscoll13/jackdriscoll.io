
import React, { useState } from 'react';


interface ProjectProps {
  title: string;
  description: string;
  backContent: React.ReactNode;
}
const ProjectComponent: React.FC<ProjectProps> = ({ title, description, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    return (
        <div 
        className="w-full h-28 perspective-1000 cursor-pointer transition-all duration-300 ease-in-out hover:ring-2 hover:ring-accent hover:shadow-lg rounded-lg"
        onClick={() => setIsFlipped(!isFlipped)}
        >
        <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          <div className="absolute w-full h-full bg-white shadow-md rounded-lg p-4 backface-hidden">
            <h2 className="text-md font-semibold mb-2 text-charcoal">{title}</h2>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          <div className="absolute w-full h-full bg-white text-charcoal shadow-md rounded-lg p-4 backface-hidden rotate-y-180 flex justify-center items-center">
            {backContent}
          </div>
        </div>
      </div>
    );
  };

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-xl font-bold mb-4 text-left text-charcoal">Projects</h1>
      <div className="flex flex-col items-center space-y-6 w-full px-8 mb-8">
        <ProjectComponent 
          title="Spectrum News Analytics App"
          description="A full stack analytics application that lets non-technical users explore and report on viewership data. My largest, longest, and most impactful project to date."
          backContent={
            <div>
              <p className="text-sm mb-2 text-center">More details on this project coming soon.</p>
              <p className="text-sm mb-2 text-center">I'm still trying to figure out if's cool with the team if I show off the code etc..</p>
            </div>
          }
        />
        <ProjectComponent 
          title="Lead Generator for Small Business"
          description="A public app I built for a small company. It allows sales people to generate long sheets of leads for precise locations. A simple project with a big business impact."
          backContent={
            <div>
              <p className="text-sm mb-2 text-center">You can try the app yourself, linked{' '}
                <a 
                    href='https://qfresheners.com/leads' 
                    target='_blank' 
                    rel="noopener noreferrer" 
                    className="underline decoration-accent font-bold hover:text-accent cursor-pointer"
                    >
                    here 
                </a>
              </p>
              <p className="text-sm mb-2 text-center">
                Or check out the code on github{' '}
                <a 
                    href='https://github.com/JackDriscoll13/automotive_lead_engine' 
                    target='_blank' 
                    rel="noopener noreferrer" 
                    className="underline decoration-accent font-bold hover:text-accent cursor-pointer"
                    >
                    here
                </a>
              </p>
            
            </div>
          }
        />
        {/* Add more ProjectComponent instances as needed */}
        
      </div>
      <h2 className="text-xl font-bold mb-4 text-left text-charcoal">Smaller Projects</h2>
      <div className="flex flex-col items-center space-y-6 w-full px-8 mb-8"></div>
      <h2 className="text-xl font-bold mb-4 text-left text-charcoal">Publications</h2>
    </div>

  );
};

export default Projects;