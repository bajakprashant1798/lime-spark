import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Product", href: "/product" },
    { label: "Benefits", href: "/#benefits" },
    { label: "Ingredients", href: "/#ingredients" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="/myfitboat_logo.png" alt="My Fit Boat" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Link to="/product">
            <Button className="gradient-primary text-primary-foreground font-semibold px-6">
              Order Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-sm font-medium text-foreground/70 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link to="/product" onClick={() => setIsOpen(false)}>
            <Button className="w-full mt-2 gradient-primary text-primary-foreground font-semibold">
              Order Now
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
