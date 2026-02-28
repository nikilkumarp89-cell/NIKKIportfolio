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


      <div className="relative min-h-screen bg-[url('/image3.jpg')] bg-cover bg-center">

        
        <div className="absolute inset-0 bg-black/40"></div>

     
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center py-6 px-8 bg-white/70 backdrop-blur-lg shadow-lg rounded-b-3xl">

         
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
            <LiaSchoolSolid size={40} className="text-emerald-700" />
            <span className="font-extrabold text-xl tracking-widest uppercase">
              Apex Studio
            </span>
          </div>

       
          <ul className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0 text-sm font-bold tracking-wide">
            <li className="hover:text-emerald-600 cursor-pointer transition">
              Projects
            </li>
            <li className="hover:text-emerald-600 cursor-pointer transition">
              Studio
            </li>
            <li className="hover:text-emerald-600 cursor-pointer transition">
              Process
            </li>
            <li className="hover:text-emerald-600 cursor-pointer transition">
              Awards   
            </li>
            <li className="hover:text-emerald-600 cursor-pointer transition">
              Journal
            </li>
          </ul>

          
          <button className="mt-4 md:mt-0 px-6 py-2 border-2 border-black rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300">
            START A PROJECT
          </button>
        </div>

       
        <div className="relative z-10 flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 min-h-screen text-white">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight drop-shadow-lg">
            Designing <br />
            <span className="font-black italic text-emerald-300">
              Timeless Spaces.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-xl text-stone-200 leading-relaxed">
            Specializing in sustainable urban development.
            Where minimalist aesthetics meet functional engineering.
          </p>

          <button className="mt-8 px-10 py-4 bg-emerald-400 hover:bg-emerald-500 text-black font-bold rounded-full transition-all duration-300 shadow-lg hover:scale-105">
            Explore Portfolio
          </button>

        </div>

      </div>
    </div>
  );
};

export default Component;
