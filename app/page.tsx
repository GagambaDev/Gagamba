import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProblemVsSolution from "@/components/ProblemVsSolution";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemVsSolution />
      <HowItWorks/>
    </>
  );
}
