import React from "react";
import Timeline from "../../components/Timeline/Timeline";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import Title from "../../components/Title/Title";
import "./Experience.scss";

const Experience = () => {
  return (
    <div className="experience">
      <Title title="Experience" />
      <Timeline>
        <TimelineItem />
        <TimelineItem />
      </Timeline>
    </div>
  );
};

export default Experience;
