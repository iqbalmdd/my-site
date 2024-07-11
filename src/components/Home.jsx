import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-gray-700 text-center"
    >
      <h1 className="text-3xl sm:text-7xl font-code font-bold mb-4">
        Hello, I'm Iqbal
      </h1>
      <h1 className="text-3xl sm:text-7xl font-code font-semibold">
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
    </section>
  );
};

export default Home;
