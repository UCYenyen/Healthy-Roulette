"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown, Utensils, ShoppingCart, Check, Leaf, Globe, MapPin, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { foods } from '@/lib/foods';

const restaurantName = 'Greenly';

export function RouletteSection() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState<typeof foods[0] | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const intervalId = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [carouselApi, winner]);

  const spinWheel = () => {
    if (isSpinning) return;

    const extraRotations = Math.floor(Math.random() * 5) + 5; // 5 to 10 full spins
    const randomDegree = Math.floor(Math.random() * 360);
    const totalDegree = extraRotations * 360 + randomDegree;
    
    setIsSpinning(true);
    setRotation(prev => prev + totalDegree);
    setWinner(null);

    setTimeout(() => {
      setIsSpinning(false);
      // Calculate which segment it landed on
      // The wheel is rotated, so we need to find the final normalized angle
      const finalAngle = (rotation + totalDegree) % 360;
      // 8 segments, each 45 degrees
      // The pointer is at the top (0 degrees in SVG, but we rotate the wheel)
      // index = floor((360 - finalAngle) / 45) % 8
      const index = Math.floor((360 - finalAngle) / 45) % 8;
      setWinner(foods[index]);
    }, 4000);
  };

  return (
    <section className="w-full py-20 px-6 bg-background overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 text-foreground">
            Can't Decide? <span className="text-primary">Spin the Wheel!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Let fate choose your next healthy meal. Every slice is a chef-curated nutrition-packed delight.
          </p>
        </div>

        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Roulette Wheel Container */}
          <div className="relative group">
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20">
              <ArrowDown className="w-12 h-12 text-black drop-shadow-lg" />
            </div>
            
            {/* The Wheel */}
            <div 
              className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full border-[12px] border-white shadow-[0_0_50px_rgba(76,175,80,0.2)] overflow-hidden transition-transform duration-[4000ms] ease-[cubic-bezier(0.1,0,0.1,1)]"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Wheel Segments */}
                <path d="M 50 50 L 50 0 A 50 50 0 0 1 85.3 14.6 Z" className="fill-primary" />
                <path d="M 50 50 L 85.3 14.6 A 50 50 0 0 1 100 50 Z" className="fill-secondary" />
                <path d="M 50 50 L 100 50 A 50 50 0 0 1 85.3 85.4 Z" className="fill-primary/90" />
                <path d="M 50 50 L 85.3 85.4 A 50 50 0 0 1 50 100 Z" className="fill-secondary/90" />
                <path d="M 50 50 L 50 100 A 50 50 0 0 1 14.6 85.4 Z" className="fill-primary/80" />
                <path d="M 50 50 L 14.6 85.4 A 50 50 0 0 1 0 50 Z" className="fill-secondary/80" />
                <path d="M 50 50 L 0 50 A 50 50 0 0 1 14.6 14.6 Z" className="fill-primary/70" />
                <path d="M 50 50 L 14.6 14.6 A 50 50 0 0 1 50 0 Z" className="fill-secondary/70" />
                
                {/* Labels */}
                <g className="text-[4px] font-bold pointer-events-none">
                  {foods.map((food, i) => (
                    <text 
                      key={i}
                      x="50" 
                      y="20" 
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${i * 45 + 22.5} 50 50)`}
                      className={cn(i % 2 === 1 ? "fill-primary" : "fill-white")}
                    >
                      {food.restaurant.split(' ')[0].toUpperCase()}
                    </text>
                  ))}
                </g>
              </svg>
            </div>

            {/* Center Button - Outside the rotating div so it stays upright */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-2xl flex items-center justify-center z-10 border-4 border-secondary pointer-events-auto">
                <button 
                  onClick={spinWheel}
                  disabled={isSpinning}
                  className="w-16 h-16 md:w-20 md:h-20 bg-primary text-primary-foreground rounded-full flex flex-col items-center justify-center font-black text-xs md:text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSpinning ? "SPINNING" : "SPIN"}
                </button>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="w-full lg:w-[400px] flex flex-col gap-6">
            <Card className="p-8 rounded-3xl border border-border shadow-xl relative overflow-hidden bg-card">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Utensils className="w-24 h-24" />
              </div>
              
              <div className="mb-6">
                <span className="px-3 py-1 bg-secondary text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                  {winner ? "Your Selection" : "Get Started"}
                </span>
                <h2 className="text-3xl font-heading font-black mt-2 text-foreground">
                  {isSpinning ? "Spinning..." : winner ? winner.restaurant : "Spin to decide!"}
                </h2>
                <p className="text-muted-foreground mt-2">
                  {isSpinning ? "The kitchen is getting ready..." : "Click the button to find your perfect meal."}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-3 p-4 bg-background rounded-2xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-foreground">Full Menu Detail</span>
                  </div>
                  <div className="font-medium text-primary break-all">
                    {isSpinning ? "--" : winner ? (
                      <a href={winner.link_web} target="_blank" rel="noreferrer" className="hover:underline">
                        View Details
                      </a>
                    ) : "--"}
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 p-4 bg-background rounded-2xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-foreground">Locations</span>
                  </div>
                  <div className="font-medium text-foreground flex flex-col gap-2">
                    {isSpinning ? (
                      <span>--</span>
                    ) : winner && winner.link_maps && winner.link_maps.length > 0 ? (
                      winner.link_maps.map((link, idx) => (
                        <a key={idx} href={link} target="_blank" rel="noreferrer" className="text-primary hover:underline break-all flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Location {idx + 1}</span>
                        </a>
                      ))
                    ) : (
                      <span>--</span>
                    )}
                  </div>
                </div>

                {!isSpinning && winner && winner.menu_images && winner.menu_images.length > 0 && (
                  <div className="flex flex-col gap-3 p-4 bg-background rounded-2xl border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-foreground">Menu</span>
                    </div>
                    <Carousel setApi={setCarouselApi} className="w-full relative group/carousel">
                      <CarouselContent>
                        {winner.menu_images.map((img, idx) => (
                          <CarouselItem key={idx}>
                            <a href={img} target="_blank" rel="noreferrer" className="block relative w-full h-48 sm:h-56 overflow-hidden rounded-xl border border-border/50 bg-muted flex items-center justify-center cursor-pointer">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={img} alt={`${winner.restaurant} menu ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover/carousel:scale-105" />
                            </a>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {winner.menu_images.length > 1 && (
                        <>
                          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 bg-background/80 hover:bg-background border-none shadow-sm h-8 w-8" />
                          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 bg-background/80 hover:bg-background border-none shadow-sm h-8 w-8" />
                        </>
                      )}
                    </Carousel>
                  </div>
                )}
              </div>

              <Button 
                asChild
                disabled={!winner || isSpinning}
                className={cn(
                  "w-full mt-8 py-6 bg-primary text-primary-foreground rounded-2xl font-black shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2",
                  (!winner || isSpinning) && "pointer-events-none opacity-50"
                )}
              >
                <a href={winner?.link_web || "#"} target="_blank" rel="noreferrer">
                  Visit Website
                  <Globe className="w-5 h-5" />
                </a>
              </Button>
            </Card>

            <div className="flex items-center gap-4 px-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white border-2 border-white">
                  <Check className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary border-2 border-white">
                  <Leaf className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs font-medium text-muted-foreground">Certified healthy by our nutritionists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
