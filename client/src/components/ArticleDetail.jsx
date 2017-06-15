import React, { PropTypes } from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import AvatarImg from '../assets/react.png';
import { get } from 'lodash';

const ArticleDetail = ({ article }) => (
  <div>
    <Card>
        <CardTitle
          avatar={AvatarImg}
          title={get(article,'headline.main', '')}
          subtitle={article.source}
        />
        <CardMedia
          aspectRatio="wide"
          image="https://placeimg.com/800/450/random"
        />
        <CardTitle
          title={get(article,'headline.main','')}
          subtitle={get(article, 'web_url', '')}
        />
        <CardText>{article.snippet}</CardText>
      </Card>
  </div>
);

export default ArticleDetail;
