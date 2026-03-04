import { BookOpen, Award, Trophy, Medal, GraduationCap, Users, Heart, Sparkles, TrendingUp } from "lucide-react";

const offerings = [
  { icon: BookOpen, title: "Бесплатное обучение английскому языку", desc: "Качественные знания без границ, доступные для всех." },
  { icon: Award, title: "Диплом об обучении", desc: "Официальный документ, подтверждающий ваш прогресс и усилия." },
  { icon: Trophy, title: "Участие в конкурсах и олимпиадах", desc: "Возможность проявить себя, получить признание и соревноваться на международном уровне." },
  { icon: Medal, title: "Награды и сертификаты", desc: "Мы ценим достижения и поддерживаем таланты, отмечая успехи каждого ученика." },
  { icon: GraduationCap, title: "Подготовка к международным экзаменам", desc: "IELTS, TOEFL, SAT и другие тесты, открывающие путь к университетам и карьерным возможностям." },
  { icon: Users, title: "Сообщество единомышленников", desc: "Дружеская атмосфера, поддержка кураторов и преподавателей, обмен опытом и мотивацией." },
  { icon: Heart, title: "Возможности для волонтёров и преподавателей", desc: "Участие в международных программах, получение дипломов и развитие профессиональных навыков." },
  { icon: Sparkles, title: "Творческая среда", desc: "Конкурсы идей, проекты, презентации и креативные задания, которые помогают развивать не только язык, но и личность." },
  { icon: TrendingUp, title: "Инвестиция в будущее", desc: "Каждый урок — это шаг к свободному общению, карьерному росту и новым горизонтам." },
];

const FreeEducationSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-accent font-body uppercase tracking-[0.2em] text-sm mb-3">Free Education</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Бесплатное образование с Ascendora School
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Мы верим, что английский язык должен быть доступен каждому, независимо от страны, возраста или уровня подготовки. Наша миссия — дать каждому ученику шанс раскрыть свой потенциал и построить уверенное будущее.
          </p>
        </div>

        <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-10">
          Что мы предлагаем
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg gradient-royal flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h4 className="font-heading text-base font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeEducationSection;
