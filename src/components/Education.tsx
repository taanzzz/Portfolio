import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Download,
  ExternalLink,
  ChevronRight,
  School,
  Star,
  Trophy,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Education: React.FC = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });

  
  const educationData = [
    {
      id: 1,
      degree: 'Junior School Certificate (JSC)',
      institution: 'Garib E-Newaz High School',
      duration: '2017 - 2018',
      location: 'Halishahar, Chittagong, Bangladesh',
      description:
        'Completed junior secondary education with a strong focus on science and mathematics, laying a robust academic foundation for future studies.',
      achievements: ['Class Topper', 'Science Fair Participant', 'GPA: 5.00/5.00'],
      certificate: '/certificates/jsc-certificate.pdf',
      icon: School, 
    },
    {
      id: 2,
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Garib E-Newaz High School',
      duration: '2019 - 2020',
      location: 'Halishahar, Chittagong, Bangladesh',
      description:
        'Successfully completed secondary education with emphasis on the science stream. Demonstrated excellence in Physics and Mathematics, securing top grades.',
      achievements: ['Math Olympiad Participant', 'Physics Olympiad Participant', 'GPA: 5.00/5.00'],
      certificate: '/certificates/ssc-certificate.pdf',
      icon: GraduationCap,
    },
    {
      id: 3,
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Mostafa Hakim Degree College',
      duration: '2021 - 2022',
      location: 'Chittagong, Bangladesh',
      description:
        'Focused on advanced science courses, including Chemistry and Higher Mathematics. Actively involved in academic clubs and seminars, enhancing my problem-solving skills.',
      achievements: ['College Honors', 'Math Olympiad Finalist', 'GPA: 4.58/5.00'],
      certificate: '/certificates/hsc-certificate.pdf',
      icon: GraduationCap,
    },
  ];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 18,
        mass: 0.8,
        delay: 0.2, 
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.8, ease: 'easeInOut' },
    },
  };

  return (
    <section
      id="education"
      ref={ref}
      className={`relative py-24 sm:py-32 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'
      }`}
    >
      
      <div
        className={`absolute inset-0 z-0 opacity-40 transition-opacity duration-500`}
        style={{
          background: `radial-gradient(circle at top left, ${
            theme === 'dark' ? '#0f172a' : '#e2e8f0'
          }, transparent), radial-gradient(circle at bottom right, ${
            theme === 'dark' ? '#1e293b' : '#f1f5f9'
          }, transparent)`,
        }}
      />
      <div
        className="absolute inset-0 z-0 bg-dots opacity-10" // Using a dots pattern
        style={{ backgroundImage: `url('/dots-pattern.svg')` }} // You can create this SVG
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
              theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
            }`}
          >
            My Academic Path
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Educational <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}
          >
            A look into the academic foundations that shaped my skills and expertise.
          </motion.p>
        </motion.div>

        <div className="relative pl-12 lg:pl-20">
         
          <div
            className={`absolute left-6 lg:left-10 top-0 bottom-0 w-1 rounded-full
                          ${theme === 'dark' ? 'bg-gray-700/60' : 'bg-gray-300/60'}`}
          />

          
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={`absolute left-6 lg:left-10 top-0 w-1 origin-top rounded-full z-10
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
            className="space-y-16"
          >
            {educationData.map((edu, index) => {
              const IconComponent = edu.icon || GraduationCap;
              return (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  
                  <div
                    className={`absolute -left-6 sm:-left-12 top-2 w-12 h-12 rounded-full border-4
                               ${
                                 theme === 'dark'
                                   ? 'bg-gray-950 border-cyan-400'
                                   : 'bg-gray-100 border-blue-500'
                               }
                               z-20 flex items-center justify-center
                               ${isInView ? 'animate-pulse-light' : ''}`}
                  >
                    <IconComponent
                      size={24}
                      className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-500'}
                    />
                  </div>

                  
                  <motion.div
                    className={`flex-1 p-8 rounded-3xl transition-all duration-500 ml-0 sm:ml-6
                               ${
                                 theme === 'dark'
                                   ? 'glass-dark border border-gray-700'
                                   : 'glass-light border border-gray-200'
                               }
                               transform-gpu hover:scale-[1.01] hover:shadow-2xl`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <h3
                          className={`text-2xl font-bold mb-1 leading-tight ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {edu.degree}
                        </h3>
                        <p
                          className={`text-lg font-semibold ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          {edu.institution}
                        </p>
                      </div>
                      <div
                        className={`flex items-center space-x-2 text-sm font-mono px-4 py-2 rounded-full shrink-0
                                   ${
                                     theme === 'dark'
                                       ? 'bg-gray-700 text-gray-300'
                                       : 'bg-gray-200 text-gray-700'
                                   }`}
                      >
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    
                    <p
                      className={`text-md leading-relaxed mb-6 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {edu.description}
                    </p>

                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2">
                        <Trophy
                          size={20}
                          className={theme === 'dark' ? 'text-amber-400' : 'text-yellow-600'}
                        />
                        <span
                          className={`text-md font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          Key Achievements
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {edu.achievements.map((achievement, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx, duration: 0.5 }}
                            className={`px-4 py-1 rounded-full text-xs font-semibold
                                       ${
                                         theme === 'dark'
                                           ? 'bg-cyan-400/20 text-cyan-400'
                                           : 'bg-blue-500/20 text-blue-600'
                                       }
                                       border border-current transition-colors`}
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    
                    <motion.a
                      href={edu.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform-gpu
                                 ${
                                   theme === 'dark'
                                     ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                                 }
                                 hover:scale-[1.03] hover:shadow-md`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download size={16} />
                      <span>View Certificate</span>
                      <ChevronRight size={16} />
                    </motion.a>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-24"
        >
          <motion.h3
            variants={titleVariants}
            className={`text-3xl font-bold text-center mb-12 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Academic Summary
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-3xl text-center transition-all duration-300
                         ${
                           theme === 'dark'
                             ? 'glass-dark border border-gray-700'
                             : 'glass-light border border-gray-200'
                         }
                         transform-gpu hover:scale-[1.02] hover:shadow-xl`}
            >
              <GraduationCap
                className={`w-14 h-14 mx-auto mb-4 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-blue-500'
                }`}
              />
              <h4
                className={`text-4xl font-extrabold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                6+
              </h4>
              <p
                className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Years of Formal Education
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-3xl text-center transition-all duration-300
                         ${
                           theme === 'dark'
                             ? 'glass-dark border border-gray-700'
                             : 'glass-light border border-gray-200'
                         }
                         transform-gpu hover:scale-[1.02] hover:shadow-xl`}
            >
              <Award
                className={`w-14 h-14 mx-auto mb-4 ${
                  theme === 'dark' ? 'text-emerald-400' : 'text-green-600'
                }`}
              />
              <h4
                className={`text-4xl font-extrabold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                3
              </h4>
              <p
                className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Major Certificates
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-3xl text-center transition-all duration-300
                         ${
                           theme === 'dark'
                             ? 'glass-dark border border-gray-700'
                             : 'glass-light border border-gray-200'
                         }
                         transform-gpu hover:scale-[1.02] hover:shadow-xl`}
            >
              <Star
                className={`w-14 h-14 mx-auto mb-4 ${
                  theme === 'dark' ? 'text-amber-400' : 'text-yellow-600'
                }`}
              />
              <h4
                className={`text-4xl font-extrabold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                ~4.86/5.0
              </h4>
              <p
                className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Avg. GPA
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;