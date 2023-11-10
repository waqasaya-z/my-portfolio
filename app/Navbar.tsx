"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { id: 1, name: "Start", hash: "#start" },
  { id: 2, name: "Lab", hash: "#lab" },
  { id: 3, name: "About", hash: "#about" },
  { id: 4, name: "Contact", hash: "#contact" }
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY,"change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
       setHidden(true)
    } else {
      setHidden(false); 
    }
  } )

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
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <nav className="flex flex-wrap items-center justify-between">
          <h1> <Link href="#start"> Waqas Ayaz. </Link>  </h1>
          <ul className="flex gap-4 mr-5">
            {links.map((link) => (
              <li key={link.id}>
                {" "}
                <Link href={link.hash}> {link.name} </Link>{" "}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
