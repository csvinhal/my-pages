import React from "react";
import "./Button.scss";

const Button = props => {
  const { label, priority, disabled } = props;
  let buttonClass = ["button"];

  if (priority === "primary") {
    buttonClass.push("primary");
  } else if (priority === "secondary") {
    buttonClass.push("secondary");
  }

  return (
    <button className={buttonClass.join(" ")} type="button" disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
