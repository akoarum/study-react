import * as types from '../types'
import { Post } from '../../models'

const posts = (state: Array<Post> = [], action: {[index: string]: any}) => {
  switch (action.type) {
    case types.GET_POSTS:
      return state.concat(action.posts)
    default:
      return state
  }
}

export default posts