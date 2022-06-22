import React from 'react';

import NavLink from './NavLink';

const Header = () => (
  <header className="bg-mblue tc-white">
    <div style={{ flexGrow: 1 }}>
      <h1 style={{ marginBottom: '-30px' }}>Sierra Battan</h1>
      <h2>Software Engineer</h2>
    </div>
    <nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/resume">Resume</NavLink>
    </nav>
  </header>
);

export default Header;
