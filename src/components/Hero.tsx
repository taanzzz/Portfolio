import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const titles = [
    'Full-Stack Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const typeText = () => {
      const currentTitle = titles[currentIndex];

      if (isTyping) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
          setIsTyping(true);
        }
      }
    };

    const timer = setTimeout(typeText, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isTyping, titles]);

  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className={`particle ${theme === 'light' ? 'particle-light' : ''}`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 4 + 2}px`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: Math.random() * 4 + 4,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ));

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center pt-20 relative overflow-hidden ${
      theme === 'dark'
        ? 'bg-gray-950'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>

      
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-gradient-to-t from-gray-900/50 via-transparent to-gray-900/50'
          : 'bg-gradient-to-t from-white/50 via-transparent to-white/50'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 border-4 border-white/20">
              <img
                src={portfolioData.personal.image}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-10 transition-opacity duration-300 hover:opacity-0"></div>
            </div>
          </motion.div>

          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 w-full"
            >
              <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-bold mb-2 whitespace-nowrap ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Hi,I'm{' '}
                <span className="gradient-text">
                  {portfolioData.personal.name}
                </span>
              </h1>
              
              <div className="h-12 sm:h-16 flex items-center justify-center md:justify-start">
                <h2 className={`text-xl sm:text-2xl lg:text-3xl font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span className="typing-cursor">{currentText}</span>
                </h2>
              </div>
            </motion.div>

            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-base sm:text-lg mb-8 max-w-2xl ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {portfolioData.personal.tagline}
            </motion.p>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start items-center mb-10"
            >
              <button
                onClick={handleScrollToProjects}
                className={`btn-primary px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black hover:from-cyan-300 hover:to-emerald-300'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-400 hover:to-cyan-400'
                }`}
              >
                View My Work
              </button>
              
              <button
                onClick={handleScrollToContact}
                className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base border-2 transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                  theme === 'dark'
                    ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                    : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                }`}
              >
                <Mail className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                Let's Connect
              </button>
              
              <a
                href={portfolioData.personal.resume}
                download
                className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base border-2 transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                  theme === 'dark'
                    ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                    : 'border-gray-400 text-gray-600 hover:border-gray-600 hover:text-gray-800'
                }`}
              >
                <Download className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                Resume
              </a>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center md:justify-start space-x-4 mb-16"
            >
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-blue-600'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-blue-600'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={portfolioData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-blue-600'
                }`}
              >
                <Twitter size={20} />
              </a>
            </motion.div>
          </div>
        </div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`p-2 rounded-full cursor-pointer ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
            onClick={() => {
              const element = document.querySelector('#about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;