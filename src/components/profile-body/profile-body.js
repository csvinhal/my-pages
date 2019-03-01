import React from 'react';
import './profile-body.scss';

const profileBody = () => {
    return (
        <div className="profile-body">
            <div className="profile-body__title">
                About
            </div>
            <div className="profile-body__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida aliquam purus, vitae rutrum leo tempus ac. Nam sagittis elit et turpis porttitor, a pellentesque tellus imperdiet. Nullam mattis eget nulla sit amet ornare. Donec tempor mauris non interdum fermentum. Ut luctus eu odio a ultrices. Sed fermentum mi eu eros porta, id commodo libero tincidunt. Ut mi orci, tincidunt vel risus non, lacinia porta leo. Praesent id nibh vel enim tempus viverra.
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
        </div>
    );
}

export default profileBody;