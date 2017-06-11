import React, { PropTypes } from 'react';
import { map } from 'lodash';

const FavArticlesList = ({ articles }) => (
  <ul className="container">
    { map(articles, article => 
      (
        <li key={article._id}>{article.snippet}</li>
      )
    )}
  </ul>
);

export default FavArticlesList;
