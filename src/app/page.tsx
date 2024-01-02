import Aim from "./components/Aim";
import Charactersticks from "./components/CharactersticksCards";
import HiringProcess from "./components/HiringProcess";
import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css"
import TalentIntroduction from "./components/TalentIntroduction";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Pricing from "./components/Pricing";


export default function Home() {
  return (
    <div style={{ backgroundImage: "linear-gradient(to right,#D0DCF8,#faf3ef)" }}>
    <LandingPage/>
    <Charactersticks/>
    <Aim/>
    {/* <HiringProcess/> */}
    <TalentIntroduction/>
    <Benefits/>
    <Features/>
    <Pricing/>
    </div>
  )
}