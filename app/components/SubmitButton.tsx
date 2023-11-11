import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa6";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="group flex items-center justify-center gap-2 bg-gray-100 h-[2rem] w-[8rem] rounded-sm outline-none 
      transition-all focus:scale-105 
      hover:scale-105 active:scale-105
      disabled:scale-100 disabled:bg-opacity-60"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}{" "}
    </button>
  );
};

export default SubmitButton;
