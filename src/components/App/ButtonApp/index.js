import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ButtonApp = ({ showHome }) => (
  <div>
    <button
      type="button"
      className="buttonApp"
      onClick={showHome}
    >
      Accueil
    </button>
  </div>
);

ButtonApp.propTypes = {

};

export default ButtonApp;
