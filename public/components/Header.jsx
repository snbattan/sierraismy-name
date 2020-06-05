import {
  Tab, Tabs, ThemeProvider, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const pages = [
  { label: 'Home', value: 'Home' },
  { label: 'About Me', value: 'AboutMe' },
];

const Header = (props) => (
  <ThemeProvider theme={props.theme}>
    <header className="row">
      <title className="col ta-l">
        <Typography color="primary" variant="h3"><i className="material-icons lg">grade</i> Sierra&apos;s Website</Typography>
      </title>
      <h4 className="col ta-r">
        <i
          className="material-icons"
          onClick={props.invertTheme}
          onKeyPress={props.invertTheme}
          role="button"
          tabIndex="0"
        >
          invert_colors
        </i>
      </h4>
    </header>
    <hr />
    <nav>
      <Tabs
        centered
        onChange={(e, page) => props.updateState('page', page)}
        value={props.page}
      >
        {pages.map((page) => <Tab key={page.value} label={page.label} value={page.value} />)}
      </Tabs>
    </nav>
  </ThemeProvider>
);

Header.propTypes = {
  invertTheme: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  theme: PropTypes.shape().isRequired,
  updateState: PropTypes.func.isRequired,
};

export default Header;
