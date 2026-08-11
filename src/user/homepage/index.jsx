import DivisionSection from "./components/divisi-section";
import FAQSection from "./components/faq-section";
import FunActivitySection from "./components/fun-activity-section";
import HeadSection from "./components/head-section";
import InformationSection from "./components/information-section";

export default function HomePage() {
  return ( 
    <>
      <HeadSection />

      <DivisionSection />

      <InformationSection />

      <FunActivitySection />

      <FAQSection />
    </>
  )
}
