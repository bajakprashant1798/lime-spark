import { Droplets, Leaf, Zap, Heart } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Rapid Hydration",
    description: "Scientifically formulated electrolyte blend absorbs faster than water alone.",
  },
  {
    icon: Leaf,
    title: "Zero Sugar",
    description: "All the taste, none of the guilt. Naturally sweetened for a clean hydration experience.",
  },
  {
    icon: Droplets,
    title: "Natural Lime Flavor",
    description: "Real lime extracts for a refreshing, crisp taste that keeps you coming back.",
  },
  {
    icon: Heart,
    title: "Essential Electrolytes",
    description: "Sodium, potassium, magnesium & calcium — everything your body craves post-workout.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Why My Fit Boat?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <b.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-card-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
