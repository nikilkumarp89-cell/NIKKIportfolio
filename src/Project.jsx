import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".project-heading",
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: el, start: "top 80%" } }
      );

      gsap.fromTo(".project-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.2)", scrollTrigger: { trigger: ".project-grid", start: "top 80%" } }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Portfolio Project",
      description: "A modern personal portfolio showcasing skills, projects, and animated UI/UX.",
      link: "/Potpolio",
      icon: "💻"
    },
    {
      title: "Traffic Simulator",
      description: "Interactive traffic light simulator with React state transitions using hooks.",
      link: "/Traffic",
      icon: "🚦"
    },
    {
      title: "Dynamic Counters",
      description: "Multi-instance dynamic counters using React useState and complex state logic.",
      link: "/Random",
      icon: "🔢"
    },
  ];

  return (
    <div id='Projects' ref={containerRef} className="flex flex-col bg-transparent py-24 px-6 sm:px-10 lg:px-20 min-h-screen relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="project-heading text-4xl sm:text-5xl font-extrabold text-center mb-6 tracking-wide text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Projects</span>
        </h1>
        <p className="project-heading text-center text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-16 font-light">
          Explore some of my recent work that highlights my skills in modern React development, dynamic UI design, and interactive web experiences.
        </p>

        <div className="project-grid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 place-items-center">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="project-card flex flex-col justify-between w-full max-w-sm glass rounded-[2rem] p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] group border border-gray-700/50 hover:border-fuchsia-500/50 relative overflow-hidden h-full min-h-[380px]"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-24 bg-gradient-to-br from-purple-500/20 to-fuchsia-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-700 z-0"></div>

              <div className="relative z-10 flex flex-col items-center mb-6">
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 drop-shadow-lg">
                  {proj.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-fuchsia-400 transition-colors">
                  {proj.title}
                </h2>
                <p className="text-base text-gray-300 leading-relaxed font-light">
                  {proj.description}
                </p>
              </div>

              <Link to={proj.link} className="relative z-10 mt-auto w-full">
                <button className="w-full py-3.5 bg-[rgba(17,24,39,0.8)] hover:bg-gradient-to-r hover:from-purple-500 hover:to-fuchsia-400 border border-gray-600 group-hover:border-transparent text-white font-medium rounded-xl shadow-md transition-all duration-300">
                  View Project
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
