import "./App.css";
import BenefitsSection from "./Components/BenefitsSection";
import FeatureSection from "./Components/FeatureSection";
import FooterSection from "./Components/FooterSection";
import GetStarted from "./Components/GetStarted";
import HeaderSection from "./Components/HeaderSection";
import InquirySection from "./Components/InquirySection";
import NavbarSection from "./Components/NavbarSection";
import PricingSection from "./Components/PricingSection";

function App() {
  return (
    <>
      <div className="bg-neutral-50 min-h-screen">
        <NavbarSection />
        <HeaderSection />
        <FeatureSection />
        <BenefitsSection />
        <PricingSection />
        <GetStarted />
        <InquirySection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
