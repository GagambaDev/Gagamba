import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ProductTourVideo from "@/components/tour/ProductTourVideo";
import ProblemVsSolution from "@/components/ProblemVsSolution";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ProductTourVideo />
      <ProblemVsSolution />
      <SocialProof />
    </>
  );
}
