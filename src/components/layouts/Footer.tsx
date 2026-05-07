import React from "react";
import { Flame, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
            <Flame className="w-5 h-5" />
          </div>
          <span className="text-lg font-heading font-bold text-foreground">Healthy Roulette</span>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
          <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
          <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        
        <div className="flex gap-4">
          <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
        </div>
      </div>
      <div className="text-center mt-8 text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Healthy Roulette. All rights reserved.
      </div>
    </footer>
  );
}
