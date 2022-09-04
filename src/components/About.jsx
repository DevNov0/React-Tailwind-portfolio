import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a man from a small village and I finished high school a year ago.
          For a long time I did not know which direction I would go, but towards the end of
          my studies I discovered a passion for design and web development.
        </p>

        <br />

        <p className="text-xl">
        I don't currently have any previous jobs, but I work on myself and try to
         gain new experiences every day.
         In my free time I like to go to the gym and practice boxing to keep my body in good shape.
        </p>
      </div>
    </div>
  );
};

export default About;
