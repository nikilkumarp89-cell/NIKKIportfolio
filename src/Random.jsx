import React, { useState } from 'react'
import { VscAccount, VscFolderActive, VscSaveAll } from "react-icons/vsc";
import { AiFillFolderOpen, AiFillCalendar } from "react-icons/ai";
import { FaAddressBook, FaRegEnvelope } from "react-icons/fa";
import { BiCloudDownload } from "react-icons/bi";
import { DiAptana, DiCodeigniter } from "react-icons/di";
import { BsApple, BsBank2 } from "react-icons/bs";
import { HiMiniAcademicCap } from "react-icons/hi2";
import Cards from './Cards.jsx';
import { Link } from 'react-router-dom';

const Random = () => {
  const [count1, setcount1] = useState(4);
  const [count2, setcount2] = useState(5);
  const [count3, setcount3] = useState(8);
  const [count4, setcount4] = useState(10);
  const [count5, setcount5] = useState(12);

  const incre = () => {
    setcount1(count1 + 1);
    setcount2(count2 + 1);
    setcount3(count3 + 1);
    setcount4(count4 + 1);
    setcount5(count5 + 1);
  }

  const decre = () => {
    setcount1(count1 - 1);
    setcount2(count2 - 1);
    setcount3(count3 - 1);
    setcount4(count4 - 1);
    setcount5(count5 - 1);
  }

  return (
    <div>
      <Link to="/Page">
  <button className="ml-10 border-1 mb-2 mt-5 flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-600 rounded-full font-bold hover:bg-emerald-100 hover:scale-105 active:scale-95 transition-all">
    ← <span className="text-lg">Exit View</span>
  </button>
</Link>
      <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">
      



      
      <div className="flex-1 flex flex-col md:ml-[70px] pt-4 px-4 md:px-8">
        
    
        

        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 text-center md:text-left">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">Hello!</h1>
            <p className="text-2xl mt-2 text-gray-700">Welcome to the website</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button onClick={incre} className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-all">
              Increase
            </button>
            <button onClick={decre} className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-all">
              Decrease
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <Cards name="nikki" Count={count1} ico={<FaRegEnvelope />} />
          <Cards name="Kumar" Count={count2} ico={<BsApple />} />
          <Cards name="akasha" Count={count3} ico={<BsBank2 />} />
          <Cards name="team" Count={count4} ico={<DiCodeigniter />} />
          <Cards name="icca" Count={count5} ico={<HiMiniAcademicCap />} />
        </div>

      </div>
    </div>
    </div>
  )
}

export default Random
