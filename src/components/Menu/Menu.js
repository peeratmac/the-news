import React from 'react';
import LocalImage from '../../icons/local.svg';
import TechnologyImage from '../../icons/technology.svg';
import EntertainmentImage from '../../icons/entertainment.svg';
import ScienceImage from '../../icons/science.svg';
import HealthImage from '../../icons/health.svg';
import './Menu.css';
import PropTypes from 'prop-types';

const Menu = ({ changeNewsCategory, newsState }) => {
  const { local, technology, entertainment, science, health } = newsState;
  return (
    <nav>
      <h1 className='the-news-logo'>
        the <span>news</span>
      </h1>
      <div className='menu-side-bar'>
        <h2 onClick={() => changeNewsCategory(local)}>
          <img className='icon-image' src={LocalImage} alt='icon' />{' '}
          <p className='category-label'>Local News</p>
        </h2>
        <h2 onClick={() => changeNewsCategory(technology)}>
          <img className='icon-image' src={TechnologyImage} alt='icon' />
          <p className='category-label'>Technology</p>
        </h2>
        <h2 onClick={() => changeNewsCategory(entertainment)}>
          <img className='icon-image' src={EntertainmentImage} alt='icon' />
          <p className='category-label'>Entertainment</p>
        </h2>
        <h2 onClick={() => changeNewsCategory(science)}>
          <img className='icon-image' src={ScienceImage} alt='icon' />
          <p className='category-label'>Science</p>
        </h2>
        <h2 onClick={() => changeNewsCategory(health)}>
          <img className='icon-image' src={HealthImage} alt='icon' />
          <p className='category-label'>Health</p>
        </h2>
      </div>
    </nav>
  );
};

export default Menu;

Menu.propTypes = {
  changeNewsCategory: PropTypes.func.isRequired,
  newsState: PropTypes.object.isRequired
};
