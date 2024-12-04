import { Contact } from "../../Components/Contact/Contact";
import { Layout } from "../../Components/Layout/Layout"
import { getImageUrl } from "../../Utils/image-util";

function Outsorcing(){
    return (
        <Layout>
           <div className='space-y-16'>
              <HeroSection />
              <HowItWorksSection />
              <WhyChooseUsSection />
              <SkillsSection />
              {/* <CaseStudiesSection /> */}
              <Contact />
            </div>
        </Layout>
    );
}
const BASE_URL = import.meta.env.BASE_URL;
const imageBasePath = '../pages/outsorcing/images';
export {Outsorcing}

function HeroSection () {
    return (
      <section className="py-20 text-center items-center">
        <div className="mx-auto px-4">
          <h1 className="text-4xl font-bold">Connecting You with Top IT Talent</h1>
          <p className="text-lg mt-4">
            Specialized in IT recruitment and talent management to drive your business forward.
          </p>
          <img src={getImageUrl(imageBasePath, "recruitment5.png")} alt="" className="object-cover px-6 py-10 w-full h-fit" />
          {/* <button className="mt-6 bg-white text-blue-700 px-6 py-2 rounded-full">
            Start Recruitment Now
          </button> */}
        </div>
      </section>
    );
  };

  function HowItWorksSection () {
    const steps = [
      { title: "Identify Needs", description: "We collaborate with you to thoroughly understand your business objectives, team dynamics, and technical requirements. This enables us to define the ideal talent profile tailored to your unique needs, whether it’s for a short-term project or a long-term role.", icon: "requirements.jpg" },
      { title: "Source Candidates", description: "Using our exclusive database of IT professionals, we identify top-tier candidates with the skills and experience required for the role. Our extensive network ensures timely access to qualified talent, even for specialized or niche positions.", icon: "candidate.jpg" },
      { title: "Selection & Validation", description: "Through a rigorous screening process, we assess technical expertise, problem-solving abilities, and cultural fit. Our validation ensures that each candidate not only meets your expectations but also aligns with your company’s values and goals.", icon: "selection.jpg" },
      { title: "Onboarding", description: "We provide end-to-end support during the onboarding process, including documentation, training, and integration. This ensures a seamless transition for the new hire into your team, allowing them to contribute effectively from day one.", icon: "onboarding.jpg" },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-main-blue">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center bg-gradient-to-r 
              from-ligth-gray from-5% via-main-gray via-45% to-main-dark-gray to-50%
              text-white">
                <div className="text-4xl mb-4">
                <img src={getImageUrl(imageBasePath, step.icon)} className='w-full object-cover  rounded-lg h-52'
                alt={step.title}/>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  function WhyChooseUsSection () {
    const reasons = [
      "Extensive database of highly skilled IT professionals.",
    "End-to-end recruitment management, from sourcing to onboarding.",
    "Expertise in niche and short-term roles.",
    "Proven track record in delivering top-tier candidates across industries.",
    "Flexible engagement models to suit your business needs and budget.",
    "Comprehensive support during onboarding for seamless integration.",
    "Expertise in handling contractual and compliance responsibilities.",
    "Focus on quality and long-term retention of recruited talent.",
    "Streamlined communication with a dedicated account manager.",
    "Cutting-edge technology to ensure efficient and data-driven recruitment.",
    "Continuous follow-up to align talent performance with business goals.",
    "Access to industry-specific expertise, including software development, QA, and cloud solutions.",
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <li key={index} className="text-lg">✅ {reason}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  };

  function SkillsSection () {
    const skills = [
      "Information Gathering and Analysis: Collecting and evaluating data to identify project needs and objectives.",
      "Requirements Analysis and Planning: Transforming business requirements into structured, actionable development plans.",
      "Technical Solution Design: Developing innovative and scalable software solutions tailored to business challenges.",
      "Quality Assurance and Automation Testing: Ensuring robust performance through detailed manual and automated testing.",
      "Problem Solving and Troubleshooting: Diagnosing and resolving technical issues efficiently to maintain operational continuity.",
      "Collaboration and Communication: Coordinating effectively with teams and stakeholders to ensure project alignment.",
      "Code Optimization and Maintenance: Enhancing code efficiency and ensuring long-term maintainability for evolving business needs.",
      "Documentation and Deliverables: Creating comprehensive documentation to ensure transparency and ease of future updates.",
      "Adaptability to Emerging Technologies: Staying updated with the latest trends and tools to deliver cutting-edge solutions.",
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="mx-auto px-4 text-center ">
          <h2 className="text-3xl font-bold mb-8">Key Skills of Our Engineers</h2>
          <ul className="space-y-4">
            {skills.map((skill, index) => (
              <li key={index} className="text-lg text-left">🔹 {skill}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  };

  
  function CaseStudiesSection () {
    return (
      <section className="py-16 bg-white">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Recruitment Success Stories</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Case Study: Acme Corp</h3>
            <p className="mb-4">
              Helped Acme Corp fill 10 critical software engineering roles within 3 weeks, ensuring seamless project delivery.
            </p>
            <ul className="text-left space-y-2">
              <li>✅ Sourced candidates from a specialized talent pool.</li>
              <li>✅ Delivered tailored recruitment strategies for niche roles.</li>
              <li>✅ Achieved a 95% retention rate within 12 months.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };