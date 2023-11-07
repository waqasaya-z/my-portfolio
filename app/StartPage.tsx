"use client";
import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import {FaArrowRightLong} from 'react-icons/fa6'
import { BsDownload } from 'react-icons/bs'

const TEXTS = [
  "Reactjs",
  "Nextjs",
  "Vite",
  "Web",
  "TypeScript",
  "Full Stack",
  "JavaScript",
  "Nodejs"
];

const StartPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="border border-black h-screen text-white font-medium text-4xl flex flex-col justify-center items-center">
      <h1>
        {" "}
        Hi, My name is <span className="text-[#5918df]"> Waqas Ayaz </span>{" "}
      </h1>
      <h2 className="flex gap-2">
        {" "}
        I am a{" "}
        <TextTransition className="italic" springConfig={presets.molasses}>
          {TEXTS[index % TEXTS.length]}{" "}
        </TextTransition>{" "}
        Developer.{" "}
      </h2>
      <div className="text-base flex items-center mt-4">
        <button className="flex mr-4 items-center justify-center border border-purple-950 rounded-lg p-2 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"> Contact Me here <span className="ml-2"> <FaArrowRightLong /> </span>  </button>
        <button className="flex items-center justify-center transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"> Download CV <span className="ml-2"> <BsDownload /> </span>  </button>
      </div>
    </div>
  );
};

export default StartPage;
