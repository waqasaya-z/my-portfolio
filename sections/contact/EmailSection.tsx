"use client";
import { sendEmail } from "@/actions/sendEmail";
import useSectionInView from "@/hooks/useSection";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SubmitButton from "../../app/components/SubmitButton";
import { IAboutTranslation, IContactTranslation } from "@/types/app.types";

const EmailSection = ({ pageData }: { pageData: IContactTranslation }) => {
  const { ref } = useSectionInView("Contact");

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
        duration: 2
      }}
      viewport={{
        once: true
      }}
      id="contact"
      className="flex flex-col items-center mt-16 w-full"
    >
      <div className="text-center">
        <h1 className="text-3xl text-white" style={{ fontWeight: 700 }}>
          {" "}
          {pageData.heading}
        </h1>
        <p className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
          {pageData.description}
          <a className="underline" href="mailto:developer@waqasayaz.com">
            {pageData.email}
          </a>{" "}
          {pageData.description_form}
        </p>
      </div>
      <form
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error("Email was not sent");
            return;
          }
          toast.success("Email sent successfully!");
        }}
        className="w-full"
      >
        <div className="flex flex-col items-center mt-4 w-full">
          <div className="w-full md:w-1/3 p-2">
            <input
              name="senderEmail"
              type="email"
              placeholder={pageData.placeholder}
              required
              maxLength={500}
              className="h-10 w-full rounded-lg p-4"
            />
          </div>

          <div className="w-full md:w-1/3 p-2">
            <textarea
              name="message"
              placeholder={pageData.message}
              required
              maxLength={500}
              className="h-52 w-full rounded-lg p-4"
            />
          </div>
          <div>
            <SubmitButton title={pageData.submit} />
          </div>
        </div>
      </form>
    </motion.section>
  );
};

export default EmailSection;
