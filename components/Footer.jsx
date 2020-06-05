import { Button, ThemeProvider } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = (props) => (
  <ThemeProvider theme={props.theme}>
    <hr />
    <footer className="row">
      <p className="col ta-r">
        <Button
          color="primary"
          // eslint-disable-next-line no-alert
          onClick={() => alert('Hey!')}
          style={{ borderRadius: 16 }}
          variant="contained"
        >
          Hey
        </Button>
      </p>
      <p className="col ta-l">
        <Button
          color="secondary"
          // eslint-disable-next-line no-alert
          onClick={() => alert('Bye!')}
          style={{ borderRadius: 16 }}
          variant="contained"
        >
          Bye
        </Button>
      </p>
    </footer>
  </ThemeProvider>
);

Footer.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default Footer;
