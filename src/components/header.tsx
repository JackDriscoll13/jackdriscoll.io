import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4">
      <div className="max-w-4xl mx-auto flex justify-center items-center">
        <h1 className="text-xl font-bold mr-64">Jack Driscoll</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link></li>
            <li><Link to="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link></li>
            <li><Link to="/ideas" className="text-gray-700 hover:text-gray-900">Ideas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;