import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Pillars from "./components/Pillars";
import HowItWorks from "./components/HowItWorks";
import Capabilities from "./components/Capabilities";
import UseCases from "./components/UseCases";
import CustomerSuccess from "./components/CustomerSuccess";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Pillars />
        <HowItWorks />
        <Capabilities />
        <UseCases />
        <CustomerSuccess />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
