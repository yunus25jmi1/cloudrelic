import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TeamSection from "@/components/sections/TeamSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ChatPreview from "@/components/sections/ChatPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CloudRelic - Enterprise Infrastructure for Startups | 60-98% Cost Reduction</title>
        <meta name="description" content="Infrastructure consulting for growth startups. Cloud cost optimization, bare metal migration, performance engineering. Same strategies as Dukaan, Zerodha, 37signals. From $5/hr." />
      </Helmet>
      <Layout>
        <HeroSection />
        <FeaturesSection />
        <ChatPreview />
        <ServicesSection />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
