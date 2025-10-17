import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Technologies />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
