import React from 'react';
import './style.scss';

const TextHome = ({ removeRoot }) => {
  const handleClick = () => {
    removeRoot()
  }
  return (
    <div className="text text-focus-in">
      <p>
        Découvrez mes projets en ouvrant le menu à gauche de votre écran <br />
        ou amusez-vous avec les bulles <br />
        <button
          type="button"
          onClick={handleClick}
          className="text-button"
        >
          En cliquant ici
        </button>
      </p>
    </div>
  );
};


export default TextHome;
