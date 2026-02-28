import React from 'react'
import { Link } from 'react-router-dom'
import nikkil from '/nikkil.jpg'

const Login = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${nikkil})` }}
    >
     
      <div className="w-[90%] max-w-sm sm:max-w-md md:max-w-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl text-white flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center drop-shadow-md">
          Welcome Back
        </h2>

       
        <div className="w-full mb-4">
          <label className="block text-sm sm:text-base font-medium mb-1 text-gray-100">
            Username
          </label>
          <input
            type="text"
            className="w-full border border-gray-300/50 bg-transparent text-white rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300 text-sm sm:text-base"
            placeholder="Enter your username"
          />
        </div>

    
        <div className="w-full mb-6">
          <label className="block text-sm sm:text-base font-medium mb-1 text-gray-100">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300/50 bg-transparent text-white rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300 text-sm sm:text-base"
            placeholder="Enter your password"
          />
        </div>

       
        <div className="flex justify-between w-full text-sm sm:text-base mb-6">
        <a  className="hover:text-blue-400 transition-colors duration-200">
           
          
            Create Account
          </a>
          <a
        
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Sign In?
          </a>
        </div>

       
        <button className="w-full py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-md transition-all duration-300 text-sm sm:text-base">
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
