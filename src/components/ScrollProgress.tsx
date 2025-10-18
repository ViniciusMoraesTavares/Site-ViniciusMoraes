import { useScrollProgress } from '../hooks/useScrollAnimation';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div 
      className="scroll-progress"
      style={{ 
        transform: `scaleX(${progress / 100})`,
        transformOrigin: 'left'
      }}
    />
  );
}