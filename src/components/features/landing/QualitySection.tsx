import React from "react";
import { ArrowRight, Leaf, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QualitySection() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Card on Left */}
        <div className="relative" data-gsap="parallax" data-speed="0.1">
          <div className="bg-secondary/40 rounded-[2.5rem] p-4 shadow-inner">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://uxmagic.blob.core.windows.net/public/agent-images/healthy-food-card-visual-1778169557838-67svighgy0r.png" 
                alt="Fresh Healthy Meal" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-3xl shadow-xl max-w-[200px] animate-bounce-slow">
            <Leaf className="w-8 h-8 mb-2" />
            <p className="text-sm font-bold leading-tight">Kurasi Tempat Makan Sehat Terbaik</p>
          </div>
        </div>
        
        {/* Description on Right */}
        <div className="space-y-6" data-gsap="reveal">
          <div className="w-12 h-1 bg-primary rounded-full"></div>
          <h2 className="text-4xl font-heading font-bold leading-tight text-foreground">Temukan Healthy Food <br/>di Surabaya Barat</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Menjadi bagian dari tren healthy food di Surabaya Barat kini lebih mudah. Kami telah mengumpulkan referensi tempat makan sehat yang menarik untuk Anda eksplorasi.
          </p>
          <ul className="space-y-4">
            {[
              "Pilihan tempat makan sehat yang terpercaya",
              "Visual menu yang menggugah selera",
              "Lokasi strategis di sekitar wilayah Surabaya Barat"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 font-semibold text-foreground">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Check className="w-4 h-4" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Button variant="link" className="group text-primary font-bold text-lg p-0 flex items-center gap-2 hover:gap-4 transition-all" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              Jelajahi Sekarang
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
