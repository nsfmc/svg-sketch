import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers';

const state = {
  layers:[
    {type:'rect', name: 'foo', width: 20, height: 20, x:0, y: 0, id: 1},
    {type:'circle', name: 'foo', r: 10, cx:20, cy: 20, id: 2},
  ]
}
const store = createStore(app, state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
