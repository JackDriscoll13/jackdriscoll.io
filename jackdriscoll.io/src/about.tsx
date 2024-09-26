import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-4 text-left flex flex-col gap-6 text-md mt-16">
      <p className="text-charcoal">
        I'm Jack. I build software and love to solve business problems.
      </p>
      <p className="text-charcoal">
        I currently work at Spectrum where I do a lot of ingestion, processing, and 
        predictive analytics with viewership data. Recently, I developed an internal app 
        that lets non-technical users explore and report on our data.
      </p>
      <p className="text-charcoal">
        In the past, I've worked on Human-Computer Interaction research and studied AI collaboration and 
        trust using brain imaging. 
        I went to the University of Colorado where I studied Data Science, Business, and Psychology.
      </p>
      <p className="text-charcoal">
        When I'm not creating shareholder value for the giant coorperation I work for, I like to 
        listen to podcasts, go skiing, and have long dinners with friends. I live in lower Manhattan.
      </p>
    </div>
  );
};

export default About;
