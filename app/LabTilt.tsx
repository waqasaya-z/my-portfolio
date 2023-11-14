"use client";
import React, { Suspense, useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { MdOutlineScience } from "react-icons/Md";
import Image, { StaticImageData } from "next/image";
import tilts from "./data/TiltData";
import Loading from "./components/Loading";

const LabTilt = () => {

  const { CafeCharmant, CountriesAPI,Gamehub,IssueTracker,MultiStep,MyPortfolio,NetflixClone,Robofriends } = tilts
  return (
    <section className="border border-black text-center p-6" id="lab" >
      <h1 className="text-white text-3xl font-semibold text-center inline-flex">
        {" "}
        Laboratory{" "}
        <span className="mt-1">
          {" "}
          <MdOutlineScience />{" "}
        </span>{" "}
      </h1>
      <div className="grid grid-rows-6 m-2 grid-flow-col gap-2 border border-black">
 <div className="row-span-2 col-span-3 border border-black"> <Suspense fallback={<Loading />}><TiltCard id={Gamehub.id} description={Gamehub.description} imageURL={Gamehub.imageURL} /> </Suspense> </div>
 <div  className="row-span-2 col-span-3  border border-black"> <TiltCard id={IssueTracker.id} description={IssueTracker.description} imageURL={IssueTracker.imageURL} /> </div>
 <div className="row-span-2 col-span-3 border border-black"> <TiltCard id={CountriesAPI.id} description={CountriesAPI.description} imageURL={CountriesAPI.imageURL} /> </div>
 <div className="row-span-2  col-span-3 border border-black"> <TiltCard id={CafeCharmant.id} description={CafeCharmant.description} imageURL={CafeCharmant.imageURL} /> </div>
 <div className="row-span-2 col-span-6 border border-black"> <TiltCard id={MultiStep.id} description={MultiStep.description} imageURL={MultiStep.imageURL} /> </div>
 <div className="row-span-2 col-span-3 border border-black"> <TiltCard id={NetflixClone.id} description={NetflixClone.description} imageURL={NetflixClone.imageURL} /> </div>
 <div className="row-span-2 col-span-3 border border-black"> <TiltCard id={MyPortfolio.id} description={MyPortfolio.description} imageURL={MyPortfolio.imageURL} /> </div>
 <div className="col-span-3 border border-black"> <TiltCard id={Robofriends.id} description={Robofriends.description} imageURL={Robofriends.imageURL} /> </div>
</div>
    </section>
  );
};

const TiltCard = ({
  imageURL,
  description,
  id
}: {
  imageURL: StaticImageData;
  description: string;
  id: number;
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

  const handleMouseMove = (e: any) => {
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
      className="relative h-56 max-w-md "
    >
      <div className="">
        <div
          className="text-white text-2xl font-semibold relative top-20 right-7 z-10 w-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
"
        >
          <h1 className="stroke-black">{description} </h1>

          <div className="border-b-2 border-white w-20 h-4 mx-auto my-4"></div>
          <h2> 0{id} </h2>
        </div>{" "}
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
