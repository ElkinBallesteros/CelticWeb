
import { Layout } from "../../Components/Layout/Layout"

function Software(){
    return (
        <Layout>
           <h1 className="text-white">Software</h1>
           <HeroSection />
           <WhyCustomSoftwareSection />
           <ProcessSection />
           <TechnologyStackSection />
           <CaseStudiesSection />
        </Layout>
    );
}

export {Software}

function HeroSection () {
    return (
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Empowering Your Business with Custom Software Solutions</h1>
          <p className="text-lg mt-4">
            Tailored software development to streamline your processes and achieve strategic goals.
          </p>
          <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full">
            Request a Quote
          </button>
        </div>
      </section>
    );
  };

  function WhyCustomSoftwareSection () {
    const benefits = [
      "Optimize your business processes.",
      "Enhance efficiency and productivity.",
      "Achieve scalability with tailored solutions.",
      "Integrate innovative features to stay competitive.",
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Custom Software?</h2>
          <ul className="space-y-4 text-lg text-center">
            {benefits.map((benefit, index) => (
              <li key={index}>✅ {benefit}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  };

  function ProcessSection () {
    const steps = [
      { title: "Discovery", description: "Understand your business needs and challenges." },
      { title: "Design", description: "Craft user-friendly, scalable software architecture." },
      { title: "Development", description: "Build robust solutions tailored to your requirements." },
      { title: "Deployment", description: "Ensure smooth implementation and integration." },
      { title: "Support", description: "Provide ongoing maintenance and updates." },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  function TechnologyStackSection () {
    const technologies = [
      { name: ".NET", description: "High-performance backend solutions." },
      { name: "React", description: "Dynamic, responsive UIs for web applications." },
      { name: "Python", description: "Data analytics, machine learning, and AI." },
      { name: "Azure", description: "Cloud-based scalability and security." },
      { name: "PHP", description: "Custom web solutions for diverse business needs." },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Technology Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  function CaseStudiesSection () {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Project: Best Buy Modernization</h3>
            <p className="mb-4">
              Delivered a scalable, user-friendly solution using Azure technologies to modernize legacy systems.
            </p>
            <ul className="text-left space-y-2">
              <li>✅ Increased efficiency by 50% through optimized processes.</li>
              <li>✅ Enabled real-time monitoring with Azure Functions and Slack integration.</li>
              <li>✅ Enhanced scalability and system reliability.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };