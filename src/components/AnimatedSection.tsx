import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-up' | 'zoom-in' | 'reveal-up';
  delay?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function AnimatedSection({ 
  children, 
  animation = 'fade-in', 
  delay = 0, 
  className = '',
  threshold = 0.1,
  triggerOnce = true
}: AnimatedSectionProps) {
  // Mapear animações antigas para novas
  const animationMap: Record<string, string> = {
    'fade-in': 'fade-in',
    'slide-in-left': 'slide-left',
    'slide-in-right': 'slide-right',
    'slide-in-up': 'reveal-up',
    'zoom-in': 'zoom-in',
    'reveal-up': 'reveal-up'
  };

  const mappedAnimation = animationMap[animation] || 'fade-in';
  
  const { elementRef } = useScrollAnimation({
    animationType: mappedAnimation as any,
    delay,
    threshold,
    triggerOnce
  });

  return (
    <div 
      ref={elementRef}
      className={`scroll-animate ${className}`}
    >
      {children}
    </div>
  );
}