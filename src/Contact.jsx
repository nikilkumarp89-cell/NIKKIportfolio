import React from "react";
import { FaEnvelopeOpenText, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
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
    <div id="Contact" className="w-full min-h-screen bg-gray-800 flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py-12 gap-12">
      
      <div className="flex flex-col text-white w-full lg:w-1/2 space-y-6">
        <h2 id="block1" className="text-3xl font-bold text-blue-500">Let's Connect</h2>
        

        <div  id="block1" className="space-y-4 mt-4">
          <div>
            <FaEnvelopeOpenText id="block" className="inline-block text-green-400 mr-2" />
            <a
             
              href="mailto:nikilkumarp89@gmail.com"
              className="hover:underline text-gray-200"
            >
              nikilkumarp89@gmail.com
            </a>
          </div>

          <div>
            <FaPhone  className="inline-block text-green-400 mr-2" />
            <span  className="text-gray-200">+91 8970092948</span>
          </div>

          <div>
            <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
            <span  className="text-gray-200">
              Hiremadure, Challakere, Karnataka, India
            </span>
          </div>
        </div>
      </div>

      
      <form
      id="block1"
        onSubmit={onSubmit}
        className="w-full lg:w-1/2 bg-gray-700 bg-opacity-40 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
          Contact <span className="text-blue-500">Me</span>
        </h2>

      
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col w-full">
            <label className="text-white font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="bg-gray-600 text-white mt-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-white font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="bg-gray-600 text-white mt-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

       
        <div className="flex flex-col mt-6">
          <label className="text-white font-semibold">Message</label>
          <textarea
            name="message"
            required
            placeholder="Enter your message"
            rows="5"
            className="bg-gray-600 text-white mt-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-2 px-6 rounded-xl shadow-md"
          >
            Send
          </button>
        </div>
      </form>

      
    </div>
  );
};

export default Contact;
