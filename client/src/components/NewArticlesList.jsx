import React, { PropTypes } from 'react';
import { map } from 'lodash';

const NewArticlesList = ({ articles, addToFavorite }) => (
  <ul className="container">
    { map(articles, article => 
      (
        <li key={article._id} onClick={()=>{addToFavorite(article)}}>{article.snippet}</li>
      )
    )}
  </ul>
);

export default NewArticlesList;
