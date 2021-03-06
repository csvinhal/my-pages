import React from "react";
import "./Card.scss";

const Card = React.forwardRef(function Card(props, ref) {
  const { className, ...other } = props;
  return (
    <div className={["card", className].join(" ")} ref={ref} {...other}></div>
  );
});

export default Card;
