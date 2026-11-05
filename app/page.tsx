import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import DroneDiagram from "@/components/drone/DroneDiagram";
import ProblemVsSolution from "@/components/ProblemVsSolution";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <DroneDiagram />
      <ProblemVsSolution />
      <SocialProof />
    </>
  );
}
