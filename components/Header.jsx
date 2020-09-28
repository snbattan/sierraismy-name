import PropTypes from 'prop-types';
import React from 'react';

const Header = (props) => (
  <>
    <header className="row">
      <title className="col ta-l">
        <h1>
          &nbsp;<i className="fa fa-star" /> SIERRA BATTAN
        </h1>
      </title>
      <aside>
        <h1 className="col ta-r">
          <i className="fa fa-adjust" onClick={props.invertTheme} onKeyPress={props.invertTheme} label="invert-colors" role="button" tabIndex="0" />&nbsp;
        </h1>
      </aside>
    </header>
    <hr />
  </>
);

Header.propTypes = {
  invertTheme: PropTypes.func.isRequired,
};

export default Header;
