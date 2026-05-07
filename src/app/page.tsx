import { Hero } from "@/components/features/landing/Hero";
import { FeatureCards } from "@/components/features/landing/FeatureCards";
import { QualitySection } from "@/components/features/landing/QualitySection";
import { Footer } from "@/components/layouts/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-primary">
      <main className="flex-1">
        <Hero />
        <QualitySection />
        <FeatureCards />
        
        {/* Success Stories / CTA Section from Design */}
        <section className="w-full py-20 px-6">
          <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 relative z-10">
              Ready to spin for your health?
            </h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto relative z-10">
              Join thousands of others who have simplified their lives and improved their health with Healthy Roulette.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-10 py-4 bg-white text-primary rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform">
                Get Started Now
              </button>
              <button className="px-10 py-4 bg-primary border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-all">
                View Menu
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

