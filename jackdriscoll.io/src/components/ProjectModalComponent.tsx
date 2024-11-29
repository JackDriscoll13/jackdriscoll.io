import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ProjectDetailsModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto p-6 z-50">
        <button 
          onClick={onClose}
          className="fixed top-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-500 hover:text-accent hover:bg-gray-100"
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-charcoal">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;