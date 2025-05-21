import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      content: "Working with John was an absolute pleasure. His attention to detail and problem-solving skills helped us launch our platform ahead of schedule. The code quality was exceptional and he was always available for support.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager at DigitalAgency",
      content: "John's design sensibility and technical expertise transformed our client's e-commerce site. He delivered beyond our expectations and handled last-minute changes with professionalism. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder of CreativeMinds",
      content: "We've worked with many developers, but John stands out for his communication skills and ability to understand business needs. He's not just a coder - he's a problem solver who adds real value.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "David Kim",
      role: "CTO at StartupHub",
      content: "John joined our team as a contractor and quickly became indispensable. His React skills are top-notch and he helped mentor our junior developers. We'd hire him again in a heartbeat.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
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
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Client <span className="text-indigo-600 dark:text-indigo-400">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's what people I've worked with have to say about my work
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={variants}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100 dark:border-gray-700"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="relative mb-6">
                <FaQuoteLeft className="text-indigo-200 dark:text-gray-700 text-3xl absolute -top-2 -left-1" />
                <p className="text-gray-600 dark:text-gray-300 relative z-10 pl-8">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'} mr-1`} 
                      size={16}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.rating}.0/5.0
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">40+</div>
            <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;