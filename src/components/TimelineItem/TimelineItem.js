import React from "react";
import Card from "../Card/Card";
import CardContainer from "../CardContainer/CardContainer";
import "./TimelineItem.scss";

const TimelineItem = () => {
  return (
    <div className="timeline-item">
      <Card className="timeline-item__content">
        <CardContainer className="timeline-item__container">
          <div className="timeline-item__job">UI Engineer</div>
          <div className="timeline-item__company">Senior Sistemas</div>
          <div className="timeline-item__period">May 2015 - Present</div>
          <div className="timeline-item__job-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
          </div>
          <span className="circle" />
        </CardContainer>
      </Card>
    </div>
  );
};

export default TimelineItem;
