import { useScrollProgress } from '../hooks/useScrollAnimation';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar"
        style={{ 
          width: `${progress}%`
        }}
        aria-label={`Progresso da página: ${Math.round(progress)}%`}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}