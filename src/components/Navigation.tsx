import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      {/* Pure logo outside padding */}
      <div className="absolute left-6 top-2 z-50">
        <img
          src="https://cc-ai.ir/images/edgetec-logo.svg"
          alt="Site Logo"
          style={{ width: 40, height: 40 }}
        />
      </div>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Remove old logo block, keep title only */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">CCAI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#applications" className="text-muted-foreground hover:text-foreground transition-colors">
              Applications
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" asChild>
              <a href="#features">Request Demo</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50">
            <a
              href="#features"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#applications"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Applications
            </a>
            <a
              href="#about"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button variant="hero" size="sm" className="w-full" asChild>
              <a href="#features" onClick={() => setIsOpen(false)}>Request Demo</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;