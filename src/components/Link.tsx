import * as React from 'react'

interface Prop {
  active: boolean,
  children: Node,
  onClick: () => void
}

const Link: React.SFC<Prop> = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{ marginLeft: '4px' }}>
    {children}
  </button>
)

export default Link