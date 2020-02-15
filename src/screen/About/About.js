import React from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import CardContainer from "../../components/CardContainer/CardContainer";
import CardFooter from "../../components/CardFooter/CardFooter";
import Title from "../../components/Title/Title";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <Title title="About me" />
      <Card>
        <CardContainer>
          <div className="card-container__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non mattis elit. Vestibulum a sodales nulla. Ut id sem a est ornare
            placerat. Suspendisse non odio accumsan, rhoncus felis id, ornare
            urna. Sed id pharetra risus. Cras sem magna, sodales vitae lectus
            at, varius scelerisque sem. Nam commodo, ipsum ac dignissim pretium,
            neque sapien ultricies augue, at porttitor massa augue id sapien.
            Praesent semper elit a aliquet maximus.
          </div>
        </CardContainer>
        <CardFooter className="about__footer">
          <Button label="Download resume" priority={"primary"} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default About;
