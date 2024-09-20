import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/ideas">Ideas</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;