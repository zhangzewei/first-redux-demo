const todo = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return {
        index: action.index,
        text: action.text,
        completed: false
      }
    case 'COMPLETE_TODO':
      if(state.index == action.index){
        console.log(444);
        return Object.assign(
          {},
          state,
          {completed: !state.completed}
        )
      }else{
        console.log(555);
        return state
      }
      default:
        return state
  }
}

const todos = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'COMPLETE_TODO':
      return state.map(t =>
        todo(t, action)
      )
      default:
        return state
  }
}

export default todos
