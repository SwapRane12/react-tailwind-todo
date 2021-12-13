import React from 'react'
import Switch from './components/switch'

const Navbar = ({ toggleDarkMode }) => {
  return (
    <div className="px-4 border-b dark:bg-gray-700 dark:border-none dark:shadow-none  border-blue-200 shadow-lg shadow-blue-200/50 h-12 flex items-center justify-center ">
      <div className="max-w-screen-lg  flex flex-row flex-grow justify-between" >
        <div className="text-2xl text-gray-700 dark:text-white capitalize" >todo app</div>
        <div className=" ml-8 flex flex-row items-center ">
          <span className="mr-2 dark:text-white  " >Dark</span><Switch onToggle={() => toggleDarkMode()} />
        </div>

      </div>
    </div>
  )
}

export default Navbar
