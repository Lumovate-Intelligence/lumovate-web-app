"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function TechnologyStack() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-blue-500/5 to-violet-500/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Technology{" "}
            <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust and scalable solutions
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <TechCategory
            title="Frontend"
            technologies={[
              "React.js",
              "Next.js",
              "Vue.js",
              "Angular",
              "TypeScript",
              "Tailwind CSS"
            ]}
          />
          <TechCategory
            title="Backend"
            technologies={[
              "Node.js",
              "Python",
              "Java",
              "Go",
              "PHP",
              "Ruby on Rails"
            ]}
          />
          <TechCategory
            title="Database"
            technologies={[
              "PostgreSQL",
              "MongoDB",
              "MySQL",
              "Redis",
              "Elasticsearch",
              "Firebase"
            ]}
          />
          <TechCategory
            title="DevOps"
            technologies={[
              "Docker",
              "Kubernetes",
              "AWS",
              "Azure",
              "CI/CD",
              "Terraform"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function TechCategory({ title, technologies }: { title: string; technologies: string[] }) {
  return (
    <Card className="p-6 feature-card hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-background via-secondary/30 to-background backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-4 gradient-text">{title}</h3>
      <ul className="space-y-2">
        {technologies.map((tech, index) => (
          <motion.li
            key={tech}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-blue-500" />
            <span className="text-foreground/80 hover:text-foreground transition-colors">
              {tech}
            </span>
          </motion.li>
        ))}
      </ul>
    </Card>
  );
}