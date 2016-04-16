import React, { PropTypes } from 'react'

 const Todo = ({ text, completed, onClick }) => (
   <li
     onClick = {onClick}
     style = {
       {textDecoration: completed ? 'line-through' : 'none'}
     }
     >
     {text}
   </li>
)

 Todo.PropTypes = {
   text: PropTypes.string.isRequired,
   completed: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired
 }

export default Todo
