"use client";
import { sendEmail } from "@/actions/sendEmail";
import useSectionInView from "@/hooks/useSection";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SubmitButton from "./components/SubmitButton";

const EmailSection = () => {
  
  const {ref} = useSectionInView("Contact");

  return (
    <motion.section
    ref={ref}
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
      className=" mt-16 w-full text-center"
    >
      <div className="flex flex-col items-center justify-center text-white font-medium">
        <h1 className="text-3xl"> Write to me </h1>
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

      <div className="w-full">
        <form
          className="flex flex-col justify-center items-center mt-10"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error("Email was not sent");
              return;
            }
            toast.success("Email sent successfully!");
          }}
        >
          <input
            name="senderEmail"
            className="h-10 w-1/3 p-4 rounded-sm"
            type="email"
            placeholder="example@email.com"
            required
            maxLength={500}
          />
          <textarea
            name="message"
            className="h-52 w-1/3 my-3 rounded-sm p-4"
            placeholder="Write to me"
            maxLength={500}
            required
          />
          <SubmitButton />
        </form>
      </div>
    </motion.section>
  );
};

export default EmailSection;
