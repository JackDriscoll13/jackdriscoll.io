import React, { useState } from 'react';


interface SmallProjectProps {
    title: string;
    description: string;
    technologies: string[];
    backContent: React.ReactNode;
    githubUrl?: string;
}

const SmallProjectComponent: React.FC<SmallProjectProps> = ({ 
    title, 
    description, 
    technologies, 
    backContent,
    githubUrl 
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleGithubClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        window.open(githubUrl, '_blank');
    };

    return (
        <div 
            className="w-full h-28 perspective-1000 cursor-pointer transition-all duration-300 ease-in-out hover:ring-2 hover:ring-accent hover:shadow-lg rounded-lg"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-x-180' : ''}`}>
                {/* Front of card */}
                <div className="absolute w-full h-full bg-white shadow-md rounded-lg p-3 backface-hidden">
                    <div className="flex justify-between items-start">
                        <h2 className="text-sm font-semibold text-charcoal">{title}</h2>
                        <button className="text-[10px] text-accent hover:text-accent/80">
                            Click to flip ↻
                        </button>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{description}</p>
                    
                    {/* New GitHub link section */}
                    {githubUrl && (
                        <div className="flex justify-center mb-2">
                            <button 
                                onClick={handleGithubClick}
                                className="flex items-center gap-2 text-xs text-accent hover:text-accent/80 transition-colors"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                </svg>
                                View the code
                            </button>
                        </div>
                    )}

                    {/* Technologies section */}
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

                {/* Back of card remains the same */}
                <div className="absolute w-full h-full bg-white text-charcoal shadow-md rounded-lg p-4 backface-hidden rotate-x-180 flex justify-center items-center">
                    {backContent}
                </div>
            </div>
        </div>
    );
};

export default SmallProjectComponent;