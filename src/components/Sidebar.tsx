import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Menu,X,Home,User,FolderOpen,Code,GraduationCap,Mail,Github,Linkedin,Twitter,Sun,Moon,Briefcase} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data/portfolioData';



const Sidebar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false); 
  const [isDesktopOpen, setIsDesktopOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();
  const sidebarRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#tech-stack', icon: Code },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const socialLinks = [
    { icon: Github, url: portfolioData.social.github, name: 'GitHub' },
    { icon: Linkedin, url: portfolioData.social.linkedin, name: 'LinkedIn' },
    { icon: Twitter, url: portfolioData.social.twitter, name: 'Twitter' }
  ];

  
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  
  const isContentVisible = isLargeScreen ? isDesktopOpen : isMobileOpen;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleResize = () => {
      const newIsLargeScreen = window.innerWidth >= 1024;
      setIsLargeScreen(newIsLargeScreen);
      
      if (!newIsLargeScreen) {
        setIsMobileOpen(false);
        setIsDesktopOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (!isLargeScreen) {
      setIsMobileOpen(false);
    }
    
  };

  const sidebarVariants = {
    collapsed: { width: '5rem', transition: { type: "spring", stiffness: 300, damping: 30 } },
    open: { width: '20rem', transition: { type: "spring", stiffness: 300, damping: 30 } },
    mobileClosed: { x: '-100%', transition: { type: "spring", stiffness: 300, damping: 30 } },
    mobileOpen: { x: '0%', transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20, transition: { duration: 0.1 } },
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const containerVariants = {
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  };

  
  const animationState = isLargeScreen
    ? (isDesktopOpen ? 'open' : 'collapsed')
    : (isMobileOpen ? 'mobileOpen' : 'mobileClosed');
  
  return (
    <>
      
      <AnimatePresence>
        {isLargeScreen && !isDesktopOpen && (
          <motion.button
            ref={menuButtonRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setIsDesktopOpen(true)} 
            className={`fixed top-4 left-4 z-[60] p-3 rounded-xl transition-all duration-300 shadow-lg backdrop-blur-md
              ${theme === 'dark' ? 'bg-gray-800/90 text-white hover:bg-gray-700/90 border border-gray-700' : 'bg-white/90 text-gray-900 hover:bg-gray-50/90 border border-gray-200'}
            `}
          >
            
            <Menu size={24} />
            
          </motion.button>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {!isLargeScreen && !isMobileOpen && (
          <motion.button
            ref={menuButtonRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setIsMobileOpen(true)}
            className={`fixed top-4 left-4 z-[60] p-3 rounded-xl transition-all duration-300 shadow-lg backdrop-blur-md
              ${theme === 'dark' ? 'bg-gray-800/90 text-white hover:bg-gray-700/90 border border-gray-700' : 'bg-white/90 text-gray-900 hover:bg-gray-50/90 border border-gray-200'}
            `}
          >
            <Menu size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      
      
      <AnimatePresence>
        {!isLargeScreen && isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
        )}
      </AnimatePresence>

      
      <motion.aside
        ref={sidebarRef}
        variants={sidebarVariants}
        animate={animationState}
        
        className={`fixed top-0 h-full z-[51] flex flex-col transition-all duration-300 ease-in-out
          ${theme === 'dark' ? 'bg-gray-950 backdrop-blur-xl border-r border-gray-800' : 'bg-gray-50/95 backdrop-blur-xl border-r border-gray-200'}
          ${isLargeScreen ? 'left-0' : ''}
        `}
        style={{ left: isLargeScreen ? '0' : undefined }}
      >
        

        
        <div className={`relative p-8 border-b transition-all duration-300
          ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}
          flex items-center justify-between`}>
          
          <motion.div
  className="flex items-center space-x-4"
  initial={false}
  animate={isContentVisible ? "open" : "closed"}
  variants={containerVariants}
>
  {/* Image Container */}
  <motion.div
    variants={itemVariants}
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

  {/* Text Info */}
  <AnimatePresence>
    {isContentVisible && (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
        className="space-y-1"
      >
        <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 dark:from-cyan-300 dark:via-emerald-400 dark:to-green-400">
          {portfolioData.personal.name.split(' ')[0]}
        </h3>
        <p
          className={`text-sm tracking-wide ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Full-Stack Developer
        </p>
        <div className="flex items-center space-x-2 mt-1">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span
            className={`text-xs whitespace-nowrap ${
              theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
            }`}
          >
            Available for work
          </span>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>


          
          <AnimatePresence>
            {isContentVisible && (isDesktopOpen || isMobileOpen) && (
              <motion.button
                onClick={() => {
                  isLargeScreen ? setIsDesktopOpen(false) : setIsMobileOpen(false);
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex-shrink-0 ml-4 p-2 rounded-lg transition-all duration-300
                  ${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}
                `}
              >
                <X size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        
        <motion.nav
          variants={containerVariants}
          animate={isContentVisible ? "open" : "closed"}
          className="flex-1 p-6 space-y-2 overflow-y-auto"
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);
            
            return (
              <motion.button
                key={item.name}
                variants={itemVariants}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative w-full flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 group
                  ${isActive
                    ? theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 text-cyan-400 border border-cyan-400/30 shadow-lg'
                      : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 border border-blue-500/30 shadow-lg'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                  }
                `}
              >
                <Icon size={22} className={`transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                <AnimatePresence>
                  {isContentVisible && (
                    <motion.span
                      className="font-medium text-base"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
                
                
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute right-4 w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-600'}`}
                  />
                )}

                
                <motion.div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-400/10 to-emerald-400/10'
                      : 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10'
                    }`}
                />
              </motion.button>
            );
          })}
        </motion.nav>

        
        <motion.div
          variants={containerVariants}
          animate={isContentVisible ? "open" : "closed"}
          className={`relative p-6 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}
        >
          
          <motion.button
            variants={itemVariants}
            onClick={toggleTheme}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl mb-6 transition-all duration-300
              ${theme === 'dark'
                ? 'bg-gray-800/50 text-yellow-400 hover:bg-gray-700/50 border border-gray-700'
                : 'bg-white/50 text-blue-600 hover:bg-gray-100/50 border border-gray-200'
              }
            `}
          >
            <motion.div
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              transition={{ duration: 0.5 }}
            >
              {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
            </motion.div>
            <AnimatePresence>
              {isContentVisible && (
                <motion.span
                  className="font-medium text-base"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          
          <motion.div variants={containerVariants} className="grid grid-cols-3 gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                variants={itemVariants}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl transition-all duration-300 text-center
                  ${theme === 'dark'
                    ? 'bg-gray-800/50 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 border border-gray-700'
                    : 'bg-white/50 text-gray-600 hover:text-blue-600 hover:bg-gray-100/50 border border-gray-200'
                  } hover:shadow-lg
                `}
              >
                <social.icon size={20} className="mx-auto" />
              </motion.a>
            ))}
          </motion.div>

          
          <AnimatePresence>
            {isContentVisible && (
              <motion.div
                className="text-center mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                  © 2024 {portfolioData.personal.name}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.aside>

      
      <div
        className={`transition-all duration-300 ease-in-out
          ${isLargeScreen ? (isDesktopOpen ? 'ml-80' : 'ml-20') : 'ml-0'}
        `}
      >
        
      </div>
    </>
  );
};

export default Sidebar;