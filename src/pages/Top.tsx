import React from 'react'
import { Post } from '../models'
import PostList from '../components/PostList'

interface Props {
  getPosts: () => void,
  posts: Array<Post>
}

export default class Top extends React.Component<Props> {
  constructor(props: any) {
    super(props)
  }

  componentWillMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <PostList posts={this.props.posts} />
    )
  }
}