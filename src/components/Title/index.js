import React from 'react';
import './style.scss';


const Title = ({ navbarIsActive }) => {
  return (
    <div className={`${navbarIsActive ? 'title title-open' : 'title '}`}>
      <h1 className="title-content tracking-in-expand">Roman Cécile</h1>
      <p className="title-sub title-focus-in">Front-end developer</p>
    </div>
  );
};

export default Title;
