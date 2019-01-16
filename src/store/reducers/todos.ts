import * as types from '../types'

const todos = (state: Array<any> = [], action: any) => {
  switch (action.type) {
    case types.ADD_TODO:
      return state.concat({
        id: action.id,
        text: action.text,
        completed: false
      })
    case types.TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos