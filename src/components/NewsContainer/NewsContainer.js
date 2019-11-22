import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';
import PropTypes from 'prop-types';

const NewsContainer = ({ articles }) => {
  return articles.map(article => (
    <NewsArticle
      key={article.id}
      headline={article.headline}
      image={article.img}
      description={article.description}
      url={article.url}
    />
  ));
};

export default NewsContainer;

NewsContainer.propTypes = {
  articles: PropTypes.array.isRequired
};
