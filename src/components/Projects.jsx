import React from "react";
import card1 from "../assets/card-1.svg";
import card2 from "../assets/card-2.svg";
import card3 from "../assets/card-3.svg";
import card4 from "../assets/card-4.svg";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-2 bg-gradient-to-b from-transparent via-indigo-950 flex flex-col md:flex-row items-center"
    >
      <div className="h-100% flex items-center justify-center sm:w-2/5">
        <img src={phone1} className="" />
        <img src={phone2} className="" />
        <img src={phone3} className="" />
      </div>
      <div className="grid grid-cols-1 p-4 align-middle justify-items-center sm:grid-cols-1 sm:w-3/5 lg:grid-cols-2">
        {/* Projects 1 */}
        <div
          className="m-2 block relative p-1 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
          style={{ backgroundImage: `url(${card1})` }}
        >
          <div className="relative z-2 -mb-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
            <h1 className="text-3xl mb-2">Smart Laundry</h1>
            <p>
            Smart Laundry is an application designed for laundry business owners to streamline and automate their operations. 
            It allows users to maintain financial records, manage customers, track orders, schedule pickups and deliveries, 
            manage inventory, and generate detailed reports.
            </p>
          </div>
        </div>
        {/* Projects 2 */}
        <div
          className="m-2 block relative p-5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
          style={{ backgroundImage: `url(${card2})` }}
        >
          <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
            <h1 className="text-3xl">Projects Section 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio neque quidem, sed quibusdam dolorem minima nostrum
              recusandae? Sequi, fugit blanditiis.
            </p>
          </div>
        </div>
        {/* Projects 3 */}
        <div
          className="m-2 block relative p-5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
          style={{ backgroundImage: `url(${card3})` }}
        >
          <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
            <h1 className="text-3xl">Projects Section 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio neque quidem, sed quibusdam dolorem minima nostrum
              recusandae? Sequi, fugit blanditiis.
            </p>
          </div>
        </div>
        {/* Projects 4 */}
        <div
          className="m-2 block relative p-5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
          style={{ backgroundImage: `url(${card4})` }}
        >
          <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
            <h1 className="text-3xl">Projects Section 4</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio neque quidem, sed quibusdam dolorem minima nostrum
              recusandae? Sequi, fugit blanditiis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
