import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10" data-gsap="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-primary rounded-full text-sm font-bold mb-6">
            <Zap className="w-4 h-4" />
            <span>SOLUSI MAKANAN SEHAT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight mb-6">
            Bingung Makan? <br/>
            <span className="text-primary">Putar & Temukan</span> Makananmu.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Healthy Roulette adalah cara menyenangkan dan interaktif untuk menemukan tempat makanan sehat di Surabaya Barat secara acak, lengkap dengan visual, lokasi, dan gambaran menu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="px-8 py-6 h-auto bg-primary text-primary-foreground rounded-full text-lg font-bold shadow-xl shadow-primary/40 hover:shadow-2xl transition-all flex items-center justify-center gap-2" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              <Link href="roulette">Coba Putar Sekarang</Link>
              <ArrowRight className="w-5 h-5" />
            </Button>
            {/* <Button variant="outline" className="px-8 py-6 h-auto bg-white border-2 border-border rounded-full text-lg font-bold hover:bg-muted transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Cara Kerjanya
            </Button> */}
          </div>
        </div>
        
        <div className="relative" data-gsap="parallax" data-speed="0.15">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 group">
            <img 
              src="/restaurants/greenly.webp" 
              alt="Healthy Roulette Restaurant Interior" 
              className="w-full h-full object-cover aspect-[4/3]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Healthy Food Place</p>
                <h3 className="text-lg font-bold">Greenly</h3>
              </div>
              <div className="flex items-center gap-1 text-primary">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
