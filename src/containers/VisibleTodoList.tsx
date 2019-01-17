import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../store/actions'
import TodoList from '../components/TodoList'

interface todo {
  id: number,
  completed: boolean,
  text: string
}

const getVisibleTodos = (todos: Array<todo>, filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
}

const mapStateToProps = (state: { [index: string]: any }) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: any) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
