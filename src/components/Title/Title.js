import PropTypes from "prop-types";
import React from "react";
import "./Title.scss";

const Title = props => {
  const { id, title } = props;
  return (
    <div className="title">
      <h4 id={id}>{title}</h4>
    </div>
  );
};

Title.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Title;
