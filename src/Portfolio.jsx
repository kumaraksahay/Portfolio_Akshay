import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Mail, Github, Linkedin, Code, Briefcase, GraduationCap, Phone, Sparkles, Rocket, Zap, Star, Heart, Trophy, Target, Coffee, Download, Send, Menu, X, ArrowUp, Moon, Sun, Play, Code2, Database, Smartphone, Cloud, BarChart3, MessageCircle } from 'lucide-react';
import emailjs from 'emailjs-com'; // Import EmailJS for sending emails
import doctor from './assets/doctor.jpg'; // Add this import for your image
// Initialize EmailJS with your User ID (replace with your actual User ID from EmailJS dashboard)
emailjs.init('YOUR_USER_ID'); // Replace 'YOUR_USER_ID' with your actual EmailJS User ID
// Theme Context
const ThemeContext = React.createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Start with light theme to avoid white screen
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// Welcome Modal Component
const WelcomeModal = ({ onClose }) => {
  // Enhanced particle effect for modal
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 2,
    color: Math.random() > 0.5 ? 'cyan' : 'purple',
  }));
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // Auto-close after 4 seconds
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-2xl overflow-hidden"
        onClick={onClose}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Animated Background Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/30 rounded-full blur-[100px] shadow-2xl shadow-cyan-500/20"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
            x: [-20, 20, -20],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-[100px] shadow-2xl shadow-purple-500/20"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
            y: [-20, 20, -20],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute w-1 h-1 rounded-full opacity-60`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: particle.color === 'cyan' ? '#22d3ee' : '#a855f7',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
              rotate: [0, 90, 180]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ type: "spring", duration: 1.2, bounce: 0.4, ease: "easeInOut" }}
          className="relative z-10 text-center px-8 max-w-md mx-auto bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-3xl border border-white/20 rounded-3xl p-12 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-purple-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center text-3xl">
              👋
            </div>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-black mb-4"
            style={{
              background: 'linear-gradient(to right, #22d3ee, #a855f7, #ec4899)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Welcome to Akshay Portfolio
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ease: "easeInOut" }}
          >
            Discover innovative projects and let's build something amazing together!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-lg flex items-center gap-2 mx-auto shadow-lg border border-white/20"
            transition={{ ease: "easeInOut" }}
          >
            <Rocket className="w-5 h-5" />
            Explore
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
// Floating Navigation with Theme Toggle
const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 shadow-2xl dark:bg-white/10 dark:border-black/10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div className="flex items-center justify-between">
              <motion.div
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:from-blue-500 dark:via-indigo-500 dark:to-violet-500"
                style={{
                  backgroundSize: '200% 100%',
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                Akshay.dev
              </motion.div>
            
              <div className="hidden md:flex items-center gap-6">
                {sections.map((section, i) => (
                  <motion.a
                    key={section}
                    href={`#${section.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors relative group dark:text-gray-600 dark:hover:text-gray-900"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {section}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 dark:from-blue-400 dark:to-indigo-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </motion.a>
                ))}
                <motion.button
                  onClick={toggleTheme}
                  whileHover={{ rotate: 180 }}
                  className="text-gray-300 hover:text-white transition-colors dark:text-gray-600 dark:hover:text-gray-900"
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.button>
              </div>
              <motion.button
                className="md:hidden text-white dark:text-gray-900"
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {isOpen ? <X /> : <Menu />}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden dark:bg-white/5"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {sections.map((section, i) => (
                <motion.a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3, ease: "easeInOut" }}
                  className="text-3xl font-bold text-white dark:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {section}
                </motion.a>
              ))}
              <motion.button
                onClick={toggleTheme}
                className="text-2xl text-white dark:text-gray-900"
              >
                Toggle Theme
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
// Floating Social Icons (Top Left) - Enhanced with theme support
const FloatingSocialIcons = () => {
  const { theme } = React.useContext(ThemeContext);
  const socials = [
    { icon: <Github className="w-7 h-7" />, color: 'from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-300', label: 'GitHub', link: 'https://github.com/kumaraksahay' },
    { icon: <Linkedin className="w-7 h-7" />, color: 'from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600', label: 'LinkedIn', link: 'https://www.linkedin.com/in/akshay-kumar-245783187' },
    { icon: <Mail className="w-7 h-7" />,
      color: 'from-red-600 to-pink-700 dark:from-red-400 dark:to-pink-500', label: 'Email',
      link: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kumarakshaykolhi@gmail.com' },
    { icon: <MessageCircle className="w-7 h-7" />,
      color: 'from-green-500 to-green-700 dark:from-green-400 dark:to-green-600', label: 'WhatsApp',
      link: 'https://wa.me/923473556629' },
  ];
  return (
    <motion.div
      className="fixed top-24 left-4 z-40 flex flex-col gap-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, staggerChildren: 0.1, ease: "easeInOut" }}
    >
      {socials.map((social, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: i * 0.2, type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.2} transitionSpeed={2500}>
            <motion.a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`bg-gradient-to-br ${social.color} p-5 rounded-2xl shadow-lg cursor-pointer relative group block border border-white/20 dark:border-black/20`}
              title={social.label}
              transition={{ type: "spring", stiffness: 400, damping: 25, duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20 dark:bg-black/20 rounded-2xl"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.div
                className="relative z-10 flex items-center justify-center"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {social.icon}
              </motion.div>
            </motion.a>
          </Tilt>
        </motion.div>
      ))}
    </motion.div>
  );
};
// Enhanced Hero with Typing Effect and more animations
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [typedText, setTypedText] = useState('');
  const [showImageModal, setShowImageModal] = useState(false);
  const [imageRef, setImageRef] = useState(null);
  const fullText = "Full Stack Developer";
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);
  // Enhanced particle effect with more particles and better animation
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    delay: Math.random() * 3,
    color: Math.random() > 0.5 ? 'cyan' : 'purple',
  }));
  // Mouse follow effect for background elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 25 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const openImageModal = () => {
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  return (
    <motion.section
      id="home"
      style={{ y, opacity }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Enhanced Animated Background Grid */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)] opacity-70"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    
      {/* Enhanced Glowing Orbs with mouse follow */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[128px] shadow-2xl shadow-cyan-500/20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
          x: [-10, 10, -10],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px] shadow-2xl shadow-purple-500/20"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
     
      {/* Enhanced Floating Particles with color variation */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-2 h-2 rounded-full opacity-50`}
          style={{
            left: `${particle.x}vw`,
            top: `${particle.y}vh`,
            backgroundColor: particle.color === 'cyan' ? '#22d3ee' : '#a855f7',
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, stiffness: 300, damping: 20 }}
          className="mb-8 relative group"
        >
          <motion.div
            className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-purple-500/30 relative overflow-hidden"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            whileHover={{ 
              scale: 1.15,
              boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)',
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <motion.img
                ref={setImageRef}
                src={doctor}
                alt="Akshay Kumar"
                className="w-full h-full object-cover border-4 border-white/20"
                whileHover={{ 
                  scale: 1.3
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <motion.button
                className="absolute bottom-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={openImageModal}
                whileHover={{ 
                  scale: 1.3, 
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  boxShadow: '0 0 20px rgba(255,255,255,0.5)'
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ArrowUp className="w-4 h-4 text-white rotate-45" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-6"
            style={{
              background: 'linear-gradient(to right, #22d3ee, #a855f7, #ec4899, #06b6d4)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            Hi, I'm Akshay
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
          className="space-y-4 mb-12"
        >
          <motion.p
            className="text-2xl md:text-4xl text-gray-300 font-bold"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </motion.p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer with a completed BS in Software Engineering from COMSATS University Islamabad, specializing in end-to-end web and mobile application development. Proficient in React Native, React.js, Node.js, and Firebase, with experience building scalable, user-centric solutions featuring clean UI and smooth functionality.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)',
              background: 'linear-gradient(to right, #06b6d4, #8b5cf6)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg border border-white/20"
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Rocket className="w-5 h-5" />
            View Projects
          </motion.button>
          <motion.a
            href="/assets/Full Stack Developer Akshay Kumar.pdf"
            download="Full Stack Developer Akshay Kumar.pdf"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-bold text-lg flex items-center gap-2 inline-block"
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>
        </motion.div>
      </div>
      {/* Image Zoom Modal with Enhanced Animations */}
      <AnimatePresence mode="wait">
        {showImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md overflow-auto p-4"
            onClick={closeImageModal}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ scale: 0.3, rotate: -5, opacity: 0 }}
              animate={{ 
                scale: 1, 
                rotate: 0, 
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  mass: 0.8
                }
              }}
              exit={{ 
                scale: 0.3, 
                rotate: -5, 
                opacity: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut"
                }
              }}
              className="relative max-w-4xl max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={doctor}
                alt="Akshay Kumar - Enlarged View"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl cursor-zoom-in"
                animate={{
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              />
              <motion.button
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white z-10"
                onClick={closeImageModal}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  boxShadow: '0 0 20px rgba(255,255,255,0.2)'
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
// Enhanced About with more animations
const AboutSection = () => {
  const stats = [
    { icon: <Code className="w-8 h-8" />, value: '4+', label: 'Projects', color: 'text-cyan-400' },
    { icon: <Coffee className="w-8 h-8" />, value: '500+', label: 'Lines of Code', color: 'text-emerald-400' },
    { icon: <Trophy className="w-8 h-8" />, value: '2', label: 'Internships', color: 'text-yellow-400' },
    { icon: <Heart className="w-8 h-8" />, value: '100%', label: 'Passion', color: 'text-pink-400' },
  ];
  const testimonials = [
    { quote: "Akshay's work on our project was outstanding!", author: "Client A", role: "CEO" },
    { quote: "Exceptional full stack developer with great vision.", author: "Mentor", role: "Professor" },
  ];
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div
              className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-cyan-500/10"
              whileHover={{ scale: 1.02, rotate: 1 }}
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-12 h-12 text-cyan-400 mb-6 animate-pulse" />
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Full Stack Developer with a completed BS in Software Engineering from COMSATS University Islamabad, specializing in end-to-end web and mobile application development. Proficient in React Native, React.js, Node.js, and Firebase, with experience building scalable, user-centric solutions featuring clean UI and smooth functionality.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Recently completed a final year project focused on AI-based skin disease detection and actively contributed to freelance projects with real-world impact. Strong in analytical thinking, problem-solving, and attention to detail, with a passion for continuous learning and professional growth in full stack development.
              </p>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{
                  y: [0, -10, 0],
                  transition: { duration: 2, repeat: Infinity, delay: i * 0.5 }
                }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-lg hover:shadow-purple-500/20"
              >
                <motion.div
                  className={`mb-3 flex justify-center ${stat.color}`}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* New Testimonials Section with animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5, ease: "easeInOut" }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center italic"
            >
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
// Skills with Enhanced 3D Cards, Glow, and more animations
const SkillsSection = () => {
  const { theme } = React.useContext(ThemeContext);
  const skills = [
    { name: 'React.js', level: 95, color: 'from-cyan-400 to-blue-500', icon: '⚛️' },
    { name: 'React Native', level: 92, color: 'from-yellow-400 to-orange-500', icon: '📱' },
    { name: 'Node.js', level: 88, color: 'from-green-400 to-emerald-600', icon: '💚' },
    { name: 'Express.js', level: 90, color: 'from-sky-400 to-indigo-500', icon: '🚀' },
    { name: 'JavaScript', level: 95, color: 'from-blue-500 to-indigo-600', icon: '📜' },
    { name: 'Firebase', level: 87, color: 'from-amber-400 to-red-500', icon: '🔥' },
    { name: 'MongoDB', level: 83, color: 'from-green-500 to-teal-600', icon: '🍃' },
    { name: 'Java', level: 85, color: 'from-orange-500 to-red-600', icon: '☕' },
    { name: 'Python', level: 80, color: 'from-purple-500 to-pink-600', icon: '🐍' },
    { name: 'Redux', level: 88, color: 'from-indigo-500 to-violet-600', icon: '🔄' },
  ];
  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-emerald-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-green-400 via-blue-500 to-emerald-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <Tilt key={i} glareEnable={true} glareMaxOpacity={0.3} scale={1.05} transitionSpeed={2500}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: "easeInOut" }}
                whileHover={{ y: -10, rotateY: 10 }}
                animate={{
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 3, repeat: Infinity, delay: i * 0.1 }
                }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${skill.color} rounded-3xl p-8 h-48 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl shadow-[${skill.color.split(' ')[1]}]/20`}>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <motion.div className="text-5xl mb-3 relative z-10 animate-bounce" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}>
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">{skill.name}</h3>
                  <motion.div
                    className="w-full bg-white/20 rounded-full h-2 overflow-hidden relative z-10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 1, ease: "easeInOut" }}
                    />
                  </motion.div>
                  <span className="text-xs text-white/80 mt-1 relative z-10 font-bold">{skill.level}%</span>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};
// Projects with Enhanced Hover Effects and more animations
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Scan Skin',
      desc: 'A React Native and web-integrated full stack project that helps users detect skin diseases, book dermatologist appointments, and access detailed care guides. It features AI-based image scanning, a doctor web portal for managing appointments, QR-coded confirmations, chat support, and online prescription generation.',
      tech: ['React Native', 'React.js', 'Node.js', 'Firebase'],
      gradient: 'from-pink-500 via-red-500 to-yellow-500',
      icon: '🔬',
      link: 'https://github.com/kumaraksahay/Skin_Scan_DiseaseAk'
    },
    {
      title: 'PlantCare',
      desc: 'A mobile app that detects plant species through image scanning and identifies which plant it is. The app allows users to buy and sell plants easily within the marketplace. It connects plant lovers with nearby sellers, making plant care and trading simple and accessible.',
      tech: ['React Native', 'AI Image Recognition', 'Marketplace'],
      gradient: 'from-purple-500 via-indigo-500 to-blue-500',
      icon: '🌿',
      link: 'https://github.com/kumaraksahay/Plant_Care_Hub'
    },
    {
      title: 'WheelHub',
      desc: 'A full stack web project designed for buying and selling car parts with ease while helping users locate nearby mechanic shops and machine services. The platform integrates an AI-powered image recognition module that analyzes uploaded images to ensure accuracy.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'AI Recognition'],
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      icon: '🚗',
      link: '#'
    },
    {
      title: 'Appointment Book',
      desc: 'A full stack web project that enables users to book doctor appointments anytime with ease. The platform allows patients to search for specialists, view their availability, and instantly confirm appointment slots through an interactive web interface.',
      tech: ['React.js', 'Node.js', 'Firebase', 'Real-time Updates'],
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      icon: '📅',
      link: '#'
    },
  ];
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Tilt key={i} glareEnable={true} glareMaxOpacity={0.3} scale={1.05} transitionSpeed={2500}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeInOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                animate={{
                  rotate: [0, 2, -2, 0],
                  transition: { duration: 4, repeat: Infinity, delay: i * 0.2 }
                }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${project.gradient} rounded-3xl p-8 min-h-[300px] flex flex-col relative overflow-hidden shadow-2xl shadow-[${project.gradient.split(' ')[1]}]/20 border border-white/10`}>
                  <motion.div
                    className="absolute inset-0 bg-black/50"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                
                  <motion.div className="text-6xl mb-4 relative z-10 animate-pulse" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}>
                    {project.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{project.title}</h3>
                  <p className="text-gray-100 text-sm mb-4 flex-grow relative z-10 leading-relaxed">{project.desc}</p>
                
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {project.tech.map((tech, j) => (
                      <motion.span
                        key={j}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold"
                        whileHover={{ scale: 1.1 }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: j * 0.1, duration: 0.3, ease: "easeInOut" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 justify-center relative z-10 shadow-lg no-underline"
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    View Project <Zap className="w-4 h-4" />
                  </motion.a>
                  <motion.div
                    className="absolute top-4 right-4"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  </motion.div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};
// Experience Timeline with more animations
const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Full Stack Web Developer Internship',
      company: 'CareCloud MTBC',
      period: 'Internship',
      desc: 'Completed an internship at CareCloud MTBC as a Full Stack Web Developer, where I worked on developing and optimizing dynamic web applications using modern front-end and back-end technologies. Gained practical experience in database integration, API development, and building efficient, user-friendly interfaces.',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Full Stack Web Developer Internship',
      company: 'Secretary of the National Assembly of Pakistan',
      period: 'Internship',
      desc: 'Completed an internship at the Secretary of the National Assembly of Pakistan as a Full Stack Web Developer, where I contributed to the development and maintenance of interactive web platforms using modern frameworks and technologies. Gained hands-on experience in front-end design, back-end logic implementation, and database management.',
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Web Platform Contributor',
      company: 'Green Urban Development School (GUDS), COMSATS',
      period: 'Contribution',
      desc: 'Contributed by creating a web-based platform and proposing a mobile app idea to promote green initiatives, awareness, and community engagement in collaboration with the School of Leadership Foundation (SoLF) and supported by the U.S. Embassy.',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Bachelor of Software Engineering',
      company: 'COMSATS University Islamabad',
      period: 'Completed',
      desc: 'BS Software Engineering from COMSATS University Islamabad. HSSC with A1 grade from BISE Mirpurkhas, Sindh.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600'
    },
  ];
  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Experience
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="relative">
          <motion.div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        
          {experiences.map((exp, i) => (
            <Tilt key={i} glareEnable={true} glareMaxOpacity={0.3} scale={1.02} transitionSpeed={2500}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeInOut" }}
                className={`flex items-center mb-16 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, x: i % 2 === 0 ? -10 : 10 }}
                    animate={{
                      y: [0, -5, 0],
                      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className={`bg-gradient-to-br ${exp.color} rounded-3xl p-6 inline-block shadow-2xl shadow-[${exp.color.split(' ')[1]}]/20 border border-white/10`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <motion.div className="bg-white/20 p-3 rounded-xl" animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                        {exp.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-white/80 text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm mb-2">{exp.period}</p>
                    <p className="text-white text-sm leading-relaxed">{exp.desc}</p>
                  </motion.div>
                </div>
              
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center border-4 border-gray-900 z-10 shadow-lg"
                >
                  <Target className="w-6 h-6 text-white" />
                </motion.div>
              
                <div className="w-1/2" />
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};
// Contact Section with enhanced animations
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
      }, (error) => {
        alert('Failed to send message. Please try again or email me directly at kumarakshaykolhi@gmail.com');
        console.error('EmailJS error:', error);
        setIsLoading(false);
      });
  };
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      value: 'kumarakshaykolhi@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      link: 'mailto:kumarakshaykolhi@gmail.com?subject=Hello%20from%20your%20portfolio&body=Hi%20Akshay,%0A%0AI%27d%20like%20to%20discuss...'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone',
      value: '+923473556629',
      color: 'from-purple-500 to-pink-500',
      link: 'tel:+923473556629'
    },
  ];
  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Let's Connect
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactMethods.map((method, i) => (
            <Tilt key={i} glareEnable={true} glareMaxOpacity={0.3} scale={1.05} transitionSpeed={2500}>
              <motion.a
                href={method.link}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                animate={{
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className={`bg-gradient-to-br ${method.color} rounded-3xl p-8 text-center relative overflow-hidden group cursor-pointer block shadow-2xl shadow-[${method.color.split(' ')[1]}]/20 border border-white/10`}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  className="inline-block mb-4"
                  animate={{
                    y: [0, -5, 0],
                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {method.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                <p className="text-white/90">{method.value}</p>
              </motion.a>
            </Tilt>
          ))}
        </div>
        <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.02} transitionSpeed={2500}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              scale: [1, 1.02, 1],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          
            <div className="relative z-10">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-300 mb-3 font-semibold text-lg">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: '#06b6d4' }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    placeholder="Your Name"
                    required
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-300 mb-3 font-semibold text-lg">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: '#8b5cf6' }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="your@email.com"
                    required
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-gray-300 mb-3 font-semibold text-lg">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, borderColor: '#ec4899' }}
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="6"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg border border-white/20"
                  animate={{
                    y: [0, -2, 0],
                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <span className="relative z-10">{isLoading ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-5 h-5 relative z-10" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </Tilt>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-16"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {[
            { icon: <Github className="w-7 h-7" />, color: 'from-gray-700 to-gray-900', label: 'GitHub', link: 'https://github.com/kumaraksahay' },
            { icon: <Linkedin className="w-7 h-7" />, color: 'from-blue-600 to-blue-800', label: 'LinkedIn', link: 'https://www.linkedin.com/in/akshay-kumar-245783187' },
            { icon: <Mail className="w-7 h-7" />, color: 'from-red-600 to-pink-700', label: 'Email',
              link: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kumarakshaykolhi@gmail.com' },
            { icon: <MessageCircle className="w-7 h-7" />, color: 'from-green-500 to-green-700', label: 'WhatsApp',
              link: 'https://wa.me/923473556629' },
          ].map((social, i) => (
            <Tilt key={i} glareEnable={true} glareMaxOpacity={0.3} scale={1.2} transitionSpeed={2500}>
              <motion.a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -5, 0],
                  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className={`bg-gradient-to-br ${social.color} p-5 rounded-2xl shadow-lg cursor-pointer relative group block border border-white/20`}
                title={social.label}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-2xl"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.div className="relative z-10" animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                  {social.icon}
                </motion.div>
              </motion.a>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
const Footer = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <footer className="py-12 px-4 border-t border-white/10 dark:border-black/10 bg-gray-800/50 dark:bg-gray-100/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:from-blue-500 dark:via-indigo-500 dark:to-violet-500 mb-2">
              Akshay.dev
            </div>
            <p className="text-gray-400 text-sm dark:text-gray-500">
              Crafting digital experiences with passion
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <p className="text-gray-400 text-sm dark:text-gray-500">
              © 2025 Akshay. Built with React, Framer Motion & TailwindCSS
            </p>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-cyan-400 text-xs mt-1 dark:text-blue-400"
            >
              Made with ❤️ and lots of coffee
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {['Home', 'About', 'Projects', 'Contact'].map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ y: -2, color: '#22d3ee' }}
                className="text-gray-400 text-sm transition-colors dark:text-gray-500 dark:hover:text-gray-900"
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
// Main App Component with Enhanced Mouse Trail and Theme Provider
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  // Enhanced cursor with trail effect
  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      scale: 1.5,
    }
  };
  return (
    <ThemeProvider>
      <div className="bg-gray-900 min-h-screen text-white overflow-x-hidden relative dark:bg-white dark:text-gray-900">
        {/* Welcome Modal */}
        <AnimatePresence>
          {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
        </AnimatePresence>
       
        {/* Enhanced Animated Background with more layers and mouse follow */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl shadow-2xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl shadow-2xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [-100, 100, -100],
              y: [-50, 50, -50],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 shadow-2xl"
          />
        </div>
        {/* Navigation */}
        <FloatingNav />
        {/* Floating Social Icons */}
        <FloatingSocialIcons />
        {/* Sections */}
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
        </div>
        {/* Enhanced Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full shadow-2xl z-40 cursor-pointer border border-white/20"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </ThemeProvider>
  );
}
export default App;