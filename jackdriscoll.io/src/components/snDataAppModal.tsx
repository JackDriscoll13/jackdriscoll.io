import React from 'react';

const SnDataAppModal: React.FC = () => {
  return (
  
    <div>
        <p className="text-xs text-gray-500 mb-2">*Disclaimer: I've obtained permission to publish details of this project, but have taken care to remove any sensitve information from the writeup.</p>
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
      <p>In short, I created an isolated Postgres database with a REST API and used React to build a frontend with dashboard and reporting capabilities.</p>
      <p>By building out our own database and REST API, we were able to ensure data quality and consistency accross our platform.</p>
      <p>The platform also includes a custom data processing pipeline that was able to ingest data from a variety of sources and validate data across them.</p>
      <p>The backend pipleines use airflow and sql for data transformation and basic validation. The API was built using FastAPI and takes advantage of pandas' flexibility for complex and nuanced data processing.</p>  
    </div>
    <h3 className="text-xl font-semibold mt-4">Feature Demo</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
      <div className="flex flex-col">
        <video 
          className="w-full rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
          controls
          preload="auto"
          ref={(el) => {
            if (el) {
              el.playbackRate = 2.0;
              el.play().catch(error => console.log('Video autoplay error:', error));
            }
          }}
        >
          <source src="/videos/coverage_map_demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-600 mt-2">Feature 1: Dashboard Navigation</p>
      </div>

      <div className="flex flex-col">
        <video 
          className="w-full rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
          ref={(el) => {
            if (el) el.playbackRate = 2.0;
          }}
        >
          <source src="/videos/feature2.mp4" type="mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-600 mt-2">Feature 2: Data Filtering</p>
      </div>
    </div>
  </div>
  );
};

export default SnDataAppModal;