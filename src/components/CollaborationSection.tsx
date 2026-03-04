import { Users, Megaphone, Lightbulb, Presentation, Award } from "lucide-react";

const roles = [
  { icon: Users, label: "Преподаватели" },
  { icon: Users, label: "Волонтёры" },
  { icon: Megaphone, label: "Специалисты по SMM" },
  { icon: Lightbulb, label: "Авторы идей" },
  { icon: Presentation, label: "Дизайнеры презентаций" },
];

const CollaborationSection = () => {
  return (
    <section id="collaboration" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
          <p className="text-accent font-body uppercase tracking-[0.2em] text-sm mb-3">Join Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Присоединяйтесь к команде
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мы приглашаем к сотрудничеству специалистов из разных областей. 
            Всем участникам проекта предоставляется диплом и возможность попасть 
            в международные волонтёрские программы.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {roles.map((r) => (
            <div
              key={r.label}
              className="flex items-center gap-2.5 bg-secondary border border-border rounded-full px-5 py-3 hover:border-accent/40 hover:bg-accent/5 transition-all"
            >
              <r.icon className="w-4 h-4 text-accent" />
              <span className="font-body text-sm text-foreground">{r.label}</span>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-lg px-6 py-4">
          <Award className="w-6 h-6 text-gold" />
          <span className="font-body text-foreground text-sm">
            Диплом и доступ к международным программам для всех участников
          </span>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
