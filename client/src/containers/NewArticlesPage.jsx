import React, { PropTypes } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AlertContainer from 'react-alert';
import SearchForm from '../components/SearchForm.jsx';
import NewArticlesList from '../components/NewArticlesList.jsx';
import * as actions from '../actions';

const socket = io();
class NewArticlesPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
    
    this.showAlert.bind(this);
  }

  fetchData() {
    const { fetchNewArticles} = this.props;
    fetchNewArticles();
  }

  showAlert(msg) {
    this.msg.show(msg, {
      time: 1000,
      type: 'success',
    })
  }
  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    let self = this;
    socket.emit('subscribe', 'test');
    socket.on('message', function (data) {
      console.log("here we go>>>>")
      console.log(data);
      self.showAlert(data.message);
    });
  }

  componentWillUnmount() {
    socket.emit('unsubscribe', 'test');
  }

  /**
   * Render the component.
   */
  
  render() {
    return (
      <div>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
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
      dispatch(actions.favAnArticle(article));
      socket.emit('send', { room: 'test', message: 'test' });
    }
  }
}

NewArticlesPage = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewArticlesPage));

export default NewArticlesPage;
