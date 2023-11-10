"use client";
import {sendEmail} from "@/actions/sendEmail";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";

const EmailSection = () => {

  return (
    <motion.section
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
      id="contact"
      className="mb-20 w-[min(100%,38rem)] border border-black text-center"
    >
      <div className="flex flex-col items-center justify-center text-white font-medium">
        <h1 className="text-4xl"> Write to me </h1>
        <p className="text-sm text-gray-700">
          {" "}
          Please contact me directly at{" "}
          <a className="underline" href="mailto:waqasayaz@icloud.com">
            {" "}
            waqasayaz@icloud.com{" "}
          </a>{" "}
          or through this form{" "}
        </p>
      </div>

      <div>
        <form className="flex flex-col mt-10" action={ async (formData) => {
          await sendEmail(formData)
        }} >
          <input
            name="senderEmail"
            className="h-10 p-4 rounded-sm"
            type="email"
            placeholder="example@email.com"
            required
            maxLength={500}
          />
          <textarea
            name="message"
            className="h-52 my-3 rounded-sm p-4"
            placeholder="Write to me"
            maxLength={500}
            required
          />
          <button
            className="group flex items-center justify-center gap-2 bg-gray-100 h-[3rem] w-[8rem] rounded-sm outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105"
            type="submit"

          >
            {" "}
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default EmailSection;
