"use client";
import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Reactjs",
  "Nextjs",
  "Vite",
  "Web",
  "TypeScript",
  "Full Stack",
  "JavaScript",
  "Good"
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
    </div>
  );
};

export default StartPage;
