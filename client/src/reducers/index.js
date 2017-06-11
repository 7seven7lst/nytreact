import { combineReducers } from 'redux';
import newArticles from './newArticles';
import favedArticles from './favedArticles';
import query from './query';

const nytReact = combineReducers({
  newArticles,
  favedArticles,
  query,
});

export default nytReact;
