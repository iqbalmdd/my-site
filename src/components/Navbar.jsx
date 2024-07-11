import React from "react";
import { CiHome, CiPhone } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full flex justify-center z-50">
        <div className="m-10 flex items-center justify-evenly rounded-full w-auto h-auto bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 p-[1.5px] hover:scale-125 transition-all duration-100 ease-in-out">
          <div className="bg-gray-900 h-full w-full rounded-full flex justify-center items-center hover:scale-125 transition-all duration-100 ease-in-out">
            <button className="m-2 hover:bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 bg-opacity-50 h-8 w-8 rounded-full transition-all duration-100 ease-in-out ">
            <GoPerson className="w-full z-10 hover:scale-125 transition-all duration-100 ease-in-out"/>
            </button>

            <button className="my-1 -ml-2 hover:bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 bg-opacity-50 h-8 w-8 rounded-full transition-all duration-100 ease-in-out ">
            <AiOutlineFundProjectionScreen className="w-full z-10 hover:scale-125 transition-all duration-100 ease-in-out"/>
            </button>
            
            <button className="my-1 mx-1 hover:bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 bg-opacity-50 h-8 w-8 rounded-full transition-all duration-100 ease-in-out hover:bg-opacity-100 ">
            <CiHome className="w-full z-10 scale-150"/>
            </button>
            
            <button className="my-1 -mr-2 hover:bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 bg-opacity-50 h-8 w-8 rounded-full transition-all duration-100 ease-in-out ">
            <IoSchoolOutline className="w-full z-10 hover:scale-125 transition-all duration-100 ease-in-out"/>
            </button>
            
            <button className="m-2 hover:bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 bg-opacity-50 h-8 w-8 rounded-full transition-all duration-100 ease-in-out ">
            <CiPhone className="w-full z-10 hover:scale-125 transition-all duration-100 ease-in-out"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
