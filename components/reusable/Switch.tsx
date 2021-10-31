import React from 'react';

const Switch = ({ handleToggle, isOn, style }: {
  handleToggle: () => void,
  isOn?: boolean,
  style?: object,
}) => (
  <div
    aria-label="light-dark-mode-switch"
    style={style}
  >
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
);

Switch.defaultProps = {
  isOn: false,
  style: {},
};

export default Switch;
