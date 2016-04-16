let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    index: nextTodoId++,
    text
  }
}

// export const setVisibilityFilter = (filter) => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }
//
export const completeTodo = (index) => {
  return {
    type: 'COMPLETE_TODO',
    index
  }
}
