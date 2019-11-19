import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

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
