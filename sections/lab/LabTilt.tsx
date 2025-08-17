"use client";
import TiltCard from "../../app/components/TiltCard";
import tilts from "../../app/data/TiltData";
import useSectionInView from "@/hooks/useSection";
import { MdOutlineScience } from "react-icons/md";
import Link from "next/link";
import { ILabTranslation } from "@/types/app.types";

const LabTilt = ({ pageData }: { pageData: ILabTranslation }) => {
  const { ref } = useSectionInView("lab");

  return (
    <section ref={ref} className="text-center p-6 border border-purple-950" id="lab">
      <h1 className="text-white text-4xl font-semibold text-center inline-flex mb-10">
        {pageData.sectionTitle}
        <span className="mt-1">
          <MdOutlineScience />
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center items-center p-8">
        {tilts.map((tilt) => {
          return (
              <Link target="_blank" href={tilt.link} className="m-4">
                <TiltCard
                  id={tilt.id}
                  description={tilt.description}
                  imageURL={tilt.imageURL}
                />
              </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LabTilt;
