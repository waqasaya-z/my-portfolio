"use client";
import TiltCard from "../../app/components/TiltCard";
import tilts from "../../app/data/TiltData";
import useSectionInView from "@/hooks/useSection";
import { MdOutlineScience } from "react-icons/md";
import Link from "next/link";
import { ILabTranslation } from "@/types/app.types";

const LabTilt = ({ pageData }: { pageData: ILabTranslation }) => {
  const { ref } = useSectionInView("lab");
  const {
    CafeCharmant,
    CountriesAPI,
    Gamehub,
    IssueTracker,
    MultiStep,
    MyPortfolio,
    NetflixClone,
    Robofriends
  } = tilts;

  return (
    <section ref={ref} className="text-center p-6" id="lab">
      <h1 className="text-white text-4xl font-semibold text-center inline-flex mb-10">
        {pageData.sectionTitle}
        <span className="mt-1">
          <MdOutlineScience />
        </span>
      </h1>
      <div className="grid md:grid-rows-6 md:grid-flow-col gap-4 ">
        <div className="row-span-2 md:col-span-3 ">
          <Link target="_blank" href={Gamehub.link}>
            <TiltCard
              id={Gamehub.id}
              description={Gamehub.description}
              imageURL={Gamehub.imageURL}
            />
          </Link>
        </div>
        <div className="row-span-2 md:col-span-3  ">
          <Link target="_blank" href={IssueTracker.link}>
            <TiltCard
              id={IssueTracker.id}
              description={IssueTracker.description}
              imageURL={IssueTracker.imageURL}
            />
          </Link>
        </div>
        <div className="row-span-2 md:col-span-3 ">
          <Link target="_blank" href={CountriesAPI.link}>
            <TiltCard
              id={CountriesAPI.id}
              description={CountriesAPI.description}
              imageURL={CountriesAPI.imageURL}
            />
          </Link>
        </div>
        <div className="row-span-2  md:col-span-3 ">
          <Link target="_blank" href={CafeCharmant.link}>
            <TiltCard
              id={CafeCharmant.id}
              description={CafeCharmant.description}
              imageURL={CafeCharmant.imageURL}
            />
          </Link>
        </div>
        <div className="row-span-2 md:col-span-6 ">
          <Link target="_blank" href={MultiStep.link}>
            <TiltCard
              id={MultiStep.id}
              description={MultiStep.description}
              imageURL={MultiStep.imageURL}
            />
          </Link>
        </div>
        <div className="row-span-2 md:col-span-3 ">
          <Link target="_blank" href={NetflixClone.link}>
            <TiltCard
              id={NetflixClone.id}
              description={NetflixClone.description}
              imageURL={NetflixClone.imageURL}
            />
          </Link>
        </div>
        <div className="row-span-2 md:col-span-3 ">
          <Link target="_blank" href={MyPortfolio.link}>
            <TiltCard
              id={MyPortfolio.id}
              description={MyPortfolio.description}
              imageURL={MyPortfolio.imageURL}
            />
          </Link>
        </div>
        <div className="md:col-span-3 ">
          <Link target="_blank" href={Robofriends.link}>
            <TiltCard
              id={Robofriends.id}
              description={Robofriends.description}
              imageURL={Robofriends.imageURL}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LabTilt;
