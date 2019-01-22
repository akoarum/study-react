import * as request from '../../request'
import * as types from '../types'

export const getPosts = async (options: {} = { posts_per_page: 8 }) => {
  const posts = await request.getPosts(options)

  return {
    type: types.GET_POSTS,
    posts: posts.data
  }
}