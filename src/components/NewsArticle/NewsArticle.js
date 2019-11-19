import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ description, headline, img, url }) => {
  return (
    <div>
      <h1>{headline}</h1>
      <img src={img} />
      <p>{description}</p>
      <p>{url}</p>
    </div>
  );
};

export default NewsArticle;
