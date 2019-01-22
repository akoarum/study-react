import * as React from 'react'
import { Post } from '../models'
import PostItem from './PostItem'

interface Prop {
  posts: Array<Post>
}

const PostList: React.SFC<Prop> = ({ posts }) => (
  <ul>
    { posts.map(post => <PostItem key={post.id} {...post} />) }
  </ul>
)

export default PostList