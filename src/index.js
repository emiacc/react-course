import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import redcers from './reducers';

ReactDOM.render(
  <Provider store={createStore(redcers)}>
    <App />
  </Provider>, 
  document.getElementById('root')
);