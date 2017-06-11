import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';
import configureStore from './configureStore';

const store = configureStore();

ReactDom.render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('root'));
