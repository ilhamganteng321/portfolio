import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import { FaRegComments } from 'react-icons/fa';

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "Optimizing React Performance with useMemo and useCallback",
      excerpt: "Learn how to significantly improve your React application's performance by properly using memoization techniques.",
      date: "May 15, 2023",
      readTime: "8 min read",
      author: "John Doe",
      comments: 12,
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "The Complete Guide to Dark Mode Implementation",
      excerpt: "A comprehensive look at different approaches to implement dark mode in modern web applications with React and CSS.",
      date: "April 28, 2023",
      readTime: "10 min read",
      author: "John Doe",
      comments: 8,
      category: "CSS",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "State Management in 2023: Beyond Redux",
      excerpt: "Exploring modern state management solutions like Zustand, Jotai, and React Query for your next project.",
      date: "March 12, 2023",
      readTime: "12 min read",
      author: "John Doe",
      comments: 15,
      category: "JavaScript",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
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
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
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
            Latest <span className="text-indigo-600 dark:text-indigo-400">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I share my knowledge and thoughts about web development, design, and technology
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={variants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center text-xs text-gray-500 dark:text-gray-400 mb-4 gap-3">
                  <span className="flex items-center">
                    <FiCalendar className="mr-1" />
                    {article.date}
                  </span>
                  <span className="flex items-center">
                    <FiClock className="mr-1" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center">
                    <FiUser className="mr-1" />
                    {article.author}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                  <a href={article.link}>{article.title}</a>
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.excerpt}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href={article.link} 
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    Read More
                  </a>
                  <span className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <FaRegComments className="mr-1" />
                    {article.comments} comments
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;