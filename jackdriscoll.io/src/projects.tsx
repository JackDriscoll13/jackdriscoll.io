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
        <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-x-180' : ''}`}>
          <div className="absolute w-full h-full bg-white shadow-md rounded-lg p-4 backface-hidden">
            <h2 className="text-md font-semibold mb-2 text-charcoal">{title}</h2>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          <div className="absolute w-full h-full bg-white text-charcoal shadow-md rounded-lg p-4 backface-hidden rotate-x-180 flex justify-center items-center">
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
          title="Lead Generator for a Small Business"
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
                .
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
                .
              </p>
            
            </div>
          }
        />
        {/* Add more ProjectComponent instances as needed */}
        
      </div>
      <h2 className="text-xl font-bold mb-2 text-left text-charcoal">Smaller Projects</h2>
      <div className="flex flex-col items-center space-y-6 w-full px-8">
      <ul className="list-none w-full text-charcoal">
          <li className="mb-2">
                <a href="https://github.com/JackDriscoll13/meeting_summarization"
                target='_blank' 
                rel="noopener noreferrer" 
                className="font-bold text-sm hover:text-accent cursor-pointer underline decoration-accent">
                    Meeting Summarization Tool
                </a>
            <ul className="list-none pl-5 text-sm">
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>A tool that used OpenAI's API to summarize zoom meeting transcripts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Distrubuted at Charter (Spectrum) to ~8 people, mostly my immediate coworkers </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Built with raw Python in early 2023, when LLM context windows were very small</span>
              </li>
            </ul>  
          </li>
          <li className="mb-2">
    
            <a href="https://github.com/JackDriscoll13/jackdriscoll.io"
                target='_blank' 
                rel="noopener noreferrer" 
                className="font-bold text-sm hover:text-accent cursor-pointer underline decoration-accent">
                    Personal Portfolio
                </a>
                <span className="text-sm font-bold"> (this website!)</span>
            <ul className="list-none pl-5 text-sm">
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Built with React, TypeScript, and Tailwind CSS</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Deployed with AWS + Docker, uses Github Actions for quick and easy CD</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>
                    Includes a logging system that tracks site traffic and uploads logs to s3
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h2 className="text-xl font-bold mb-4 text-left text-charcoal">Publications</h2>
    </div>

  );
};

export default Projects;