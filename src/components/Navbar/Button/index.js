import React from 'react'
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import './style.scss';

const Button = ({ showNavbar, toggleNav }) => {
  const handleClick = () => {
    showNavbar();
  };
  return (
    <div>
      <button type="button" className={`${toggleNav ? 'button button-open' : 'button bounce-left'}`} onClick={handleClick}><Icon name="angle right" /></button>
    </div>
  );
};

Button.propTypes = {

}

export default Button;
