import HeroSection from "@/components/HeroSection";
import FreeEducationSection from "@/components/FreeEducationSection";
import ValuesSection from "@/components/ValuesSection";
import TeachersSection from "@/components/TeachersSection";
import FoundersSection from "@/components/FoundersSection";
import CollaborationSection from "@/components/CollaborationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FreeEducationSection />
      <ValuesSection />
      <TeachersSection />
      <FoundersSection />
      <CollaborationSection />
      <Footer />
    </main>
  );
};

export default Index;
