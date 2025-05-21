import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [text, setText] = useState('Web Developer');
  const [index, setIndex] = useState(0);
  const roles = ['Web Developer', 'UI/UX Designer', 'Freelancer', 'Tech Enthusiast'];
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  // Handle typing effect
  useEffect(() => {
    const currentRole = roles[index % roles.length];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        
        if (text === currentRole) {
          setIsDeleting(true);
          setTypingSpeed(100);
          setTimeout(() => {
            setTypingSpeed(150);
          }, 1500);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        
        if (text === '') {
          setIsDeleting(false);
          setIndex(index + 1);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [text, index, isDeleting, typingSpeed, roles]);

  // Handle scroll and mouse move for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Set visibility after a short delay for entrance animation
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(visibilityTimer);
    };
  }, []);

  // Generate a random number within a range
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => {
          const duration = random(15, 30);
          const delay = random(0, 5);
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white bg-opacity-5"
              style={{
                width: `${random(20, 100)}px`,
                height: `${random(20, 100)}px`,
                top: `${random(0, 100)}%`,
                left: `${random(0, 100)}%`,
                transform: `translateY(${scrollY * (i % 5 + 1) * 0.1}px)`,
                animationName: 'float',
                animationDuration: `${duration}s`,
                animationTimingFunction: 'linear',
                animationDelay: `${delay}s`,
                animationIterationCount: 'infinite',
              }}
            />
          );
        })}
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 opacity-20">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="h-full w-px bg-indigo-500 ml-auto" />
        ))}
        {[...Array(7)].map((_, i) => (
          <div key={i} className="w-full h-px bg-indigo-500 absolute" style={{ top: `${i * 16.66}%` }} />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 z-10 py-16">
        <div className={`flex flex-col lg:flex-row items-center justify-between transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Text content */}
          <div className="lg:w-1/2 mb-16 lg:mb-0 transform transition-all duration-700" 
               style={{ transform: `translateX(${isVisible ? '0px' : '-50px'})` }}>
            <div className="mb-2 inline-block">
              <div className="flex items-center space-x-2 bg-indigo-900 bg-opacity-50 rounded-full px-4 py-1 mb-4 border border-indigo-700">
                <span className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></span>
                <span className="text-indigo-300 text-sm">Available for freelance work</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Ilham Arip</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-10">
              I am a <span className="text-indigo-300">{text}</span>
              <span className="text-indigo-300 animate-blink">|</span>
            </h2>
            
            <p className="text-gray-300 mb-8 max-w-lg">
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              With 2+ years of experience in web development, backend and mobile, I transform ideas into 
              exceptional digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href='#projects' className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                <span>My Projects</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              
              <a href='#contact' className="px-6 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center">
                <span>Contact Me</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div>
            
            {/* Social icons */}
            <div className="mt-8 flex space-x-4">
              {['github', 'linkedin', 'twitter', 'instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="lg:w-1/2 flex justify-center transform transition-all duration-700" 
               style={{ transform: `translateX(${isVisible ? '0px' : '50px'})` }}>
            <div className="relative">
              {/* Outer ring with gradient */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 animate-spin-slow"></div>
              
              {/* Inner container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-gray-900 to-indigo-950 p-1 overflow-hidden z-10">
                {/* Image */}
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-indigo-700">
                  <img
                    src="/api/placeholder/400/400"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-gray-800 p-4 rounded-lg shadow-lg border border-indigo-700 z-20 transform transition-all duration-500 hover:scale-110">
                <span className="text-white font-bold">2+ Years</span>
                <span className="block text-indigo-300 text-sm">Experience</span>
              </div>
              
              {/* Tech stack badges */}
              <div className="absolute -top-4 -left-4 bg-gray-800 p-3 rounded-full shadow-lg border border-indigo-700 animate-pulse z-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              {/* Tech stack floating icons */}
              {['React', 'Node', 'Tailwind'].map((tech, i) => {
                const duration = random(4, 6);
                const delay = i * 0.5;
                return (
                  <div 
                    key={tech}
                    className="absolute bg-gray-800 p-2 rounded-full shadow-lg border border-indigo-700 z-20 text-xs font-medium text-white"
                    style={{
                      top: `${30 + i * 30}%`,
                      right: i % 2 === 0 ? '-15%' : '110%',
                      animationName: 'float',
                      animationDuration: `${duration}s`,
                      animationTimingFunction: 'ease-in-out',
                      animationDelay: `${delay}s`,
                      animationIterationCount: 'infinite',
                    }}
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-bounce w-8 h-14 rounded-full border-2 border-indigo-400 flex items-center justify-center">
          <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2"></div>
        </div>
        <p className="text-indigo-400 text-xs mt-2 text-center">Scroll down</p>
      </div>

      {/* Custom animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
          }
          
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
          
          @keyframes blink {
            from, to {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;