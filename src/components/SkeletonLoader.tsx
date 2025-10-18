import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
  width,
  height,
  lines = 1,
}) => {
  const baseClasses = 'animate-pulse bg-gray-200 dark:bg-gray-700';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-xl',
  };

  const style = {
    width: width || (variant === 'circular' ? height : '100%'),
    height: height || (variant === 'text' ? '1rem' : '200px'),
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${variantClasses[variant]}`}
            style={{
              ...style,
              width: index === lines - 1 ? '75%' : style.width,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
};

// Skeleton específico para cards de projeto
export const ProjectCardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4">
    <Skeleton variant="rectangular" height="200px" />
    <div className="space-y-3">
      <Skeleton variant="text" height="24px" width="80%" />
      <Skeleton variant="text" lines={3} />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" width="60px" height="24px" />
        <Skeleton variant="rectangular" width="80px" height="24px" />
        <Skeleton variant="rectangular" width="70px" height="24px" />
      </div>
    </div>
  </div>
);

// Skeleton específico para seção About
export const AboutSkeleton: React.FC = () => (
  <div className="container mx-auto px-6 py-20">
    <div className="text-center mb-16">
      <Skeleton variant="text" height="48px" width="300px" className="mx-auto mb-4" />
      <Skeleton variant="text" lines={2} width="600px" className="mx-auto" />
    </div>
    
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1 flex justify-center">
        <Skeleton variant="circular" width="320px" height="320px" />
      </div>
      
      <div className="order-1 lg:order-2 space-y-6">
        <Skeleton variant="text" height="32px" width="250px" />
        <Skeleton variant="text" lines={4} />
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Skeleton variant="circular" width="24px" height="24px" />
              <Skeleton variant="text" width="120px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Skeleton específico para timeline
export const TimelineSkeleton: React.FC = () => (
  <div className="container mx-auto px-6 py-20">
    <div className="text-center mb-16">
      <Skeleton variant="text" height="48px" width="400px" className="mx-auto mb-4" />
      <Skeleton variant="text" lines={2} width="500px" className="mx-auto" />
    </div>
    
    <div className="max-w-4xl mx-auto space-y-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex gap-6">
          <div className="flex flex-col items-center">
            <Skeleton variant="circular" width="48px" height="48px" />
            {index < 2 && <div className="w-0.5 h-20 bg-gray-200 dark:bg-gray-700 mt-4" />}
          </div>
          <div className="flex-1 space-y-3">
            <Skeleton variant="text" height="24px" width="200px" />
            <Skeleton variant="text" height="20px" width="150px" />
            <Skeleton variant="text" lines={3} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skeleton;