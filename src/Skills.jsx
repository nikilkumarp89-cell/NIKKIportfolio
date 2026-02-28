import React from 'react'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <div  className="bg-gray-800 py-16 text-white  md:h-full  h-[400px]]" id="Skills">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <h2 id='block' className="text-3xl sm:text-4xl font-bold text-center mb-10">Skills</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          <div className="flex-1 w-full md:w-[600px]">
            <p id='block' className="text-base sm:text-lg mb-8 text-center md:text-left">
              I specialize in front-end development, building dynamic and responsive websites using modern technologies like React, Tailwind CSS, HTML, CSS, and JavaScript.
              I love creating smooth user interfaces and intuitive experiences that make the web more enjoyable and efficient for everyone.
            </p>

            
            <div className="space-y-5">
             
              <div className="flex items-center space-x-3">
                <label  id='block3' className="w-4/12 sm:w-3/12 md:w-2/12 text-sm sm:text-base transition">HTML & CSS</label>
                <div  id='block1' className="flex-1 transition bg-gray-700 rounded-full h-2.5">
                  <div  className="bg-gradient-to-r from-gray-500 to-blue-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>

              
              <div className="flex items-center space-x-3">
                <label id='block3' className="w-4/12 transition sm:w-3/12 md:w-2/12 text-sm sm:text-base">React.js</label>
                <div   id='block1'className="flex-1 transition bg-gray-700 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-gray-500 to-blue-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>

            
              <div className="flex items-center space-x-3">
                <label   className=" transition w-4/12 sm:w-3/12 md:w-2/12 text-sm sm:text-base">JavaScript</label>
                <div   className=" transition flex-1 bg-gray-700 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-gray-500 to-blue-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12"></div>
                </div>
              </div>
            </div>

            
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div>
                <h3    className="text-xl transition sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-blue-600">0+</h3>
                <p    className="text-sm transition sm:text-base">Years Experience</p>
              </div>

              <Link to="/Project">
                <div>
                  <h3  className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-blue-600">3</h3>
                  <p    className="text-sm sm:text-base">Projects</p>
                </div>
              </Link>

              <div>
                <h3   className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-blue-600">2026</h3>
                <p    className="text-sm sm:text-base">Passing Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
