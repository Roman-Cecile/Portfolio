// == Import npm
import React from 'react';
import Particles from 'react-tsparticles';
import { Route, Switch } from 'react-router-dom';

// == Import composant
import Project from 'src/components/Project';


// == Import containers
import Navbar from 'src/containers/Navbar';
import Title from 'src/containers/Title';
import TextHome from 'src/containers/TextHome';
import ButtonApp from 'src/containers/ButtonApp';

// == Import fichiers
import data from '../../assets/tsparticles.json';
import reactLogo from './react-logo.svg';
import './styles.scss';


// == Composant
const App = ({ rootIsActive }) =>
  // console.log(rootIsActive)
  (
    <>
      {rootIsActive
        ? (
          <>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Title />
                <TextHome />
              </Route>
              <Route exact path="/project">
                <Project />
              </Route>
            </Switch>
          </>
        ) : <ButtonApp />}
      <Particles className="particles" params={data} />
    </>
  )
;

// == Export
export default App;
