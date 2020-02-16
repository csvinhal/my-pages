import PropTypes from "prop-types";
import React from "react";
import "./TimelineItem.scss";

const TimelineItem = props => {
  const { title, subTitle, period, description, color } = props;

  return (
    <div className="timeline-item">
      <div className="timeline-item__path">
        <div className="path__circle"></div>
        <div className="path__line"></div>
      </div>
      <div
        className={`timeline-item__content timeline-item__content--${color}`}
      >
        <div className="timeline-item__container">
          <h6 className="timeline-item__title">{title}</h6>
          <div className="timeline-item__sub-title">{subTitle}</div>
          <div className="timeline-item__period">{period}</div>
          <p className="timeline-item__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
export default TimelineItem;
