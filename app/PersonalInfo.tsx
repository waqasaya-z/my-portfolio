"use client";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import codeString from "./data/CodeString";
import dynamic from 'next/dynamic'
 
const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter'), { ssr: false })

const PersonalInfo = () => {

  
  return (
    <div className="bg-[#14121c]">
      <h1 className="text-white ml-16 p-2 text-center font-semibold text-3xl"> About </h1>
      <SyntaxHighlighter
        showLineNumbers
        language="javascript"
        wrapLines
        style={atomOneDark}
        customStyle={{
          backgroundColor: '#14121c',
          fontSize: '20px'
        }}
        
        > 
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default PersonalInfo;
