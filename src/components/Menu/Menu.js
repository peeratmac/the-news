import React from 'react';

import LocalImage from '../../icons/local.svg';
import TechnologyImage from '../../icons/technology.svg';
import EntertainmentImage from '../../icons/entertainment.svg';
import ScienceImage from '../../icons/science.svg';
import HealthImage from '../../icons/health.svg';

import './Menu.css';

const Menu = ({ changeNewsCategory, newsState }) => {
  const { local, technology, entertainment, science, health } = newsState;
  return (
    <nav>
      <h1 className='the-news-logo'>
        the <span>news</span>
      </h1>
      <div className='menu-side-bar'>
        <h2 onClick={() => changeNewsCategory(local)}>
          <img className='icon-image' src={LocalImage} /> <h3>Local News</h3>
        </h2>
        <h2 onClick={() => changeNewsCategory(technology)}>
          <img className='icon-image' src={TechnologyImage} />
          <h3>Technology</h3>
        </h2>
        <h2 onClick={() => changeNewsCategory(entertainment)}>
          <img className='icon-image' src={EntertainmentImage} />
          <h3>Entertainment</h3>
        </h2>
        <h2 onClick={() => changeNewsCategory(science)}>
          <img className='icon-image' src={ScienceImage} />
          <h3>Science</h3>
        </h2>
        <h2 onClick={() => changeNewsCategory(health)}>
          <img className='icon-image' src={HealthImage} />
          <h3>Health</h3>
        </h2>
      </div>
    </nav>
  );
};

export default Menu;
