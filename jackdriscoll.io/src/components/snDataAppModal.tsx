import React from 'react';

const SnDataAppModal: React.FC = () => {
  return (
    <div>
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
            If you are a Spectrum Cable customer, you have access to an exclusive product called Spectrum News. 
            Spectrum News serves as a retention product for Spectrum and operates at a net loss for the company. 
        </p>
        <p className="mt-1">
            However, many teams and analysts at Spectrum are interested in the performance of Spectrum News and its competitors, especially in the context
            of what has been happening in the media industry over the last decade. This includes a team of analysts that operate
            within the 2000 person Spectrum News business unit.
        </p>
        <h3 className="text-xl font-semibold mt-4">The Problem</h3>
        <p className="mt-1">
            That analyst team was using alteryx and excel to perform analysis. Analysts complained that they were spending a significant amount of time running recurring reports that they felt could be automated.
            They also complained about data quality issues and the difficulty of validating data across multiple sources. Spectrum was interested in building a more sophisticated analytics platform to:
        </p>
        <ul className="list-decimal ml-6 mt-2">
            <li>Automate Recurring Viewership Reports</li>
            <li>Centralize data from multiple sources</li>
            <li>Auto validate data or flag potential issues in upstream data quality </li>
            <li>Allow for quick and easy exploration of KPI data for analysts and executives alike</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">The Solution</h3>
        <p className="mt-1">
            To solve these problems, I spent 6 months buildiing and iterating on a full-stack data platform in an isolated AWS enviorment.
        </p>
        <p className="mt-1">
            Here's a simplified overview of the technical architecture:
        </p>
        <img 
            src="/snDataDiagram.png" 
            alt="Project Architecture Diagram"    
            className="w-full object-contain mb-6"
        />
    <div className="space-y-4">
      <p></p>

      <p>Architecture explanation...</p>
    </div>
  </div>
  );
};

export default SnDataAppModal;