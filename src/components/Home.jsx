import React from "react";
import backgroundImage from "../assets/hero-background.jpg";
import grid from "../assets/grid.png";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      ></div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 2,
          opacity: 0.5,
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-3xl sm:text-7xl font-code font-bold mb-4">
          Hello, I'm Iqbal
        </h1>
        <h1 className="text-2xl sm:text-7xl font-code font-semibold">
          I'm a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500">
            FullStack Developer
          </span>
        </h1>
        <p className="mx-6 text-sm font-medium sm:text-xl mt-4 max-w-3xl font-grotesk">
          I am a programmer committed to staying updated with cutting-edge
          technologies. I specialize in creating maintainable and debuggable code
          structures that ensure efficient development and scalability.
        </p>
      </div>
    </section>
  );
};

export default Home;
