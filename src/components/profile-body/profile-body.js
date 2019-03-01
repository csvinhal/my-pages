import React from 'react';
import './profile-body.scss';

const profileBody = () => {
    return (
        <div className="profile-body">
            <div className="profile-body__title">
                About
            </div>
            <div className="profile-body__content">
                I'm a 26 years old software developer with 3 years of experience in systems  development and over 2 years in systems support and implantation. Also a quick learner, team player and dedicated professional. Always looking forward to further developing my skills and learning new ones.  Willing to work abroad and get to know new work environments in order  to get my skills enhanced and to become a more effective and qualified  professional.
            </div>
            <hr />
            <div className="profile-body__title">
                Technical skills
            </div>
            <div className="profile-body__content">
                <ul className="profile-body__content--items">
                    <li className="profile-body__content--item">Angular</li>
                    <li className="profile-body__content--item">React</li>
                    <li className="profile-body__content--item">Javascript</li>
                    <li className="profile-body__content--item">ES6</li>
                    <li className="profile-body__content--item">Typescript</li>
                    <li className="profile-body__content--item">HTML</li>
                    <li className="profile-body__content--item">CSS</li>
                    <li className="profile-body__content--item">SCSS</li>
                    <li className="profile-body__content--item">Bootstrap</li>
                    <li className="profile-body__content--item">Rest API</li>
                    <li className="profile-body__content--item">Git</li>
                    <li className="profile-body__content--item">Karma</li>
                    <li className="profile-body__content--item">Jasmine</li>
                    <li className="profile-body__content--item">Webpack</li>
                    <li className="profile-body__content--item">Postgresql</li>
                    <li className="profile-body__content--item">Redux</li>
                    <li className="profile-body__content--item">MongoDB</li>
                </ul>
            </div>
            <hr />
            <div className="profile-body__title">
                Work experience
            </div>
            <div className="profile-body__content">
                <p><span className="profile-body__content--job">Software Developer, Senior Sistemas</span> - August/2017 - present - Blumenau, Santa Catarina</p>
                <p>Senior is a Brazilian software house that provides reference high performance solutions in Enterprise Resource Planning, Logistics, Human Capital and Access Control and Security Management systems to several sizes and segments companies.</p>
            </div>
        </div>
    );
}

export default profileBody;