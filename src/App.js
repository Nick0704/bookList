import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Hello from './components/Hello';

injectTapEventPlugin();

const books = (state = {}, action) => {
  if (action.type === 'ADD_BOOK' ) {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
};

const store = createStore(books);

store.dispatch({type: 'ADD_BOOK', payload: {
  books: [
    {
      Author: 'John Boyne',
      Title: 'The Heart\'s Invisible Furies: A Novel',
      Date: '12.10.2017'
    }
  ]
}});

console.log(store.getState());
ReactDOM.render(
<MuiThemeProvider>
  <Hello />
</MuiThemeProvider>,
document.getElementById('root')
);