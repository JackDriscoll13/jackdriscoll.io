import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-4 text-left flex flex-col gap-6 text-md mt-16">
      <p className="text-charcoal">
        I'm Jack. I write code and love to solve business problems.
      </p>
      <p className="text-charcoal">
        I currently work at 
        <a href="https://en.wikipedia.org/wiki/Spectrum_(brand)"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-accent font-medium hover:text-accent cursor-pointer mx-1">
        Spectrum
        </a>
        where I do a lot of ingestion, processing, and 
        predictive analytics with viewership data. Recently, I led development of an
        <Link to="/projects" className="underline decoration-accent font-medium hover:text-accent cursor-pointer mx-1">
          internal app
        </Link>
        that enables non-technical teams to explore and report on our data.
      </p>
      <p className="text-charcoal">
        In the past, I've worked on 
        <a href="https://www.colorado.edu/lab/shine/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-accent font-medium hover:text-accent cursor-pointer mx-1">
          Human-Computer Interaction research
        </a>
        and studied 
        <a href="https://www.tandfonline.com/doi/full/10.1080/1463922X.2022.2086644"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-accent font-medium hover:text-accent cursor-pointer mx-1">
        AI collaboration and trust
        </a>
        using brain imaging. I went to the University of Colorado where I studied Data Science, Business, and Psychology.
      </p>
      <p className="text-charcoal">
        When I'm not creating shareholder value for the giant corporation I work for, I like to 
        listen to podcasts, go skiing, and have long dinners with friends. I live in lower Manhattan.
      </p>
    </div>
  );
};

export default About;
