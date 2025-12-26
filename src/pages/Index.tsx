import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TeamSection from "@/components/sections/TeamSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ChatPreview from "@/components/sections/ChatPreview";
import CTASection from "@/components/sections/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CloudRelic - Where Cloud Meets Code | AI-Powered DevOps Platform</title>
        <meta name="description" content="Get expert-level DevOps guidance powered by AI. Instant solutions for infrastructure challenges across AWS, Azure, and GCP." />
      </Helmet>
      <Layout>
        <HeroSection />
        <FeaturesSection />
        <ChatPreview />
        <ServicesSection />
        <TeamSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
