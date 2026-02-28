import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";


const Cards = (nikil) => {
  return (
   <div className="bg-green-500 shadow rounded-lg p-4 flex items-center w-[200px] justify-between max-w-xs">
      <div>
        <a  className="text-sm font-medium text-gray-600 hover:underline flex items-center gap-1">  {nikil.name}
          
        </a>
        <div className="text-3xl font-bold mt-1 relative inline-block">
          {nikil.Count}
          <span className="absolute  h-2 w-2 rounded-full bg-red-500"></span>
        </div>
      </div>
      <div className="text-blue-600 bg-blue-100 p-2 rounded-full">{nikil.ico }
      </div>
    </div>
   
  );
}

export default Cards
