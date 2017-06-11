const favedArticles = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FAVORITE_ARTICLES_SUCCESS':
      return action.result;
    default: 
      return state;
  }
};

export default favedArticles;
