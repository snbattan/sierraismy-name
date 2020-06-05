import { ThemeProvider, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Header = (props) => (
  <ThemeProvider theme={props.theme}>
    <main className="col ta-c">
      <Typography>Welcome Home</Typography>
    </main>
  </ThemeProvider>
);

Header.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default Header;
