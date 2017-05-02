import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Container from './Container';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Container/>
  </Provider>,
  document.getElementById('root')
);
