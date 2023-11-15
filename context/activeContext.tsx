"use client";
import links from "@/app/data/Links";
import React, { ReactNode, createContext, useContext, useState } from "react";

export type SectionName = (typeof links)[number]["name"];

interface ActiveSectionContextType {
  activeSection: SectionName;
  setActionSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActionSection] = useState<SectionName>("Start");
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActionSection
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a provider component"
    );
  }

  return context;
}

export default ActiveContextProvider;
