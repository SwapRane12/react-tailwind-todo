import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('')
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addTodo({ title: input, id: uuidv4() })
          setInput("")
        }}

        className="border dark:bg-gray-800 dark:border-none dark:shadow-none  flex flex-row justify-between border-blue-500 rounded-full pl-4 pr-2 py-2 shadow-lg shadow-blue-500/50">
        <input
          className="outline-none bg-transparent dark:text-white "
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="add Todo"
        />
        <button
          type="submit"


          className=" dark:shadow-none py-2 px-4 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-500/50 focus:outline-none" >Add</button>
      </form>
    </div>
  )
}

export default TodoForm
