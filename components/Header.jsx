import PropTypes from 'prop-types';
import React, { useState } from 'react';

import NavLink from './NavLink';
import { Switch } from './reusable';

const Header = ({ invertTheme }) => {
  const [flip, toggleFlip] = useState(false);

  return (
    <header className="book-end">
      <div style={{ display: 'flex', marginTop: '-12px' }}>
        <div style={{ flexGrow: 1, marginBottom: '-12px', width: '80%' }}>
          <h1 style={{ marginBottom: '-24px' }}>Sierra Battan</h1>
          <h3>Software Engineer</h3>
        </div>
        <Switch
          handleToggle={() => {
            toggleFlip((wasFlipped) => !wasFlipped);
            invertTheme();
          }}
          isOn={flip}
          style={{
            alignItems: 'flex-end',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 0,
            marginTop: '12px',
            width: '20%',
          }}
        />
      </div>
      <nav className="nav">
        <NavLink href="/">Home </NavLink>
        <NavLink href="/about">About Me </NavLink>
        <NavLink href="/resume">Resume </NavLink>
      </nav>
    </header>
  );
};

Header.propTypes = {
  invertTheme: PropTypes.func.isRequired,
};

export default Header;
