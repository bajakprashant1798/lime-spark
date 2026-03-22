import { Badge } from "@/components/ui/badge";

const nutrients = [
  { name: "Sodium", amount: "250mg", pct: "11%" },
  { name: "Potassium", amount: "150mg", pct: "3%" },
  { name: "Magnesium", amount: "60mg", pct: "14%" },
  { name: "Calcium", amount: "40mg", pct: "3%" },
  { name: "Vitamin C", amount: "30mg", pct: "33%" },
  { name: "Zinc", amount: "5mg", pct: "45%" },
];

const ingredients = [
  "Purified Water",
  "Lime Juice Concentrate",
  "Sea Salt",
  "Potassium Citrate",
  "Magnesium Citrate",
  "Calcium Lactate",
  "Natural Flavors",
  "Stevia Leaf Extract",
];

const NutritionSection = () => {
  return (
    <section id="ingredients" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What's Inside</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Nutrition & Ingredients
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Nutrition Facts */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="font-heading text-2xl font-bold text-card-foreground mb-6">Nutrition Facts</h3>
            <p className="text-sm text-muted-foreground mb-4">Per serving (1 sachet / 500ml)</p>
            <div className="space-y-0">
              <div className="flex justify-between py-3 border-b border-border">
                <span className="font-semibold text-card-foreground">Calories</span>
                <span className="font-bold text-primary">10 kcal</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="font-semibold text-card-foreground">Sugar</span>
                <span className="font-bold text-primary">0g</span>
              </div>
              {nutrients.map((n) => (
                <div key={n.name} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                  <span className="text-card-foreground">{n.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-card-foreground">{n.amount}</span>
                    <Badge variant="secondary" className="text-xs">{n.pct} DV</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="font-heading text-2xl font-bold text-card-foreground mb-6">Ingredients</h3>
            <p className="text-sm text-muted-foreground mb-6">Clean, simple ingredients you can trust.</p>
            <div className="flex flex-wrap gap-3">
              {ingredients.map((ing) => (
                <span
                  key={ing}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-primary/10"
                >
                  {ing}
                </span>
              ))}
            </div>
            <div className="mt-8 p-4 rounded-xl bg-muted border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">🌿 100% Natural</span> — No artificial colors, flavors, or preservatives. Vegan & gluten-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
