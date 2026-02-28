import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
  const projects = [
    {
      title: "Portfolio Project",
      description: "A simple personal portfolio showcasing my skills and projects.",
      link: "/Potpolio",
    },
    {
      title: "Traffic Project",
      description: "Created a component-based traffic light simulator using React Managed UI state transitions using hooks.",
      link: "/Traffic",
    },
    {
      title: "Count Project",
      description: "Implemented multiple dynamic counters using React useState hook with Increase/Decrease controls..",
      link: "/Random",
    },
    
  ]

  return (
    <div id='Projects' className="flex flex-col bg-gray-800  text-white px-4 sm:px-8 lg:px-16">
     
      <h1 id="block" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mt-10 sm:mt-16">
        Project Details
      </h1>
      <p id="block" className="text-center text-gray-300 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
        Explore some of my recent projects that highlight my skills in React, UI design, and interactive development.
      </p>

    
      <div id="block" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-12 mb-20 place-items-center">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="w-full sm:w-[280px] md:w-[320px] lg:w-[340px] bg-gray-700/40 rounded-3xl border border-gray-600/40 shadow-lg hover:shadow-2xl backdrop-blur-md flex flex-col justify-between items-center p-6 text-center hover:scale-105 transition-all duration-300"
          >
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-blue-400">
                {proj.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {proj.description}
              </p>
            </div>

            <Link to={proj.link}>
              <button className="mt-6 w-[140px] sm:w-[160px] h-[38px] bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base rounded-xl shadow-md transition-all duration-300">
                View Project
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
