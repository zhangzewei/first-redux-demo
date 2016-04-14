import React from 'react'
// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'

const todoApp = () => (
  <div>
    <form
        onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        //dispatch(addTodo(input.value))
        input.value = ''}}
        >
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
  </div>
)

export default todoApp
