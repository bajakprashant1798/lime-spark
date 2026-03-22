import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul S.",
    role: "Marathon Runner",
    text: "My Fit Boat's lime electrolyte is now my go-to after every run. The taste is incredible and I feel hydrated for hours!",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "Fitness Trainer",
    text: "I recommend this to all my clients. Zero sugar, great taste, and the electrolyte balance is spot on. Game changer!",
    rating: 5,
  },
  {
    name: "Arjun K.",
    role: "Cricket Player",
    text: "Perfect for long matches under the sun. Keeps cramps away and actually tastes like real lime. Love it!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Reviews</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-lime text-lime" />
                ))}
              </div>
              <p className="text-card-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-heading font-bold text-card-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
