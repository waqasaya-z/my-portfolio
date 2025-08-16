import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa6";

const SubmitButton = ({title} : {title: string}) => {
  const { pending } = useFormStatus();

  return (
    <button
      className="
    relative overflow-hidden group flex items-center justify-center h-10 w-32 
    rounded-lg bg-white text-purple-950 font-semibold
    transition-all transform 
    shadow-md hover:shadow-xl
    hover:scale-105 active:scale-95
    disabled:opacity-60 disabled:scale-100
  "
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-purple-900"></div>
      ) : (
        <>
          <span className="relative z-10 flex items-center gap-2">
            {title ?? 'Submit'}
            <FaPaperPlane className="text-sm opacity-80 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
          {/* Glowing hover effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 opacity-0 group-hover:opacity-30 transition-opacity rounded-lg"></span>
        </>
      )}
    </button>
  );
};

export default SubmitButton;
