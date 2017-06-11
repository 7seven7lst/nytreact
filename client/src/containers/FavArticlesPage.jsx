import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FavArticlesList from '../components/NewArticlesList.jsx';
import * as actions from '../actions';

class FavArticlesPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);
  }

  fetchData() {
    const { fetchFavArticles} = this.props;
    fetchFavArticles();
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
      <div>
        <FavArticlesList articles={this.props.favedArticles} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favedArticles: state.favedArticles
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFavArticles: () => {
      dispatch(actions.getAllFavArticles());
    }
  }
}

FavArticlesPage = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FavArticlesPage));

export default FavArticlesPage;
