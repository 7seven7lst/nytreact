import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SearchForm from '../components/SearchForm.jsx';
import NewArticlesList from '../components/NewArticlesList.jsx';
import * as actions from '../actions';

class NewArticlesPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);
  }

  fetchData() {
    const { fetchNewArticles} = this.props;
    fetchNewArticles();
  }
  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <SearchForm onSubmit={this.props.fetchNewArticles} onChange={this.props.updateQuery}/>
        <NewArticlesList articles={this.props.newArticles} addToFavorite={this.props.addToFavorite}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.query,
    newArticles: state.newArticles
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNewArticles: () => {
      dispatch(actions.fetchNewArticles());
    }, 
    updateQuery: (name, value) => {
      dispatch(actions.updateQuery(name,value))
    },
    addToFavorite: (article) => {
      dispatch(actions.favAnArticle(article))
    }
  }
}

NewArticlesPage = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewArticlesPage));

export default NewArticlesPage;
