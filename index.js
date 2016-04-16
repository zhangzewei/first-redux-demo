import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ClickDemo from './app/click';
import click from './reducer';
import Todos from './components/TodoApp';
import todoApp from './reducer/TodoReducer';

const store = createStore(click);
const storeTodo = createStore(todoApp);

const myCount = document.getElementById('mycount');
const myTodo = document.getElementById('mytodo');

function renderMyClick() {
  ReactDOM.render(
    <ClickDemo
      value = {store.getState()}
      beClicked = { () => store.dispatch({ type : 'beclicked'})}
      beClickedThird = { () => store.dispatch({ type : 'beclickedthird'})}
      clearAll = { () => store.dispatch({type : 'clear'}) }
      />,
    myCount
  )
};
function renderMyTodo() {
  ReactDOM.render(
    <Provider store={storeTodo}>
      <Todos />
    </Provider>,
    myTodo
  )
};
renderMyClick();
renderMyTodo();
store.subscribe(renderMyClick);
