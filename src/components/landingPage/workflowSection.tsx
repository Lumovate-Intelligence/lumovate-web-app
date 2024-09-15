import {
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

export default function WorkflowSection() {
  const steps = [
    {
      step: "1",
      title: "Idea & Strategy",
      description:
        "We begin with in-depth discussions to understand your vision and goals. A detailed strategy is crafted, ensuring alignment with your business objectives.",
      icon: <FaLightbulb />,
    },
    {
      step: "2",
      title: "Design & Prototype",
      description:
        "Our designers create stunning, user-friendly interfaces and interactive prototypes, constantly iterating based on user feedback and usability tests.",
      icon: <FaPencilRuler />,
    },
    {
      step: "3",
      title: "Development",
      description:
        "Using cutting-edge technologies, our developers bring your product to life with clean, efficient, and scalable code.",
      icon: <FaCode />,
    },
    {
      step: "4",
      title: "Testing & QA",
      description:
        "Rigorous testing is carried out to identify and resolve any potential issues, ensuring a flawless user experience across all platforms.",
      icon: <FaBug />,
    },
    {
      step: "5",
      title: "Launch & Support",
      description:
        "After launch, we continue to monitor and provide ongoing support, ensuring your product remains stable and up-to-date.",
      icon: <FaRocket />,
    },
    {
      step: "6",
      title: "Maintenance & Growth",
      description:
        "We offer ongoing maintenance and work to scale your product as your business grows, making continuous improvements based on analytics and user feedback.",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section
      id="process"
      className="bg-gradient-to-b from-gray-50 to-gray-200 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Our Development Workflow
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 hover:bg-gray-50"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mb-4">
              {step.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              {step.step}. {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
