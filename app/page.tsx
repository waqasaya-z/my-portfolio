import EmailSection from "./EmailSection";
import LabTilt from "./LabTilt";
import Navbar from "./Navbar";
import PersonalInfo from "./PersonalInfo";
import SocialContact from "./SocialContact";
import StartPage from "./StartPage";

export default function Home() {
  return (
    <main>
      <Navbar />
      <StartPage />
      <LabTilt />
      <PersonalInfo />
      <SocialContact />
      <EmailSection />
    </main>
  )
}
