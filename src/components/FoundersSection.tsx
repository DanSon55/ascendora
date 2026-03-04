import { Crown, BadgeCheck } from "lucide-react";

const FoundersSection = () => {
  return (
    <section className="py-24 gradient-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-body uppercase tracking-[0.2em] text-sm mb-3">Leadership</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            Основатели проекта
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-3xl mx-auto">
          {[
            {
              name: "Mr. Daniyar",
              role: "Президент, основатель Ascendora School",
              icon: Crown,
            },
            {
              name: "Diana,Iski",
              role: "Оснаватель школы ISKI",
              icon: BadgeCheck,
            },
          ].map((f) => (
            <div
              key={f.name}
              className="flex-1 text-center bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-xl p-8"
            >
              <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-5">
                <f.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">{f.name}</h3>
              <p className="font-body text-primary-foreground/70 text-sm">{f.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
