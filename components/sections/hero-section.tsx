"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10" />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 bg-white/5 rounded-full text-foreground/80 font-medium text-sm backdrop-blur-sm border border-white/10">
            Leading Innovation in Technology
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-bottom duration-500 leading-tight">
            Transforming Ideas into{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-violet-500">
              Digital Reality
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-in slide-in-from-bottom delay-150 max-w-3xl mx-auto">
            We craft cutting-edge software solutions that empower businesses to thrive in the digital age.
          </p>
          <div className="flex gap-4 justify-center animate-in slide-in-from-bottom delay-300">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-primary via-blue-500 to-violet-500 hover:opacity-90 shadow-lg text-white border-0"
              onClick={() => scrollToSection('contact')}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="backdrop-blur-sm border-white/10 hover:bg-white/5"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}