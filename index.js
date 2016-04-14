import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import ClickName from './app/click'
//import Counter from './components/Counter'
import click from './reducer'

const store = createStore(click)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <ClickName
      value = {store.getState()}
      beClicked = { () => store.dispatch({ type : 'beclicked'})}
      />,
    rootEl
  )
}

render()
store.subscribe(render)
