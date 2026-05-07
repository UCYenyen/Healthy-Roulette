import React from "react";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between md:px-48 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" className="flex items-center hover:cursor-pointer gap-2">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
          <Flame className="w-6 h-6" />
        </div>
        <span className="text-xl font-heading font-bold tracking-tight">Healthy Roulette</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 font-medium">
        <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
        <Link href="/roulette" className="hover:text-primary transition-colors">Roulette</Link>
      </div>
    </nav>
  );
}
