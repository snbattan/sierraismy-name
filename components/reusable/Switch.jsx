import PropTypes from 'prop-types';
import React from 'react';

const Switch = ({
  handleToggle,
  isOn,
  style,
}) => (
  <div style={{
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0,
    width: '100%',
  }}
  >
    <div style={style}>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        className="react-switch-label"
        htmlFor="react-switch-new"
      >
        <span className="react-switch-button" />
      </label>
    </div>
  </div>
);

Switch.defaultProps = {
  style: {},
};

Switch.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  isOn: PropTypes.bool.isRequired,
  style: PropTypes.shape,
};

export default Switch;
