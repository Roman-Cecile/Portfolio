import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './style.scss';

const Navbar = () => (
  <>
    <div className="navbar">
      <a className="navbar-li">Accueil</a>
      <a className="navbar-li">Photo</a>
      <a className="navbar-li">Site</a>
      <a className="navbar-li">Contact</a>
    </div>
      <Button />
  </>
);

Navbar.propTypes = {

};

export default Navbar;
