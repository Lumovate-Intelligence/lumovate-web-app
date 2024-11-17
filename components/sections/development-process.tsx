"use client";

import { Card } from "@/components/ui/card";
import { Code, FileSearch, Lightbulb, Rocket, Settings, Users } from "lucide-react";
import { motion } from "framer-motion";

export function DevelopmentProcess() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-blue-500/5 to-violet-500/5 relative">
      <div className="absolute inset-0 bg-grid-white/10 opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Development{" "}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology ensures successful project delivery
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 feature-card hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-background via-secondary/30 to-background">
                <div className="mb-4">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed project roadmap.",
    icon: Lightbulb,
  },
  {
    title: "Design & Architecture",
    description: "Our team designs the system architecture and user experience.",
    icon: FileSearch,
  },
  {
    title: "Development",
    description: "We build your solution using agile development practices.",
    icon: Code,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing ensures a bug-free and reliable product.",
    icon: Settings,
  },
  {
    title: "Deployment",
    description: "We deploy your solution and ensure smooth operation.",
    icon: Rocket,
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing support and updates keep your system running optimally.",
    icon: Users,
  },
];