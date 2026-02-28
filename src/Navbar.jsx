import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const navbarHeight = 80; // adjust if needed
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white fixed w-full z-50 shadow-lg">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <h1 className="font-extrabold text-2xl cursor-pointer">
            Portfolio
          </h1>

       
          <div className="hidden sm:flex space-x-10">
            <button onClick={() => scrollToSection("Page")} className="hover:text-blue-400">
              Home
            </button>

            <button onClick={() => scrollToSection("About")} className="hover:text-blue-400">
              About
            </button>

            <button onClick={() => scrollToSection("Skills")} className="hover:text-blue-400">
              Skills
            </button>

            <button onClick={() => scrollToSection("Projects")} className="hover:text-blue-400">
              Projects
            </button>

            <button onClick={() => scrollToSection("Contact")} className="hover:text-blue-400">
              Contact
            </button>
          </div>

       
          <div className="sm:hidden">
            <button
              className="text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? "❌" : "☰"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          open ? "block" : "hidden"
        } sm:hidden flex flex-col text-xl bg-gray-800 text-center gap-6 py-6`}
      >
        <button onClick={() => scrollToSection("Page")}>Home</button>
        <button onClick={() => scrollToSection("About")}>About</button>
        <button onClick={() => scrollToSection("Skills")}>Skills</button>
        <button onClick={() => scrollToSection("Projects")}>Projects</button>
        <button onClick={() => scrollToSection("Contact")}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
