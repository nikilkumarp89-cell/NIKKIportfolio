import React from 'react';

const About = () => {
  return (
    <div id='About' className="w-full min-h-screen flex flex-col bg-gray-800">
     
      <h1 id="block" className="text-4xl sm:text-5xl font-bold text-white flex justify-center items-center pt-16 text-center">
        About <span className="text-blue-600 ml-2">Us</span>
      </h1>

      
      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 px-6 sm:px-10 lg:px-10 gap-30">
       
        <div id="block3" className="flex justify-center ">
          <img
            id="ran2"
            className="w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full border-4 border-blue-600 shadow-lg object-cover"
            src="retouch_20250903133463886.jpg.jpeg"
            alt="Profile"
          />
        </div>

       
        <div className="flex flex-col text-center lg:text-left max-w-2xl">
          <h2 id="block" className="text-xl sm:text-2xl font-bold text-blue-500 mb-4">
            Front-End Developer
          </h2>
          <p
            //id="nikki"
            id="block1"
            className="text-white text-base sm:text-lg leading-relaxed"
          >
            “I am a passionate and motivated{' '}
            <span className="font-semibold underline">Front-End Developer</span>{' '}
            with a strong foundation in{' '}
            <span className="font-semibold underline">HTML</span>,{' '}
            <span className="font-semibold underline">CSS</span>,{' '}
            <span className="font-semibold underline">JavaScript</span>,{' '}
            <span className="font-semibold underline">Tailwind CSS</span>, and{' '}
            <span className="font-semibold underline">React</span>. I enjoy
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
