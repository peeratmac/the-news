import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types';

const NewsArticle = ({ description, headline, image, url }) => {
  return (
    <div className='news-article'>
      <a className='headline' href={url}>
        <h3 className='headline'>{headline}</h3>
      </a>
      <img src={image} alt={headline} />
      <p className='description-text'>{description}</p>
      <a className='link' href={url}>
        <h2 className='link-to-article'>Link to Article</h2>
      </a>
    </div>
  );
};

export default NewsArticle;

NewsArticle.propTypes = {
  description: PropTypes.string,
  headline: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string
};
