import { Quote } from "lucide-react";

const quotes = [
  "Английский язык — это не просто предмет в расписании, это инструмент, который открывает двери к знаниям, международным возможностям и уверенному будущему.",
  "Каждое новое слово на английском — это ещё один шаг к свободному общению, карьерному росту и новым горизонтам.",
  "Мы учим не просто правилам и словам — мы учим думать, говорить и чувствовать себя уверенно на английском языке в любой ситуации.",
  "Свободный английский — это результат системной практики, правильной методики и поддержки, которую мы даём каждому ученику.",
  "Инвестируя время в изучение английского сегодня, вы создаёте для себя больше возможностей завтра.",
  "Знание английского языка стирает границы и делает мир ближе, понятнее и доступнее.",
];

const ValuesSection = () => {
  return (
    <section id="values" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-body uppercase tracking-[0.2em] text-sm mb-3">Our Philosophy</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Наши ценности
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quotes.map((quote, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-gold/40 mb-4 group-hover:text-gold transition-colors" />
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {quote}
              </p>
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-accent/0 group-hover:bg-accent/40 transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
