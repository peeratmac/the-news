import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ description, headline, image, url }) => {
  return (
    <div className='news-article'>
      <h3>{headline}</h3>
      <img src={image} alt={headline} />
      <p>{description}</p>
      <a href={url}>Link to Article</a>
    </div>
  );
};

export default NewsArticle;
