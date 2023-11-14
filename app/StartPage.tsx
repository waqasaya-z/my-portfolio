"use client";
import { useState, useEffect, Suspense } from "react";
import TextTransition, { presets } from "react-text-transition";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsDownload } from "react-icons/bs";
import Loading from "./components/Loading";
import Link from "next/link";

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
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section id="start">
   <div className="border border-black h-screen text-white text-4xl flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold">
        {" "}
        Hi, my name is <span className="text-[#5918df]"> Waqas Ayaz </span>{" "}
      </h1>
      <h2 className="flex gap-2 text-3xl font-semibold">
        {" "}
        I am a{" "}
       
     <TextTransition className="italic" springConfig={presets.molasses}>
          {TEXTS[index % TEXTS.length]}{" "}
        </TextTransition>{" "}
        
        Developer.{" "}
      </h2>
      <div className="text-base flex items-center mt-4 font-medium">
          <Link href="#contact">
        <button className="flex mr-4 items-center justify-center border border-purple-950 rounded-lg p-2 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg hover:border-[#5918df] duration-300 ease-in-out">
          Contact Me here{" "}
          <span className="ml-2">
            {" "}
            <FaArrowRightLong />{" "}
          </span>{" "}
        </button>
          </Link>
        <a  download href="./" className="flex items-center justify-center transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out">
          {" "}
          Download CV{" "}
          <span className="ml-2">
            {" "}
            <BsDownload />{" "}
          </span>{" "}
        </a>
      </div>
    </div>
    </section>
  );
};

export default StartPage;
