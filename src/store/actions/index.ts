import * as types from '../types'

let nextTodoId = 0

export const addTodo = (text: string) => ({
  type: types.ADD_TODO,
  id: nextTodoId++,
  text
})

export const toggleTodo = (id: number) => ({
  type: types.TOGGLE_TODO,
  id
})

export const setVisibilityFilter = (filter: string) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}