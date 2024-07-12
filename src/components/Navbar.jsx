import React from "react";
import { Link } from "react-scroll";
import { CiHome, CiPhone } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="scale-75 fixed bottom-0 w-full flex justify-center z-50 sm:scale-100">
        <div className="m-10 flex items-center justify-evenly rounded-full w-auto h-auto bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 p-[1.5px] hover:scale-125 transition-all duration-100 ease-in-out">
          <div className="bg-gray-900 h-full w-full rounded-full flex justify-center items-center hover:scale-125 transition-all duration-100 ease-in-out">
            <Link
              to="skill"
              smooth={true}
              duration={500}
              className="m-2 flex cursor-pointer items-center hover:bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 bg-opacity-50 h-8 w-8 rounded-full transition-all duration-100 ease-in-out "
            >
              <FaCode className="w-4 ml-2 z-10 hover:scale-125 transition-all duration-100 ease-in-out" />
            </Link>

            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="my-1 -ml-2 flex cursor-pointer items-center hover:bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 bg-opacity-50 h-8 w-8 rounded-full transition-all duration-100 ease-in-out "
            >
              <AiOutlineFundProjectionScreen className="w-full z-10 hover:scale-125 transition-all duration-100 ease-in-out" />
            </Link>

            <Link
              to="home"
              smooth={true}
              duration={500}
              className="m-1 flex cursor-pointer items-center hover:bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 bg-opacity-50 h-9 w-9 rounded-full transition-all duration-100 ease-in-out "
            >
              <CiHome className="w-full z-10 h-7 hover:scale-110" />
            </Link>

            <Link
              to="education"
              smooth={true}
              duration={500}
              className="my-1 -mr-2 flex cursor-pointer items-center hover:bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 bg-opacity-50 h-8 w-8 rounded-full transition-all duration-100 ease-in-out "
            >
              {" "}
              <GoPerson className="w-full z-10 hover:scale-125 transition-all duration-100 ease-in-out" />
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="m-2 flex cursor-pointer items-center hover:bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 bg-opacity-50 h-8 w-8 rounded-full transition-all duration-100 ease-in-out "
            >
              {" "}
              <CiPhone className="w-full z-10 hover:scale-125 transition-all duration-100 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
