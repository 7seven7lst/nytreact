const newArticles = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NEW_ARTICLES_SUCCESS':
      return action.result;
    default: 
      return state;
  }
};

export default newArticles;
