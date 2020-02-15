import React from "react";
import Card from "../Card/Card";
import CardContainer from "../CardContainer/CardContainer";
import "./TimelineItem.scss";

const TimelineItem = props => {
  const { title, subTitle, period, description } = props;
  return (
    <div className="timeline-item">
      <div className="timeline-item__path">
        <div className="path__circle"></div>
        <div className="path__line"></div>
      </div>
      <Card className="timeline-item__content">
        <CardContainer className="timeline-item__container">
          <h6 className="timeline-item__title">{title}</h6>
          <div className="timeline-item__sub-title">{subTitle}</div>
          <div className="timeline-item__period">{period}</div>
          <p
            className="timeline-item__description"
            dangerouslySetInnerHTML={description}
          ></p>
        </CardContainer>
      </Card>
    </div>
  );
};

export default TimelineItem;
