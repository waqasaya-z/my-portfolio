import delay from "delay";
import EmailSection from "./EmailSection";
import LabTilt from "./LabTilt";
import Navbar from "./Navbar";
import PersonalInfo from "./PersonalInfo";
import SocialContact from "./SocialContact";
import StartPage from "./StartPage";

export default async function Home() {
  await delay(5000)
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
