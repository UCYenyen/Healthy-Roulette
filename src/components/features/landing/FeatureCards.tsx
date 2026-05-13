import React from "react";
import { ArrowRight, Flame, Leaf, Activity } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Rekomendasi Acak",
    description: "Hilangkan kebingungan memilih. Biarkan roda kami merekomendasikan tempat healthy food terbaik secara instan.",
    icon: Flame,
    color: "primary",
    bgColor: "bg-secondary",
    textColor: "text-primary",
  },
  {
    title: "Visual Interaktif",
    description: "Dapatkan gambaran menu yang dijual dan visual tempat makan sebelum memutuskan untuk berkunjung.",
    icon: Leaf,
    color: "primary",
    bgColor: "bg-secondary",
    textColor: "text-primary",
  },
  {
    title: "Hemat Waktu",
    description: "Alamat dan lokasi tempat makan sehat di Surabaya Barat dapat langsung Anda temukan dengan cepat.",
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Fitur Unggulan Kami</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Pengalaman menemukan makanan sehat kini jauh lebih seru, interaktif, dan hemat waktu.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-gsap="stagger-container">
          {features.map((feature, index) => (
            <Card key={index} data-gsap="stagger-item" className="p-8 bg-card rounded-3xl border border-border hover:border-primary/50 transition-all hover:shadow-xl group">
              <div className={`w-14 h-14 ${feature.bgColor} ${feature.textColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <Link href="#how-it-works" className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Mulai Eksplorasi <ArrowRight className="w-5 h-5" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
