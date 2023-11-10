import EmailSection from "./EmailSection";
import LabTilt from "./LabTilt";
import Navbar from "./Navbar";
import PersonalInfo from "./PersonalInfo";
import StartPage from "./StartPage";

export default function Home() {
  return (
    <main>
      <Navbar />
      <StartPage />
      <LabTilt />
      <PersonalInfo />
      <EmailSection />
    </main>
  )
}
