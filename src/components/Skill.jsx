import React, { useState, useRef, useEffect } from "react";
import { FaJava, FaReact, FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TbBrandCSharp } from "react-icons/tb";
import { SiTailwindcss, SiMysql, SiPostgresql } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { IoLogoCss3 } from "react-icons/io";
import check from "../assets/check.svg";

const Skill = () => {
  const [openAccordionBE, setOpenAccordionBE] = useState(0);
  const [openAccordionFE, setOpenAccordionFE] = useState(0);
  const accordionRefsBE = useRef([]);
  const accordionRefsFE = useRef([]);

  const toggleAccordionBE = (id) => {
    setOpenAccordionBE((prev) => (prev === id ? null : id));
  };
  const toggleAccordionFE = (id) => {
    setOpenAccordionFE((prev) => (prev === id ? null : id));
  };

  /* Backend */
  useEffect(() => {
    accordionRefsBE.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          openAccordionBE === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openAccordionBE]);

  /* Frontend */
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
      content: [
        { id: 1, text: "RESTful API" },
        { id: 2, text: "Authentication using JWT" },
        { id: 3, text: "Validation" },
        { id: 4, text: "Sorting" },
        { id: 5, text: "Paging" },
        { id: 6, text: "Common Response" },
      ],
    },
    {
      id: 2,
      title: "JavaScript",
      icon: <TbBrandJavascript />,
      content: [
        { id: 1, text: "RESTful API" },
        { id: 2, text: "Authentication using JWT" },
        { id: 3, text: "Validation" },
        { id: 4, text: "Sorting" },
        { id: 5, text: "Paging" },
        { id: 6, text: "Common Response" },
      ],
    },
    {
      id: 3,
      title: "C#",
      icon: <TbBrandCSharp />,
      content: [
        { id: 1, text: "RESTful API" },
        { id: 2, text: "Authentication using JWT" },
        { id: 3, text: "Validation" },
        { id: 4, text: "Sorting" },
        { id: 5, text: "Paging" },
        { id: 6, text: "Common Response" },
      ],
    },
    {
      id: 4,
      title: "MySQL",
      icon: <SiMysql />,
      content: [
        { id: 1, text: "Nested Queries" },
        { id: 2, text: "Complex Join Tables" },
        { id: 3, text: "Data Validation" },
        { id: 4, text: "Sorting and Filtering Data" },
        { id: 5, text: "Performance Optimization" },
        { id: 6, text: "Database Indexing" },
      ],
    },
    {
      id: 5,
      title: "PostgreSQL",
      icon: <SiPostgresql />,
      content: [
        { id: 1, text: "Nested Queries" },
        { id: 2, text: "Complex Join Tables" },
        { id: 3, text: "Data Validation" },
        { id: 4, text: "Sorting and Filtering Data" },
        { id: 5, text: "Performance Optimization" },
        { id: 6, text: "Database Indexing" },
      ],
    },
  ];

  const skillsFE = [
    {
      id: 1,
      title: "React",
      icon: <FaReact />,
      content: [
        { id: 1, text: "State & Hooks" },
        { id: 2, text: "Redux" },
        { id: 3, text: "React Router" },
        { id: 4, text: "Axios" },
        { id: 5, text: "Component Lifecycle" },
        { id: 6, text: "Context API" },
      ],
    },
    {
      id: 2,
      title: "Tailwind",
      icon: <SiTailwindcss />,
      content: [
        { id: 1, text: "Utility-First Design" },
        { id: 2, text: "Responsive Design" },
        { id: 3, text: "Custom Themes" },
        { id: 4, text: "Plugins" },
        { id: 5, text: "Purging Unused CSS" },
        { id: 6, text: "Flexbox & Grid" },
      ],
    },
    {
      id: 3,
      title: "Bootstrap",
      icon: <BsBootstrap />,
      content: [
        { id: 1, text: "Grid System" },
        { id: 2, text: "Responsive Utilities" },
        { id: 3, text: "Custom Components" },
        { id: 4, text: "Themes" },
        { id: 5, text: "JavaScript Plugins" },
        { id: 6, text: "Form Controls" },
      ],
    },
    {
      id: 4,
      title: "HTML",
      icon: <FaHtml5 />,
      content: [
        { id: 1, text: "Semantic HTML" },
        { id: 2, text: "Forms and Validation" },
        { id: 3, text: "Canvas and SVG" },
        { id: 4, text: "Local Storage" },
        { id: 5, text: "Web Accessibility" },
        { id: 6, text: "SEO Best Practices" },
      ],
    },
    {
      id: 5,
      title: "CSS",
      icon: <IoLogoCss3 />,
      content: [
        { id: 1, text: "Flexbox" },
        { id: 2, text: "Animations and Transitions" },
        { id: 3, text: "Grid Layout" },
        { id: 4, text: "Responsive Design" },
        { id: 5, text: "CSS Variables" },
        { id: 6, text: "Preprocessors (Sass, LESS)" },
      ],
    },
  ];
  

  return (
    <section
      id="skill"
      className="h-auto mb-28 p-8 overflow-hidden w-full relative z-2 bg-gradient-to-b from-black via-indigo-950 flex flex-col md:flex-row"
    >
      {/* Backend */}
      <div className="h-1/2 w-full flex flex-col items-center justify-start md:h-auto md:w-1/2">
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
                  <span
                    className={`ml-8 text-xl font-grotesk ${
                      openAccordionBE === index
                        ? "text-pink-500 font-semibold"
                        : ""
                    }`}
                  >
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
                className="overflow-hidden transition-all duration-500 ease-in-out w-screen sm:w-2/3"
                aria-labelledby={`accordion-color-heading-${item.id}`}
                style={{
                  maxHeight:
                    openAccordionBE === index
                      ? `${accordionRefsBE.current[index]?.scrollHeight}px`
                      : "0px",
                }}
              >
                <div className="p-5 -mt-6 md:grid md:grid-cols-2 ml-9 w-9/12 sm:w-full">
                  {item.content.map((itemContent) => (
                    <div
                      key={itemContent.id}
                      className="my-2 -ml-2 flex items-center"
                    >
                      <img
                        src={check}
                        className="w-4 h-4 mr-2"
                        alt="check icon"
                      />
                      <p className="ml-2">{itemContent.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </ul>
      </div>
      {/* Frontend */}
      <div className="h-1/2 w-full flex flex-col items-center justify-start md:h-auto md:w-1/2">
        <h1 className="mt-5 font-code font-semibold text-4xl">FrontEnd</h1>
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
                  <span
                    className={`ml-8 text-xl font-grotesk ${
                      openAccordionFE === index
                        ? "text-pink-500 font-semibold"
                        : ""
                    }`}
                  >
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
                className="overflow-hidden transition-all duration-500 ease-in-out w-screen sm:w-2/3"
                aria-labelledby={`accordion-color-heading-${item.id}`}
                style={{
                  maxHeight:
                    openAccordionFE === index
                      ? `${accordionRefsFE.current[index]?.scrollHeight}px`
                      : "0px",
                }}
              >
                <div className="p-5 -mt-6 md:grid md:grid-cols-2 ml-9 w-9/12 sm:w-full">
                  {item.content.map((itemContent) => (
                    <div
                      key={itemContent.id}
                      className="my-2 -ml-2 flex items-center"
                    >
                      <img
                        src={check}
                        className="w-4 h-4 mr-2"
                        alt="check icon"
                      />
                      <p className="ml-2">{itemContent.text}</p>
                    </div>
                  ))}
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
