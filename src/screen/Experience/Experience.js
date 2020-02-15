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
        <TimelineItem
          title="UI Engineer"
          subTitle="Senior Sistemas"
          period="May 2019 - Present"
          description={{
            __html: `
              - Responsável pela manutenção e desenvolvimento do tema CSS e da biblioteca interna de componentes (linguagem angular).<br />
              - Análise e desenvolvimento de novos componentes.<br />
              - Suporte ao times no desenvolvimento frontend.<br />
              - Manter e evoluir o Design System, garantindo a eficiência, consistência e disponibilidade da nossa biblioteca de componentes.                       
            `
          }}
        />
        <TimelineItem
          title="Full-Stack Developer"
          subTitle="Senior Sistemas"
          period="Aug 2017 - May 2019"
          description={{
            __html: `
              - Desenvolvimento e manutenção do Frontend usando Angular, Javascript, CSS, HTML e Typescript.<br />
              - Desenvolvimento e manutenção de API’s Rest utilizando JAVA.<br />
              - Criação de testes unitários utilizando Karma e Jasmine no frontend, assim como Junit nos testes do backend.<br />
              - Software development methodology by SCRUM.<br />
              - Orientar e treinar novos colegas de trabalho.                       
            `
          }}
        />
      </Timeline>
    </div>
  );
};

export default Experience;
