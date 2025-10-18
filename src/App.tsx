import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import SEOHelmet from './components/SEOHelmet';
import { AboutSkeleton, TimelineSkeleton, ProjectCardSkeleton } from './components/SkeletonLoader';
import { ThemeProvider } from './contexts/ThemeContext';

// Lazy loading dos componentes principais
const About = lazy(() => import('./components/About'));
const Timeline = lazy(() => import('./components/Timeline'));
const Projects = lazy(() => import('./components/Projects'));
const Technologies = lazy(() => import('./components/Technologies'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEOHelmet />
        <div className="min-h-screen bg-light-bg dark:bg-dark transition-colors duration-300">
          <ScrollProgress />
          <Navigation />
          <Hero />
          
          <Suspense fallback={<AboutSkeleton />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<TimelineSkeleton />}>
            <Timeline />
          </Suspense>
          
          <Suspense fallback={
            <div className="container mx-auto px-6 py-20">
              <div className="text-center mb-16">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-4 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto animate-pulse" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <ProjectCardSkeleton key={index} />
                ))}
              </div>
            </div>
          }>
            <Projects />
          </Suspense>
          
          <Suspense fallback={
            <div className="container mx-auto px-6 py-20">
              <div className="text-center mb-16">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-80 mx-auto mb-4 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto animate-pulse" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 mx-auto animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          }>
            <Technologies />
          </Suspense>
          
          <Suspense fallback={
            <div className="container mx-auto px-6 py-20">
              <div className="text-center mb-16">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-4 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto animate-pulse" />
              </div>
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse" />
              </div>
            </div>
          }>
            <Contact />
          </Suspense>
          
          <Suspense fallback={
            <div className="bg-gray-900 text-white py-12">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="space-y-4">
                      <div className="h-6 bg-gray-700 rounded w-32 animate-pulse" />
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-700 rounded animate-pulse" />
                        <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }>
            <Footer />
          </Suspense>
          
          <BackToTop />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
