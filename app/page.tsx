import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import HowItWorks from "./components/HowItWorks";
import ROI from "./components/ROI";
import TechStack from "./components/TechStack";
import Investment from "./components/Investment";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import StickyCTA from "./components/StickyCTA";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <StickyCTA />
      <main id="scroll-container" className="bg-dark-bg text-white">
        <Navbar />
        <Hero />
        <Marquee />
        <Problems />
        <Solutions />
        <HowItWorks />
        <ROI />
        <TechStack />
        <Investment />
        <FAQ />
        <Contact />
        <Footer />
        <ChatWidget />
      </main>
    </>
  );
}
