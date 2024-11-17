"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Code2 } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Providers } from './providers';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "services", label: "Services" },
    { href: "products", label: "Products" },
    { href: "about", label: "About" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(
        inter.className,
        "min-h-screen bg-background font-sans antialiased"
      )}>
        <Providers>
          <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="w-6 h-6" />
                  <span className="text-xl font-bold">TechVision</span>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                  <ThemeToggle />
                </nav>
              </div>
            </div>
          </header>
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6" />
              <span className="text-xl font-bold">TechVision</span>
            </div>
            <p className="text-muted-foreground">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Custom Software</li>
              <li>Digital Transformation</li>
              <li>Cloud Services</li>
              <li>IT Consulting</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@techvision.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TechVision Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}