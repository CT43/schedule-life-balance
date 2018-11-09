import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
document.getElementById('root')
)
