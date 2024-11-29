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
            The analyst team was using alteryx and excel to perform analysis. Analysts complained that they were spending a significant amount of time running recurring reports that they felt could be automated.
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
    <h3 className="text-xl font-semibold mt-4">Example Feature Demos</h3>
      <p className="text-base">Below are examples of three features I've built and integrated into the platform.</p>
      <p className="text-xs text-gray-500">*Note: All demos use dummy data and are sped up for brevity.</p>
   
    <div className="space-y-8 mt-4">
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-gray-800">Feature 1: Interactive Coverage Map</h4>
        <div className="rounded-lg overflow-hidden">
          <video 
            className="w-full shadow-lg"
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
          <p className="text-sm text-gray-600 mt-2">
            Built using: Geojson data stored in s3, Mapbox GL JS (lazy loading of map tiles)
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-base font-semibold text-gray-800">
          Feature 2: Dynamic KPI Dashboard with over 15 distinct Table and Graph Views
        </h4>
        <div className="rounded-lg overflow-hidden">
          <video 
            className="w-full shadow-lg"
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
            <source src="/videos/engagement_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-sm text-gray-600 mt-2">
            Built using: React Table (Tanstack Table), Chart.js, and custom data processing endpoints using FastAPI and Pandas
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-base font-semibold text-gray-800">
          Feature 3: Custom Reporting Tool for Analysts
        </h4>
        <div className="rounded-lg overflow-hidden">
          <video 
            className="w-full shadow-lg"
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
            <source src="/videos/nielsen_report_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-sm text-gray-600 mt-2">
            Built using: Custom React Frontend, FastAPI Endpoints to store and Process Files for Upload and Download, Pandas for Data Processing and Matplotlib for Charts and Tables
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SnDataAppModal;