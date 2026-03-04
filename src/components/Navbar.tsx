import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Обучение", href: "#education" },
  { label: "Ценности", href: "#values" },
  { label: "Преподаватели", href: "#teachers" },
  { label: "Основатели", href: "#founders" },
  { label: "Сотрудничество", href: "#collaboration" },
  { label: "Контакты", href: "#contacts" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleClick("#hero")}
          className="font-heading text-xl font-bold text-primary-foreground tracking-wide"
        >
          Ascendora <span className="text-gradient-gold">School</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="font-body text-sm text-primary-foreground/70 hover:text-gold px-3 py-2 rounded-md hover:bg-primary-foreground/5 transition-all"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 px-6 pb-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="block w-full text-left font-body text-sm text-primary-foreground/70 hover:text-gold py-3 border-b border-primary-foreground/5 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
