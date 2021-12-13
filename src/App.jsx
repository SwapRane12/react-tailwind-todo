import React, { useState } from 'react'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import Navbar from './navbar'

export default function App() {
	const [darkMode, setDarkMode] = useState(false)

	function toggleDarkMode() {
		setDarkMode(!darkMode)
	}

	const [todos, settodos] = useState([])

	function addTodo(newTodo) {
		settodos(state => [...state, newTodo])
	}

	function deleteTodo(id) {
		settodos(state => state.filter(todo => todo.id !== id))
	}

	return (
		<div className={`${darkMode && "dark"}`}>
			<div className="min-h-screen w-screen dark:bg-gray-900" >
				<Navbar toggleDarkMode={toggleDarkMode} />
				<div className="flex flex-col justify-center items-center" >
					<div className="mt-10" >
						<TodoForm addTodo={addTodo} />
						<TodoList todos={todos} deleteTodo={deleteTodo} />
					</div>
				</div>
			</div>
		</div>
	)
}

