import React from 'react'
import Todo from './todo'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="mt-8">
      {todos.map((todo, index) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />)}
    </div>
  )
}

export default TodoList
