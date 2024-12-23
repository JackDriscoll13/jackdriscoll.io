import React from 'react';

const SnDataAppModal: React.FC = () => {
  return (
  
    <div>
        <p className="text-[11px] text-gray-400 mb-0 text-center italic">*Disclaimer: I've obtained permission to publish details of this project, but have taken care to remove any sensitve information from the writeup.</p>
        <p className="text-sm mb-3 text-center flex items-center justify-center gap-2">
          <a href="https://github.com/JackDriscoll13/sn_reporting_app-frontend_expo" 
             className="text-accent font-medium hover:text-accent/80 hover:underline transition-colors inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Frontend Code Expo
          </a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="https://github.com/JackDriscoll13/sn_reporting_app-backend_expo" 
             className="text-accent font-medium hover:text-accent/80 hover:underline transition-colors inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Backend Code Expo
          </a>
        </p>
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
        Spectrum News is an exclusive product for Spectrum Cable customers, serving as a retention tool despite operating at a net loss. However, its performance—and that of its competitors—has garnered significant interest from Spectrum teams, particularly analysts and executives in the 2,000-person Spectrum News business unit.
        </p>
        <p className="mt-1">
        Amid rapid changes in the media industry over the past decade, these analysts and executive teams rely heavily on performance data to drive insights and strategy.
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
    <h3 className="text-xl font-semibold mt-4">Additional Details</h3>
    <p className="mt-1">
        The platform is currently in production and being used by analysts and executives at Spectrum.
    </p>
    <p className="mt-1">
      You can find some example code for the frontend<a href="https://github.com/JackDriscoll13/sn_reporting_app-frontend_expo" className="text-accent hover:text-accent/80"> here </a>
      and some example code for the FastAPI middle layer<a href="https://github.com/JackDriscoll13/sn_reporting_app-backend_expo" className="text-accent hover:text-accent/80"> here</a>
      . 
    </p>

  </div>
  );
};

export default SnDataAppModal;