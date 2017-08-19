import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as types from './constants/actionTypes';
import App from './App'

const initialState = [
  {
    title: "The Heart's Invisible Furies: A Novel",
    author: 'John Boyne',
    date: '17.08.2017'
  },
  {
    title: 'Stay with Me: A novel',
    author: 'Ayobami Adebayo',
    date: '17.08.2017'
  },
  {
    title: 'Mrs. Fletcher: A Novel',
    author: 'Tom Perrotta',
    date: '17.08.2017'
  },
  {
    title: 'Rabbit: The Autobiography of Ms. Pat',
    author: 'Patricia Williams, Jeannine Amber',
    date: '17.08.2017'
  }
];


function books(state = initialState, action) {
  if (action.type === types.ADD_BOOK) {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}

const store = createStore(books, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({ type: types.ADD_BOOK, payload: {
    title: 'The Heart\'s Invisible Furies: A Novel',
    author: 'John Boyne',
    date: '17.08.2017'
}});
store.dispatch({ type: types.ADD_BOOK, payload: {
  title: 'The Heart\'s Invisible Furies: A Novel',
  author: 'John Boyne',
  date: '17.08.2017'
}});
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
document.getElementById('root')
);