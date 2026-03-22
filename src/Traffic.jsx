import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Traffic = () => {
  const [active, setActive] = useState("");
  const containerRef = useRef(null);
  const lightsRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(containerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
    .fromTo(lightsRef.current,
      { opacity: 0, scale: 0.9, x: -30 },
      { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "back.out(1.5)" },
      "-=0.2"
    )
    .fromTo(controlsRef.current,
      { opacity: 0, scale: 0.9, x: 30 },
      { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "back.out(1.5)" },
      "-=0.6"
    );
  }, []);

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center relative overflow-hidden py-10">

      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-red-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full mix-blend-screen filter blur-[120px]"></div>

      <div ref={containerRef} className="w-full max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        
        <div className="w-full flex justify-start mb-8 absolute top-0 left-6">
          <Link to="/Page" className="inline-block">
            <button className="flex items-center gap-2 px-6 py-2.5 glass text-gray-200 rounded-full font-medium hover:text-purple-400 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:-translate-x-1 transition-all duration-300">
              ← <span>Return Home</span>
            </button>
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-16 tracking-wide text-center mt-16 md:mt-0">
          Traffic Sign <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-green-400">Simulator</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 w-full">

          {/* Traffic Light Container */}
          <div ref={lightsRef} className="relative group">
            {/* Ambient Glow tied to active state */}
            <div className={`absolute -inset-10 rounded-[4rem] blur-[60px] opacity-40 transition-colors duration-700 -z-10 ${
                active === "red" ? "bg-red-500/60" : 
                active === "yellow" ? "bg-yellow-400/60" : 
                active === "green" ? "bg-green-500/60" : "bg-transparent"
              }`}></div>

            <div className="glass rounded-[3.5rem] p-8 pb-10 border-gray-600 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center gap-8 relative z-10 bg-gray-900/60">

              {/* Top Cap */}
              <div className="absolute -top-4 w-[80%] h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-t-2xl shadow-inner border-t border-gray-500"></div>

              {/* Red Light */}
              <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-gray-900 transition-all duration-500 flex items-center justify-center relative ${
                  active === "red"
                   ? "bg-red-500 shadow-[0_0_50px_rgba(239,68,68,1),inset_0_0_20px_rgba(255,255,255,0.6)]"
                   : "bg-red-950/40 shadow-[inset_0_5px_15px_rgba(0,0,0,0.8)] opacity-50"
                }`}>
                {/* Highlight reflection */}
                <div className="absolute top-2 left-4 w-8 h-4 bg-white/30 rounded-full blur-[2px] transform -rotate-45"></div>
              </div>

              {/* Yellow Light */}
              <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-gray-900 transition-all duration-500 flex items-center justify-center relative ${
                  active === "yellow"
                  ? "bg-yellow-400 shadow-[0_0_50px_rgba(250,204,21,1),inset_0_0_20px_rgba(255,255,255,0.6)]"
                  : "bg-yellow-950/40 shadow-[inset_0_5px_15px_rgba(0,0,0,0.8)] opacity-50"
                }`}>
                <div className="absolute top-2 left-4 w-8 h-4 bg-white/30 rounded-full blur-[2px] transform -rotate-45"></div>
              </div>

              {/* Green Light */}
              <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-gray-900 transition-all duration-500 flex items-center justify-center relative ${
                  active === "green"
                  ? "bg-green-500 shadow-[0_0_50px_rgba(34,197,94,1),inset_0_0_20px_rgba(255,255,255,0.6)]"
                  : "bg-green-950/40 shadow-[inset_0_5px_15px_rgba(0,0,0,0.8)] opacity-50"
                }`}>
                <div className="absolute top-2 left-4 w-8 h-4 bg-white/30 rounded-full blur-[2px] transform -rotate-45"></div>
              </div>
            </div>

            {/* Stand */}
            <div className="w-10 h-48 sm:h-64 mx-auto border-x border-b border-gray-600 rounded-b-lg relative z-0 mt-[-20px] bg-gradient-to-b from-gray-800 via-gray-900 to-black shadow-2xl">
              {/* Stand highlight line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-white/10 blur-[1px]"></div>
            </div>
          </div>

          {/* Control Panel */}
          <div ref={controlsRef} className="glass rounded-[2rem] p-8 sm:p-10 shadow-2xl flex flex-col gap-6 w-full max-w-md relative overflow-hidden bg-gray-900/60 border border-gray-600/50">
            {/* Circuit board aesthetic lines */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent"></div>
            
            <h2 className="text-2xl font-bold text-white text-center mb-4 tracking-wider flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Terminal
            </h2>

            <button
              onClick={() => setActive("red")}
              className={`group relative overflow-hidden py-4 rounded-xl font-bold tracking-widest text-sm transition-all duration-300 ${
                  active === "red"
                  ? "bg-red-500/20 text-red-400 border border-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                  : "bg-gray-800/80 text-gray-400 border border-gray-700 hover:bg-gray-800 hover:text-red-300 hover:border-red-500/30"
                }`}
            >
              <span className="relative z-10 uppercase flex items-center justify-center gap-2">
                <span className={`w-2 h-2 rounded-full ${active === "red" ? "bg-red-400 shadow-[0_0_8px_rgba(239,68,68,1)]" : "bg-gray-600"}`}></span> 
                Force Stop
              </span>
              {active === "red" && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent translate-x-[-100%] animate-[shimmer_1.5s_infinite]"></div>}
            </button>

            <button
              onClick={() => setActive("yellow")}
              className={`group relative overflow-hidden py-4 rounded-xl font-bold tracking-widest text-sm transition-all duration-300 ${
                  active === "yellow"
                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/80 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                  : "bg-gray-800/80 text-gray-400 border border-gray-700 hover:bg-gray-800 hover:text-yellow-300 hover:border-yellow-500/30"
                }`}
            >
              <span className="relative z-10 uppercase flex items-center justify-center gap-2">
                <span className={`w-2 h-2 rounded-full ${active === "yellow" ? "bg-yellow-400 shadow-[0_0_8px_rgba(234,179,8,1)]" : "bg-gray-600"}`}></span> 
                Prepare
              </span>
              {active === "yellow" && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent translate-x-[-100%] animate-[shimmer_1.5s_infinite]"></div>}
            </button>

            <button
              onClick={() => setActive("green")}
              className={`group relative overflow-hidden py-4 rounded-xl font-bold tracking-widest text-sm transition-all duration-300 ${
                  active === "green"
                  ? "bg-green-500/20 text-green-400 border border-green-500/80 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                  : "bg-gray-800/80 text-gray-400 border border-gray-700 hover:bg-gray-800 hover:text-green-300 hover:border-green-500/30"
                }`}
            >
              <span className="relative z-10 uppercase flex items-center justify-center gap-2">
                <span className={`w-2 h-2 rounded-full ${active === "green" ? "bg-green-400 shadow-[0_0_8px_rgba(34,197,94,1)]" : "bg-gray-600"}`}></span> 
                Engage
              </span>
              {active === "green" && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent translate-x-[-100%] animate-[shimmer_1.5s_infinite]"></div>}
            </button>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent my-2"></div>

            <button
              onClick={() => setActive("")}
              className="py-3 rounded-xl text-gray-500 hover:text-white hover:bg-gray-800 hover:shadow-inner transition-all text-sm font-medium uppercase tracking-wider"
            >
              System Offline
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Traffic;
