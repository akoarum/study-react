import * as types from '../types'
import { item } from '../../model'

const items = (state: Array<item> = [], action: any) => {
  switch (action.type) {
    case types.GET_ITEMS:
      return state.concat(action.items)
    default:
      return state
  }
}

export default items