import * as types from '../types'
import { VisibilityFilters } from '../actions'

const visibilityFilter = (state: string = VisibilityFilters.SHOW_ALL, action: any) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter