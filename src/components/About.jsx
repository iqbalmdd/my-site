import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen overflow-hidden w-full relative z-2 bg-gray-800 flex flex-col md:flex-row"
    >
      <div className="h-1/2 w-full flex items-center justify-center md:h-screen md:w-1/2">
        Backend
      </div>
      <div className="h-1/2 w-full flex items-center justify-center md:h-screen md:w-1/2">
        Frontend
      </div>
    </section>
  );
};

export default About;
