import React from "react";
import "./Profile.scss";
import profile from "../../assets/images/profile.JPG";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__image">
        <img src={profile} alt="Imagem de perfil" />
      </div>
      <div className="profile__container">
        <div className="container__infos">
          <h4 className="container__infos--name">Cristiano Vinhal</h4>
          <h4 className="container__infos--job">UI Engineer</h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;
