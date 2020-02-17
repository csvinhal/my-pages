import React from "react";
import Timeline from "../../components/Timeline/Timeline";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import Title from "../../components/Title/Title";
import "./Experience.scss";

const Experience = () => {
  return (
    <section className="experience" aria-labelledby="expecience__title">
      <Title id="expecience__title" title="Experience" />
      <Timeline>
        <TimelineItem
          color="independence"
          title="UI Engineer"
          subTitle="Senior Sistemas"
          period="May 2019 - Present"
          description={`
            - Maintain and evolve the Design System, ensuring the efficiency, consistency and availability of the internal component library.
            - Responsible of maintaining an internal angular components library and an internal css theme.
            - Analysis and development of new components.
            - Support to internal teams in frontend development.                       
            `.trim()}
        />
        <TimelineItem
          color="weldon"
          title="Full-Stack Developer"
          subTitle="Senior Sistemas"
          period="Aug 2017 - May 2019"
          description={`
              - Frontend development and maintenance using Angular, Javascript, CSS, HTML and Typescript.
              - Rest API development and maintenance using JAVA to supply the backend needs.
              - Use of Karma and Jasmine as the main frameworks to develop frontend unit tests as well Junit to develop backend test cases.
              - Software development methodology by SCRUM. 
              - Mentored and trained new co-workers.                 
            `.trim()}
        />
        <TimelineItem
          color="purple"
          title="Software Developer"
          subTitle="Philips"
          period="Nov 2015 - Aug 2017"
          description={`
              - Migration from the Tasy System to HTML5, according to the requirements of the analyst, evaluating the definitions with criticality and questioning if identified case something that can be improved. Using AngularJS, JavaScript and Java languages. 
              - Perform the analysis in work orders, of functions in which is specialist, if the analyst passes the task, and propose solutions.
              - Develop and apply test routines, aiming at the quality and performance of the product.
              - Accompany and assist in the development of beginner programmers, guiding the way of Philips work.             
            `.trim()}
        />
        <TimelineItem
          color="mulberry"
          title="Technology Consultant"
          subTitle="Gestão Sistemas"
          period="Nov 2014 - Oct 2015"
          description={`
              Development of business rules using the Senior Programming Language (LSP), creation of import and export data layout (Imp / Exp Generator), view customizations through the Interfaces Management System (SGI) and report generator.
            `.trim()}
        />
      </Timeline>
    </section>
  );
};

export default Experience;
