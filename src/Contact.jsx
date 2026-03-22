import React, { useEffect, useRef } from "react";
import { FaEnvelopeOpenText, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-info",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: el, start: "top 75%" } }
      );
      
      gsap.fromTo(".contact-form",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: el, start: "top 75%" } }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "06c52a07-7126-4f40-8b22-d6067c8cd0e6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("✅ Message sent successfully!");
    }
  };

  return (
    <div id="Contact" ref={containerRef} className="w-full min-h-screen bg-transparent relative overflow-hidden flex items-center justify-center py-20 px-6 sm:px-10 lg:px-20">
      
      {/* Background Decor */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[150px]"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Contact Info */}
        <div className="contact-info flex flex-col text-white w-full lg:w-5/12 space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-wide">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-8 mt-6">
            <div className="flex items-center group">
              <div className="w-14 h-14 glass flex items-center justify-center rounded-full mr-6 group-hover:bg-fuchsia-500/20 transition-colors">
                <FaEnvelopeOpenText size={22} className="text-fuchsia-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-1">Email</span>
                <a href="mailto:nikilkumarp89@gmail.com" className="text-lg text-gray-200 hover:text-fuchsia-400 transition-colors font-medium relative w-fit after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-fuchsia-400 after:transition-all after:duration-300 hover:after:w-full">
                  nikilkumarp89@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="w-14 h-14 glass flex items-center justify-center rounded-full mr-6 group-hover:bg-purple-500/20 transition-colors">
                <FaPhone size={22} className="text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-1">Phone</span>
                <span className="text-lg text-gray-200 font-medium">+91 8970092948</span>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="w-14 h-14 glass flex items-center justify-center rounded-full mr-6 group-hover:bg-fuchsia-500/20 transition-colors">
                <FaMapMarkedAlt size={22} className="text-fuchsia-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-1">Location</span>
                <span className="text-lg text-gray-200 font-medium leading-tight">
                  Hiremadure, Challakere,<br/> Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="contact-form w-full lg:w-7/12 glass rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-700/50 flex flex-col relative"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

          <h2 className="text-3xl font-bold text-white mb-8">
            Send me a message
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div className="flex flex-col w-full group">
              <label className="text-gray-300 font-medium mb-2 text-sm ml-1 group-focus-within:text-fuchsia-400 transition-colors">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="bg-[rgba(17,24,39,0.5)] border border-gray-600 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-400 transition-all placeholder-gray-500"
              />
            </div>

            <div className="flex flex-col w-full group">
              <label className="text-gray-300 font-medium mb-2 text-sm ml-1 group-focus-within:text-fuchsia-400 transition-colors">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="bg-[rgba(17,24,39,0.5)] border border-gray-600 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-400 transition-all placeholder-gray-500"
              />
            </div>
          </div>

          <div className="flex flex-col mb-8 group">
            <label className="text-gray-300 font-medium mb-2 text-sm ml-1 group-focus-within:text-fuchsia-400 transition-colors">Your Message</label>
            <textarea
              name="message"
              required
              placeholder="How can I help you?"
              rows="5"
              className="bg-[rgba(17,24,39,0.5)] border border-gray-600 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-400 transition-all placeholder-gray-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-400 hover:from-purple-600 hover:to-fuchsia-500 text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_20px_rgba(217,70,239,0.3)] hover:shadow-[0_15px_30px_rgba(217,70,239,0.4)] hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
