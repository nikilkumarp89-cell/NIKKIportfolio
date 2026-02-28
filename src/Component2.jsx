import React from 'react'
import { FcCollaboration } from "react-icons/fc";

const Component2 = () => {
  return (
    <div className="body bg-gray-600 border-t-4 border-b-4 text-white">
      <div className="max-w-full mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">

        
        <div className="flex flex-col items-center text-center shadow-lg rounded-xl p-5 bg-gray-700/40">
          <FcCollaboration size={80} className="mb-3" />
          <h1 className="text-2xl font-semibold mb-2">Best Education</h1>
          <p className="text-lg text-gray-200">
            Striving for excellence through collaboration and innovation.
          </p>
        </div>

       
        <div className="flex flex-col items-start sm:items-center text-center shadow-lg rounded-xl p-5 bg-gray-700/40">
          <h1 className="text-2xl font-semibold underline mb-3">Languages</h1>
          <ul className="space-y-2 text-lg text-gray-300">
            <li className="hover:text-white transition">Java</li>
            <li className="hover:text-white transition">C#</li>
            <li className="hover:text-white transition">C Programming</li>
            <li className="hover:text-white transition">Python</li>
            <li className="hover:text-white transition">JavaScript</li>
            <li className="hover:text-white transition">React</li>
          </ul>
        </div>

        
        <div className="flex flex-col items-start sm:items-center text-center shadow-lg rounded-xl p-5 bg-gray-700/40">
          <h1 className="text-2xl font-semibold underline mb-3">Address</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            BIET Rd, Anjaneya Badavane, <br />
            Kuvempu Nagar, Davanagere, <br />
            Karnataka 577004
          </p>
        </div>

       
        <div className="flex flex-col items-start sm:items-center text-center shadow-lg rounded-xl p-5 bg-gray-700/40">
          <h1 className="text-2xl font-semibold underline mb-3">IDE Used</h1>
          <ul className="space-y-2 text-lg text-gray-300">
            <li className="hover:text-white transition">Code::Blocks</li>
            <li className="hover:text-white transition">Visual Studio</li>
            <li className="hover:text-white transition">VS Code</li>
            <li className="hover:text-white transition">Apache NetBeans</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Component2
