import { BentoGrid } from "@/components/sections/bento-grid";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductsSection } from "@/components/sections/products-section";
import { TechnologyStack } from "@/components/sections/technology-stack";
import { DevelopmentProcess } from "@/components/sections/development-process";
import { IndustriesSection } from "@/components/sections/industries";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Code2, Cpu, Globe2, Layers, MessageSquare, Rocket, Shield, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <HeroSection />
      </section>

      <section id="services">
        <BentoGrid />
      </section>

      <section id="tech-stack">
        <TechnologyStack />
      </section>

      <section id="process">
        <DevelopmentProcess />
      </section>

      <section id="industries">
        <IndustriesSection />
      </section>

      <section id="products">
        <ProductsSection />
      </section>
      
      {/* Company Stats */}
      <section className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative">
        <div className="absolute inset-0 bg-grid-white/10 opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Growth in{" "}
              <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A decade of excellence in delivering innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCard number="10+" title="Years Experience" description="Decade of excellence" />
            <StatCard number="500+" title="Projects Delivered" description="Across industries" />
            <StatCard number="100+" title="Expert Developers" description="Skilled professionals" />
            <StatCard number="99%" title="Client Satisfaction" description="Happy customers" />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recognized{" "}
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Certified and recognized by leading industry authorities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <CertificationBadge title="ISO 9001:2015" icon={Award} />
            <CertificationBadge title="MSME Registered" icon={Shield} />
            <CertificationBadge title="Startup India" icon={Rocket} />
            <CertificationBadge title="Make in India" icon={Globe2} />
            <CertificationBadge title="DPIIT Certified" icon={Award} />
          </div>
        </div>
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}

function StatCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <Card className="p-6 text-center feature-card hover:-translate-y-1 transition-all duration-300 relative group">
      <div className="relative">
        <div className="text-4xl font-bold gradient-text mb-2">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}

function CertificationBadge({ title, icon: Icon }: { title: string; icon: any }) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 via-blue-500/10 to-violet-500/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 feature-card">
        <Icon className="w-10 h-10 text-primary group-hover:text-blue-500 transition-colors" />
      </div>
      <span className="text-sm font-medium text-center">{title}</span>
    </div>
  );
}