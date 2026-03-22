import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <img src="/myfitboat_logo.png" alt="My Fit Boat" className="h-12 w-auto brightness-0 invert" />
            <p className="text-background/60 text-sm leading-relaxed max-w-sm">
              My Fit Boat delivers premium electrolyte hydration with natural lime flavor. 
              Stay hydrated, stay strong — crafted for India's active community.
            </p>
            <div className="flex gap-4 pt-2">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link to="/product" className="hover:text-primary transition-colors">Product</Link></li>
              <li><a href="/#benefits" className="hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="/#ingredients" className="hover:text-primary transition-colors">Ingredients</a></li>
              <li><a href="/#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                hello@myfitboat.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +91 98765 43210
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
          <p>© {new Date().getFullYear()} My Fit Boat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
