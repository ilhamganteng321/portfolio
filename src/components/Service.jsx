import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiDatabase, FiSearch, FiServer } from 'react-icons/fi';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom website development with modern technologies like React, Next.js, and Tailwind CSS for optimal performance and user experience.",
      icon: <FiCode className="w-8 h-8" />,
      features: ["Responsive Design", "SEO Friendly", "Performance Optimized"],
      price: "Start from $999"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed to enhance user experience and drive engagement.",
      icon: <FiLayout className="w-8 h-8" />,
      features: ["User Research", "Wireframing", "Prototyping", "UI Design"],
      price: "Start from $799"
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Cross-platform mobile applications built with React Native for both iOS and Android platforms.",
      icon: <FiSmartphone className="w-8 h-8" />,
      features: ["iOS & Android", "Offline Support", "API Integration"],
      price: "Start from $1,499"
    },
    {
      id: 4,
      title: "Backend Development",
      description: "Robust backend solutions with Node.js, Express, and databases like MongoDB or PostgreSQL.",
      icon: <FiDatabase className="w-8 h-8" />,
      features: ["RESTful APIs", "Authentication", "Database Design"],
      price: "Start from $1,299"
    },
    {
      id: 5,
      title: "SEO Optimization",
      description: "Improve your website's visibility on search engines and drive organic traffic to your business.",
      icon: <FiSearch className="w-8 h-8" />,
      features: ["Keyword Research", "On-Page SEO", "Technical SEO"],
      price: "Start from $499"
    },
    {
      id: 6,
      title: "DevOps Services",
      description: "Infrastructure setup, CI/CD pipelines, and cloud solutions for your development workflow.",
      icon: <FiServer className="w-8 h-8" />,
      features: ["Docker & Kubernetes", "AWS/GCP Setup", "Automated Deployment"],
      price: "Start from $1,199"
    }
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6
      }
    })
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Services</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the services I offer to help you grow your business and bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={variants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium">{service.price}</span>
                  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 md:p-12 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">Have a custom project in mind?</h3>
              <p className="text-indigo-100 max-w-lg">
                Whether you need a complete solution or just specific expertise, I can help you bring your vision to life.
              </p>
            </div>
            <button className="px-6 py-3 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
              Let's Discuss Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;