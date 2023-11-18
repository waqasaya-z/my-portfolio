"use client";
import useSectionInView from "@/hooks/useSection";
import { MdOutlineScience } from "react-icons/md";
import tilts from "./data/TiltData";
import TiltCard from "./components/TiltCard";

const LabTilt = () => {
  const {ref} = useSectionInView("Lab");
  const { CafeCharmant, CountriesAPI,Gamehub,IssueTracker,MultiStep,MyPortfolio,NetflixClone,Robofriends } = tilts
  
  return (
    <section ref={ref} className="text-center p-6" id="lab" >
      <h1 className="text-white text-4xl font-semibold text-center inline-flex mb-10">
        {" "}
        Laboratory{" "}
        <span className="mt-1">
          {" "}
          <MdOutlineScience />{" "}
        </span>{" "}
      </h1>
      <div className="grid md:grid-rows-6 md:grid-flow-col gap-4 ">
 <div className="row-span-2 md:col-span-3 "> <TiltCard id={Gamehub.id} description={Gamehub.description} imageURL={Gamehub.imageURL} /> </div>
 <div  className="row-span-2 md:col-span-3  "> <TiltCard id={IssueTracker.id} description={IssueTracker.description} imageURL={IssueTracker.imageURL} /> </div>
 <div className="row-span-2 md:col-span-3 "> <TiltCard id={CountriesAPI.id} description={CountriesAPI.description} imageURL={CountriesAPI.imageURL} /> </div>
 <div className="row-span-2  md:col-span-3 "> <TiltCard id={CafeCharmant.id} description={CafeCharmant.description} imageURL={CafeCharmant.imageURL} /> </div>
 <div className="row-span-2 md:col-span-6 "> <TiltCard id={MultiStep.id} description={MultiStep.description} imageURL={MultiStep.imageURL} /> </div>
 <div className="row-span-2 md:col-span-3 "> <TiltCard id={NetflixClone.id} description={NetflixClone.description} imageURL={NetflixClone.imageURL} /> </div>
 <div className="row-span-2 md:col-span-3 "> <TiltCard id={MyPortfolio.id} description={MyPortfolio.description} imageURL={MyPortfolio.imageURL} /> </div>
 <div className="md:col-span-3 "> <TiltCard id={Robofriends.id} description={Robofriends.description} imageURL={Robofriends.imageURL} /> </div>
</div>
    </section>
  );
};

export default LabTilt;
