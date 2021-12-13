import React from 'react'

const Navbar = () => {
  return (
    <div className=" border-b dark:bg-gray-700 dark:border-none dark:shadow-none  border-blue-200 shadow-lg shadow-blue-200/50 h-12 flex items-center justify-center ">
      <div className="max-w-screen-lg  flex flex-row flex-grow justify-center" >
        <div className="justify-self-center text-2xl text-gray-700 dark:text-white capitalize" >todo app</div>
        {/* <div className="justify-end justify-self-end" >Dark</div> */}
        {/* <div className="justify-self-end h-4 w-4" >
          <label htmlFor="toggle-example" className="flex items-center cursor-pointer relative mb-4">
            <input type="checkbox" id="toggle-example" className="sr-only" />
            <div className="toggle-bg bg-gray-200 border border-gray-200 h-6 w-11 rounded-full dark:bg-gray-700 dark:border-gray-600"></div>
            <span className="ml-3 text-gray-900 text-sm font-medium dark:text-gray-300">Toggle me</span>
          </label>
        </div> */}

      </div>
    </div>
  )
}

export default Navbar
