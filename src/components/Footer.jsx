import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="text-indigo-400">Ilham </span> Arip
            </h3>
            <p className="mb-6">
              A passionate frontend developer and UI/UX designer creating modern, responsive, and user-friendly digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="" 
                className="bg-gray-800 hover:bg-indigo-600 p-3 rounded-full text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-indigo-600 p-3 rounded-full text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-indigo-600 p-3 rounded-full text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-indigo-600 p-3 rounded-full text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-indigo-600 p-3 rounded-full text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-indigo-400 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-indigo-400 transition-colors duration-300">Blog</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors duration-300">Web Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors duration-300">UI/UX Design</a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors duration-300">Mobile Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors duration-300">SEO Optimization</a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors duration-300">Backend Development</a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMail className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <span>ilhamariforpin007tea@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <span>+62 881 023 504 625</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <span>Garut, West Java Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h4 className="text-xl font-semibold text-white mb-2">Subscribe to my Newsletter</h4>
              <p className="text-gray-400">
                Get the latest updates, articles and resources delivered to your inbox.
              </p>
            </div>
            <form className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Ilham Arip. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;