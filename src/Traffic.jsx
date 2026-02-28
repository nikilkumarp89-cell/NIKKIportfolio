import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Traffic = () => {
  const [active, setActive] = useState("");

  return (
    <div className="min-h-screen  bg-gray-400 flex justify-center items-start">
      <Link to="/Page">
  <button className="ml-10 border-1 mb-2 mt-5 flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-600 rounded-full font-bold hover:bg-emerald-100 hover:scale-105 active:scale-95 transition-all">
    ← <span className="text-lg">Exit View</span>
  </button>
</Link>
      <div>
        
        <div className="w-[150px] h-[200px] mt-20 rounded-t-4xl bg-gray-800 rounded-b-4xl border-4 flex flex-col items-center justify-center gap-4">
          <div
        className={`w-[50px] h-[50px] rounded-full border-2 flex items-center justify-center ${active === "red" ? "bg-red-500 text-white" : "bg-white"}`} ></div>

          <div className={`w-[50px] h-[50px] rounded-full border-2 flex items-center justify-center ${active === "green" ? "bg-green-500 text-white" : "bg-white"}`}>  </div>
           <div className={`w-[50px] h-[50px] rounded-full border-2 flex items-center justify-center ${active === "yellow" ? "bg-yellow-400 text-black" : "bg-white"}`}> </div>
        </div>

      
        <div className="w-[30px] h-[300px]  bg-gray-800 mx-auto border-2 ">
          <button onClick={() => setActive("red")} className=" w-[10px] mt-[100px] h-[20px] rounded-full bg-red-800 px-3 py-1" ></button>
          <button onClick={() => setActive("green")}className="w-[10px] h-[20px] rounded-full bg-green-800 px-3 py-1" ></button>

          <button onClick={() => setActive("yellow")}className="w-[10px] h-[20px] rounded-full bg-yellow-600 px-3 py-1"></button>
        </div>
      </div>
    </div>
  );
};

export default Traffic;
