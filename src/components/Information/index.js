import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Information = ({ navbarIsActive }) => (
  <>

    <h1
      className={
              `${
                navbarIsActive
                  ? 'titleProject titleProject-open title-sub'
                  : 'titleProject title-sub'
              }`
            }
    >
      <span className="tracking-in-expand">Qui suis-je ?</span>
    </h1>
    <div
      className={`${navbarIsActive ? 'open' : 'close'} `}
    >
      <p className="titlebio">Présentation</p>
      <p
        className="bio"
      >
        Je m'appelle Roman CECILE, j'habite à Montpellier.
        Comme vous pouvez le voir dans mon parcours (ci-dessous) j'ai obtenu obtenu une licence en droit privé à
        l'université de Montpellier avant de découvrir l'univers du développement web. C'est au travers d'un
        projet entrepreneurial que j'ai rapidement développé un attrait pour ce métier.
        En effet, pour la première fois je prenais du plaisir à résoudre des problématiques,
        apprendre, progresser.<br />
        Je suis désormais à la recherche d'un poste de développeur front-end afin d'approfondir mes connaissances
        ainsi que de mettre en pratiques mes acquis. Par la suite j'aimerai étudier de nouveaux frameword front
        (Angular, Vue...) mais également d'autres langages.<br />

      </p>
      <p className="titlebio">Mon parcours</p>
      <ul className="timeline">
        <li className="event" data-date="2015">
          <h2>
            Bac STI2D
          </h2>
        </li>
        <li className="event" data-date="2019">
          <h2>
            Licence 3 - Droit privé
          </h2>
          <p>
            Université de Montpellier<br />
            Etudiant-entrepreneur chez <a href="https://www.pepite-lr.fr/">Pépite-Lr</a>
          </p>
        </li>
        <li className="event" data-date="2019">
          <h2>
            The Hacking Project
          </h2>
          <p>
            Découverte du langage Ruby et de son framework Rails
          </p>
        </li>
        <li className="event" data-date="2020">
          <h2>
            O'clock
          </h2>
          <p>
            Formation fullstack Javascript <br />
            React.js - NodeJS
          </p>
        </li>
      </ul>
    </div>

  </>
);

Information.propTypes = {

};

export default Information;
