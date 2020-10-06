import PropTypes from 'prop-types';
import React from 'react';

const Header = (props) => (
  <header className="row">
    <title className="col ta-l">
      <h1>
        <i className="fa fa-star" style={{ fontSize: '38px' }} />SIERRA BATTAN
      </h1>
    </title>
    <aside>
      <h1 className="col ta-r">
        <i
          className="fa fa-adjust"
          onClick={props.invertTheme}
          onKeyPress={props.invertTheme}
          label="invert-colors"
          role="button"
          style={{ fontSize: '38px' }}
          tabIndex={0}
        />&nbsp;
      </h1>
    </aside>
  </header>
);

Header.propTypes = {
  invertTheme: PropTypes.func.isRequired,
};

export default Header;
