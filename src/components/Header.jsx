import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const [flip, toggleFlip] = useState(true);

  return (
    <header className="book-end">
      <header className="col-12">
        <h1 style={{ marginBottom: '-25px', marginTop: '8px' }}>Sierra Battan</h1>
        <h3 style={{ marginBottom: '-5px' }}>
          <i
            className={`fa fa-adjust ${flip ? 'left' : 'right'}`}
            onClick={() => {
              toggleFlip(!flip);
              props.invertTheme();
            }}
            onKeyPress={props.invertTheme}
            label="invert-colors"
            role="button"
            tabIndex={0}
          />
          SOFTWARE ENGINEER
        </h3>
      </header>
      <nav className="col-12 ta-r">
        <ul>
          <li><NavLink exact to="/about">ABOUT ME</NavLink></li>
          <li><NavLink exact to="/">HOME</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  invertTheme: PropTypes.func.isRequired,
};

export default Header;
