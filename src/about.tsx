import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-4 text-left flex flex-col gap-6 text-md mt-16">
      <p className="text-charcoal">
        I'm Jack. I write software and love to solve problems.
      </p>
      <p className="text-charcoal">
        I currently work at Spectrum where I do a lot of ingestion, processing, and 
        predictive analytics with viewership data. Recently, I led development of a full-stack 
        reporting application for business leaders.
      </p>
      <p className="text-charcoal">
        In the past, I've worked on Human-Computer Interaction research and studied AI collaboration and 
        trust using non-invasive neuroimaging. 
        I studied Data Science and Psychology at the University of Colorado.
      </p>
      <p className="text-charcoal">
        When I'm not creating shareholder value for the corporate behemoth I work for, I like to 
        listen to podcasts, go skiing, and have long dinners with friends. 
      </p>
    </div>
  );
};

export default About;
