import {
  faFacebook,
  faGithub,
  faLinkedin,
  faSkype
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneSquareAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import profile from "../../assets/images/profile.JPG";
import "./Profile.scss";

const Profile = () => {
  const openFacebook = () => {
    window.open("https://www.facebook.com/cristiano.souza.16");
  };

  const openGitHub = () => {
    window.open("https://github.com/csvinhal");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/csvinhal");
  };

  return (
    <section className="profile" aria-label="Informações pessoais">
      <div className="profile__image">
        <img src={profile} title="Cristiano Vinhal" alt="Imagem de perfil" />
      </div>
      <div className="profile__container">
        <div className="container__infos">
          <h4
            id="container__infos--name"
            className="container__infos--name"
            tabIndex="0"
          >
            Cristiano Vinhal
          </h4>
          <h6 className="container__infos--job" tabIndex="0">
            UI Engineer & Coffe Addict
          </h6>
        </div>
        <address className="profile__contact">
          <div className="contact__mail" tabIndex="0">
            <FontAwesomeIcon icon={faEnvelope} size="lg" color="#D93025" />
            <span>cristiano.vinhal10@gmail.com</span>
          </div>
          <div className="contact__skype" tabIndex="0">
            <FontAwesomeIcon icon={faSkype} size="lg" color="#00AFF0" />
            <span>cristiano.vinhal</span>
          </div>
          <div className="contact__phone" tabIndex="0">
            <FontAwesomeIcon
              icon={faPhoneSquareAlt}
              size="lg"
              color="#536E12"
            />
            <span>+55 47 99212-8702</span>
          </div>
          <div className="contact__place" tabIndex="0">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#D93025" />
            <span>Blumenau-SC/Brasil</span>
          </div>
        </address>

        <div className="profile__social-media">
          <div
            className="social-media__icon"
            aria-label="Clique para abrir minha página do Facebook"
            tabIndex="0"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              color="#3f51b5"
              onClick={openFacebook}
            />
          </div>
          <div
            className="social-media__icon"
            aria-label="Clique para abrir minha página do Github"
            tabIndex="0"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" onClick={openGitHub} />
          </div>
          <div
            className="social-media__icon"
            aria-label="Clique para abrir minha página do LinkedIn"
            tabIndex="0"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              color="#0073b1"
              onClick={openLinkedIn}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
