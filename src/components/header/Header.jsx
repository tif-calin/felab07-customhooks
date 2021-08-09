import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="Header">
      <h1>Lists of Things</h1>
      <nav>
        <Link to="/">home</Link>
      </nav>
    </header>
  );
};

export default Header;
