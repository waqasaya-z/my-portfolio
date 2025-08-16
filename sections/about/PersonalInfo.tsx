"use client";

import useSectionInView from "@/hooks/useSection";
import dynamic from "next/dynamic";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IAboutTranslation } from "@/types/app.types";
import { generateCodeString } from "./about.methods";

const SyntaxHighlighter = dynamic(() => import("react-syntax-highlighter"), {
  ssr: false
});

const PersonalInfo = ({ pageData }: { pageData: IAboutTranslation }) => {
  const { ref } = useSectionInView("About");

  const code = generateCodeString(pageData, { isRTL: false });

  return (
    <section ref={ref} id="about" className="bg-[#14121c]">
      <h1 className="text-white ml-16 p-2 text-center font-semibold text-3xl">
        {pageData.sectionTitle}
      </h1>
      <SyntaxHighlighter
        showLineNumbers
        language="javascript"
        wrapLines
        style={atomOneDark}
        customStyle={{
          backgroundColor: "#14121c",
          fontSize: "20px"
        }}
      >
        {code}
      </SyntaxHighlighter>
    </section>
  );
};

export default PersonalInfo;
