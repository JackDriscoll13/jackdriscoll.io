import React from 'react';

const QfreshenersModal: React.FC = () => {
  return (
    <div>
        <h4 className="text-lg font-semibold mb-2">TLDR</h4>
        <p className="text-sm mb-3 text-center flex items-center justify-center gap-2">
          <a href="https://qfresheners.com/leads" 
             className="text-accent font-medium hover:text-accent/80 hover:underline transition-colors">
            Try the App
          </a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="https://github.com/JackDriscoll13/automotive_lead_engine" 
             className="text-accent font-medium hover:text-accent/80 hover:underline transition-colors inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View Code
          </a>
        </p>

        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p className="mt-1">
            I have a friend who runs a small drop shipping business selling anciliary automotive products to various car businesses.
            He needed a way to quickly generate lists of leads for specific locations. I built this app to help him out.
        </p>
        <h3 className="text-xl font-semibold mt-4">How it Works</h3>
        <p>
            The app has a react frontend and a minimal fastapi backend. 
        </p>
        <p className="mt-1">

            For a quick overview, check out the <a href="https://github.com/JackDriscoll13/automotive_lead_engine?tab=readme-ov-file" className="text-accent font-medium hover:text-accent/80 hover:underline transition-colors">readme</a>.
        </p>
        <p className="mt-1">
            For most of the technical details, read some rough documentation <a href="https://github.com/JackDriscoll13/automotive_lead_engine/blob/master/docs/docs.md" className="text-accent font-medium hover:text-accent/80 hover:underline transition-colors">here</a>.
        </p>

        <h3 className="text-xl font-semibold mt-4">Feature Demo</h3>
        <p className="text-xs text-gray-500 mb-2">*Note: Demo exemplifies the zip code feature and uses chat gpt to generate zip codes.</p>
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
                el.playbackRate = 1.5;
                el.play().catch(error => console.log('Video autoplay error:', error));
              }
            }}
          >
            <source src="/videos/qfresheners_zipcode_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-sm text-gray-600 mt-2">
            Built using: React, FastAPI, FastAPI Streaming Response, Google Places API
          </p>
        </div>
    </div>
  );
};

export default QfreshenersModal;