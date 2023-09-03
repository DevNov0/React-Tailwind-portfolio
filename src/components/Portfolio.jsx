import React from "react";
import layout from "../assets/portfolio/layout.png";
import passwordGenerator from "../assets/portfolio/password.PNG";
import emailTemplate from "../assets/portfolio/emailTemplate.PNG";
import lanqLayout from "../assets/portfolio/lanq.PNG";
import todoList from "../assets/portfolio/todo.PNG";
import stavebninyTanvald from "../assets/portfolio/stavebniny.PNG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: layout,
      href: "https://whimsical-halva-5727fe.netlify.app/",
      code: "https://github.com/DevNov0/tailwind-layout",
    },
    {
      id: 2,
      src: lanqLayout,
      href: "https://clever-otter-ee601f.netlify.app/",
      code: "https://github.com/DevNov0/lanq-css-layout",
    },
    {
      id: 3,
      src: emailTemplate,
      href: "https://spectacular-rugelach-23ade8.netlify.app",
      code: "https://github.com/DevNov0/email-template",
    },
    {
      id: 4,
      src: passwordGenerator,
      href: "https://dreamy-sprite-998c1e.netlify.app/",
      code: "https://github.com/DevNov0/Password-generator",
    },
    {
      id: 5,
      src: todoList,
      href: "https://singular-babka-51f57c.netlify.app/",
      code: "https://github.com/DevNov0/Todo-list",
    },
    {
      id: 6,
      src: stavebninyTanvald,
      href: "https://stavebniny-tanvald.cz/",
      code: "",
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Here is an overview of the projects I worked on</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={href} className="">
                <button className="w-1/2 px-6 py-0 my-0 duration-200 hover:scale-105">Demo</button>
              </a>
                <a href={code}>
                  <button className="w-1/2 px-6 py-3 my-0 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
