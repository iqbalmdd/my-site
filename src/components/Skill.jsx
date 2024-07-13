import React, { useState, useRef, useEffect } from "react";
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TbBrandCSharp } from "react-icons/tb";

const Skill = () => {
  const [openAccordionBE, setOpenAccordionBE] = useState(null);
  const [openAccordionFE, setOpenAccordionFE] = useState(null);
  const accordionRefsBE = useRef([]);
  const accordionRefsFE = useRef([]);

  const toggleAccordionBE = (id) => {
    setOpenAccordionBE((prev) => (prev === id ? null : id));
  };
  const toggleAccordionFE = (id) => {
    setOpenAccordionFE((prev) => (prev === id ? null : id));
  };
  {/* Backend */}
  useEffect(() => {
    accordionRefsBE.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          openAccordionBE === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openAccordionBE]);
  {/* Frontend */}
  useEffect(() => {
    accordionRefsFE.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          openAccordionFE === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openAccordionFE]);

  const skillsBE = [
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

  const skillsFE = [
    {
      id: 1,
      title: "React",
      icon: <FaJava />,
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      id: 2,
      title: "React Redux",
      icon: <TbBrandJavascript />,
      content:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nulla, sint nobis beatae corrupti placeat assumenda deleniti nisi adipisci reprehenderit possimus, nostrum autem rerum aspernatur pariatur reiciendis sed mollitia? Quae architecto nobis expedita distinctio placeat, officiis, deserunt inventore asperiores minus voluptatum ipsa temporibus, incidunt dolorum nam ut numquam hic quas quos eligendi aut. Inventore fugiat excepturi facilis, totam sapiente iusto aliquid ipsum facere voluptatibus earum magnam nostrum fuga dolorum distinctio veniam consequatur deserunt unde amet laudantium alias commodi rerum, libero sunt. Ea nemo eius molestias laudantium nulla enim neque debitis error, harum, adipisci vitae, commodi quo iste explicabo! Quasi, quidem? ",
    },
    {
      id: 3,
      title: "React Router",
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
      {/* Backend */}
      <div className="h-1/2 w-full flex flex-col items-center justify-start md:h-screen md:w-1/2">
        <h1 className="mt-5 font-code font-semibold text-4xl">Backend</h1>
        <ul className="mt-11 sm:ml-52 flex flex-col w-full items-start">
          {skillsBE.map((item, index) => (
            <React.Fragment key={item.id}>
              <li
                className="my-2 w-full flex sm:w-2/3 items-center justify-between cursor-pointer"
                onClick={() => toggleAccordionBE(index)}
                aria-expanded={openAccordionBE === index}
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
                    openAccordionBE === index ? "rotate-180" : ""
                  }`}
                />
              </li>
              <div
                id={`accordion-color-body-${item.id}`}
                ref={(el) => (accordionRefsBE.current[index] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out w-2/3"
                aria-labelledby={`accordion-color-heading-${item.id}`}
                style={{
                  maxHeight:
                    openAccordionBE === index
                      ? `${accordionRefsBE.current[index]?.scrollHeight}px`
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
      {/* Frontend */}
      <div className="h-1/2 w-full flex flex-col items-center justify-start md:h-screen md:w-1/2">
        <h1 className="mt-5 font-code font-semibold text-4xl">Frontend</h1>
        <ul className="mt-11 sm:ml-52 flex flex-col w-full items-start">
          {skillsFE.map((item, index) => (
            <React.Fragment key={item.id}>
              <li
                className="my-2 w-full flex sm:w-2/3 items-center justify-between cursor-pointer"
                onClick={() => toggleAccordionFE(index)}
                aria-expanded={openAccordionFE === index}
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
                    openAccordionFE === index ? "rotate-180" : ""
                  }`}
                />
              </li>
              <div
                id={`accordion-color-body-${item.id}`}
                ref={(el) => (accordionRefsFE.current[index] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out w-2/3"
                aria-labelledby={`accordion-color-heading-${item.id}`}
                style={{
                  maxHeight:
                    openAccordionFE === index
                      ? `${accordionRefsFE.current[index]?.scrollHeight}px`
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
    </section>
  );
};

export default Skill;
