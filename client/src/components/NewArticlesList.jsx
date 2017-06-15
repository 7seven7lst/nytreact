import React, { PropTypes } from 'react';
import { map } from 'lodash';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import AvatarImg from '../assets/react.png';


const NewArticlesList = ({ articles, addToFavorite }) => (
  <section>
    <List selectable ripple>
      <ListSubHeader caption='Here are the articles' />
      { map(articles, article => 
        (
          <ListItem
            key={article._id}
            avatar={AvatarImg}
            caption={article.headline.print_headline}
            legend={article.snippet}
            rightIcon='star'
            onClick={()=>{addToFavorite(article)}}
          />
        )
      )}
    </List>
  </section>
);

export default NewArticlesList;
