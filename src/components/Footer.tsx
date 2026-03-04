import { Send, Instagram, Music } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/ascendora.school",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/ascendora_school",
  },
  {
    icon: Music,
    label: "TikTok",
    href: "https://www.tiktok.com/@ascendora.school",
  },
];

const Footer = () => (
  <footer id="contacts" className="gradient-navy py-16">
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
          Свяжитесь с нами
        </h2>
        <p className="font-body text-primary-foreground/60 text-sm max-w-md mx-auto">
          Подписывайтесь на наши соцсети, чтобы не пропустить новости, конкурсы и обновления.
        </p>
      </div>

      <div className="flex justify-center gap-5 mb-12">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
              <s.icon className="w-6 h-6 text-primary-foreground/70 group-hover:text-gold transition-colors" />
            </div>
            <span className="font-body text-xs text-primary-foreground/50 group-hover:text-gold transition-colors">
              {s.label}
            </span>
          </a>
        ))}
      </div>

      <div className="text-center pt-8 border-t border-primary-foreground/10">
        <p className="font-body text-primary-foreground/40 text-xs">
          @ascendora.school — везде одинаковый
        </p>
        <p className="font-body text-primary-foreground/30 text-xs mt-2">
          © {new Date().getFullYear()} Ascendora School. International Online English School.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
