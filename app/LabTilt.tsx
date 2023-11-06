"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MdOutlineScience } from "react-icons/Md";
import Image, { StaticImageData } from "next/image";
import MultiStep from "@/public/Multistep form - Google Chrome 03_09_2023 6_59_23 pm.png";
import Gamehub from "@/public/GameHub - Google Chrome 03_09_2023 5_34_32 pm.png";
import CountriesAPI from "@/public/Countries of the World - Google Chrome 03_09_2023 6_14_04 pm.png";

const tilts = [
  { id: 0, imageURL: MultiStep, description: "Multistep form" },
  { id: 1, imageURL: Gamehub, description: " Gamehub " },
  { id: 2, imageURL: CountriesAPI, description: "REST Countries" }
];

const LabTilt = () => {
  return (
    <div className=" mt-40 text-center">
      <h1 className="text-white text-3xl text-center inline-flex">
        {" "}
        Laboratory{" "}
        <span className="mt-1">
          {" "}
          <MdOutlineScience />{" "}
        </span>{" "}
      </h1>
      <div className="grid grid-cols-2 place-content-center px-4 py-12">
        {tilts.map((tilt) => (
          <TiltCard key={tilt.id} imageURL={tilt.imageURL} description={tilt.description} id={tilt.id}  />
        ))}
      </div>
    </div>
  );
};

const TiltCard = ({
  imageURL,
  description,
  id
}: {
  imageURL: StaticImageData;
  description: string;
  id: number
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d"
      }}
      className="relative h-56 max-w-md rounded-xl "
    >
      <div className="shadow-black shadow-lg">
       <div className="text-white text-2xl font-medium absolute top-20 mr-14 z-10 w-10">
        <h1>
          {description}{" "}
        </h1>
        <div className="border-b-2 border-white w-20 h-4 mx-auto my-4"></div>
         <h2 > 0{id} </h2>
       </div>
          {" "}
        <Image
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d"
          }}
          className=" absolute inset-4 grid bg-cover place-content-center rounded-xl bg-white shadow-lg z-0"
          src={imageURL}
          alt="Project"
        />
      </div>
    </motion.div>
  );
};

export default LabTilt;
