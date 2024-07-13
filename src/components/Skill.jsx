import React, { useState, useRef, useEffect } from "react";
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TbBrandCSharp } from "react-icons/tb";

const Skill = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef([]);

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    accordionRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          openAccordion === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openAccordion]);

  const skills = [
    {
      id: 1,
      title: "Java",
      icon: <FaJava />,
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      id: 2,
      title: "JavaScript",
      icon: <TbBrandJavascript />,
      content:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nulla, sint nobis beatae corrupti placeat assumenda deleniti nisi adipisci reprehenderit possimus, nostrum autem rerum aspernatur pariatur reiciendis sed mollitia? Quae architecto nobis expedita distinctio placeat, officiis, deserunt inventore asperiores minus voluptatum ipsa temporibus, incidunt dolorum nam ut numquam hic quas quos eligendi aut. Inventore fugiat excepturi facilis, totam sapiente iusto aliquid ipsum facere voluptatibus earum magnam nostrum fuga dolorum distinctio veniam consequatur deserunt unde amet laudantium alias commodi rerum, libero sunt. Ea nemo eius molestias laudantium nulla enim neque debitis error, harum, adipisci vitae, commodi quo iste explicabo! Quasi, quidem? ",
    },
    {
      id: 3,
      title: "C#",
      icon: <TbBrandCSharp />,
      content:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nulla, sint nobis beatae corrupti placeat assumenda deleniti nisi adipisci reprehenderit possimus, nostrum autem rerum aspernatur pariatur reiciendis sed mollitia? Quae architecto nobis expedita distinctio placeat, officiis, deserunt inventore asperiores minus voluptatum ipsa temporibus, incidunt dolorum nam ut numquam hic quas quos eligendi aut. Inventore fugiat excepturi facilis, totam sapiente iusto aliquid ipsum facere voluptatibus earum magnam nostrum fuga dolorum distinctio veniam consequatur deserunt unde amet laudantium alias commodi rerum, libero sunt. Ea nemo eius molestias laudantium nulla enim neque debitis error, harum, adipisci vitae, commodi quo iste explicabo! Quasi, quidem? ",
    },
  ];

  return (
    <section
      id="skill"
      className="h-auto p-8 overflow-hidden w-full relative z-2 bg-gradient-to-b from-black via-indigo-950 flex flex-col md:flex-row"
    >
      <div className="h-1/2 w-full flex flex-col items-center justify-start md:h-screen md:w-1/2">
        <h1 className="mt-5 font-code font-semibold text-4xl">Backend</h1>
        <ul className="mt-11 sm:ml-52 flex flex-col w-full items-start">
          {skills.map((item, index) => (
            <React.Fragment key={item.id}>
              <li
                className="my-2 w-full flex sm:w-2/3 items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openAccordion === index}
                aria-controls={`accordion-color-body-${item.id}`}
              >
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-lg p-3 border-2 border-pink-600">
                    {React.cloneElement(item.icon, {
                      className: "w-full h-full",
                    })}
                  </div>
                  <span className="ml-8 text-xl font-grotesk">
                    {item.title}
                  </span>
                </div>
                <MdOutlineArrowDropDown
                  className={`transition-transform ${
                    openAccordion === index ? "rotate-180" : ""
                  }`}
                />
              </li>
              <div
                id={`accordion-color-body-${item.id}`}
                ref={(el) => (accordionRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out w-2/3"
                aria-labelledby={`accordion-color-heading-${item.id}`}
                style={{
                  maxHeight:
                    openAccordion === index
                      ? `${accordionRefs.current[index]?.scrollHeight}px`
                      : "0px",
                }}
              >
                <div className="p-5">
                  <p className="mb-2 w-full text-gray-400">
                    {item.content}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="h-1/2 w-full flex items-center justify-center md:h-screen md:w-1/2">
        Frontend
      </div>
    </section>
  );
};

export default Skill;
