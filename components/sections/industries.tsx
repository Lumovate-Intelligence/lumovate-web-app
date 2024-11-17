"use client";

import { Card } from "@/components/ui/card";
import { Building2, Building, ShoppingBag, Stethoscope, GraduationCap, Plane } from "lucide-react";
import { motion } from "framer-motion";

export function IndustriesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-blue-500/5 to-violet-500/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries We{" "}
            <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering innovative solutions across diverse sectors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 feature-card hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-background via-secondary/30 to-background">
                <div className="mb-4">
                  <industry.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const industries = [
  {
    title: "Banking & Finance",
    description: "Secure and scalable solutions for financial institutions.",
    icon: Building2,
  },
  {
    title: "Healthcare",
    description: "Innovative healthcare management and patient care systems.",
    icon: Stethoscope,
  },
  {
    title: "Retail & E-commerce",
    description: "End-to-end solutions for modern retail businesses.",
    icon: ShoppingBag,
  },
  {
    title: "Education",
    description: "Digital learning and educational management platforms.",
    icon: GraduationCap,
  },
  {
    title: "Real Estate",
    description: "Property management and real estate solutions.",
    icon: Building,
  },
  {
    title: "Travel & Hospitality",
    description: "Booking and management systems for travel businesses.",
    icon: Plane,
  },
];