import React from "react";
import "./TimeLine.scss";

const Timeline = React.forwardRef(function Card(props, ref) {
  const { className, ...other } = props;
  return <div className={["timeline", className].join(" ")} {...other}></div>;
});

export default Timeline;
