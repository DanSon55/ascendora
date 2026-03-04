import heroBg from "@/assets/hero-bg.jpg";
import { GraduationCap, Globe, BookOpen, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-navy opacity-80" />

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href="#education"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#education")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 gradient-royal text-accent-foreground font-body font-medium text-sm px-7 py-3.5 rounded-lg hover:shadow-lg hover:shadow-accent/20 transition-all"
          >
            Начать обучение
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contacts"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground font-body font-medium text-sm px-7 py-3.5 rounded-lg hover:bg-primary-foreground/15 transition-all"
          >
            Контакты
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-4"
        >
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
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
