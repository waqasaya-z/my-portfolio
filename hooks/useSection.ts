import { SectionName, useActiveSection } from "@/context/activeContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function useSectionInView(sectionName: SectionName) {

const { ref, inView } = useInView({
  threshold: 0.3,
});
  const { setActionSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActionSection(sectionName);
    }
  }, [inView, setActionSection, sectionName]);

  return {
    ref
  }
}

export default useSectionInView;