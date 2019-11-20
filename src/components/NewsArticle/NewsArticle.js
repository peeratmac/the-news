import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ description, headline, image, url }) => {
  return (
    <div className='news-article'>
      <a href={url}>
        <h3>{headline}</h3>
      </a>
      <img src={image} alt={headline} />
      <p className='description-text'>{description}</p>
      <a href={url}>
        <h2 className='link-to-article'>Link to Article</h2>
      </a>
    </div>
  );
};

export default NewsArticle;
