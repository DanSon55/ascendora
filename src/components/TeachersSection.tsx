import { GraduationCap } from "lucide-react";

const teachers = [
  { name: "S. Aisha", university: "University of Warsaw", desc: "Методика преподавания английского языка и современная педагогика" },
  { name: "Mirel", university: "Charles University", desc: "Образовательные технологии и преподавание иностранных языков" },
  { name: "Zhanerke", university: "University of Debrecen", desc: "Английская филология и педагогика" },
  { name: "Yeldana", university: "Hacettepe University", desc: "Методика преподавания английского как иностранного языка" },
  { name: "Y. Aisha", university: "Universiti Malaya", desc: "Международный опыт в сфере образования" },
  { name: "Aiaru", university: "КазНПУ им. Абая", desc: "Преподаватель иностранных языков" },
];

const TeachersSection = () => {
  return (
    <section id="teachers" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-body uppercase tracking-[0.2em] text-sm mb-3">Our Team</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Наши преподаватели
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teachers.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full gradient-royal flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-foreground font-heading text-xl font-bold">
                  {t.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{t.name}</h3>
              <div className="flex items-center justify-center gap-1.5 mb-3">
                <GraduationCap className="w-3.5 h-3.5 text-gold" />
                <p className="text-accent font-body text-xs font-medium">{t.university}</p>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
