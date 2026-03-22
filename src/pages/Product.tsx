import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star, Minus, Plus, Droplets, Zap, Heart, Leaf, ShoppingCart } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar />

      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Product Hero */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Gallery Placeholder */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-lime/10 border-2 border-border flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-24 h-24 mx-auto rounded-full gradient-primary flex items-center justify-center">
                  <Droplets className="h-12 w-12 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground font-medium">Product Image</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-muted border border-border flex items-center justify-center cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <Droplets className="h-6 w-6 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">🍋 Lime Flavor</Badge>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                My Fit Boat Electrolyte Drink
              </h1>
              <p className="text-muted-foreground mt-2">Natural Lime | Zero Sugar | Instant Hydration</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-lime text-lime" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(128 reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-4xl font-bold text-foreground">₹299</span>
              <span className="text-lg text-muted-foreground line-through">₹399</span>
              <Badge className="gradient-primary text-primary-foreground">25% OFF</Badge>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              Stay hydrated with My Fit Boat's premium lime electrolyte drink mix. 
              Each sachet contains the perfect balance of sodium, potassium, magnesium, 
              and calcium — with zero sugar and only 10 calories. Just mix, drink, and conquer your day.
            </p>

            {/* Pack Info */}
            <div className="p-4 rounded-xl bg-secondary border border-primary/10">
              <p className="text-sm font-semibold text-secondary-foreground">📦 Box of 15 Sachets — Mix with 500ml water each</p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-foreground">Quantity:</span>
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-muted transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-5 py-2 font-semibold text-foreground border-x border-border">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-muted transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="flex-1 gradient-primary text-primary-foreground font-semibold text-base gap-2">
                <ShoppingCart className="h-5 w-5" /> Order Now — ₹{299 * quantity}
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 font-semibold">
                Add to Cart
              </Button>
            </div>

            {/* Benefits Icons */}
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-border">
              {[
                { icon: Zap, label: "Fast Hydration" },
                { icon: Leaf, label: "Zero Sugar" },
                { icon: Droplets, label: "Natural Lime" },
                { icon: Heart, label: "Electrolytes" },
              ].map((b) => (
                <div key={b.label} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="nutrition" className="w-full">
            <TabsList className="w-full max-w-lg mx-auto grid grid-cols-4 h-12 bg-muted">
              <TabsTrigger value="nutrition" className="font-medium">Nutrition</TabsTrigger>
              <TabsTrigger value="ingredients" className="font-medium">Ingredients</TabsTrigger>
              <TabsTrigger value="how-to-use" className="font-medium">How to Use</TabsTrigger>
              <TabsTrigger value="reviews" className="font-medium">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="nutrition" className="mt-8">
              <div className="max-w-lg mx-auto bg-card rounded-2xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold mb-4 text-card-foreground">Nutrition Facts</h3>
                <p className="text-sm text-muted-foreground mb-4">Per serving (1 sachet / 500ml)</p>
                {[
                  { label: "Calories", value: "10 kcal" },
                  { label: "Sugar", value: "0g" },
                  { label: "Sodium", value: "250mg" },
                  { label: "Potassium", value: "150mg" },
                  { label: "Magnesium", value: "60mg" },
                  { label: "Calcium", value: "40mg" },
                  { label: "Vitamin C", value: "30mg" },
                  { label: "Zinc", value: "5mg" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between py-3 border-b border-border last:border-0">
                    <span className="text-card-foreground">{item.label}</span>
                    <span className="font-semibold text-primary">{item.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ingredients" className="mt-8">
              <div className="max-w-lg mx-auto bg-card rounded-2xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold mb-4 text-card-foreground">Ingredients</h3>
                <div className="flex flex-wrap gap-3">
                  {["Purified Water", "Lime Juice Concentrate", "Sea Salt", "Potassium Citrate", "Magnesium Citrate", "Calcium Lactate", "Natural Flavors", "Stevia Leaf Extract"].map((ing) => (
                    <span key={ing} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="how-to-use" className="mt-8">
              <div className="max-w-lg mx-auto bg-card rounded-2xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold mb-6 text-card-foreground">How to Use</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", text: "Take one sachet of My Fit Boat Electrolyte Mix" },
                    { step: "2", text: "Pour into 500ml of cold water" },
                    { step: "3", text: "Shake or stir well until fully dissolved" },
                    { step: "4", text: "Enjoy during or after your workout, or anytime you need hydration!" },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                        {s.step}
                      </div>
                      <p className="text-card-foreground pt-2">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  { name: "Rahul S.", text: "Best electrolyte drink I've tried. The lime flavor is so refreshing!", rating: 5 },
                  { name: "Priya M.", text: "Recommend to all my fitness clients. Zero sugar is a big win!", rating: 5 },
                  { name: "Arjun K.", text: "Perfect for cricket matches. Keeps cramps away!", rating: 5 },
                ].map((r) => (
                  <div key={r.name} className="bg-card rounded-xl border border-border p-6">
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-lime text-lime" />
                      ))}
                    </div>
                    <p className="text-card-foreground mb-2">"{r.text}"</p>
                    <p className="text-sm font-semibold text-muted-foreground">{r.name}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
