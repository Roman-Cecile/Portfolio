import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { numberProjectByLanguage } from 'src/selector';

import {
  Card, Message, Icon, Button,
} from 'semantic-ui-react';
import ruby from '../../assets/images/Ruby.png';
import js from '../../assets/images/jsproject.png';
import './style.scss';


const Project = ({
  repos,
  fetchRepos,
  navbarIsActive,
  fetchCorrectLanguage,
  loading,
}) => {
  const handleClick = (evt, language) => {
    evt.preventDefault();
    fetchCorrectLanguage(language);
  };
  useEffect(fetchRepos, []);
  return (
    <div>
      <h1
        className={`${navbarIsActive ? 'titleProject titleProject-open title-sub' : ' titleProject title-sub '}`}
      >
        <span className="tracking-in-expand">Mes projets</span>
      </h1>
      <div className="listNbProject">
        {/* <p
          onClick={(evt) => handleClick(evt, 'Ruby')}
          className="projectRails"
        >Projets Ruby on Rails */}
        <img src={ruby} alt="Logo ruby" className={`${navbarIsActive ? 'logo logo--open logo-ruby' : 'logo logo-ruby'}`} onClick={(evt) => handleClick(evt, 'Ruby')} />
        <img src={js} alt="Logo js" className={`${navbarIsActive ? 'logo logo--open logo-js' : 'logo logo-js'}`} onClick={(evt) => handleClick(evt, 'JavaScript')} />
        {/* </p> */}
        {/* <p onClick={(evt) => handleClick(evt, 'JavaScript')} className="projectJS">Projets Javascript</p> */}
        {/* <li>
          Autres:
          {
            repos.length
            - (numberProjectByLanguage(repos, 'Ruby').length
            + numberProjectByLanguage(repos, 'JavaScript').length)
          }
        </li> */}
      </div>
      <Card.Group className={`${navbarIsActive ? 'card-group card-group-open' : 'card-group'}`}>
        { !loading
          && repos.map(({
            id,
            name,
            description,
            language,
            html_url,
          }) => (
            <Card
              key={id}
              className="card slide-in-right"
              href={html_url}
            >
              <Card.Header className="card-header">
                {name}
              </Card.Header>
              <Card.Meta>
                {language}
              </Card.Meta>
              <Card.Description className="card-content">
                {description}
              </Card.Description>
            </Card>

          ))}
        {loading && (
          <Icon name="spinner" size="huge" loading />
        )}
      </Card.Group>
      <p className="text text-footer">La liste des projets est automatiquement mise à jour grâce à l'API proposé par <strong>Github</strong><Icon name="github" /></p>
    </div>
  );
};

Project.propTypes = {

};

export default Project;
