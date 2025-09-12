import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "À Propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled 
            ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border/20 shadow-lg" 
            : "py-5 bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> Ta'O's </span>{" "}
              Portfolio
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle for Desktop */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors duration-300 focus:outline-hidden"
              aria-label={isDarkMode ? "Passer au mode clair" : "Passer au mode sombre"}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-blue-900" />
              )}
            </button>
          </div>

          {/* mobile nav controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors duration-300 focus:outline-hidden"
              aria-label={isDarkMode ? "Passer au mode clair" : "Passer au mode sombre"}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-blue-900" />
              )}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground z-50 relative"
              aria-label={isMenuOpen ? "Fermer le Menu" : "Ouvrir le Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Completely separate from navbar */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background/85 backdrop-blur-md z-45 flex items-center justify-center md:hidden">
          {/* Close button positioned to match the menu button */}
          <div className="absolute top-0 left-0 w-full z-50">
            <div className={cn(
              "container flex justify-end transition-all duration-300",
              isScrolled ? "py-3" : "py-5"
            )}>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-foreground"
                aria-label="Fermer le Menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
