import React from "react";
import "./Button.scss";

const Button = props => {
  const { label, primary, disabled } = props;
  let buttonClass = "button";

  if (primary) {
    buttonClass += " primary";
  } else {
    buttonClass += " secondary";
  }

  return (
    <button className={buttonClass} type="button" disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
