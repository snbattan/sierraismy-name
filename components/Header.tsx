import React, { useState } from 'react';

import NavLink from './NavLink';
import { Switch } from './reusable';

const Header = ({ invertTheme }: { invertTheme: () => void }) => {
  const [flip, toggleFlip] = useState(false);

  return (
    <header className="book-end">
      <div style={{ display: 'flex', marginTop: '-12px' }}>
        <div style={{ flexGrow: 1, marginBottom: '-12px', width: '100%' }}>
          <h1 style={{ marginBottom: '-24px' }}>Sierra Battan</h1>
          <h3>Software Engineer</h3>
        </div>
        <Switch
          handleToggle={() => {
            toggleFlip((wasFlipped) => !wasFlipped);
            invertTheme();
          }}
          isOn={flip}
          style={{ marginTop: '12px' }}
        />
      </div>
      <nav className="nav">
        <NavLink href="/"><>HOME</></NavLink>
        <NavLink href="/about"><>ABOUT ME</></NavLink>
        <NavLink href="/resume"><>RESUME</></NavLink>
      </nav>
    </header>
  );
};

export default Header;
