import * as React from 'react'

interface prop {
  title: string,
  url: string,
  created_at: string
}

const ArticleItem: React.SFC<prop> = ({ title, url, created_at }) => (
  <li>
    <a href={url} target="_blank">
      <strong className="title">{title}</strong>
      <time>{created_at}</time>
    </a>
  </li>
)

export default ArticleItem