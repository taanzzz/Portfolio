import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-150px 0px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000); 
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.6, 0.4, 1], 
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, transition: { type: 'spring', stiffness: 400, damping: 10 } },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-24 sm:py-32 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-500`}
        style={{
          background: `
            radial-gradient(circle at top, ${
              theme === 'dark' ? 'rgba(56, 189, 248, 0.05)' : 'rgba(37, 99, 235, 0.05)'
            }, transparent 70%),
            radial-gradient(circle at bottom, ${
              theme === 'dark' ? 'rgba(168, 85, 247, 0.05)' : 'rgba(124, 58, 237, 0.05)'
            }, transparent 70%)
          `,
          maskImage: 'url("/grid-pattern.svg")',
          WebkitMaskImage: 'url("/grid-pattern.svg")',
          maskSize: '20px',
          WebkitMaskSize: '20px',
        }}
      />
      <div className="absolute inset-0 z-0 bg-noise opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          variants={containerVariants}
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
            Connect With Me
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className={`text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Get In <span className="gradient-text-alt">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-3xl mx-auto ${
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
            className="space-y-12"
          >
            <motion.div
              variants={itemVariants}
              className={`p-10 rounded-3xl border transition-all duration-500
                         ${
                           theme === 'dark'
                             ? 'glass-dark border-gray-700 hover:border-emerald-400/40'
                             : 'glass-light border-gray-200 hover:border-purple-500/40'
                         }
                         shadow-xl backdrop-blur-lg`}
            >
              <h3
                className={`text-3xl font-bold mb-8 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Let's Start a Conversation
              </h3>
              <p
                className={`text-lg leading-relaxed mb-10 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                I'm always interested in new opportunities and exciting projects.
                Whether you have a project in mind or just want to chat about technology,
                I'd love to hear from you.
              </p>

              
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.4 }}
                    className={`p-4 rounded-xl shrink-0
                               ${
                                 theme === 'dark'
                                   ? 'bg-gray-800 text-cyan-400'
                                   : 'bg-blue-100 text-blue-600'
                               }`}
                  >
                    <Mail size={28} />
                  </motion.div>
                  <div>
                    <h4
                      className={`font-semibold text-lg ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Email
                    </h4>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className={`text-md ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:text-cyan-400'
                          : 'text-gray-600 hover:text-blue-600'
                      } transition-colors`}
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.5 }}
                    className={`p-4 rounded-xl shrink-0
                               ${
                                 theme === 'dark'
                                   ? 'bg-gray-800 text-emerald-400'
                                   : 'bg-green-100 text-green-600'
                               }`}
                  >
                    <MapPin size={28} />
                  </motion.div>
                  <div>
                    <h4
                      className={`font-semibold text-lg ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Location
                    </h4>
                    <p
                      className={`text-md ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>
              </div>

              
              <motion.div variants={itemVariants} className="mt-12">
                <h4
                  className={`font-semibold text-lg mb-6 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Find me on:
                </h4>
                <div className="flex space-x-6">
                  {[
                    { icon: Github, url: portfolioData.social.github, name: 'GitHub' },
                    { icon: Linkedin, url: portfolioData.social.linkedin, name: 'LinkedIn' },
                    { icon: Twitter, url: portfolioData.social.twitter, name: 'Twitter' },
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={socialIconVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      whileHover="hover"
                      custom={index} 
                      className={`p-4 rounded-full transition-all duration-300 transform-gpu
                                 ${
                                   theme === 'dark'
                                     ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                                     : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-blue-600'
                                 } shadow-md hover:shadow-lg`}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div
              variants={itemVariants}
              className={`relative p-8 sm:p-12 rounded-3xl transition-all duration-500
                         ${
                           theme === 'dark'
                             ? 'glass-dark border border-gray-700'
                             : 'glass-light border border-gray-200'
                         }
                         shadow-2xl`}
            >
              
              <AnimatePresence>
                {isSubmitting && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="absolute top-6 right-6 z-20"
                  >
                    <div
                      className={`flex items-center space-x-2 px-5 py-3 rounded-xl border
                                 ${
                                   theme === 'dark'
                                     ? 'bg-blue-900/50 text-blue-300 border-blue-700'
                                     : 'bg-blue-100/80 text-blue-700 border-blue-300'
                                 }
                                 backdrop-blur-sm`}
                    >
                      <Loader2 className="animate-spin" size={20} />
                      <span className="font-semibold">Sending...</span>
                    </div>
                  </motion.div>
                )}
                {isSubmitted && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="absolute top-6 right-6 z-20"
                  >
                    <div
                      className={`flex items-center space-x-2 px-5 py-3 rounded-xl border
                                 ${
                                   theme === 'dark'
                                     ? 'bg-emerald-900/50 text-emerald-400 border-emerald-700'
                                     : 'bg-emerald-100/80 text-emerald-700 border-emerald-300'
                                 }
                                 backdrop-blur-sm`}
                    >
                      <CheckCircle size={20} />
                      <span className="font-semibold">Message sent!</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-3 ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-5 py-4 rounded-xl transition-all duration-300 focus:ring-4 focus:outline-none focus:shadow-lg
                                 ${
                                   theme === 'dark'
                                     ? 'bg-gray-800/70 border border-gray-600 text-white placeholder-gray-500 focus:ring-cyan-500/20 focus:border-cyan-400'
                                     : 'bg-white/70 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500/20 focus:border-blue-500'
                                 }
                                 backdrop-blur-md`}
                      placeholder="e.g. Jane Doe"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-3 ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-5 py-4 rounded-xl transition-all duration-300 focus:ring-4 focus:outline-none focus:shadow-lg
                                 ${
                                   theme === 'dark'
                                     ? 'bg-gray-800/70 border border-gray-600 text-white placeholder-gray-500 focus:ring-cyan-500/20 focus:border-cyan-400'
                                     : 'bg-white/70 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500/20 focus:border-blue-500'
                                 }
                                 backdrop-blur-md`}
                      placeholder="e.g. hello@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-3 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-5 py-4 rounded-xl transition-all duration-300 focus:ring-4 focus:outline-none focus:shadow-lg
                               ${
                                 theme === 'dark'
                                   ? 'bg-gray-800/70 border border-gray-600 text-white placeholder-gray-500 focus:ring-cyan-500/20 focus:border-cyan-400'
                                   : 'bg-white/70 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500/20 focus:border-blue-500'
                               }
                               backdrop-blur-md`}
                    placeholder="Let's talk about..."
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-3 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={7}
                    required
                    className={`w-full px-5 py-4 rounded-xl transition-all duration-300 focus:ring-4 focus:outline-none resize-none focus:shadow-lg
                               ${
                                 theme === 'dark'
                                   ? 'bg-gray-800/70 border border-gray-600 text-white placeholder-gray-500 focus:ring-cyan-500/20 focus:border-cyan-400'
                                   : 'bg-white/70 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500/20 focus:border-blue-500'
                               }
                               backdrop-blur-md`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-10 py-5 rounded-xl font-bold text-lg tracking-wide transform-gpu transition-all duration-300 ease-out
                             ${
                               isSubmitting
                                 ? 'opacity-70 cursor-wait'
                                 : theme === 'dark'
                                 ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-gray-950 hover:shadow-cyan-400/30'
                                 : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-blue-500/30'
                             }
                             ${!isSubmitting ? 'hover:scale-[1.01] active:scale-[0.99] hover:shadow-2xl' : ''}`}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center"
                      >
                        <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                        Sending...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center"
                      >
                        <Send className="mr-3 h-5 w-5" />
                        Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;