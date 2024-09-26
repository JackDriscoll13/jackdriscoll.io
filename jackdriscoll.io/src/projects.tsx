import React from 'react';


interface ProjectProps {
  title: string;
  description: string;
  // Add more props as needed
}

const ProjectComponent: React.FC<ProjectProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <h2 className="text-md font-semibold mb-2 text-charcoal">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      {/* Add more content as needed */}
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
          description="A full stack analytics application that lets non-technical users explore and report on viewership data.
            My largest, longest, and most impactful project to date."
          // Add more props as needed
        />
        <ProjectComponent 
          title="Lead Generator for Small Business"
          description="A public app I built for a small company. It allows sales people to generate long sheets of leads for precise locations. A simple project with a big business impact."
          // Add more props as needed
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