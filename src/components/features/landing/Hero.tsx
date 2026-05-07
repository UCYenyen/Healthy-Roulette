import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-primary rounded-full text-sm font-bold mb-6">
            <Zap className="w-4 h-4" />
            <span>FRESH & ORGANIC DIETS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight mb-6">
            Spin the Wheel, <br/>
            <span className="text-primary">Eat Healthy</span> Every Day.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Stop wondering what to cook. Healthy Roulette curates personalized, chef-inspired diet plans delivered from our kitchen to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="px-8 py-6 h-auto bg-primary text-primary-foreground rounded-full text-lg font-bold shadow-xl shadow-primary/40 hover:shadow-2xl transition-all flex items-center justify-center gap-2">
              View Today's Menu
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="px-8 py-6 h-auto bg-white border-2 border-border rounded-full text-lg font-bold hover:bg-muted transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              See How It Works
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              <img className="w-12 h-12 rounded-full border-4 border-background" src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" />
              <img className="w-12 h-12 rounded-full border-4 border-background" src="https://randomuser.me/api/portraits/men/44.jpg" alt="User" />
              <img className="w-12 h-12 rounded-full border-4 border-background" src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" />
            </div>
            <p className="text-sm font-medium">
              <span className="font-bold text-primary">2,500+</span> happy healthy eaters this week
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 group">
            <img 
              src="https://uxmagic.blob.core.windows.net/public/agent-images/hero-restaurant-interior-1778169285362-fdrxfhoo3lb.png" 
              alt="Healthy Roulette Restaurant Interior" 
              className="w-full h-full object-cover aspect-[4/3]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Our Flagship Bistro</p>
                <h3 className="text-lg font-bold">Greenery Central Park</h3>
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
