import React from 'react'
import Switch from './components/switch'

const Navbar = ({ toggleDarkMode }) => {
  return (
    <div className="sticky h-16 px-4  border-b dark:bg-gray-700/50 dark:border-none dark:shadow-none  border-blue-200 shadow-lg shadow-blue-200/50  justify-center flex flex-row items-center top-0 z-40 w-full backdrop-blur-sm flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 bg-white/50 supports-backdrop-blur:bg-white/60">


      <div className="max-w-screen-lg mx-4  flex flex-row flex-grow justify-between" >
        <div className="text-2xl text-gray-700 dark:text-white capitalize" >todo app</div>
        <div className=" ml-8 flex flex-row items-center ">
          <span className="mr-2 dark:text-white  " >Dark</span><Switch onToggle={() => toggleDarkMode()} />
        </div>


      </div>
    </div>
  )
}

export default Navbar
