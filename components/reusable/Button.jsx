import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ isEmail, label, onClick }) => (isEmail
  ? <a className="button" href="mailto:snbattan@gmail.com">{label}</a>
  : <button className="button" onClick={onClick} type="button">{label}</button>
);

Button.defaultProps = {
  isEmail: false,
  onClick: () => {},
};

Button.propTypes = {
  isEmail: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
