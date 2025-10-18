import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationType?: 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in' | 'reveal-up' | 'scale-in';
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    animationType = 'fade-in',
    delay = 0
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true);
            setHasTriggered(true);
            element.classList.add('animate-in', `scroll-${animationType}`);
          }, delay);
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
          element.classList.remove('animate-in', `scroll-${animationType}`);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, animationType, delay, hasTriggered]);

  return { elementRef, isVisible };
};

export const useParallaxScroll = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      setOffset(rate);
      element.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { elementRef, offset };
};

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>();
  const lastProgressRef = useRef(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.pageYOffset;
      const currentProgress = totalHeight > 0 ? Math.min((scrolled / totalHeight) * 100, 100) : 0;
      
      // Smooth interpolation for fluid animation
      const smoothProgress = lastProgressRef.current + (currentProgress - lastProgressRef.current) * 0.1;
      lastProgressRef.current = smoothProgress;
      
      setProgress(smoothProgress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    // Throttled resize handler for responsive behavior
    const handleResize = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial calculation
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return progress;
};

export const useScrollVelocity = () => {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTimestamp = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const currentTimestamp = Date.now();
      
      const deltaY = currentScrollY - lastScrollY.current;
      const deltaTime = currentTimestamp - lastTimestamp.current;
      
      if (deltaTime > 0) {
        const currentVelocity = Math.abs(deltaY / deltaTime);
        setVelocity(currentVelocity);
      }
      
      lastScrollY.current = currentScrollY;
      lastTimestamp.current = currentTimestamp;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return velocity;
};

export const useSmoothScroll = () => {
  const scrollTo = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const targetPosition = element.offsetTop - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return { scrollTo };
};