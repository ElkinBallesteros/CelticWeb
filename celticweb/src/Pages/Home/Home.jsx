
import React from 'react'
import { Layout } from '../../Components/Layout/Layout'
import './Home.css'
import { getImageUrl } from '../../Utils/image-util'
import { Contact } from '../../Components/Contact/Contact'

function Home() {
    return (
      <Layout>
        <div className='space-y-16'>
          <HeroSection/>
          <ServicesSection/>
          <StrengthsSection/>
          <TechnologyStackSection/>
          <CaseStudySection/>
          {/* <TestimonialsSection/> */}
          <Contact/>
        </div>
      </Layout>
  )
}

export {Home}

const imageBasePath = '../pages/home/images';

function HeroSection () {
  return (
    <section className="py-4 homeContainer text-center w-full h-content bg-hr-pattern bg-contain bg-center bg-no-repeat">
    </section>
  );
};

function ServicesSection (){
  const services = [
    {
      title: "IT Recruitment",
      description: "End-to-end recruitment tailored to your business, with a focus on IT resource outsourcing.",
      icon: "recruitment2.png",
    },
    {
      title: "Custom Software Development",
      description: "From ideation to implementation, delivering scalable and user-friendly solutions.",
      icon: "software.jpg",
    },
    {
      title: "Data Solutions",
      description: "BI, Big Data, and architecture services to unlock actionable insights and drive success.",
      icon: "data.jpg",
    },
  ];

  return (
    <section className="py-6 flex justify-between bg-gray-100">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-main-blue">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg text-center bg-gradient-to-r 
              from-ligth-gray from-5% via-main-gray via-45% to-main-dark-gray to-50%
              text-white"
            >
              <div className="text-4xl mb-4">
                <img src={getImageUrl(imageBasePath, service.icon)} className='w-full object-cover  rounded-lg h-52'
                alt={service.title}/>
                </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function StrengthsSection () {
  const strengths = [
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
    <section className="py-6 bg-white">
      <div className="mx-auto px-4 text-center ">
        <h2 className="text-6xl font-bold mb-8 text-main-blue">Why Choose Us?</h2>
        <ul className="space-y-4">
          {strengths.map((strength, index) => (
            <li key={index} className="text-2xl text-left mt-10">
              ✅ {strength}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

function TechnologyStackSection () {
  const technologies = [
    { name: ".NET", description: "High performance, scalability, and security.", images:[
      {image:"LogoCsharp.png", size:"w-12 h-12"},
      {image:"VSLogo.png", size:"w-14 h-12"},
      {image:"VSCodeLogo.png", size:"w-14 h-14"}
    ] },
    { name: "Azure", description: "Cloud solutions for secure, scalable data management.",images:[{
      image:"azure.png", size:"w-30 h-24"
    }] },
    { name: "React", description: "Interactive UIs for responsive and dynamic web applications.",images:[{
      image:"react.png", size:"w-16 h-16"
    }] },
    { name: "Python", description: "Data analytics, machine learning, and AI.",images:[{
      image:"phyton.png", size:"w-20 h-20"
    }] },
    { name: "PHP", description: "Flexible solutions for dynamic web applications.",images:[{
      image:"php.png", size:"w-16 h-16"
    }] },
  ];
  
  return (
    <section className="py-6 bg-gray-100">
      <div className="mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-12 text-main-blue">Technology Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg text-center
              bg-gradient-to-r from-ligth-gray from-5% via-main-gray via-45% to-main-dark-gray to-50%
              text-white"
            >
              <div className='flex items-center justify-center p-2'>
                {tech.images.map((image, index) => (<img key={image.image} src={getImageUrl(imageBasePath, image.image)} alt={image.image} className={`${image.size} ml-3`}/>))}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function CaseStudySection () {
  return (
    <section className="py-6 bg-white">
      <div className="mx-auto px-4 text-center">
        <div className='flex items-center justify-center'>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Case Study: Best Buy</h2>
          <img alt="" src={getImageUrl(imageBasePath, "bestbuy.jpg")} className='w-20 h-10 ml-4' />
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Improving Business Processes</h3>
          <p className="mb-4">
            Leveraged Azure technologies to modernize legacy systems and optimize processes.
          </p>
          <ul className="text-left space-y-2 pt-10">
            <li>✅ Increased efficiency by 50% through optimized processes, reducing execution times significantly.</li>
            <li>✅ Implemented proactive monitoring with Azure Functions integrated with Slack for real-time alerts.</li>
            <li>✅ Modernized legacy systems using Azure App Services, improving system reliability and scalability.</li>
            <li>✅ Enhanced operational performance through automation of key workflows.</li>
            <li>✅ Developed a robust disaster recovery system, ensuring business continuity.</li>
            <li>✅ Improved data accuracy and reporting with advanced analytics using Azure Insights.</li>
            <li>✅ Achieved compliance with industry standards, including GDPR and HIPAA, through secure data management practices.</li>
            <li>✅ Enabled seamless scalability to handle seasonal spikes in workload with Azure's pay-as-you-go model.</li>
            <li>✅ Delivered training and documentation for Best Buy’s IT teams to ensure smooth system adoption.</li>
            <li>✅ Provided ongoing support, monitoring, and updates to maintain optimal system performance.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

function TestimonialsSection () {
  const testimonials = [
    {
      quote:
        "Celtic’s team delivered exceptional results, streamlining our IT processes with precision.",
      author: "Jane Doe, CTO of TechCorp",
    },
    {
      quote: "Their custom software solutions boosted our productivity by 40%.",
      author: "John Smith, CEO of Innovate Ltd.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 h-screen">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg"
            >
              <p className="italic mb-4">“{testimonial.quote}”</p>
              <p className="font-bold text-right">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};