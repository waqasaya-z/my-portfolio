"use client";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import codeString from "./data/CodeString";
import dynamic from 'next/dynamic'
import React , { useState } from "react";
 
const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter'), { ssr: false })

const PersonalInfo = () => {
 
  return (
    <div className="bg-[#14121c]">
      <h1 className="text-white ml-16 p-2"> About </h1>
      <SyntaxHighlighter
        showLineNumbers
        language="javascript"
        style={nord}
        customStyle={{
          backgroundColor: '#14121c',
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default PersonalInfo;
