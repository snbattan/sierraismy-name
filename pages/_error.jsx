import PropTypes from 'prop-types';
import React from 'react';

const Error = ({ statusCode }) => (
  <article className="col-12 ta-c">
    <h1 className="error-code">{statusCode}</h1>
    <div aria-hidden className="error-divide" />
    <h2 className="error-message">{statusCode === 404
      ? 'This page could not be found'
      : 'An error occurred on server'}
    </h2>
    <p>Oops! Please return to the home page and have a nice day.</p>
  </article>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode;
  return { statusCode };
};

Error.defaultProps = {
  statusCode: 404,
};

Error.propTypes = {
  statusCode: PropTypes.number,
};

export default Error;
