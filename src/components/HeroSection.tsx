import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
              <Droplets className="h-4 w-4" />
              Natural Lime Electrolyte Drink
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight text-foreground">
              Hydrate Like
              <span className="text-gradient block">a Pro.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Replenish essential electrolytes with our refreshing lime-flavored drink. 
              Zero sugar, maximum hydration — crafted for athletes and everyday warriors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/product">
                <Button size="lg" className="gradient-primary text-primary-foreground font-semibold text-base px-8 gap-2">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#benefits">
                <Button size="lg" variant="outline" className="font-semibold text-base px-8 border-primary text-primary hover:bg-primary/5">
                  Learn More
                </Button>
              </a>
            </div>
          </div>

          {/* Product Image Placeholder */}
          <div className="relative flex items-center justify-center">
            <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-3xl bg-gradient-to-br from-primary/20 to-lime/20 border-2 border-primary/10 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center">
                  <Droplets className="h-10 w-10 text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">Product Image</p>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-lime/20 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/15 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
