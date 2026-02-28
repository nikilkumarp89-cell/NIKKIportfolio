import React, { useEffect } from "react";
import Typed from "typed.js";
import { FaInstagram, FaTelegram, FaWhatsapp, FaGithub } from "react-icons/fa";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Skills from "./Skills"
import Navbar from "./Navbar"
import { FaLinkedin } from "react-icons/fa";

const Page = () => {
  useEffect(() => {
    const options = {
      strings: ["Front-End Developer", "Web Designer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed("#nikil", options);
    return () => typed.destroy();
  }, []);

  return (
    <div>
      <div>
        <Navbar/>
      </div>
       <div id="Page"  className="bg-gray-500 w-full min-h-screen ">
    
      <div className="flex flex-col lg:flex-row  items-center justify-between bg-gray-800 px-6 sm:px-12 lg:px-20 py-16 lg:py-24">
      
        <div className="flex flex-col justify-center w-full lg:w-1/2 text-center mt-20 lg:text-left">
          <h1 className="text-3xl sm:text-4xl text-blue-500 font-semibold  ">
            HELLO<span className="text-white duration">!</span>
          </h1>

          <h1 className="text-4xl sm:text-5xl font-semibold text-white mt-3">
            I’m <span className="font-bold text-blue-500 ">Nikil Kumar</span>
          </h1>

          <h1 className="text-2xl sm:text-3xl font-extrabold mt-4 text-white">
            I’m{" "}
            <span
              id="nikil"
              className="text-3xl sm:text-4xl font-bold text-blue-400"
            ></span>
          </h1>

          <p className="text-sm sm:text-base text-gray-200 mt-5 max-w-md mx-auto lg:mx-0">
            “To secure a front-end developer position at a reputed organization
            where I can apply my knowledge of HTML, CSS, JavaScript, and React
            to build user-friendly and responsive web applications, while
            continuously learning and growing in the field of web development.”
          </p>

         
          <div className="flex justify-center lg:justify-start items-center gap-6 mt-6">
            <a
              href="https://www.instagram.com/_nikki_2004__"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-200"
            >
              <FaInstagram className="text-white" size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/nikil-kumar-770279396/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-200"
            >
              <FaLinkedin className="text-white" size={28} />
            </a>
            {/* <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-200"
            >
              <FaWhatsapp className="text-white" size={28} />
            </a>  */}
            <a
              href="https://github.com/nikilkumarp89-cell?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-200"
            >
              <FaGithub className="text-white" size={28} />
            </a>
          </div>
        </div>

        
        <div className="flex justify-center items-center mt-10 lg:mt-0 w-full lg:w-1/2">
          <img
            src="IMG_5718.jpg"
            alt="Nikki"
            className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full border-8 border-blue-500 bg-white shadow-lg object-cover"
          />
        </div>
      </div>

      
      <About />
      <Project />
      <Skills/>
      <Contact />
     
      
    </div>
    </div>
    
  );
};

export default Page;
