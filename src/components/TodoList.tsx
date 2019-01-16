import * as React from 'react'
import Todo from './Todo'

interface Prop {
  todos: { id: number, completed: boolean, text: string }[],
  toggleTodo: (id: number) => void
}

const TodoList: React.SFC<Prop> = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))
    }
  </ul>
)

export default TodoList