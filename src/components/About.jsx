import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  const skills = [
    { name: 'Web Development', level: 90 },
    { name: 'Mobile Development', level: 85 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'Database Management', level: 80 },
    { name: 'Back-end Development', level: 85 },
    { name: 'Project Management', level: 70 }
  ];

  const experience = [
    {
      position: 'Senior Frontend Developer',
      company: 'TechCorp',
      period: '2021 - Present',
      description: 'Leading the frontend development team, implementing new features, and optimizing performance.'
    },
    {
      position: 'Web Developer',
      company: 'Digital Agency',
      period: '2019 - 2021',
      description: 'Developed and maintained websites for various clients, focusing on responsive design and UX.'
    }
  ];

  const education = [
  {
    degree: 'Informatics Engineering',
    institution: 'ULBI (Universitas Logistik dan Bisnis Internasional)',
    period: '2022 - Now',
    description: 'Studying various aspects of software development, including web programming, mobile application development, databases, and project management.'
  },
  {
    degree: 'Computer and Network Engineering',
    institution: "SMK Plus Qurrota A'yun",
    period: '2019 - 2022',
    description: 'Focused on computer networking, hardware maintenance, and basic programming. Gained hands-on experience with network configuration and troubleshooting.'
  }
];


  const programmingLanguages = [
  { name: 'JavaScript', icon: '🟨', proficiency: 85 },       // JS identik dengan warna kuning
  { name: 'Dart', icon: '🎯', proficiency: 85 },             // Dart = target symbol (mirip logo Dart)
  { name: 'Python', icon: '🐍', proficiency: 75 },           // Python snake
  { name: 'PHP', icon: '🐘', proficiency: 85 },              // Gajah adalah maskot PHP
  { name: 'Java', icon: '☕', proficiency: 70 },             // Secangkir kopi = Java
  { name: 'C#', icon: '🎼', proficiency: 90 },               // Nada musik (sharp symbol 🎼)
  { name: 'Kotlin', icon: '🧡', proficiency: 65 },           // Warna ikonik Kotlin (oranye)
];


  const frameworks = [
  { name: 'React', icon: '⚛️', proficiency: 86, color: 'bg-blue-500' },        // Atom symbol = React
  { name: 'Vue.js', icon: '🟢', proficiency: 70, color: 'bg-green-500' },      // Hijau = Vue
  { name: 'Flutter', icon: '💙', proficiency: 90, color: 'bg-blue-400' },      // Biru khas Flutter
  { name: 'Express.js', icon: '🚂', proficiency: 90, color: 'bg-gray-600' },   // Kereta cepat = Express
  { name: 'Laravel', icon: '🟥', proficiency: 80, color: 'bg-red-600' },       // Merah = Laravel
  { name: 'Flask', icon: '⚗️', proficiency: 70, color: 'bg-gray-500' },        // Flask = lab flask
  { name: 'Next.js', icon: '⏭️', proficiency: 88, color: 'bg-black' },         // Next icon
  { name: 'Tailwind CSS', icon: '💨', proficiency: 94, color: 'bg-blue-400' }, // Wind = Tailwind
  { name: 'CodeIgniter', icon: '🔥', proficiency: 94, color: 'bg-orange-400' },// Api = CI logo
  { name: 'Spring', icon: '🌱', proficiency: 70, color: 'bg-green-400' },      // Tunas hijau = Spring
  { name: '.NET Windows Form', icon: '🪟', proficiency: 90, color: 'bg-blue-400' }, // Windows
  { name: 'Android Native', icon: '🤖', proficiency: 75, color: 'bg-green-600' },   // Robot Android
];


  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Helper function to render appropriate tab content
  const renderTabContent = () => {
    switch(activeTab) {
      case 'experience':
        return (
          <motion.div 
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 space-y-6"
          >
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors duration-300"
              >
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  {item.position} - <span className="text-indigo-600 dark:text-indigo-400">{item.company}</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{item.period}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        );
        
      case 'education':
        return (
          <motion.div 
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 space-y-6"
          >
            {education.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors duration-300"
              >
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h4 className="font-semibold text-gray-800 dark:text-white">{item.degree}</h4>
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 md:ml-2">{item.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 italic">{item.institution}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        );
        
      case 'programming':
        return (
          <motion.div 
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="mt-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programmingLanguages.map((lang, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-indigo-600"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{lang.icon}</span>
                    <h4 className="font-bold text-gray-800 dark:text-white">{lang.name}</h4>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Proficiency</span>
                      <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{lang.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${lang.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
        
      case 'frameworks':
        return (
          <motion.div 
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="mt-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className={`${framework.color} h-2`}></div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{framework.icon}</span>
                      <h4 className="font-bold text-gray-800 dark:text-white text-sm">{framework.name}</h4>
                    </div>
                    <div className="mt-auto pt-3">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${framework.proficiency}%` }}
                          transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                          className={`h-1.5 rounded-full ${framework.color}`}
                        ></motion.div>
                      </div>
                      <p className="text-xs text-right mt-1 text-gray-600 dark:text-gray-400">{framework.proficiency}%</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
        
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={variants}
            className="w-full lg:w-1/3 mb-8 lg:mb-0"
          >
            <div className="relative group transition-all duration-300 hover:scale-105">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <img
                src="/api/placeholder/600/600"
                alt="Profile"
                className="relative w-full h-auto rounded-lg shadow-xl object-cover aspect-square md:aspect-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <span className="text-white font-medium px-4 py-2 bg-indigo-600 bg-opacity-90 rounded-md">John Doe</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="w-full lg:w-2/3"
          >
            <motion.h3
              variants={variants}
              className="text-2xl font-semibold text-gray-800 dark:text-white mb-4"
            >
              Who am I?
            </motion.h3>
            <motion.p
              variants={variants}
              className="text-gray-600 dark:text-gray-300 mb-6"
            >
              I'm John Doe, a passionate web developer and designer based in Jakarta, Indonesia. With over 3 years of professional experience, I specialize in creating modern, responsive, and user-friendly websites and applications.
            </motion.p>
            <motion.p
              variants={variants}
              className="text-gray-600 dark:text-gray-300 mb-6"
            >
              My journey in web development started when I was in college, and since then I've worked with various startups and established companies to bring their digital products to life. I'm constantly learning new technologies and improving my skills to stay ahead in this ever-evolving field.
            </motion.p>

            {/* Tabs Navigation */}
            <motion.div variants={variants} className="mb-8">
              <div className="flex flex-wrap overflow-x-auto gap-1 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
                {['experience', 'education', 'programming', 'frameworks'].map((tab) => (
                  <button 
                    key={tab}
                    className={`px-4 py-2 font-medium rounded-md transition-all duration-200 flex-shrink-0 text-sm md:text-base ${
                      activeTab === tab 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              {/* Tab Content - All tabs are rendered, only the active one is animated in */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mt-4 shadow-md min-h-64">
                {renderTabContent()}
              </div>
            </motion.div>

            {/* Skill bars */}
            <motion.div variants={variants}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">My Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;