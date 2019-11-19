import React from 'react';
import './Menu.css';

const Menu = ({ changeNewsCategory, newsState }) => {
  const { local, technology, entertainment, science, health } = newsState;
  return (
    <nav>
      <h1 className='the-news-logo'>
        The <span>News</span>
      </h1>
      <div className='menu-side-bar'>
        <h2 onClick={() => changeNewsCategory(local)}>Local News</h2>
        <h2 onClick={() => changeNewsCategory(technology)}>Technology</h2>
        <h2 onClick={() => changeNewsCategory(entertainment)}>Entertainment</h2>
        <h2 onClick={() => changeNewsCategory(science)}>Science</h2>
        <h2 onClick={() => changeNewsCategory(health)}>Health</h2>
      </div>
    </nav>
  );
};

export default Menu;
