import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <nav>
      <h1>
        The <span>News</span>
      </h1>
      <div className='menu-side-bar'>
        <h2>Local News</h2>
        <h2>Technology</h2>
        <h2>Entertainment</h2>
        <h2>Science</h2>
        <h2>Health</h2>
      </div>
    </nav>
  );
};

export default Menu;
