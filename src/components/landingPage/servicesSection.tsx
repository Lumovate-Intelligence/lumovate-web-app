export default function ServicesSection() {
  const services = [
    {
      title: "Mobile Development",
      description: "iOS & Android solutions tailored for your business.",
      icon: "📱",
    },
    {
      title: "Web Development",
      description: "High-performance web applications using modern tech.",
      icon: "💻",
    },
    {
      title: "AI & Machine Learning",
      description: "Empower your product with AI-driven insights.",
      icon: "🤖",
    },
    {
      title: "UI/UX Design",
      description: "Create user-centered designs that drive engagement.",
      icon: "🎨",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable, reliable cloud infrastructure for your needs.",
      icon: "☁️",
    },
    {
      title: "DevOps & Automation",
      description:
        "Streamline your development process with automation and continuous delivery.",
      icon: "⚙️",
    },
  ];

  return (
    <section id="services" className="container mx-auto py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="border relative bg-gradient-to-br from-white to-gray-50 hover:from-indigo-50 hover:to-purple-50 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-4 text-4xl mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
