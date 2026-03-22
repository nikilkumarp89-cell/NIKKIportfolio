import React, { useEffect, useRef } from 'react';
import { FcCollaboration } from "react-icons/fc";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Component2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(".comp2-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 80%" } }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="body w-full min-h-screen relative flex items-center bg-transparent text-white py-20 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="comp2-card flex flex-col items-center justify-center text-center glass rounded-[2rem] p-8 border border-fuchsia-500/20 hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] transition-all duration-300 group">
          <FcCollaboration size={80} className="mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          <h1 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Best Education</h1>
          <p className="text-base text-gray-300 leading-relaxed font-light">
            Striving for excellence through collaboration and innovation.
          </p>
        </div>

        {/* Card 2 */}
        <div className="comp2-card flex flex-col items-center text-center glass rounded-[2rem] p-8 border border-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
          <h1 className="text-xl font-bold mb-6 text-white tracking-widest uppercase border-b border-fuchsia-500/30 pb-2 w-full">Languages</h1>
          <ul className="space-y-3 text-base text-gray-300 font-medium">
            <li className="hover:text-fuchsia-400 cursor-pointer transition-colors hover:translate-x-1">Java</li>
            <li className="hover:text-fuchsia-400 cursor-pointer transition-colors hover:translate-x-1">C#</li>
            <li className="hover:text-fuchsia-400 cursor-pointer transition-colors hover:translate-x-1">C Programming</li>
            <li className="hover:text-fuchsia-400 cursor-pointer transition-colors hover:translate-x-1">Python</li>
            <li className="hover:text-fuchsia-400 cursor-pointer transition-colors hover:translate-x-1">JavaScript</li>
            <li className="hover:text-fuchsia-400 cursor-pointer transition-colors hover:translate-x-1">React</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="comp2-card flex flex-col items-center text-center glass rounded-[2rem] p-8 border border-fuchsia-500/20 hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] transition-all duration-300">
          <h1 className="text-xl font-bold mb-6 text-white tracking-widest uppercase border-b border-fuchsia-500/30 pb-2 w-full">Address</h1>
          <p className="text-base text-gray-300 leading-relaxed mt-4">
            BIET Rd, Anjaneya Badavane, <br />
            Kuvempu Nagar, <br />
            <span className="text-purple-400 font-semibold mt-2 block">Davanagere, Karnataka</span>
            577004
          </p>
        </div>

        {/* Card 4 */}
        <div className="comp2-card flex flex-col items-center text-center glass rounded-[2rem] p-8 border border-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
          <h1 className="text-xl font-bold mb-6 text-white tracking-widest uppercase border-b border-fuchsia-500/30 pb-2 w-full">IDE Used</h1>
          <ul className="space-y-3 text-base text-gray-300 font-medium mt-2">
            <li className="hover:text-fuchsia-400 cursor-pointer transition-colors hover:translate-x-1">Code::Blocks</li>
            <li className="hover:text-fuchsia-400 cursor-pointer transition-colors hover:translate-x-1">Visual Studio</li>
            <li className="hover:text-fuchsia-400 cursor-pointer transition-colors hover:translate-x-1">VS Code</li>
            <li className="hover:text-fuchsia-400 cursor-pointer transition-colors hover:translate-x-1">Apache NetBeans</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Component2;
