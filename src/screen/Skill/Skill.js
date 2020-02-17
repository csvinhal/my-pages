import React from "react";
import { ReactComponent as AngularSVG } from "../../assets/images/skills/angular.svg";
import { ReactComponent as CSS3SVG } from "../../assets/images/skills/css3.svg";
import { ReactComponent as ES6SVG } from "../../assets/images/skills/es6.svg";
import Git from "../../assets/images/skills/git.png";
import { ReactComponent as HTML5SVG } from "../../assets/images/skills/html5.svg";
import { ReactComponent as NodeJSSVG } from "../../assets/images/skills/nodejs.svg";
import { ReactComponent as ReactJSSVG } from "../../assets/images/skills/reactjs.svg";
import { ReactComponent as SASSSVG } from "../../assets/images/skills/sass.svg";
import Card from "../../components/Card/Card";
import CardContainer from "../../components/CardContainer/CardContainer";
import Title from "../../components/Title/Title";
import "./Skill.scss";

const Skill = () => {
  return (
    <section className="skill" aria-labelledby="skill__title">
      <Title id="skill__title" title="Skills" />
      <Card>
        <CardContainer className="skill__container" role="list">
          <div className="container__technology" role="listitem" tabIndex="0">
            <div className="technology__svg">
              <AngularSVG width={50} height={50} />
            </div>
            <div className="technology__label technology__label--angular">
              Angular
            </div>
          </div>

          <div className="container__technology" role="listitem" tabIndex="0">
            <div className="technology__svg">
              <ReactJSSVG width={50} height={50} />
            </div>
            <div className="technology__label technology__label--reactjs">
              ReactJS
            </div>
          </div>

          <div className="container__technology" role="listitem" tabIndex="0">
            <div className="technology__svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="50"
                height="50"
              >
                <g fill="#764ABC">
                  <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z" />
                  <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z" />
                  <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z" />
                </g>
              </svg>
            </div>
            <div className="technology__label technology__label--redux">
              Redux
            </div>
          </div>

          <div className="container__technology" role="listitem" tabIndex="0">
            <div className="technology__svg">
              <NodeJSSVG width={50} height={50} />
            </div>
            <div className="technology__label technology__label--nodejs">
              NodeJS
            </div>
          </div>

          <div className="container__technology" role="listitem" tabIndex="0">
            <div className="technology__svg">
              <HTML5SVG width={50} height={50} />
            </div>
            <div className="technology__label technology__label--html5">
              HTML5
            </div>
          </div>

          <div className="container__technology" role="listitem" tabIndex="0">
            <div className="technology__svg">
              <CSS3SVG width={50} height={50} />
            </div>
            <div className="technology__label technology__label--css3">
              CSS3
            </div>
          </div>
          <div className="container__technology" role="listitem" tabIndex="0">
            <div className="technology__svg">
              <ES6SVG width={50} height={50} />
            </div>
            <div className="technology__label technology__label--es6">ES6</div>
          </div>
          <div className="container__technology" role="listitem" tabIndex="0">
            <div className="technology__svg">
              <SASSSVG width={50} height={50} />
            </div>
            <div className="technology__label technology__label--sass">
              SASS
            </div>
          </div>
          <div className="container__technology" role="listitem" tabIndex="0">
            <div className="technology__img">
              <img src={Git} alt="Git logo" />
            </div>
            <div className="technology__label technology__label--git">Git</div>
          </div>
        </CardContainer>
      </Card>
    </section>
  );
};

export default Skill;
