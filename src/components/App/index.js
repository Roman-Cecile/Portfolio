// == Import npm
import React from 'react';
import Particles from 'react-tsparticles';

// == Import composant
import Navbar from 'src/components/Navbar';
import Title from 'src/components/Title';
// import TextHome from 'src/components/TextHome';

// == Import containers
import TextHome from 'src/containers/TextHome';

// == Import fichiers
import data from '../../assets/tsparticles.json';
import reactLogo from './react-logo.svg';
import './styles.scss';


// == Composant
const App = ({ rootIsActive }) => {
  // console.log(rootIsActive)
  return (
    <>
      {rootIsActive
      && (
      <>
        <Navbar />
        <Title />
        <TextHome />
      </>
      )}
      <Particles className="particles" params={data} />
    </>
  );
};

// == Export
export default App;
