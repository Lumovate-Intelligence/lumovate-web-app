import { Card } from "@/components/ui/card";
import { Code2, Cpu, Globe2, Layers, Lock, Rocket, Shield, Sparkles } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-primary/5 via-blue-500/5 to-violet-500/5">
      <div className="absolute inset-0 bg-grid-white/10 opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-violet-500">
              TechVision
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience excellence through our comprehensive suite of services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {/* Main Feature */}
          <Card className="p-8 md:col-span-2 bg-gradient-to-br from-primary/10 via-blue-500/10 to-violet-500/10 feature-card hover:-translate-y-1 transition-all duration-300">
            <div className="h-full flex flex-col">
              <Sparkles className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-2">Innovation at Scale</h3>
              <p className="text-muted-foreground mb-4">
                Leverage cutting-edge technology to transform your business with our enterprise-grade solutions.
              </p>
              <div className="mt-auto grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-500">99%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Security */}
          <Card className="p-6 bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent feature-card hover:-translate-y-1 transition-all duration-300">
            <Lock className="w-8 h-8 mb-4 text-red-500" />
            <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
            <p className="text-sm text-muted-foreground">Bank-grade security for your digital assets</p>
          </Card>

          {/* Cloud */}
          <Card className="p-6 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent feature-card hover:-translate-y-1 transition-all duration-300">
            <Globe2 className="w-8 h-8 mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold mb-2">Cloud Solutions</h3>
            <p className="text-sm text-muted-foreground">Scalable infrastructure for growth</p>
          </Card>

          {/* AI */}
          <Card className="p-6 md:col-span-2 bg-gradient-to-br from-violet-500/10 via-violet-500/5 to-transparent feature-card hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start gap-4">
              <Cpu className="w-8 h-8 text-violet-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Harness the power of artificial intelligence and machine learning to automate processes and gain valuable insights from your data.
                </p>
              </div>
            </div>
          </Card>

          {/* Development */}
          <Card className="p-6 md:col-span-2 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent feature-card hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start gap-4">
              <Code2 className="w-8 h-8 text-emerald-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored software solutions designed to meet your specific business requirements and drive growth.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}