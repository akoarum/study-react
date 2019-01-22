import * as React from 'react'

interface Prop {
  title: string
}

const ItemTitle: React.SFC<Prop> = ({ title }) => (
  <strong className="title">{title}</strong>
)

export default ItemTitle