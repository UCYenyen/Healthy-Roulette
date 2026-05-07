import React from "react";
import { ArrowRight, Flame, Leaf, Activity } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Keto & Low Carb",
    description: "High healthy fats and minimal carbs to keep your energy levels steady all day.",
    icon: Flame,
    color: "primary",
    bgColor: "bg-secondary",
    textColor: "text-primary",
  },
  {
    title: "Plant-Based Power",
    description: "100% organic, vegan-friendly meals packed with plant proteins and vital nutrients.",
    icon: Leaf,
    color: "primary",
    bgColor: "bg-secondary",
    textColor: "text-primary",
  },
  {
    title: "Performance Pro",
    description: "Optimized macros for athletes and fitness enthusiasts looking to build and recover.",
    icon: Activity,
    color: "primary",
    bgColor: "bg-secondary",
    textColor: "text-primary",
  },
];

export function FeatureCards() {
  return (
    <section className="w-full py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Diets Tailored For You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Choose your goal and let our roulette spin the perfect meal plan for your lifestyle.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-card rounded-3xl border border-border hover:border-primary/50 transition-all hover:shadow-xl group">
              <div className={`w-14 h-14 ${feature.bgColor} ${feature.textColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <Link href="#" className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Explore Menu <ArrowRight className="w-5 h-5" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
