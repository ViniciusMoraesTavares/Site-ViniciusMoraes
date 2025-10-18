import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'slide-in-left' | 'slide-in-right' | 'slide-in-up' | 'slide-in-down' | 
             'scale-in' | 'rotate-in' | 'flip-in-x' | 'flip-in-y' | 
             'zoom-in' | 'bounce-in' | 'elastic-in' | 'fade-in' | 'fade-in-up';
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '0px'
}: AnimatedSectionProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  const getAnimationClass = () => {
    if (!isIntersecting) return '';
    
    const baseClass = `animate-${animation}`;
    const delayClass = delay > 0 ? getDelayClass(delay) : '';
    
    return `${baseClass} ${delayClass}`.trim();
  };

  const getDelayClass = (delayMs: number) => {
    if (delayMs <= 100) return 'delay-100';
    if (delayMs <= 150) return 'delay-150';
    if (delayMs <= 200) return 'delay-200';
    if (delayMs <= 300) return 'delay-300';
    if (delayMs <= 400) return 'delay-400';
    if (delayMs <= 500) return 'delay-500';
    if (delayMs <= 600) return 'delay-600';
    if (delayMs <= 700) return 'delay-700';
    if (delayMs <= 800) return 'delay-800';
    if (delayMs <= 900) return 'delay-900';
    return 'delay-1000';
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}