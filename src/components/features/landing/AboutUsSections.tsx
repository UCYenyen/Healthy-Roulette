"use client";

import { Heart, Users, ShieldCheck, Smile, Globe, Twitter, Linkedin, Facebook, Instagram, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGSAPAnimations } from "@/hooks/use-gsap-animations";
import Link from "next/link";

export function AboutUsSections() {
  // Initialize reusable animations
  useGSAPAnimations();

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero / Mission Section */}
      <section className="w-full py-16 md:py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center" data-gsap="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-primary rounded-full text-sm font-bold mb-6">
            <Heart className="w-5 h-5" />
            <span>MASALAH & LATAR BELAKANG</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight mb-8 text-foreground">
            Mencari Makanan Sehat <span className="text-primary">Kini Lebih Fun.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tren healthy food sedang marak di Indonesia, tetapi banyak masyarakat, khususnya warga Surabaya Barat, yang masih kesulitan menemukan referensi karena kurangnya eksplorasi. Terlebih, meningkatnya tren ini tidak disertai dengan bertambahnya jumlah tempat makanan sehat secara masif.
          </p>
        </div>
      </section>

      {/* Story Section (Visual Left, Text Right) */}
      <section className="w-full py-16 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative" data-gsap="parallax" data-speed="0.1">
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
                {/* <span className="text-2xl font-black text-foreground">50+</span> */}
              </div>
              <p className="text-sm text-muted-foreground font-medium">Rekomendasi tempat healthy food di Surabaya Barat.</p>
            </div>
          </div>

          <div className="space-y-8" data-gsap="reveal">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight text-foreground">
              Solusi Kami: Fitur Spin Interaktif.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Website sederhana dengan fitur spin untuk menghasilkan rekomendasi tempat healthy food secara acak. Kami melengkapinya dengan visual makanan, informasi lokasi, dan gambaran kasar tentang menu yang dijual, menghemat waktu Anda untuk menemukan makanan sehat yang tepat.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-background rounded-2xl border border-border">
                <h4 className="font-bold text-primary text-lg mb-1">Eksplorasi</h4>
                <p className="text-sm text-muted-foreground">Mendorong penemuan tempat makan baru di Surabaya Barat.</p>
              </div>
              <div className="p-4 bg-background rounded-2xl border border-border">
                <h4 className="font-bold text-primary text-lg mb-1">Interaktif</h4>
                <p className="text-sm text-muted-foreground">Memberikan pengalaman seru lewat roulette wheel yang acak.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-gsap="reveal">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Tujuan Utama Kami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Apa yang ingin kami capai melalui platform Healthy Roulette untuk warga Surabaya Barat.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-gsap="stagger-container">
            <ValueCard 
              icon={Smile} 
              title="Lebih Fun & Interaktif" 
              description="Memberikan pengalaman seru melalui gamifikasi dalam menentukan makanan sehat Anda secara acak." 
            />
            <ValueCard 
              icon={Globe} 
              title="Mudah Ditemukan" 
              description="Membantu Anda menemukan tempat-tempat healthy food tersembunyi di Surabaya Barat dengan lebih gampang." 
            />
            <ValueCard 
              icon={Flame} 
              title="Hemat Waktu" 
              description="Tak perlu lagi membuang waktu memikirkan tujuan; biarkan sistem kami yang memberikan rekomendasi instan." 
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-gsap="reveal">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Tim di Balik Layar</h2>
              <p className="text-muted-foreground max-w-xl">Berdedikasi untuk memberikan rekomendasi makanan sehat terbaik untuk Anda.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-gsap="stagger-container">
            <TeamMember 
              name="Budi Dharma Aryaputra" 
              role="0506012310029" 
              image="/team/budi.webp" 
            />
            <TeamMember 
              name="Alexandra tifaNny" 
              role="0106012410037" 
              image="/team/alexandra.webp" 
            />
            <TeamMember 
              name="Cedric Imanuel" 
              role="0106012410176" 
              image="/team/cedric.webp" 
            />
            <TeamMember 
              name="Gishella Elzha" 
              role="0106012410044" 
              image="/team/gishella.webp" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-6">
        <div 
          className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden shadow-2xl"
          data-gsap="reveal"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 relative z-10 text-white">
            Siap Mencari Makanan Sehatmu?
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto relative z-10 text-white/90">
            Ayo coba fitur spin kami sekarang dan temukan rekomendasi tempat makan sehat tersembunyi di Surabaya Barat dengan cara yang seru!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button className="px-10 py-7 bg-white text-primary rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform hover:bg-white/90" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
             <Link href={"/roulette"}>Mulai Spin Sekarang</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div 
      className="p-10 bg-card rounded-3xl border border-border text-center group hover:border-primary transition-all shadow-sm hover:shadow-md"
      data-gsap="stagger-item"
    >
      <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-10 h-10" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="group" data-gsap="stagger-item">
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
