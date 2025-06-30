import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: portfolioData.social.github },
    { icon: Linkedin, href: portfolioData.social.linkedin },
    { icon: Twitter, href: portfolioData.social.twitter },
  ];

  return (
    <footer
      className={`relative py-16 sm:py-20 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'
      }`}
    >
      
      <div
        className={`absolute inset-0 transition-all duration-500`}
        style={{
          background: `radial-gradient(circle at top, ${
            theme === 'dark' ? 'rgba(56, 189, 248, 0.03)' : 'rgba(37, 99, 235, 0.03)'
          }, transparent), radial-gradient(circle at bottom, ${
            theme === 'dark' ? 'rgba(168, 85, 247, 0.03)' : 'rgba(124, 58, 237, 0.03)'
          }, transparent)`,
        }}
      />
      <div
        className="absolute inset-0 z-0 bg-dots opacity-5"
        style={{ backgroundImage: `url('/dots-pattern.svg')` }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end">
          
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 text-center md:text-left">
            
            {/* The updated image2 container block */}
            <motion.div
              className={`relative w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-2xl
                ${theme === 'dark'
                  ? 'bg-gradient-to-br from-cyan-400 to-emerald-400'
                  : 'bg-gradient-to-br from-blue-500 to-cyan-500'}
                text-black shadow-lg
              `}
            >
              <img
                src={portfolioData.personal.image2}
                alt="User"
                className="w-full h-full rounded-xl object-cover border-2 border-white dark:border-gray-800 shadow-md"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className={`absolute -inset-1 rounded-2xl border-[3px] border-dashed
                  ${theme === 'dark' ? 'border-cyan-400/40' : 'border-blue-500/30'}
                `}
                style={{
                  boxShadow: theme === 'dark'
                    ? '0 0 12px 3px rgba(0, 255, 255, 0.2)'
                    : '0 0 12px 3px rgba(0, 174, 255, 0.2)',
                }}
              />
            </motion.div>

            
            <div className="space-y-2">
              <p className={`text-md font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                &copy; {currentYear} {portfolioData.personal.name}
              </p>
              <p
                className={`text-sm flex items-center justify-center md:justify-start ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Built with{' '}
                <motion.span
                  animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                >
                  <Heart className="w-5 h-5 mx-1 text-red-500" fill="currentColor" />
                </motion.span>{' '}
                and lots of tea
              </p>
            </div>
          </div>

          
          <div className="flex flex-col-reverse md:flex-row items-center gap-6 mt-10 md:mt-0">
            
            <div className="flex items-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`transition-colors duration-200
                              ${
                                theme === 'dark'
                                  ? 'text-gray-400 hover:text-cyan-400'
                                  : 'text-gray-600 hover:text-blue-600'
                              }`}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>

            
            <motion.button
              onClick={scrollToTop}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold
                          transition-all duration-300 transform-gpu shadow-lg
                          ${
                            theme === 'dark'
                              ? 'bg-gray-800 text-gray-300 hover:bg-cyan-400 hover:text-black'
                              : 'bg-white text-gray-800 hover:bg-blue-500 hover:text-white'
                          }
                          hover:scale-[1.05] hover:shadow-xl focus:outline-none focus:ring-2
                          ${theme === 'dark' ? 'focus:ring-cyan-400' : 'focus:ring-blue-500'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to Top</span>
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        
        <div
          className={`mt-16 pt-8 border-t transition-colors duration-500
                      ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <p className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
              <span className="font-bold">Powered by:</span> React, TypeScript, Tailwind CSS, Framer Motion. 
              Hosted on{' '}
              <a
                href="https://surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline transition-colors
                           ${
                             theme === 'dark' ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
                           }`}
              >
                Surge
              </a>{' '}
              with 💚 for the environment.
            </p>
            <div className={`flex items-center space-x-3 text-sm font-bold
                             ${theme === 'dark' ? 'text-emerald-400' : 'text-green-600'}`}>
              <span>Available for freelance work</span>
              <motion.div
                className="w-3 h-3 bg-emerald-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;