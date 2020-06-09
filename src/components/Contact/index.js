import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Icon } from 'semantic-ui-react';
import infos from '../../assets/images/infos.png';

const Contact = ({ navbarIsActive }) => (
  <div>
    <h1
      className={
        `${
          navbarIsActive
            ? 'titleProject titleProject-open title-sub'
            : 'titleProject title-sub'
        }`
      }
    >
      <span className="tracking-in-expand">Contact</span>
    </h1>
    <div className={
        `${
          navbarIsActive
            ? 'open'
            : 'close'
        }`
      }>
      <h2 className="h2">Vous souhaitez me contacter ?</h2>
      <hr className="hr" />
      <ul className="ulContact">
        <li><Icon name="mail" color="teal" /> roman.cecile34@gmail.com</li>
        <li><Icon name="mobile alternate" color="teal" /> 0679391058</li>
        <li>
          <Icon
            name="linkedin"
            color="teal"
          />
          <a
            className="linkColor"
            href="https://www.linkedin.com/in/roman-c%C3%A9cile-a1b805167/"
          >
            Roman Cécile
          </a>
        </li>
      </ul>
      <p className="h2">Scannez ce QR code pour obtenir mes informations rapidement !</p>
      <img className="imageQR" src={infos} alt="QR code de contact" />
    </div>
  </div>
);

Contact.propTypes = {

};

export default Contact;
