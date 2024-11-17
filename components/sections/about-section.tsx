export function AboutSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid-white/10 opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About{" "}
              <span className="gradient-text">TechVision</span>
            </h2>
            <p className="text-muted-foreground">
              Pioneering Digital Excellence Since 2014
            </p>
          </div>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="mb-6">
              TechVision is a leading software development company dedicated to transforming businesses through innovative technology solutions. With a decade of experience, we've established ourselves as a trusted partner for organizations seeking digital excellence.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We're committed to delivering excellence through our expertise, creativity, and dedication to client success.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="mb-6">
              To be the global leader in digital transformation, recognized for our innovative solutions, exceptional service, and commitment to creating lasting value for our clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="feature-card p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Our Values</h4>
                <ul className="space-y-2">
                  <li>Innovation & Excellence</li>
                  <li>Client-Centric Approach</li>
                  <li>Integrity & Transparency</li>
                  <li>Continuous Learning</li>
                </ul>
              </div>
              
              <div className="feature-card p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Our Expertise</h4>
                <ul className="space-y-2">
                  <li>Custom Software Development</li>
                  <li>Digital Transformation</li>
                  <li>Cloud Solutions</li>
                  <li>AI & Machine Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}