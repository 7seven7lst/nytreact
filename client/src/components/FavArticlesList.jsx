import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { map } from 'lodash';

const FavArticlesList = ({ articles }) => (
  <ul className="container">
    { map(articles, article => 
      (
        <Link key={article._id} to={{ pathname: '/article_detail', query: { article_id: article._id } }}>
          <li>{article.snippet}</li>
        </Link>
      )
    )}
  </ul>
);

export default FavArticlesList;
