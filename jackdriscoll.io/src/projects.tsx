import React from 'react';

import LargeProjectComponent from './components/LargeProjectComponent';
import SmallProjectComponent from './components/SmallProjectComponent';
// Modal Content
import SnDataAppModal from './modalcontent/snDataAppModal';
import QfreshenersModal from './modalcontent/qfreshenersModal';

const Projects: React.FC = () => {
    return (
        <div className="container mx-auto px-2 md:px-4 pt-6 md:pt-8 max-w-2xl">
            <h1 className="text-base md:text-lg font-extrabold mb-2 text-left text-charcoal">Projects</h1>
            
            {/* Main Projects Section */}
            <div className="flex flex-col items-center space-y-4 md:space-y-6 w-full px-2 md:px-8 mb-6 md:mb-8">
                <LargeProjectComponent 
                    id="sn-data-app"
                    title="Spectrum News Analytics App"
                    description="A full stack analytics application that lets non-technical users explore and report on viewership data. My largest, longest, and most impactful project to date."
                    technologies={['Python', 'FastAPI', 'Airflow', 'PostgreSQL', 'React', 'TypeScript', 'AWS']}
                    modalContent={<SnDataAppModal />}
                />

                <LargeProjectComponent 
                    id="smb-lead-generator"
                    title="Lead Generator for a Small Business"
                    description="A public app I built for a small company. It allows sales people to generate long sheets of leads for precise locations. A simple project with a business impact."
                    technologies={['ReactJS', 'Python', 'FastAPI', 'Streaming Data', 'Google API']}
                    modalContent={
                        <QfreshenersModal />
                    }
                />
            </div>

            {/* Smaller Projects Section */}
            <h2 className="text-base md:text-lg font-extrabold mb-2 text-left text-charcoal">Smaller Projects</h2>
            <div className="flex flex-col space-y-4 px-2 md:px-8 mb-6">
                <SmallProjectComponent 
                    title="Meeting Summarization Tool"
                    description="An OpenAI-powered tool for summarizing zoom meeting transcripts."
                    technologies={['Python', 'OpenAI API']}
                    githubUrl="https://github.com/JackDriscoll13/meeting_summarization"
                    backContent={
                        <div className="text-xs space-y-0.5">
                            <p>- Chunks meeting transcripts and feeds them to OpenAI API for summarization</p>
                            <p>- Built with raw Python in early 2023, when LLM context windows were very small</p>
                            <p>- Distributed at Charter (Spectrum) to ~8 people, mostly my immediate team</p>
                            
                        </div>
                    }
                />
                
                <SmallProjectComponent 
                    title="Personal Portfolio"
                    description="This website. A simple site to share some of my work."
                    technologies={['React', 'TypeScript', 'Tailwind', 'AWS']}
                    githubUrl="https://github.com/JackDriscoll13/jackdriscoll.io"
                    backContent={
                        <div className="text-xs space-y-0.5">
                            <p>- Built with React, TypeScript, and Tailwind CSS</p>
                            <p>- Deployed with AWS + Docker, uses Github Actions for quick and easy CD</p>
                            <p>- Includes a logging system that tracks site traffic and uploads logs to s3 for analysis</p>
                        </div>
                    }
                />
            </div>
            {/* Publications Section */}
            <h2 className="text-base md:text-lg font-extrabold mb-2 text-left text-charcoal">Publications</h2>
              <div className="flex flex-col items-center space-y-6 w-full px-8">
              <ul className="list-none w-full text-charcoal">
                <li className="mb-2 flex items-start">
                    <a href="https://www.tandfonline.com/doi/full/10.1080/1463922X.2022.2086644"
                        target='_blank' 
                        rel="noopener noreferrer" 
                        className="text-xs hover:text-accent cursor-pointer underline decoration-accent">
                            "Human-agent teaming and trust Calibration: a theoretical framework, configurable testbed, empirical illustration, and implications for the development of adaptive systems," Theoretical Issues in Ergonomics Science, Vol. 23, June 2022.
                        </a>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Projects;