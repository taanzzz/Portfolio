import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Award,
  Briefcase,
  Layers,
  Code,
  Zap,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });

  
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 18,
        mass: 0.8,
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 2, ease: 'easeInOut' },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className={`relative py-24 sm:py-32 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'
      }`}
    >
      
      <div
        className={`absolute inset-0 z-0 opacity-40 transition-opacity duration-500`}
        style={{
          background: `
            radial-gradient(circle at center, ${
              theme === 'dark' ? 'rgba(56, 189, 248, 0.05)' : 'rgba(37, 99, 235, 0.05)'
            }, transparent 80%),
            radial-gradient(circle at bottom, ${
              theme === 'dark' ? 'rgba(168, 85, 247, 0.05)' : 'rgba(124, 58, 237, 0.05)'
            }, transparent 80%)
          `,
        }}
      />
      <div
        className="absolute inset-0 z-0 bg-dots opacity-10"
        style={{ backgroundImage: `url('/dots-pattern.svg')` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.p
            variants={itemVariants}
            className={`text-lg font-semibold uppercase tracking-widest ${
              theme === 'dark' ? 'text-emerald-400' : 'text-purple-600'
            }`}
          >
            My Professional Path
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Work <span className="gradient-text-alt">Experience</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}
          >
            My professional journey and key achievements
          </motion.p>
        </motion.div>

        
        <div className="relative">
          
          <div
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-1 rounded-full
                          ${theme === 'dark' ? 'bg-gray-700/60' : 'bg-gray-300/60'}`}
          />

          
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={`absolute left-8 md:left-1/2 top-0 w-1 origin-top rounded-full z-10
                          ${
                            theme === 'dark'
                              ? 'bg-gradient-to-b from-cyan-400 to-emerald-400'
                              : 'bg-gradient-to-b from-blue-500 to-purple-500'
                          }`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-20"
          >
            {portfolioData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col items-center
                               ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  
                  <div
                    className={`absolute -left-2 md:left-1/2 top-0 w-12 h-12 rounded-full border-4
                               ${
                                 theme === 'dark'
                                   ? 'bg-gray-950 border-cyan-400'
                                   : 'bg-gray-100 border-blue-500'
                               }
                               transform md:-translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center
                               ${isInView ? 'animate-pulse-light' : ''}`}
                  >
                    
                    <span className="text-2xl">{exp.logo}</span>
                  </div>

                  
                  <div
                    className={`w-full md:w-5/12
                                   ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
                  >
                    <motion.div
                      className={`p-8 rounded-3xl transition-all duration-500
                                 ${
                                   theme === 'dark'
                                     ? 'glass-dark border border-gray-700'
                                     : 'glass-light border border-gray-200'
                                 }
                                 transform-gpu hover:scale-[1.02] hover:shadow-2xl`}
                      whileHover={{ scale: 1.02, rotate: isEven ? 1 : -1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/50 text-white text-3xl shrink-0">
                          {exp.logo}
                        </div>
                        <div>
                          <h3
                            className={`text-2xl font-bold leading-tight ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {exp.position}
                          </h3>
                          <p
                            className={`font-semibold ${
                              theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                            }`}
                          >
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6">
                        <span
                          className={`flex items-center space-x-2 text-sm font-mono
                                         ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </span>
                        {exp.location && (
                          <span
                            className={`flex items-center space-x-2 text-sm
                                         ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                          >
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </span>
                        )}
                      </div>

                      
                      <p
                        className={`text-md leading-relaxed ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  <div className="hidden md:block w-2/12" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        
        {portfolioData.certifications && portfolioData.certifications.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="mt-28"
          >
            <motion.h3
              variants={titleVariants}
              className={`text-3xl font-bold text-center mb-12 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Certifications & Training
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-8 rounded-3xl text-center transition-all duration-300
                             ${
                               theme === 'dark'
                                 ? 'glass-dark border border-gray-700'
                                 : 'glass-light border border-gray-200'
                             }
                             transform-gpu hover:scale-[1.03] hover:shadow-xl`}
                >
                  <Award
                    className={`w-14 h-14 mx-auto mb-4 ${
                      theme === 'dark' ? 'text-amber-400' : 'text-yellow-600'
                    }`}
                  />
                  <h4
                    className={`text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {cert.name}
                  </h4>
                  <p
                    className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {cert.issuer} • {cert.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;