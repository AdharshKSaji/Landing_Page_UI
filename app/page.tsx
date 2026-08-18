import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { OurServices } from "@/components/landing/how-it-works-section";
import { OurMethodology } from "@/components/landing/infrastructure-section";
import { StrategicPartnerships,} from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FooterSection } from "@/components/landing/footer-section";
import { PortfolioSection } from "@/components/landing/portfolio";
import { WhatsAppFloat } from "@/components/landing/whatsappFloatingButton";
import { AboutOrganization } from "@/components/landing/features-section";
import { TechnologyStack } from "@/components/landing/integrations-section";
import { EnterpriseSolutions } from "@/components/landing/metrics-section";
import { ConatactDetails } from "@/components/landing/cta-section";




export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <AboutOrganization />
      

      <OurServices />
      <TechnologyStack />
      <OurMethodology />
      <EnterpriseSolutions/>
      <StrategicPartnerships />
      <PortfolioSection />
      <ConatactDetails />
      <FooterSection />  
      <WhatsAppFloat />
    </main>
  );
}