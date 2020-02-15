import React from "react";
import "./Title.scss";

const Title = props => {
  const { title } = props;
  return (
    <div className="title">
      <h4>{title}</h4>
    </div>
  );
};

export default Title;
