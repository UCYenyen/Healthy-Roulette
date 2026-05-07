"use client";

import React from "react";
import { Heart, Users, ShieldCheck, Smile, Globe, Twitter, Linkedin, Facebook, Instagram, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutUsSections() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero / Mission Section */}
      <section className="w-full py-16 md:py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-primary rounded-full text-sm font-bold mb-6">
            <Heart className="w-5 h-5" />
            <span>OUR MISSION</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight mb-8 text-foreground">
            We&apos;re making healthy eating <span className="text-primary">exciting again.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Healthy Roulette was born from a simple observation: most people want to eat better, but the mental fatigue of planning meals often leads to poor choices. We&apos;re here to take the guesswork out of nutrition.
          </p>
        </div>
      </section>

      {/* Story Section (Visual Left, Text Right) */}
      <section className="w-full py-16 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-secondary/40 rounded-[2.5rem] p-4 shadow-inner">
              <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://uxmagic.blob.core.windows.net/public/agent-images/team-culture-1778169909589-8dwu4xciwls.png" 
                  alt="Our Team Culture" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 rounded-3xl shadow-xl max-w-[240px]">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-2xl font-black text-foreground">50+</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Passionate chefs and nutritionists on our team.</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight text-foreground">
              It started in a small kitchen in Portland.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our founder, a nutritionist frustrated by the &quot;boring&quot; reputation of healthy food, decided to gamify the experience. What started as a local meal-prep service has grown into a community of thousands who love the surprise of a healthy roulette spin.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-background rounded-2xl border border-border">
                <h4 className="font-bold text-primary text-lg mb-1">Authentic</h4>
                <p className="text-sm text-muted-foreground">Real ingredients, real people, real results.</p>
              </div>
              <div className="p-4 bg-background rounded-2xl border border-border">
                <h4 className="font-bold text-primary text-lg mb-1">Personal</h4>
                <p className="text-sm text-muted-foreground">Tailored to your specific dietary needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide every recipe we create and every meal we deliver.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-card rounded-3xl border border-border text-center group hover:border-primary transition-all shadow-sm hover:shadow-md">
              <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Quality First</h3>
              <p className="text-muted-foreground leading-relaxed">We never compromise on ingredients. If it&apos;s not organic and fresh, it doesn&apos;t make it to our kitchen.</p>
            </div>
            
            <div className="p-10 bg-card rounded-3xl border border-border text-center group hover:border-primary transition-all shadow-sm hover:shadow-md">
              <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Smile className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Food as Joy</h3>
              <p className="text-muted-foreground leading-relaxed">Healthy food should taste amazing. We employ world-class chefs to ensure every bite is a celebration.</p>
            </div>
            
            <div className="p-10 bg-card rounded-3xl border border-border text-center group hover:border-primary transition-all shadow-sm hover:shadow-md">
              <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Sustainability</h3>
              <p className="text-muted-foreground leading-relaxed">From compostable packaging to zero-waste kitchens, we care about the planet as much as your health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Meet the Visionaries</h2>
              <p className="text-muted-foreground max-w-xl">A group of food-obsessed experts dedicated to your well-being.</p>
            </div>
            <Button variant="outline" className="rounded-full border-2 border-primary text-primary font-bold px-8 py-6 hover:bg-primary hover:text-white transition-all">
              Join Our Team
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Sarah Chen" 
              role="Founder & CEO" 
              image="https://randomuser.me/api/portraits/women/45.jpg" 
            />
            <TeamMember 
              name="Marcus Thorne" 
              role="Head of Culinary" 
              image="https://randomuser.me/api/portraits/men/32.jpg" 
            />
            <TeamMember 
              name="Elena Rodriguez" 
              role="Lead Nutritionist" 
              image="https://randomuser.me/api/portraits/women/60.jpg" 
            />
            <TeamMember 
              name="David Park" 
              role="Operations Director" 
              image="https://randomuser.me/api/portraits/men/85.jpg" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 relative z-10 text-white">
            Ready to spin for your health?
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto relative z-10 text-white/90">
            Join thousands of others who have simplified their lives and improved their health with Healthy Roulette.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button className="px-10 py-7 bg-white text-primary rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform hover:bg-white/90">
              Get Started Now
            </Button>
            <Button variant="outline" className="px-10 py-7 bg-transparent border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-all">
              View Menu
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="group">
      <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-4 relative shadow-md">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <div className="flex gap-3 text-white">
            <Twitter className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            <Linkedin className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
      <h4 className="text-xl font-bold text-foreground">{name}</h4>
      <p className="text-primary font-semibold text-sm uppercase tracking-wider">{role}</p>
    </div>
  );
}
