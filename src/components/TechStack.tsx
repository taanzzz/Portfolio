/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { css } from '@emotion/react'; 

const TechStack: React.FC = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  
  const customStyles = css`
    .gradient-text-alt {
      background-image: linear-gradient(
        to right,
        var(--tw-gradient-stops)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    .dark .gradient-text-alt {
      --tw-gradient-from: #a78bfa; /* purple-400 */
      --tw-gradient-to: #6ee7b7; /* green-300 */
      --tw-gradient-stops: var(--tw-gradient-from),
        var(--tw-gradient-to);
    }

    .light .gradient-text-alt {
      --tw-gradient-from: #c084fc; /* purple-400 */
      --tw-gradient-to: #7dd3fc; /* sky-300 */
      --tw-gradient-stops: var(--tw-gradient-from),
        var(--tw-gradient-to);
    }

    .glass-dark {
      background-color: rgba(30, 41, 59, 0.4);
      backdrop-filter: blur(25px) saturate(180%);
      border: 1px solid rgba(71, 85, 105, 0.6);
    }

    .glass-light {
      background-color: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(25px) saturate(180%);
      border: 1px solid rgba(226, 232, 240, 0.6);
    }

    .bg-noise {
      background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNzUiIHB1cnB1bGVuY2U9IjEuMCIgbnVtT2N0YXZlcz0iMiIgU3Rpdja0Zz0iMTIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZmZmZiIgZmlsdGVyLXVybD0iI25vaXNlIiBvcGFjaXR5PSIxIi8+PC9zdmc+');
      background-size: 200px 200px;
    }
  `;

  return (
    <section
      id="tech-stack"
      ref={ref}
      className={`relative py-24 sm:py-32 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'
      }`}
    >
      
      <div
        className={`absolute inset-0 z-0 opacity-40 transition-opacity duration-500`}
        style={{
          background: `
            radial-gradient(circle at top right, ${
              theme === 'dark' ? 'rgba(56, 189, 248, 0.05)' : 'rgba(37, 99, 235, 0.05)'
            }, transparent 70%),
            radial-gradient(circle at bottom left, ${
              theme === 'dark' ? 'rgba(168, 85, 247, 0.05)' : 'rgba(124, 58, 237, 0.05)'
            }, transparent 70%)
          `,
        }}
      />
      <div
        className="absolute inset-0 z-0 bg-noise opacity-5"
        style={{ backgroundImage: `url('/noise.svg')` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className={`text-lg font-semibold uppercase tracking-widest ${
              theme === 'dark' ? 'text-emerald-400' : 'text-purple-600'
            }`}
          >
            My Toolbox
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Tech <span className="gradient-text-alt">Stack</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          css={customStyles} 
        >
          {portfolioData.techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative group p-8 rounded-3xl transition-all duration-300 cursor-pointer perspective-1000
                ${
                  theme === 'dark'
                    ? 'glass-dark border border-gray-700'
                    : 'glass-light border border-gray-200'
                }`}
              style={{
                transformStyle: 'preserve-3d', 
              }}
            >
              
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: isInView ? 1 : 0.8 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`text-6xl mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  {tech.icon}
                </motion.div>
                <h3
                  className={`font-bold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {tech.name}
                </h3>
                <p
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {tech.experience}
                </p>
              </div>

              
              <motion.div
                className={`absolute inset-0 rounded-3xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{
                  background: `linear-gradient(45deg, ${tech.color}40, transparent, ${tech.color}40)`,
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <p
            className={`text-lg mb-6 max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform-gpu shadow-lg
              ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black hover:from-cyan-300 hover:to-emerald-300'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-400 hover:to-cyan-400'
              }`}
          >
            See My Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;