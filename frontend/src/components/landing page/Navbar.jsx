import React from 'react'
import { Link } from 'react-router-dom'
// import '../index.css'
import LightningRing from '../Images/lightning-ring-light.svg'

function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 px-4 sm:px-8 md:px-16 lg:px-36 fixed top-0 left-0 right-0 z-10 w-full bg-gradient-to-br from-gray-900 to-gray-900 overflow-hidden">
      <div className="flex items-center">

        <h2 className="text-xl sm:text-2xl cursor-pointer text-gray-200">Code Vault</h2>
        <img src={LightningRing} alt="Lightning Ring" className="w-8 h-8 ml-2 text-white filter invert" />
      </div>

      <div className="block ">
      <Link to="/signup">
        <button className="px-4 py-2.5 border-2 border-blue-600 text-white text-sm sm:text-md rounded-lg cursor-pointer shadow-md flex items-center hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
          Sign up 
          <svg className="h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
          </svg>
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
