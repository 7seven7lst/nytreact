import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import AvatarImg from '../assets/react.png';
import { map } from 'lodash';

const FavArticlesList = ({ articles }) => (
  <section>
    <List selectable ripple>
      <ListSubHeader caption='Here are your favorite articles' />
      { map(articles, article => 
        (
          <Link key={article._id} to={{ pathname: '/article_detail', query: { article_id: article._id } }}>
            <ListItem
              key={article._id}
              avatar={AvatarImg}
              caption={article.headline.print_headline}
              legend={article.snippet}
              rightIcon='star'
            />
          </Link>
        )
      )}
    </List>
  </section>
);

export default FavArticlesList;
