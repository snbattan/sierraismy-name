import PropTypes from 'prop-types';
import React, { useState } from 'react';

import NavLink from './NavLink';

const Header = (props) => {
  const [flip, toggleFlip] = useState(true);

  return (
    <header className="book-end">
      <header className="col-12" style={{ marginBottom: '-12px' }}>
        <h1 style={{ marginBottom: '-24px', marginTop: '12px' }}>Sierra Battan</h1>
        <h3>
          <i
            className={`fa fa-adjust ${flip ? 'left' : 'right'}`}
            label="invert-colors"
            onClick={() => {
              toggleFlip(!flip);
              props.invertTheme();
            }}
            onKeyPress={() => {
              toggleFlip(!flip);
              props.invertTheme();
            }}
            role="button"
            tabIndex={0}
          />
          Software Engineer
        </h3>
      </header>
      <nav className="nav">
        <NavLink href="/"><>HOME</></NavLink>
        <NavLink href="/about"><>ABOUT ME</></NavLink>
        <NavLink href="/resume"><>RESUME</></NavLink>
      </nav>
    </header>
  );
};

Header.propTypes = {
  invertTheme: PropTypes.func.isRequired,
};

export default Header;
