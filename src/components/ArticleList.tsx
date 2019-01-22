import * as React from 'react'
import { item } from '../model'
import ArticleItem from './ArticleItem'

interface prop {
  items: Array<item>
}

const ArticleList: React.SFC<prop> = ({ items }) => {
  return (
    <ul>
      {
        items.map(item => <ArticleItem key={item.id} {...item} />)
      }
    </ul>
  )
}

export default ArticleList