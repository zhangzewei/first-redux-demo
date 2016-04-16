import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onclickTodo }) => (
  <ul>
    {
      todos.map( todo =>
        <Todo key = {todo.index}
          {...todo}
          onClick = {() => {
            console.log(123);
            onclickTodo(todo.index)
          }}
        />
      )
    }
  </ul>
)

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onclickTodo: PropTypes.func.isRequired
}

export default TodoList
