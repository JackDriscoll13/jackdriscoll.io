import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/about' && location.pathname === '/') {
      return "border-b-2 border-accent";
    }
    return location.pathname === path ? "border-b-2 border-accent" : "";
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-light-bg shadow-md p-4">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-around items-center">
        <h1 className="text-xl font-bold mr-48 text-charcoal relative pb-1">
          Jack Driscoll
          {/* <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span> */}
        </h1>

        <button 
          className="ml-auto lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <nav className={`w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-lg">
            <li><Link to="/" className={`text-gray-700 hover:text-accent pb-1 ${isActive("/about")}`}>About</Link></li>
            <li><Link to="/projects" className={`text-gray-700 hover:text-accent pb-1 ${isActive("/projects")}`}>Projects</Link></li>
            <li><Link to="/ideas" className={`text-gray-700 hover:text-accent pb-1 ${isActive("/ideas")}`}>Ideas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;