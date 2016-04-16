import { connect } from 'react-redux'
import { completeTodo } from '../action/TodoAction'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: state
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log(1);
  return {
    onclickTodo: (index) => {
      console.log(333);
      dispatch(completeTodo(index))
    }
  }
}
const ShowTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ShowTodoList
