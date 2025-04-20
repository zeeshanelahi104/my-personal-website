import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Specialist Front-end Developer.",
      "MERN Stack Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I&apos;m{" "}
          <span className="text-designColor capitalize">Zeeshan Elahi</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          A <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#F20000"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I&apos;m a front-end specialist and MERN stack developer. I use captivating
          animations to make designs come alive and create seamless user
          experiences. I&apos;m skilled in HTML, CSS, JavaScript, React JS, Material
          UI, and more, which helps me build visually appealing and functional
          digital platforms. I&apos;m experienced in the MERN stack, allowing me to
          create interactive applications with dynamic data. I also work with
          Firebase for real-time solutions, combining technical know-how with
          creativity to bring your digital ideas to life.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
