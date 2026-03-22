import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const el = skillsRef.current;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".skills-heading",
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: el, start: "top 80%" } }
      );
      
      gsap.fromTo(".skill-bar",
        { width: "0%" },
        { width: "100%", duration: 1.5, ease: "power3.out", stagger: 0.2, scrollTrigger: { trigger: el, start: "top 70%" } }
      );

      gsap.fromTo(".stat-card",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.5)", scrollTrigger: { trigger: el, start: "top 60%" } }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div id="Skills" ref={skillsRef} className="bg-transparent py-24 text-white min-h-screen relative overflow-hidden flex items-center">
      {/* Background Decor */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-700/20 rounded-full mix-blend-screen filter blur-[128px]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 z-10 w-full">
        <h2 className="skills-heading text-4xl sm:text-5xl font-bold text-center mb-16 tracking-wide text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">Skills</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 w-full order-2 lg:order-1">
            <p className="skills-heading text-lg text-gray-300 md:text-left mb-10 leading-relaxed max-w-2xl font-light">
              I specialize in front-end development, building dynamic and responsive websites using modern technologies like <span className="text-purple-400 font-medium">React</span>, <span className="text-fuchsia-400 font-medium">Tailwind CSS</span>, HTML, CSS, and JavaScript. I love creating smooth user interfaces and intuitive experiences that make the web more enjoyable for everyone.
            </p>
            
            <div className="space-y-8 max-w-2xl">
              {/* Skill 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm sm:text-base font-medium">
                  <span className="text-gray-200">HTML & CSS</span>
                  <span className="text-fuchsia-400">85%</span>
                </div>
                <div className="w-full bg-[rgba(30,27,75,0.5)] rounded-full h-3 overflow-hidden shadow-inner border border-gray-700/50">
                  <div className="skill-bar bg-gradient-to-r from-purple-500 to-fuchsia-400 h-full rounded-full w-[85%] relative shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                  </div>
                </div>
              </div>

              {/* Skill 2 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm sm:text-base font-medium">
                  <span className="text-gray-200">React.js</span>
                  <span className="text-fuchsia-400">90%</span>
                </div>
                <div className="w-full bg-[rgba(30,27,75,0.5)] rounded-full h-3 overflow-hidden shadow-inner border border-gray-700/50">
                  <div className="skill-bar bg-gradient-to-r from-purple-500 to-fuchsia-400 h-full rounded-full w-[90%] relative shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                  </div>
                </div>
              </div>

              {/* Skill 3 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm sm:text-base font-medium">
                  <span className="text-gray-200">JavaScript</span>
                  <span className="text-fuchsia-400">50%</span>
                </div>
                <div className="w-full bg-[rgba(30,27,75,0.5)] rounded-full h-3 overflow-hidden shadow-inner border border-gray-700/50">
                  <div className="skill-bar bg-gradient-to-r from-purple-500 to-fuchsia-400 h-full rounded-full w-[50%] relative shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="w-full lg:w-5/12 grid grid-cols-2 gap-6 order-1 lg:order-2">
            <div className="stat-card glass flex flex-col items-center justify-center p-8 rounded-3xl hover:border-fuchsia-500/50 transition-colors duration-300">
              <h3 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-purple-600 mb-2">0+</h3>
              <p className="text-sm sm:text-base text-gray-400 font-medium">Years Experience</p>
            </div>

            <Link to="/Project" className="stat-card glass flex flex-col items-center justify-center p-8 rounded-3xl hover:border-fuchsia-500/50 hover:bg-[rgba(30,27,75,0.4)] transition-all duration-300 group cursor-pointer block text-center">
              <h3 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-purple-600 mb-2 group-hover:scale-110 transition-transform">3</h3>
              <p className="text-sm sm:text-base text-gray-400 font-medium group-hover:text-white transition-colors">Projects</p>
            </Link>

            <div className="stat-card glass col-span-2 flex flex-col items-center justify-center p-8 rounded-3xl hover:border-fuchsia-500/50 transition-colors duration-300">
              <h3 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-purple-600 mb-2">2026</h3>
              <p className="text-sm sm:text-base text-gray-400 font-medium tracking-wide uppercase">Passing Year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
