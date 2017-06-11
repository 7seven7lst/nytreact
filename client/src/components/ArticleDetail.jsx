import React, { PropTypes } from 'react';

const ArticleDetail = ({ article }) => (
  <div>
    <div>{article.web_url}</div>
    <div>{article.snippet}</div>
  </div>
);

export default ArticleDetail;
