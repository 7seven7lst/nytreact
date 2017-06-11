import * as api from '../api';

export const updateQuery = (name, value) => (dispatch, getState) => 
  dispatch({
    type: 'UPDATE_QUERY_SUCCESS',
    name,
    value,
  });

export const fetchNewArticles = () => {
  return async (dispatch, getState) => {
    const { query } = getState();
    try {
      let response = await api.fetchNewArticles(query);
      console.log("response>>>", response);
      dispatch({
        type: 'FETCH_NEW_ARTICLES_SUCCESS',
        result: response,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_NEW_ARTICLES_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    }
  }
};

export const favAnArticle = (article) => {
  return async (dispatch, getState) => {
    try {
      let response = await api.favAnArticle(article);
      dispatch({
        type: 'FAVORITE_NEW_ARTICLES_SUCCESS',
        article: article
      });
    } catch (error) {
      dispatch({
        type: 'FAVORITE_NEW_ARTICLES_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    }
  }
};

export const getAllFavArticles = () => {
  return async (dispatch, getState) => {
    try {
      let response = await api.getFavArticles();
      dispatch({
        type: 'FETCH_FAVORITE_ARTICLES_SUCCESS',
        result: response
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_FAVORITE_ARTICLES_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    }
  }
}

export const getArticleDetail = (article_id) => {
  console.log("here in action>>>")
  return async (dispatch, getState) => {
    try {
      let response = await api.getArticleDetail(article_id);
      console.log("response is >>>>", response);
      dispatch({
        type: 'FETCH_ARTICLE_DETAIL_SUCCESS',
        result: response
      });
    } catch (error) {
      console.log('error is >>>', error);
      dispatch({
        type: 'FETCH_ARTICLE_DETAIL_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    }
  }
}
