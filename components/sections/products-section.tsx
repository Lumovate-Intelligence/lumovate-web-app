import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProductShowcaseProps {
  title: string;
  description: string;
  features: string[];
  images: string[];
  link: string;
  hasPlayStore?: boolean;
  hasAppStore?: boolean;
}

export function ProductsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-blue-500/5 to-violet-500/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that drive business success
          </p>
        </div>
        <div className="space-y-32">
          {products.map((product, index) => (
            <Card key={index} className="feature-card hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-background via-secondary/30 to-background">
              <div className="relative h-[500px] w-full">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    {product.images.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <div className="relative h-[500px] w-full">
                          <Image
                            src={image}
                            alt={`${product.title} screenshot ${idx + 1}`}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
              <div className="p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-3xl font-bold gradient-text mb-4">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-blue-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="space-y-4">
                        <Button asChild size="lg" className="w-full gap-2 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 shadow-lg">
                          <a href={product.link} target="_blank" rel="noopener noreferrer">
                            Visit Website <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </Button>
                        {(product.hasPlayStore || product.hasAppStore) && (
                          <div className="flex flex-col gap-4 items-center">
                            {product.hasPlayStore && (
                              <a href="#" className="hover:opacity-80 transition-opacity w-48">
                                <Image
                                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                  alt="Get it on Google Play"
                                  width={646}
                                  height={250}
                                  className="w-full h-auto"
                                />
                              </a>
                            )}
                            {product.hasAppStore && (
                              <a href="#" className="hover:opacity-80 transition-opacity w-40">
                                <Image
                                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                                  alt="Download on the App Store"
                                  width={250}
                                  height={83}
                                  className="w-full h-auto"
                                />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const products: ProductShowcaseProps[] = [
  {
    title: "SmartHR Pro",
    description: "A comprehensive HR management solution with AI-powered insights. Streamline your HR processes, manage employee data, and make data-driven decisions with our intuitive platform.",
    features: [
      "AI-powered analytics and insights",
      "Comprehensive employee performance tracking",
      "Automated payroll and benefits management",
      "Advanced leave and attendance tracking",
      "Custom reporting and analytics dashboard",
      "Mobile-first employee self-service portal"
    ],
    images: [
      "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=1600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1554774853-b415df9eeb92?w=1600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?w=1600&auto=format&fit=crop&q=60",
    ],
    link: "https://smarthr.example.com",
    hasPlayStore: true,
    hasAppStore: true,
  },
  {
    title: "CloudSecure",
    description: "Advanced cloud security and monitoring platform that protects your digital assets with state-of-the-art technology and real-time threat detection.",
    features: [
      "Real-time threat detection and response",
      "Advanced security analytics and reporting",
      "Automated compliance management",
      "24/7 security monitoring and alerts",
      "Cloud asset management and protection",
      "Zero-trust security implementation"
    ],
    images: [
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1633265486501-46e9a68427de?w=1600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1633265486275-5f0d2a0a0f77?w=1600&auto=format&fit=crop&q=60",
    ],
    link: "https://cloudsecure.example.com",
  },
  {
    title: "DataInsights",
    description: "A powerful business intelligence and analytics platform that transforms your data into actionable insights, helping you make informed decisions.",
    features: [
      "Interactive real-time dashboards",
      "Advanced predictive analytics",
      "Customizable reporting tools",
      "Data visualization and exploration",
      "Machine learning-powered forecasting",
      "Automated data processing pipelines"
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1551288049-a5066f7a7e62?w=1600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1551288049-48572a22c5e1?w=1600&auto=format&fit=crop&q=60",
    ],
    link: "https://datainsights.example.com",
    hasAppStore: true,
  },
];