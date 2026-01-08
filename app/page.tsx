import Navbar from "./components/navbar";
import Herosection from "./components/Herosection";
import PainPoint from "./components/PainPoint";
import SolutionSection from "./components/SolutionSection";
import BenefitsSection from "./components/BenefitsSection";
import SocialProofSection from "./components/SocialProofSection";
import HowItWorks from "./components/HowItWorks";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div >
      <Navbar />
      <Herosection />
        <PainPoint />
          <SolutionSection />
          <BenefitsSection />
          <SocialProofSection />
          <HowItWorks />
          <CTASection />
          <Footer />
    </div>

  )
}
