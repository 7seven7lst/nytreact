import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ArticleDetail from '../components/ArticleDetail.jsx';
import * as actions from '../actions';

class FavArticleDetailPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);
  }

  fetchData() {
    const { fetchArticleDetail, location} = this.props;
    console.log(location.query.article_id, fetchArticleDetail);
    fetchArticleDetail(location.query.article_id);
  }
  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    this.fetchData();
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <ArticleDetail article={this.props.article} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.currentArticleDetail
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchArticleDetail: (article_id) => {
      dispatch(actions.getArticleDetail(article_id));
    }
  }
}

FavArticleDetailPage = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FavArticleDetailPage));

export default FavArticleDetailPage;
