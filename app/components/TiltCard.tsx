import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

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
      className="flex flex-col justify-center items-center relative h-56"
    >
      <Image
        className="relative bg-cover rounded-xl bg-white z-10"
        src={imageURL}
        height={400}
        width={400}
        alt={description}
      />
      <div
        className="flex flex-col mt-2 justify-center items-center text-white text-2xl font-semibold md:absolute md:top-20 md:left-[-28px] z-20 w-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
  "
      >
        <h1 className="whitespace-nowrap">{description} </h1>
        <div className="border-b-2 border-white w-20 h-2 md:my-2"></div>
        <h2> 0{id} </h2>
      </div>
    </motion.div>
  );
};

export default TiltCard;
