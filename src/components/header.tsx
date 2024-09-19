import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#ideas">Ideas</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;