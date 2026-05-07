"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Flame, Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <nav className="w-full px-14 py-4 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" className="flex items-center hover:cursor-pointer gap-2">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
          <Flame className="w-6 h-6" />
        </div>
        <span className="text-xl font-heading font-bold tracking-tight">Healthy Roulette</span>
      </Link>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 font-medium">
        <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
        <Link href="/roulette" className="hover:text-primary transition-colors">Roulette</Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                  <Flame className="w-5 h-5" />
                </div>
                <span>Healthy Roulette</span>
              </SheetTitle>
            </SheetHeader>
            <div className="flex px-4 flex-col gap-6 mt-8">
              <Link href="/about-us" className="text-lg font-semibold hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/roulette" className="text-lg font-semibold hover:text-primary transition-colors">
                Roulette
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
