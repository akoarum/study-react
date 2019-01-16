import * as React from 'react'

interface Prop {
  onClick: () => void,
  completed: boolean,
  text: string
}

const Todo: React.SFC<Prop> = ({ onClick, completed, text }) => (
  <li onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}>
    {text}
  </li>
)

export default Todo