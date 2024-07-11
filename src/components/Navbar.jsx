import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full flex justify-center z-50">
        <div className="m-10 flex items-center justify-center rounded-full w-32 h-10 bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 p-[2.5px]">
          <div className="bg-gray-900 h-full w-full rounded-full flex justify-center items-center">
            NAVBAR
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
