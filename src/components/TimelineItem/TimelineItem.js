import React from "react";
import Card from "../Card/Card";
import CardContainer from "../CardContainer/CardContainer";
import "./TimelineItem.scss";

const TimelineItem = () => {
  return (
    <div className="timeline-item">
      <div className="timeline-item__path">
        <div className="path__circle"></div>
        <div className="path__line"></div>
      </div>
      <Card className="timeline-item__content">
        <CardContainer className="timeline-item__container">
          <div className="timeline-item__job">UI Engineer</div>
          <div className="timeline-item__company">Senior Sistemas</div>
          <div className="timeline-item__period">May 2015 - Present</div>
          <div className="timeline-item__job-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            sodales erat vitae leo aliquam cursus. Ut eleifend at ante id
            luctus. Pellentesque sem erat, vehicula quis dui vitae, aliquet
            interdum justo. Suspendisse erat ligula, varius id metus et,
            pulvinar laoreet libero. Maecenas eget blandit odio. Nullam et nisl
            blandit dui feugiat vestibulum. Vestibulum commodo libero eget augue
            gravida dignissim.
          </div>
        </CardContainer>
      </Card>
    </div>
  );
};

export default TimelineItem;
