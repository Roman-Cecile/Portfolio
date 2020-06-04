import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { numberProjectByLanguage } from 'src/selector';

import { Card, Message, Icon } from 'semantic-ui-react';
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
        className={`${navbarIsActive ? 'titleProject titleProject-open title-sub' : 'titleProject title-sub '}`}
      >
        Mes projets
      </h1>
      <div className="listNbProject">
        <p onClick={(evt) => handleClick(evt, 'Ruby')} className="projectRails">Afficher les projets Ruby on Rails</p>
        <p onClick={(evt) => handleClick(evt, 'JavaScript')} className="projectJS">Afficher les projets Javascript</p>
        {/* <li>
          Autres:
          {
            repos.length
            - (numberProjectByLanguage(repos, 'Ruby').length
            + numberProjectByLanguage(repos, 'JavaScript').length)
          }
        </li> */}
      </div>
      <Card.Group className={`${navbarIsActive ? 'card-group card-group--open' : 'card-group'}`}>
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
              className="card"
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
        <Message icon>
          <Icon name="circle notched" loading />
          <Message.Content>
            <Message.Header>Veuillez patientez</Message.Header>
            Nous récupérons les projets.
          </Message.Content>
        </Message>
        )}
      </Card.Group>
      <p className="text text-footer">La liste des projets est automatiquement mise à jour grâce à l'API proposé par <strong>Github</strong><Icon name="github" /></p>
    </div>
  );
};

Project.propTypes = {

};

export default Project;
