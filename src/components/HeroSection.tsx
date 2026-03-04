import heroBg from "@/assets/hero-bg.jpg";
import { GraduationCap, Globe, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-navy opacity-80" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <p className="text-gold font-body uppercase tracking-[0.3em] text-sm mb-6">
            International Online English School
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Ascendora
            <span className="block text-gradient-gold">School</span>
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Бесплатное международное онлайн-обучение английскому языку. 
            Подготовка к международным экзаменам для студентов со всего мира.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8" style={{ animationDelay: "0.3s" }}>
          {[
            { icon: GraduationCap, label: "Бесплатное обучение" },
            { icon: Globe, label: "Международный формат" },
            { icon: BookOpen, label: "Подготовка к экзаменам" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-lg px-5 py-3"
            >
              <Icon className="w-5 h-5 text-gold" />
              <span className="text-primary-foreground/90 font-body text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
