import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'React', 'MERN', 'Freelance'];

  const filteredProjects =
    filter === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((project) => project.category === filter);

  // --- Framer Motion Variants ---
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      y: 50,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`relative py-24 sm:py-32 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'
      }`}
    >
      {/* Background Gradient & Noise */}
      <div
        className={`absolute inset-0 z-0 opacity-40 transition-opacity duration-500`}
        style={{
          background: `radial-gradient(circle at top, ${
            theme === 'dark' ? 'rgba(56, 189, 248, 0.05)' : 'rgba(37, 99, 235, 0.05)'
          }, transparent 70%), radial-gradient(circle at bottom, ${
            theme === 'dark' ? 'rgba(168, 85, 247, 0.05)' : 'rgba(124, 58, 237, 0.05)'
          }, transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-0 z-0 bg-noise opacity-5"
        style={{ backgroundImage: `url('/noise.svg')` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className={`text-lg font-semibold uppercase tracking-widest ${
              theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
            }`}
          >
            My Creations
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}
          >
            A showcase of my recent work and personal projects that highlight my skills.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300
                          ${
                            filter === category
                              ? `
                                ${
                                  theme === 'dark'
                                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black'
                                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                                }
                                shadow-lg
                              `
                              : `
                                ${
                                  theme === 'dark'
                                    ? 'bg-gray-800/60 text-gray-400 hover:bg-gray-700/60'
                                    : 'bg-white/60 text-gray-700 hover:bg-gray-100/60'
                                }
                                border border-transparent backdrop-blur-md
                                ${theme === 'dark' ? 'hover:border-gray-600' : 'hover:border-gray-300'}
                              `
                          }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter size={18} />
              <span>{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout // Enables smooth layout transitions for filtering
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ y: -10 }}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg
                            transition-all duration-300 transform-gpu
                            ${
                              theme === 'dark'
                                ? 'glass-dark border border-gray-700'
                                : 'glass-light border border-gray-200'
                            }`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div
                    className={`absolute top-6 left-6 z-10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider
                                ${
                                  theme === 'dark'
                                    ? 'bg-gradient-to-r from-cyan-400/80 to-emerald-400/80 text-black'
                                    : 'bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white'
                                }`}
                  >
                    Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                  />
                  {/* Image overlay gradient */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300
                                ${
                                  theme === 'dark'
                                    ? 'bg-gradient-to-t from-gray-950/80 to-transparent'
                                    : 'bg-gradient-to-t from-white/80 to-transparent'
                                }
                                opacity-0 group-hover:opacity-100`}
                  />

                  {/* Hover Actions */}
                  <div
                    className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 delay-150"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 rounded-full backdrop-blur-md transition-all duration-300
                                 ${
                                   theme === 'dark'
                                     ? 'bg-white/10 text-white hover:bg-white/20'
                                     : 'bg-black/10 text-black hover:bg-black/20'
                                 }
                                 ring-2 ring-transparent hover:ring-white/50`}
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 rounded-full backdrop-blur-md transition-all duration-300
                                 ${
                                   theme === 'dark'
                                     ? 'bg-white/10 text-white hover:bg-white/20'
                                     : 'bg-black/10 text-black hover:bg-black/20'
                                 }
                                 ring-2 ring-transparent hover:ring-white/50`}
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <h3
                    className={`text-2xl font-bold mb-2 leading-tight ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-md mb-5 line-clamp-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-1 rounded-full text-xs font-semibold
                                   ${
                                     theme === 'dark'
                                       ? 'bg-gray-700 text-gray-300'
                                       : 'bg-gray-200 text-gray-700'
                                   }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
              style={{
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl
                           ${
                             theme === 'dark'
                               ? 'glass-dark-modal border-2 border-gray-700/50'
                               : 'glass-light-modal border-2 border-gray-200/50'
                           }
                           p-8 md:p-12 shadow-2xl`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-5 right-5 p-3 rounded-full transition-colors z-10
                             ${
                               theme === 'dark'
                                 ? 'text-gray-400 bg-gray-800/70 hover:bg-gray-700/70 hover:text-white'
                                 : 'text-gray-600 bg-white/70 hover:bg-gray-100/70 hover:text-gray-900'
                             }
                             backdrop-blur-lg`}
                >
                  <X size={24} />
                </button>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="order-2 md:order-1">
                    <h3
                      className={`text-4xl font-bold mb-4 leading-tight ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {selectedProject.title}
                    </h3>
                    <p
                      className={`text-lg leading-relaxed mb-8 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {selectedProject.description}
                    </p>

                    <div className="mb-8">
                      <h4
                        className={`text-lg font-semibold mb-3 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tech.map((tech: string) => (
                          <span
                            key={tech}
                            className={`px-4 py-2 rounded-full text-sm font-semibold
                                       ${
                                         theme === 'dark'
                                           ? 'bg-gray-700/70 text-gray-200'
                                           : 'bg-gray-200/70 text-gray-800'
                                       }
                                       backdrop-blur-sm`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-8 py-4 rounded-xl font-bold transition-all
                                   ${
                                     theme === 'dark'
                                       ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black hover:from-cyan-300 hover:to-emerald-300'
                                       : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-400 hover:to-cyan-400'
                                   }
                                   transform-gpu hover:scale-[1.05] hover:shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="mr-2" size={20} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-8 py-4 rounded-xl font-bold border-2
                                   transition-all
                                   ${
                                     theme === 'dark'
                                       ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white'
                                       : 'border-gray-400 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                                   }
                                   transform-gpu hover:scale-[1.05]`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="mr-2" size={20} />
                        View Code
                      </motion.a>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;