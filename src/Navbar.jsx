import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-16 px-6 transition-all duration-300 rounded-2xl ${
            scrolled ? "glass shadow-xl" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <h1
            onClick={() => scrollToSection("Page")}
            className="font-extrabold text-2xl cursor-pointer tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 hover:scale-105 transition-transform"
          >
            Portfolio.
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Page:Home", "About:About", "Skills:Skills", "Projects:Projects", "Contact:Contact"].map(
              (item) => {
                const [id, label] = item.split(":");
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-gray-200 hover:text-fuchsia-400 font-medium tracking-wide transition-colors duration-300 relative group"
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                );
              }
            )}
          </div>

          {/* Mobile Menu Button  */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-200 hover:text-fuchsia-400 focus:outline-none transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden absolute top-full left-0 w-full px-4 pt-2 transition-all duration-300 origin-top transform ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="glass rounded-2xl flex flex-col p-6 space-y-4 shadow-2xl">
          {["Page:Home", "About:About", "Skills:Skills", "Projects:Projects", "Contact:Contact"].map(
            (item) => {
              const [id, label] = item.split(":");
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left text-lg text-gray-200 hover:text-fuchsia-400 font-medium transition-colors border-b border-gray-700/50 pb-2 last:border-0"
                >
                  {label}
                </button>
              );
            }
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

