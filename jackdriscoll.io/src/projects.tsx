import React from 'react';


interface ProjectProps {
  title: string;
  description: string;
  // Add more props as needed
}

const ProjectComponent: React.FC<ProjectProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      {/* Add more content as needed */}
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-8 text-left">Projects</h1>
      <div className="flex flex-col items-center space-y-6 w-full px-8">
        <ProjectComponent 
          title="Project 1"
          description="Description of Project 1"
          // Add more props as needed
        />
        <ProjectComponent 
          title="Project 2"
          description="Description of Project 2"
          // Add more props as needed
        />
        {/* Add more ProjectComponent instances as needed */}
      </div>
    </div>
  );
};

export default Projects;