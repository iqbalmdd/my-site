import React from "react";

const Skill = () => {
  return (
    <section
      id="skill"
      className="h-screen overflow-hidden w-full relative z-2 bg-gradient-to-b from-black via-indigo-950 flex flex-col md:flex-row"
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

export default Skill;
