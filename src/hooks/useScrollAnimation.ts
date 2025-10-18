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
  const targetProgressRef = useRef(0);
  const isRunningRef = useRef(false);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const calculateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      return scrollHeight > 0 ? Math.min(Math.max((scrollTop / scrollHeight) * 100, 0), 100) : 0;
    };

    const updateProgress = () => {
      const currentProgress = calculateProgress();
      targetProgressRef.current = currentProgress;
      
      // Use lerp for smooth interpolation, but with faster response for immediate feedback
      const lerpFactor = 0.15; // Increased from 0.1 for more responsiveness
      const smoothProgress = lerp(lastProgressRef.current, targetProgressRef.current, lerpFactor);
      
      // Only update if there's a meaningful difference to avoid unnecessary renders
      if (Math.abs(smoothProgress - lastProgressRef.current) > 0.01) {
        lastProgressRef.current = smoothProgress;
        setProgress(smoothProgress);
      }

      // Continue the animation loop
      if (isRunningRef.current) {
        rafRef.current = requestAnimationFrame(updateProgress);
      }
    };

    const startAnimationLoop = () => {
      if (!isRunningRef.current) {
        isRunningRef.current = true;
        rafRef.current = requestAnimationFrame(updateProgress);
      }
    };

    const stopAnimationLoop = () => {
      isRunningRef.current = false;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };

    // Event handlers for different scroll triggers
    const handleScrollEvent = () => {
      startAnimationLoop();
    };

    const handleResize = () => {
      // Recalculate immediately on resize
      const newProgress = calculateProgress();
      targetProgressRef.current = newProgress;
      lastProgressRef.current = newProgress;
      setProgress(newProgress);
      startAnimationLoop();
    };

    // Observer for dynamic content changes
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    // Mutation observer for content changes
    const mutationObserver = new MutationObserver(() => {
      handleResize();
    });

    // Start observing
    resizeObserver.observe(document.body);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    // Add event listeners
    window.addEventListener('scroll', handleScrollEvent, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });
    
    // Initial calculation and start loop
    const initialProgress = calculateProgress();
    lastProgressRef.current = initialProgress;
    targetProgressRef.current = initialProgress;
    setProgress(initialProgress);
    startAnimationLoop();

    return () => {
      stopAnimationLoop();
      window.removeEventListener('scroll', handleScrollEvent);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
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