import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Skills from "./Skills";
import Navbar from "./Navbar";
import gsap from "gsap";

const Page = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Typed.js initialization
    const options = {
      strings: ["Front-End Developer", "Web Designer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);

    // GSAP Entrance Animations
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-element",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );
    tl.fromTo(
      ".hero-image",
      { opacity: 0, scale: 0.8, rotation: -5 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.5)" },
      "-=0.5"
    );

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="Page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex items-center">
        {/* Subtle Background Glows */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>

        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-24 mt-16 max-w-7xl">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0">
            <h1 className="hero-element text-xl sm:text-2xl text-fuchsia-400 font-medium tracking-wide mb-2">
              HELLO THERE <span className="text-white">👋</span>
            </h1>

            <h1 className="hero-element text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Nikil Kumar</span>
            </h1>

            <h2 className="hero-element text-2xl sm:text-3xl font-bold text-gray-300 mb-6 flex items-center justify-center lg:justify-start">
              A Passionate <span className="ml-2 text-fuchsia-400 min-w-[200px] text-left" ref={typedRef}></span>
            </h2>

            <p className="hero-element text-base sm:text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Crafting visually appealing, responsive, and user-friendly web applications using React, Tailwind CSS, and modern web technologies. Driven by learning and focused on digital excellence.
            </p>

            {/* Social Links */}
            <div className="hero-element flex justify-center lg:justify-start items-center gap-6">
              <a
                href="https://www.instagram.com/_nikki_2004__"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full text-white hover:text-fuchsia-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikil-kumar-770279396/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full text-white hover:text-fuchsia-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/nikilkumarp89-cell?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full text-white hover:text-fuchsia-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] transition-all duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="hero-image relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <img
                src="IMG_5718.jpg"
                alt="Nikil Kumar"
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-[rgba(255,255,255,0.1)] object-cover shadow-[0_0_40px_rgba(168,85,247,0.3)] z-10"
              />
            </div>
          </div>

        </div>
      </div>

      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default Page;
