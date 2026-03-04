import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FreeEducationSection from "@/components/FreeEducationSection";
import ValuesSection from "@/components/ValuesSection";
import TeachersSection from "@/components/TeachersSection";
import FoundersSection from "@/components/FoundersSection";
import CollaborationSection from "@/components/CollaborationSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />
      <HeroSection />
      <AnimatedSection>
        <FreeEducationSection />
      </AnimatedSection>
      <AnimatedSection>
        <ValuesSection />
      </AnimatedSection>
      <AnimatedSection>
        <TeachersSection />
      </AnimatedSection>
      <AnimatedSection>
        <FoundersSection />
      </AnimatedSection>
      <AnimatedSection>
        <CollaborationSection />
      </AnimatedSection>
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
