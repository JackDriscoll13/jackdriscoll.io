import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-inherit">
      <h1 className="text-4xl font-bold mb-4 text-charcoal">404 - Page Not Found</h1>
      <p className="text-xl mb-8 text-charcoal">The page you are looking for doesn't exist.</p>
      <Link to="/" className="text-charcoal underline decoration-accent font-medium hover:text-accent cursor-pointer shadow-lg rounded-md px-4 py-2">
      {`<-`} Go to jackdriscoll.io
      </Link>
    </div>
  );
};

export default NotFoundPage;
