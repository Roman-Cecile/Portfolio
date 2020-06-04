import React from 'react';
import './style.scss';

const TextHome = ({ removeRoot, navbarIsActive }) => {
  const handleClick = () => {
    removeRoot()
  }
  return (
    <div className={`${navbarIsActive ? 'text text-focus-in text--open' : 'text text-focus-in '}`}>
      <p>
        Découvrez mes projets en ouvrant le menu à gauche de votre écran <br />
        ou amusez-vous avec les bulles <br />
        <button
          type="button"
          onClick={handleClick}
          className="text-button"
        >
          en cliquant ici
        </button>
      </p>
    </div>
  );
};


export default TextHome;
