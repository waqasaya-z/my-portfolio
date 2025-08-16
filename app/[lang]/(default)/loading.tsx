'use client'
import { PuffLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#1a1527]">
      {" "}
      <PuffLoader color="#5918df" speedMultiplier={3} />{" "}
    </div>
  );
};

export default loading;
