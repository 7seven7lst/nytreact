import {cloneDeep, remove} from 'lodash';

const newArticles = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NEW_ARTICLES_SUCCESS':
      return action.result;
    case 'FAVORITE_NEW_ARTICLES_SUCCESS':
      let filteredState = remove(state, a => a.web_url !== action.article.web_url);
      return filteredState;
    default: 
      return state;
  }
};

export default newArticles;
