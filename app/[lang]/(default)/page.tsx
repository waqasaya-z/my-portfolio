import PersonalInfo from "@/sections/about/PersonalInfo";
import EmailSection from "@/sections/contact/EmailSection";
import SocialContact from "@/sections/contact/SocialContact";
import StartPage from "@/sections/home/StartPage";
import LabTilt from "@/sections/lab/LabTilt";
import { ITranslationData } from "@/types/app.types";
import React from "react";

const page = async ({ params }: { params: { lang: string } }) => {
  const { lang } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/${lang ?? "en"}/portfolio-page/`
  );

  const data: ITranslationData = await res.json();

  return (
    <main>
      <StartPage pageData={data.Start} />
      <LabTilt pageData={data.Lab} />
      <PersonalInfo pageData={data.About} />
      <SocialContact pageData={data.Contact} />
      <EmailSection pageData={data.Contact} />
    </main>
  );
};

export default page;
