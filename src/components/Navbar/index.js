import React from 'react';
import PropTypes from 'prop-types';
import Button from 'src/containers/Button';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Navbar = ({ navbarIsActive }) => (
  <>
    <div className={` ${navbarIsActive ? ' navbar' : 'navbar navbar-disabled'}`}>
      <NavLink
        exact
        to="/"
        className="navbar-li"
        activeClassName="navbar-li--active"
      >
        Accueil
      </NavLink>
      <NavLink
        exact
        to="/project"
        className="navbar-li"
        activeClassName="navbar-li--active"

      >
        Projets
      </NavLink>
      <NavLink
        exact
        to="/information"
        className="navbar-li"
        activeClassName="navbar-li--active"

      >
        Qui suis-je?
      </NavLink>
      <NavLink
        exact
        to="/contact"
        className="navbar-li"
        activeClassName="navbar-li--active"

      >
        Contact
      </NavLink>
    </div>
    <Button toggleNav={navbarIsActive} />
  </>
);

Navbar.propTypes = {

};

export default Navbar;
