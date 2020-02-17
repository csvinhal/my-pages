import React from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import CardContainer from "../../components/CardContainer/CardContainer";
import CardFooter from "../../components/CardFooter/CardFooter";
import Title from "../../components/Title/Title";
import "./About.scss";

const About = () => {
  return (
    <section className="about" aria-labelledby="about__title">
      <Title id="about__title" title="About me" />
      <Card>
        <CardContainer className="about-container__text" tabIndex="0">
          <p>
            First and foremost, I love coding, creating and optimizing
            interactive, user-friendly websites/apps bringing a wonderful
            experience and including people.
          </p>
          <p>
            My specialties include quickly learning new skills and programming
            languages, problem solving, responsive design principles and strong
            attention to detail in order to deliver original and efficient
            solutions.
          </p>
        </CardContainer>
        <CardFooter className="about__footer">
          <Button label="Download resume" priority={"primary"} />
        </CardFooter>
      </Card>
    </section>
  );
};

export default About;
