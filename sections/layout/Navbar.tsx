"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useContext, useState } from "react";
import clsx from "clsx";
import {
  ActiveSectionContext,
  useActiveSection
} from "@/context/activeContext";
import links from "@/app/data/Links";
import { INavbar } from "@/types/app.types";

const Navbar = ({ pageData }: { pageData: INavbar }) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const { activeSection, setActionSection } = useActiveSection();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <header className="z-[999] relative">
      <motion.div
        className="bg-opacity-80
       fixed top-0 h-[4.5rem] w-full 
       p-4 text-xl font-medium 
       text-white shadow-lg shadow-black/[0.03]
       sm:top-0 sm:h-[3.25rem] sm:rounded-full
       "
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        // initial={{ y: 0, x: ".50%", opacity: 0 }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <nav className="flex flex-wrap items-center justify-between font-semibold">
          <h1>
            {" "}
            <Link href="#start"> {pageData.name} </Link>{" "}
          </h1>
          <ul className="flex gap-4 mr-5">
            {pageData.navbar_items.map((link) => (
              <Link
                key={link.id}
                href={link.hash}
                className={clsx("hover:text-[#5918df]", {
                  "text-[#5918df]": activeSection === link.hash
                })}
                onClick={() => setActionSection(link.hash)}
              >
                <li>{link.title}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
