"use client";
import useSectionInView from "@/hooks/useSection";
import { MdOutlineScience } from "react-icons/md";
import tilts from "./data/TiltData";
import TiltCard from "./components/TiltCard";
import Link from "next/link";

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
 <div className="row-span-2 md:col-span-3 "> <Link href={Gamehub.link}><TiltCard id={Gamehub.id} description={Gamehub.description} imageURL={Gamehub.imageURL} /> </Link>  </div>
 <div  className="row-span-2 md:col-span-3  "> <Link href={IssueTracker.link}><TiltCard id={IssueTracker.id} description={IssueTracker.description} imageURL={IssueTracker.imageURL} /> </Link>  </div>
 <div className="row-span-2 md:col-span-3 "><Link href={CountriesAPI.link}> <TiltCard id={CountriesAPI.id} description={CountriesAPI.description} imageURL={CountriesAPI.imageURL} />  </Link> </div>
 <div className="row-span-2  md:col-span-3 "> <Link href={CafeCharmant.link}><TiltCard id={CafeCharmant.id} description={CafeCharmant.description} imageURL={CafeCharmant.imageURL} />  </Link> </div>
 <div className="row-span-2 md:col-span-6 "> <Link href={MultiStep.link}><TiltCard id={MultiStep.id} description={MultiStep.description} imageURL={MultiStep.imageURL} />  </Link> </div>
 <div className="row-span-2 md:col-span-3 "> <Link href={NetflixClone.link}><TiltCard id={NetflixClone.id} description={NetflixClone.description} imageURL={NetflixClone.imageURL} />  </Link> </div>
 <div className="row-span-2 md:col-span-3 "> <Link href={MyPortfolio.link}><TiltCard id={MyPortfolio.id} description={MyPortfolio.description} imageURL={MyPortfolio.imageURL} /> </Link>  </div>
 <div className="md:col-span-3 "> <Link href={Robofriends.link}><TiltCard id={Robofriends.id} description={Robofriends.description} imageURL={Robofriends.imageURL} /> </Link>  </div>
</div>
    </section>
  );
};

export default LabTilt;
