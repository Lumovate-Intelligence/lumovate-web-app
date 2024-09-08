import ContactSection from "@/components/landingPage/contactSection";
import FooterSection from "@/components/landingPage/footerSection";
import HeroSection from "@/components/landingPage/heroSection";
import ServicesSection from "@/components/landingPage/servicesSection";
import WorkflowSection from "@/components/landingPage/workflowSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <WorkflowSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
