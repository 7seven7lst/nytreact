const currentArticleDetail = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLE_DETAIL_SUCCESS':
      console.log("action is >>>>", action);
      return action.result;
    default: 
      return state;
  }
};

export default currentArticleDetail;
