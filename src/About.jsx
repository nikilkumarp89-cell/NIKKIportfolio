import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-heading",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: el, start: "top 80%" } }
      );
      gsap.fromTo(".about-image",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: el, start: "top 75%" } }
      );
      gsap.fromTo(".about-card",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.4, scrollTrigger: { trigger: el, start: "top 75%" } }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div id='About' ref={containerRef} className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent py-20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-700/20 rounded-full mix-blend-screen filter blur-[128px]"></div>

      <h1 className="about-heading text-4xl sm:text-5xl font-bold text-white flex justify-center items-center text-center tracking-wide mb-16 z-10">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 ml-3">Me</span>
      </h1>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto items-center justify-center px-6 sm:px-10 lg:px-12 gap-12 lg:gap-20 z-10">
       
        <div className="about-image flex justify-center w-full lg:w-1/3">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <img
              className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl border border-[rgba(255,255,255,0.1)] shadow-[0_0_40px_rgba(168,85,247,0.2)] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
              src="retouch_20250903133463886.jpg.jpeg"
              alt="Profile"
            />
          </div>
        </div>

        <div className="about-card flex flex-col w-full lg:w-2/3 glass rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

          <h2 className="text-2xl sm:text-3xl font-bold text-fuchsia-400 mb-6 drop-shadow-md">
            Front-End Developer
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-light">
            “I am a passionate and motivated <span className="font-semibold text-white">Front-End Developer</span> with a strong foundation in{' '}
            <span className="font-semibold text-fuchsia-300">HTML</span>,{' '}
            <span className="font-semibold text-fuchsia-300">CSS</span>,{' '}
            <span className="font-semibold text-purple-400">JavaScript</span>,{' '}
            <span className="font-semibold text-fuchsia-400">Tailwind CSS</span>, and{' '}
            <span className="font-semibold text-purple-500">React</span>. I enjoy
            creating responsive, user-friendly, and visually appealing web
            applications that deliver great user experiences. With a keen
            interest in learning new technologies and improving my skills, I am
            eager to contribute to innovative projects and grow in a dynamic
            team environment. My goal is to build efficient and creative digital
            solutions while continuously enhancing my technical expertise.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
