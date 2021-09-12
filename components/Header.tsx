import React from 'react';

import NavLink from './NavLink';

const Header = () => (
  <header className="bg-mblue tc-white" style={{ display: 'flex' }}>
    <div style={{ flexGrow: 1, marginTop: '-12px' }}>
      <h1 style={{ marginBottom: '-24px' }}>Sierra Battan</h1>
      <h2>Software Engineer</h2>
    </div>
    <nav className="nav">
      <NavLink href="/"><>HOME</></NavLink>
      <NavLink href="/about"><>ABOUT</></NavLink>
      <NavLink href="/resume"><>RESUME</></NavLink>
    </nav>
  </header>
);

export default Header;
