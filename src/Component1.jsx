import React from 'react'
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { MdHtml } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";

const Component1 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center text-white px-6 py-12" style={{ backgroundAttachment: 'fixed' }}>

 
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center">
        My Technical Skills
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl font-medium text-center max-w-3xl leading-relaxed mb-12">
        Here are the technologies and tools I use to build modern, responsive, and high-performance web applications.
      </p>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">

       
        <div className="flex flex-col items-center justify-center w-[200px] h-[180px] sm:w-[220px] sm:h-[200px] bg-gray-800/70 backdrop-blur-md rounded-2xl border-t-4 border-blue-400 shadow-xl hover:scale-110 transition duration-300">
          <FaReact size={50} className="text-blue-400 mb-2" />
          <h1 className="text-2xl font-bold">React.js</h1>
          <p className="text-sm mt-2 text-gray-300 text-center px-2">
            Building dynamic and interactive user interfaces
          </p>
        </div>

     
        <div className="flex flex-col items-center justify-center w-[200px] h-[180px] sm:w-[220px] sm:h-[200px] bg-gray-800/70 backdrop-blur-md rounded-2xl border-t-4 border-orange-400 shadow-xl hover:scale-110 transition duration-300">
          <FaJava size={50} className="text-orange-400 mb-2" />
          <h1 className="text-2xl font-bold">Java</h1>
          <p className="text-sm mt-2 text-gray-300 text-center px-2">
            Object-oriented programming & backend development
          </p>
        </div>

       
        <div className="flex flex-col items-center justify-center w-[200px] h-[180px] sm:w-[220px] sm:h-[200px] bg-gray-800/70 backdrop-blur-md rounded-2xl border-t-4 border-pink-400 shadow-xl hover:scale-110 transition duration-300">
          <MdHtml size={50} className="text-pink-400 mb-2" />
          <h1 className="text-2xl font-bold">HTML5</h1>
          <p className="text-sm mt-2 text-gray-300 text-center px-2">
            Structuring clean and semantic web pages
          </p>
        </div>

       
        <div className="flex flex-col items-center justify-center w-[200px] h-[180px] sm:w-[220px] sm:h-[200px] bg-gray-800/70 backdrop-blur-md rounded-2xl border-t-4 border-yellow-400 shadow-xl hover:scale-110 transition duration-300">
          <IoLogoJavascript size={50} className="text-yellow-400 mb-2" />
          <h1 className="text-2xl font-bold">JavaScript</h1>
          <p className="text-sm mt-2 text-gray-300 text-center px-2">
            Adding logic, interactivity & dynamic features
          </p>
        </div>

        
        <div className="flex flex-col items-center justify-center w-[200px] h-[180px] sm:w-[220px] sm:h-[200px] bg-gray-800/70 backdrop-blur-md rounded-2xl border-t-4 border-cyan-400 shadow-xl hover:scale-110 transition duration-300">
          <RiTailwindCssFill size={50} className="text-cyan-400 mb-2" />
          <h1 className="text-2xl font-bold">Tailwind CSS</h1>
          <p className="text-sm mt-2 text-gray-300 text-center px-2">
            Designing responsive and modern UI layouts
          </p>
        </div>

      </div>
    </div>
  )
}

export default Component1
