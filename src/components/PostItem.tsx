import * as React from 'react'
import { Post } from '../models'
import ItemTitle from './atoms/ItemTitle'

const PostItem: React.SFC<Post> = (post: Post) => (
  <li>
    <a href={post.url}>
      <div className="text">
        <ItemTitle title={post.title} />
        <p className="lead"><b>{post.lead}</b></p>
      </div>
      <div className="img">
        <img src={post.thumbnail.url} width={post.thumbnail.width} height={post.thumbnail.height} alt="" />
      </div>
      <ul className="meta">
        <li><time>{post.date}</time></li>
        <li><i>{post.category[0].name}</i></li>
      </ul>
    </a>
  </li>
)

export default PostItem