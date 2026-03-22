import { ShieldCheck, FlaskConical, Leaf, Award, Recycle } from "lucide-react";

const badges = [
  { icon: FlaskConical, label: "Lab Tested" },
  { icon: Leaf, label: "100% Natural" },
  { icon: ShieldCheck, label: "FSSAI Approved" },
  { icon: Recycle, label: "Eco-Friendly Packaging" },
  { icon: Award, label: "GMP Certified" },
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Quality Promise</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Trusted & Certified</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-3 w-28">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                <b.icon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-xs font-semibold text-foreground text-center leading-tight">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
