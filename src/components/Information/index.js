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
      className={`${navbarIsActive ? 'openInfo' : 'closeInfo'} `}
    >
      <p className="titlebio">Présentation</p>
      <p
        className="bio bio-container"
      >
        Je suis Roman CECILE, j’habite Montpellier et je suis développeur Web Javascript. <br />
        D’abord destiné aux métiers du Droit, c’est dans ma troisième année, lors d’un projet entrepreneurial
        mené en parallèle,  que je découvre tout l’univers fascinant du développement web.
        A peine diplômé, je quitte mon parcours de juriste et change radicalement de
        direction, convaincu d’avoir rencontré la profession à laquelle je me sens destiné. <br /> C’est à travers
        différentes formations que mon intérêt pour le monde numérique se précise tandis que j’acquiers mes
        compétences. <br /> Résoudre des problématiques, apprendre et progresser  sont mes objectifs.
        C’est pourquoi je suis  à la recherche d’un poste de développeur front-end  qui me donnerait
        l’occasion d’aller toujours plus loin dans mes connaissances et apprentissages.
        Des frameword front comme Angular, Vue… et d’autres langages m’attirent déjà.
        Ils font partie des projets que je pense mettre en place dès que l’occasion se présentera.


      </p>
      <p className="titlebio">Mon parcours</p>
      <ul className="timeline">
        <li className="event" data-date="2020">
          <h2>
            O'clock
          </h2>
          <p>
            Formation fullstack Javascript <br />
            React.js - NodeJS
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
        <li className="event" data-date="2019">
          <h2>
            Licence 3 - Droit privé
          </h2>
          <p>
            Université de Montpellier<br />
            Etudiant-entrepreneur chez <a href="https://www.pepite-lr.fr/">Pépite-Lr</a>
          </p>
        </li>
        <li className="event" data-date="2015">
          <h2>
            Bac STI2D
          </h2>
        </li>
      </ul>
    </div>

  </>
);

Information.propTypes = {

};

export default Information;
