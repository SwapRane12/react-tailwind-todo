import React from 'react'

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className="my-2">
      <div className=" dark:bg-gray-800 dark:shadow-none dark:border-none flex flex-row justify-between items-center border border-blue-500 rounded-full pl-4 pr-2 py-2 shadow-md shadow-blue-500/50">
        <div className="text-gray-700 dark:text-white ">
          {todo.title}
        </div>
        <button
          onClick={() => {
            deleteTodo(todo.id)
          }}
          className=" justify-self-end py-2 px-4 bg-red-500 text-white text-sm font-semibold rounded-full shadow-md shadow-red-500/50 focus:outline-none"
        >Delete</button>
      </div>
    </div>
  )
}

export default Todo
