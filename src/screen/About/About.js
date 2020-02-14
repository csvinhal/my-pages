import React from "react";
import Button from "../../components/Button/Button";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <h4 className="about__title-title">About me</h4>
      </div>
      <div className="about__card-container">
        <div className="card-container__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
          mattis elit. Vestibulum a sodales nulla. Ut id sem a est ornare
          placerat. Suspendisse non odio accumsan, rhoncus felis id, ornare
          urna. Sed id pharetra risus. Cras sem magna, sodales vitae lectus at,
          varius scelerisque sem. Nam commodo, ipsum ac dignissim pretium, neque
          sapien ultricies augue, at porttitor massa augue id sapien. Praesent
          semper elit a aliquet maximus.
        </div>

        <div className="card-container__footer">
          <Button label="Download resume" priority={"primary"} />
        </div>
      </div>
    </div>
  );
};

export default About;
