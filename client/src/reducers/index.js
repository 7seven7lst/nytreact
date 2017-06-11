import { combineReducers } from 'redux';
import newArticles from './newArticles';
import favedArticles from './favedArticles';
import currentArticleDetail from './currentArticleDetail';
import query from './query';

const nytReact = combineReducers({
  newArticles,
  favedArticles,
  query,
  currentArticleDetail,
});

export default nytReact;
