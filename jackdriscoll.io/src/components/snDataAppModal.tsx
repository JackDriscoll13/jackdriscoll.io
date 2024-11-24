import React from 'react';

const SnDataAppModal: React.FC = () => {
  return (
    <div>
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
            If you are a Spectrum Cable customer, you have access to an exclusive product called Spectrum News. 
            Spectrum News serves as a retention product for Spectrum and is a net cost for the company. 
        </p>
        <p>
            However
        </p>
        <h3 className="text-xl font-semibold mt-4">Technical Architecture</h3>
        <img 
            src="/snDataDiagram.png" 
            alt="Project Architecture Diagram"    
            className="w-full object-contain mb-6"
        />
    <div className="space-y-4">
      <p>Detailed project description...</p>

      <p>Architecture explanation...</p>
    </div>
  </div>
  );
};

export default SnDataAppModal;