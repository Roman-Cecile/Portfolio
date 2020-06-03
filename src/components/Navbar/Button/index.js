import React from 'react'
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({ showNavbar, toggleNav }) => {
  const handleClick = () => {
    showNavbar();
  };
  return (
    <div>
      <button type="button" className={`${toggleNav ? 'button button-open' : 'button'}`} onClick={handleClick}>&#x27F6;</button>
    </div>
  );
};

Button.propTypes = {

}

export default Button;
