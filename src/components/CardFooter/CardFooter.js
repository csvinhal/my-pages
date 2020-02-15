import React from "react";
import "./CardFooter.scss";

const CardFooter = React.forwardRef(function Card(props, ref) {
  const { className, ...other } = props;
  return <div className={["card__footer", className].join(" ")} {...other}></div>;
});

export default CardFooter;
