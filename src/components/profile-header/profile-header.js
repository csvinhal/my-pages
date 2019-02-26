import React from 'react';
import './profile-header.scss';
import profile from '../../assets/images/profile.JPG';

const profileHeader = () => {
    return (
        <div className="profile-header">
            <img className="profile-image" src={profile} alt="Profile" />
            <div className="profile-title">
                <div className="profile-title__name">Cristiano de Souza Vinhal</div>
                <div className="profile-title__job">Frontend developer</div>
            </div>
        </div>
    );
}

export default profileHeader;