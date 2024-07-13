import React from "react";
import { FaJava } from "react-icons/fa6";

const Skill = () => {
  return (
    <section
      id="skill"
      className="h-screen overflow-hidden w-full relative z-2 bg-gradient-to-b from-black via-indigo-950 flex flex-col md:flex-row"
    >
      <div className="h-1/2 w-full flex flex-col items-center justify-start md:h-screen md:w-1/2">
        <h1 className="mt-5 font-code font-semibold text-4xl">Backend</h1>
        <ul className="mt-11 ml-52 flex w-full items-start">
          <li className="flex items-center">
            <div className="w-14 h-14 rounded-lg p-[1.5px] bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500">
              <div className="bg-gray-950 h-full w-full rounded-lg flex justify-center items-center"></div>
            </div>
            <p className="ml-8 text-xl font-grotesk">Java</p>
          </li>
        </ul>
      </div>
      <div className="h-1/2 w-full flex items-center justify-center md:h-screen md:w-1/2">
        Frontend
      </div>
    </section>
  );
};

export default Skill;
