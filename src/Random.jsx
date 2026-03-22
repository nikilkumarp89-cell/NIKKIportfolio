import React, { useState, useEffect, useRef } from 'react';
import { VscAccount, VscFolderActive, VscSaveAll } from "react-icons/vsc";
import { AiFillFolderOpen, AiFillCalendar } from "react-icons/ai";
import { FaAddressBook, FaRegEnvelope } from "react-icons/fa";
import { BiCloudDownload } from "react-icons/bi";
import { DiAptana, DiCodeigniter } from "react-icons/di";
import { BsApple, BsBank2 } from "react-icons/bs";
import { HiMiniAcademicCap } from "react-icons/hi2";
import Cards from './Cards.jsx';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Random = () => {
  const [count1, setcount1] = useState(4);
  const [count2, setcount2] = useState(5);
  const [count3, setcount3] = useState(8);
  const [count4, setcount4] = useState(10);
  const [count5, setcount5] = useState(12);

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, []);

  const incre = () => {
    setcount1(count1 + 1);
    setcount2(count2 + 1);
    setcount3(count3 + 1);
    setcount4(count4 + 1);
    setcount5(count5 + 1);
  };

  const decre = () => {
    setcount1(count1 - 1);
    setcount2(count2 - 1);
    setcount3(count3 - 1);
    setcount4(count4 - 1);
    setcount5(count5 - 1);
  };

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden flex flex-col py-10">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 font-sans" ref={containerRef}>
        
        {/* Navigation */}
        <div className="flex justify-start mb-12">
          <Link to="/Page" className="inline-block">
            <button className="flex items-center gap-2 px-6 py-2.5 glass text-gray-200 rounded-full font-medium hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-x-1 transition-all duration-300">
              ← <span>Return Home</span>
            </button>
          </Link>
        </div>

        {/* Header Section */}
        <div className="glass rounded-[2rem] p-8 md:p-12 mb-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left shadow-2xl relative overflow-hidden border border-gray-700/50">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 tracking-tight">
              Hello!
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-gray-300 font-light">
              Welcome to the dashboard
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-0 relative z-10">
            <button 
              onClick={incre} 
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transform hover:-translate-y-1 transition-all duration-300"
            >
              Increase All
            </button>
            <button 
              onClick={decre} 
              className="px-6 py-3 rounded-xl font-semibold bg-gray-800/80 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white hover:border-gray-500 transform hover:-translate-y-1 transition-all duration-300"
            >
              Decrease All
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <Cards name="Messages" Count={count1} ico={<FaRegEnvelope />} />
          <Cards name="Devices" Count={count2} ico={<BsApple />} />
          <Cards name="Revenue" Count={count3} ico={<BsBank2 />} />
          <Cards name="Activity" Count={count4} ico={<DiCodeigniter />} />
          <Cards name="Courses" Count={count5} ico={<HiMiniAcademicCap />} />
        </div>

      </div>
    </div>
  );
};

export default Random;
