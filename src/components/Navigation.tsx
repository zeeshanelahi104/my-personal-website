import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background/80 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <Avatar className="h-10 w-10 rounded-full overflow-hidden">
              <AvatarImage
                src="/images/profileImage.png"
                alt="Zeeshan Avatar"
                className="object-cover"
              />
              <AvatarFallback>ZE</AvatarFallback>
            </Avatar>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-primary/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-foreground transition-transform hover:rotate-12" />
              ) : (
                <Sun className="w-5 h-5 text-foreground transition-transform hover:rotate-12" />
              )}
            </Button>

            {/* Resume Button */}
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md hover:shadow-glow"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden hover:bg-primary/10 transition-colors"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Theme Toggle in Mobile Menu */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="w-full justify-start gap-2 mt-2"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="w-4 h-4" />
                    Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4" />
                    Light Mode
                  </>
                )}
              </Button>

              {/* Resume Button in Mobile Menu */}
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
