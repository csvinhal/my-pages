import React from "react";
import "./CardContainer.scss";

const CardContainer = React.forwardRef(function Card(props, ref) {
  const { className, ...other } = props;
  return (
    <div className={["card__container", className].join(" ")} {...other}></div>
  );
});

export default CardContainer;
