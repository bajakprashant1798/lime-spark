import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I use the electrolyte drink?",
    a: "Simply mix one sachet into 500ml of cold water, shake or stir well, and enjoy! Best consumed during or after physical activity.",
  },
  {
    q: "Is it safe for everyday use?",
    a: "Absolutely! Our formula is designed for daily hydration. It's sugar-free, natural, and safe for regular consumption.",
  },
  {
    q: "Does it contain any artificial sweeteners?",
    a: "No! We use Stevia Leaf Extract — a natural, plant-based sweetener with zero calories and no artificial chemicals.",
  },
  {
    q: "Is it suitable for diabetics?",
    a: "Yes. With zero sugar and only 10 calories per serving, it's a great hydration choice for people managing blood sugar levels. Always consult your doctor for personal advice.",
  },
  {
    q: "What is the shelf life?",
    a: "Each sachet has a shelf life of 12 months from the date of manufacturing. Store in a cool, dry place away from direct sunlight.",
  },
  {
    q: "Do you offer bulk or wholesale pricing?",
    a: "Yes! Contact us at hello@myfitboat.com for bulk orders and wholesale partnership inquiries.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-card-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
