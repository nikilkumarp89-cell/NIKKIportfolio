import React from "react";
import { Link } from "react-router-dom";
import { LiaSchoolSolid } from "react-icons/lia";

const Component = () => {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">

     
      <Link to="/page">
        <button className="ml-10 border mt-6 flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-600 rounded-full font-bold hover:bg-emerald-100 hover:scale-105 active:scale-95 transition-all shadow-md">
          ← <span className="text-lg">Exit View</span>
        </button>
      </Link>


      <div className="relative min-h-screen bg-[url('/bg.png')] bg-cover bg-center" style={{ backgroundAttachment: 'fixed' }}>

        
        <div className="absolute inset-0 bg-black/40"></div>

     
        <div className="relative z-10 mx-6 mt-6 flex flex-col md:flex-row justify-between items-center py-5 px-8 glass rounded-2xl">

          <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
            <LiaSchoolSolid size={40} className="text-fuchsia-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
            <span className="font-extrabold text-2xl tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              Apex Studio
            </span>
          </div>

          <ul className="flex flex-wrap justify-center gap-8 mt-6 md:mt-0 text-sm font-medium tracking-wide">
            <li className="text-gray-200 hover:text-fuchsia-400 cursor-pointer transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-200 hover:text-fuchsia-400 cursor-pointer transition-colors relative group">
              Studio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-200 hover:text-fuchsia-400 cursor-pointer transition-colors relative group">
              Process
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-200 hover:text-fuchsia-400 cursor-pointer transition-colors relative group">
              Awards   
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-200 hover:text-fuchsia-400 cursor-pointer transition-colors relative group">
              Journal
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          <button className="mt-6 md:mt-0 px-8 py-2.5 bg-gradient-to-r from-purple-500 to-fuchsia-400 hover:from-purple-600 hover:to-fuchsia-500 rounded-full font-bold text-white shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:shadow-[0_0_25px_rgba(217,70,239,0.5)] hover:-translate-y-0.5 transition-all duration-300">
            START A PROJECT
          </button>
        </div>

       
        <div className="relative z-10 flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 min-h-[calc(100vh-140px)] text-white">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight drop-shadow-lg">
            Designing <br />
            <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-purple-400 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">
              Timeless Spaces.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl max-w-xl text-gray-300 leading-relaxed font-light">
            Specializing in sustainable urban development.
            Where minimalist aesthetics meet functional engineering.
          </p>

          <button className="mt-10 px-10 py-4 glass hover:bg-[rgba(217,70,239,0.2)] text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] hover:scale-105 border border-fuchsia-500/30 hover:border-fuchsia-400">
            Explore Portfolio
          </button>

        </div>

      </div>
    </div>
  );
};

export default Component;
