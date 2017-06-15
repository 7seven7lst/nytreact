import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import theme from './assets/react-toolbox/theme.js';
import './assets/react-toolbox/theme.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';
import configureStore from './configureStore';

const store = configureStore();

ReactDom.render((
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={browserHistory} routes={routes} />
    </ThemeProvider>
  </Provider>
), document.getElementById('root'));
