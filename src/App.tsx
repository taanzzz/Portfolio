import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 flex">
        <Sidebar />
        <main className="flex-1 lg:ml-0 transition-colors duration-300 overflow-x-hidden">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Education />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;