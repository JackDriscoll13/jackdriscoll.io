import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 text-left flex flex-col gap-4 mt-16">
      <p className="text-gray-700 text-left">
        I'm Jack. I write software and love to solve problems.
      </p>
      <p className="text-gray-700">
        I currently work at Spectrum where I do a lot of ingestion, processing, and 
        predictive analytics with viewership data. Recently I led development of an 
        application that enabled business executives to explore and report on different metrics 
        of viewership performance.
      </p>
      <p className="text-gray-700">
        In the past I've worked 
      </p>
    </div>
  );
};

export default About;
