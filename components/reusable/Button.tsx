import React from "react";

const Button = ({
  isEmail,
  label,
  onClick,
}: {
  isEmail?: boolean;
  label?: string;
  onClick?: () => void;
}) =>
  isEmail ? (
    <a className="button" href="mailto:snbattan@gmail.com">
      {label}
    </a>
  ) : (
    <button className="button" onClick={onClick} type="button">
      {label}
    </button>
  );

Button.defaultProps = {
  isEmail: false,
  label: "Submit",
  onClick: () => {},
};

export default Button;
