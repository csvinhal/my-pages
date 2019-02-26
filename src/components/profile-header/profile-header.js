import React from 'react';
import './profile-header.scss';
import profile from '../../assets/images/profile.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const onClickGithub = () => {
    window.open('https://github.com/csvinhal', '_blank');
}

const onClickLinkedin = () => {
    window.open('https://www.linkedin.com/in/csvinhal', '_blank');
}

const profileHeader = () => {
    return (
        <div className="profile-header">
            <img className="profile-header__image" src={profile} alt="Profile" />
            <div className="profile-header__title">
                <div className="profile-header__title--name">Cristiano de Souza Vinhal</div>
                <div className="profile-header__title--job">Frontend developer</div>
                <div className="profile-header__title--media">
                    <FontAwesomeIcon icon={faGithub} size="lg" color="#4da6ff" onClick={onClickGithub} />
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="#4da6ff" onClick={onClickLinkedin} />
                </div>
            </div>
        </div>
    );
}

export default profileHeader;