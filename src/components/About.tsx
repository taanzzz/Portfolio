import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Coffee,
  Code,
  Heart,
  Award,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  Palette,
  Server,
  Cloud,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data/portfolioData';


const skillIcons = {
  Frontend: Layers,
  Backend: Server,
  DevOps: Cloud,
  Design: Palette,
};

const About: React.FC = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-150px 0px' });
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillCategories = ['Frontend', 'Backend', 'DevOps', 'Design'];

  const getSkillsByCategory = (category: string) => {
    return portfolioData.skills.filter(skill => skill.category === category);
  };

  
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.6, 0.4, 1], 
      },
    },
  };

  const tabVariants = {
    active: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    inactive: {
      opacity: 0.6,
      y: 5,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const skillBarVariants = {
    hidden: { width: '0%' },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: [0.25, 1, 0.5, 1], 
        delay: 0.5,
      },
    }),
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-24 sm:py-32 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      
      <div
        className={`absolute inset-0 z-0 opacity-50 transition-opacity duration-500`}
        style={{
          background: `radial-gradient(circle at top left, ${
            theme === 'dark' ? '#0f172a' : '#e2e8f0'
          }, transparent), radial-gradient(circle at bottom right, ${
            theme === 'dark' ? '#1e293b' : '#f1f5f9'
          }, transparent)`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-noise opacity-5" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20 relative"
        >
          <motion.p
            variants={itemVariants}
            className={`text-lg font-semibold uppercase tracking-widest ${
              theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
            }`}
          >
            A Glimpse Into My World
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-4xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}
          >
            {portfolioData.personal.tagline}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12 lg:sticky top-24"
          >
            
            <motion.div variants={itemVariants} className="relative group perspective-1000">
              <div
                className={`absolute inset-0 rounded-3xl transition-all duration-700
                           ${
                             theme === 'dark'
                               ? 'bg-gradient-to-br from-cyan-400/20 to-emerald-400/20'
                               : 'bg-gradient-to-br from-blue-400/20 to-purple-400/20'
                           } blur-2xl group-hover:blur-3xl`}
              />
              <motion.div
                className={`relative p-8 sm:p-12 rounded-3xl border transition-all duration-500
                           ${
                             theme === 'dark'
                               ? 'glass-dark border-gray-700 hover:border-cyan-400/40'
                               : 'glass-light border-gray-200 hover:border-blue-500/40'
                           }
                           transform-gpu hover:scale-[1.01] hover:shadow-2xl`}
                whileHover={{ rotateX: 2, rotateY: 2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
                  <div className="relative flex-shrink-0">
                    <img
                      src={portfolioData.personal.image}
                      alt={portfolioData.personal.name}
                      
                      className={`w-32 h-32 rounded-full object-cover shadow-lg ring-4 ring-offset-4 transform-gpu transition-transform duration-500 hover:scale-105
                                  ${theme === 'dark' ? 'ring-gray-900 pulse-ring-dark' : 'ring-gray-100 pulse-ring-light'}`}
                      style={{
                        imageRendering: 'crisp-edges',
                        boxShadow: `0 0 25px rgba(0,0,0,0.2) inset, 0 0 50px ${
                          theme === 'dark' ? 'rgba(6, 182, 212, 0.4)' : 'rgba(37, 99, 235, 0.4)'
                        }`,
                        borderColor: theme === 'dark' ? 'rgba(22, 22, 22, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                      }}
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      className={`absolute -inset-2 rounded-full border-2 border-dashed ${
                        theme === 'dark' ? 'border-cyan-400/50' : 'border-blue-500/50'
                      } opacity-60`}
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3
                      className={`text-4xl font-extrabold mb-2 leading-tight ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {portfolioData.personal.name}
                    </h3>
                    <p
                      className={`text-xl font-medium ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                      }`}
                    >
                      {portfolioData.personal.bio}
                    </p>
                  </div>
                </div>
                <p
                  className={`mt-8 text-lg leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {portfolioData.personal.me}
                </p>
              </motion.div>
            </motion.div>

           
            <motion.div variants={itemVariants}>
              <div
                className={`p-8 rounded-2xl border transition-colors duration-300
                           ${
                             theme === 'dark'
                               ? 'bg-gray-800/60 border-gray-700 hover:border-purple-400/40'
                               : 'bg-white/60 border-gray-200 hover:border-purple-500/40'
                           } backdrop-blur-md`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Sparkles
                      className={`shrink-0 ${
                        theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                      }`}
                      size={28}
                    />
                    <span
                      className={`text-xl font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Fun Facts
                    </span>
                  </div>
                  <motion.button
                    onClick={() => setShowEasterEgg(!showEasterEgg)}
                    className={`flex items-center space-x-2 text-sm px-4 py-2 rounded-full transition-all duration-300
                               font-medium
                               ${
                                 theme === 'dark'
                                   ? 'bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400/30'
                                   : 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30'
                               }
                               `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{showEasterEgg ? 'Hide' : 'Show'} details</span>
                    <motion.div
                      animate={{ rotate: showEasterEgg ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </motion.button>
                </div>

                <AnimatePresence>
                  {showEasterEgg && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="mt-6 pt-6 border-t border-dashed space-y-4 overflow-hidden"
                      style={{
                        borderColor: theme === 'dark' ? 'rgba(107, 114, 128, 0.4)' : 'rgba(209, 213, 219, 0.6)',
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <Coffee
                          className={theme === 'dark' ? 'text-emerald-400' : 'text-green-600'}
                          size={24}
                        />
                        <span className={`text-md ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          My code runs on tea not coffee.
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Code
                          className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-500'}
                          size={24}
                        />
                        <span className={`text-md ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          300+ GitHub commits this year.
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Heart
                          className={theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}
                          size={24}
                        />
                        <span className={`text-md ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          Actively contributing to open-source projects.
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Award
                          className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}
                          size={24}
                        />

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              {skillCategories.map(category => {
                const IconComponent = skillIcons[category as keyof typeof skillIcons];
                const isActive = activeCategory === category;
                return (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    variants={tabVariants}
                    animate={isActive ? 'active' : 'inactive'}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-out
                                 shadow-lg
                                 ${
                                   isActive
                                     ? `
                                       ${theme === 'dark' ? 'bg-cyan-500/20 text-cyan-400 ring-2 ring-cyan-400/50' : 'bg-blue-500/20 text-blue-600 ring-2 ring-blue-600/50'}
                                       backdrop-blur-sm
                                     `
                                     : `
                                       ${theme === 'dark' ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50' : 'bg-white/50 text-gray-500 hover:bg-gray-100/50'}
                                       backdrop-blur-md
                                     `
                                 }`}
                  >
                    <IconComponent size={20} />
                    <span>{category}</span>
                  </motion.button>
                );
              })}
            </motion.div>

            
            <motion.div variants={itemVariants} className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className={`p-8 rounded-3xl border transition-all duration-500
                               ${
                                 theme === 'dark'
                                   ? 'glass-dark border-gray-700'
                                   : 'glass-light border-gray-200'
                               }
                               space-y-8`}
                >
                  <h4
                    className={`text-3xl font-bold mb-6 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {activeCategory}
                  </h4>
                  <div className="space-y-6">
                    {getSkillsByCategory(activeCategory).map(skill => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span
                            className={`text-lg font-medium ${
                              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                            }`}
                          >
                            {skill.name}
                          </span>
                          <span
                            className={`text-md font-mono font-bold ${
                              theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                            }`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          className={`h-3 rounded-full overflow-hidden relative
                                     ${
                                       theme === 'dark'
                                         ? 'bg-gray-700/60'
                                         : 'bg-gray-200/80'
                                     }`}
                        >
                          <motion.div
                            custom={skill.level}
                            variants={skillBarVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            className={`h-full rounded-full transition-all duration-1000 ease-out
                                       ${
                                         theme === 'dark'
                                           ? 'bg-gradient-to-r from-cyan-400 to-emerald-400'
                                           : 'bg-gradient-to-r from-blue-500 to-purple-500'
                                       }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;