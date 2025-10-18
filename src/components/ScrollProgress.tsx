import { useScrollProgress } from '../hooks/useScrollAnimation';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  // Calculate color interpolation based on progress
  const getProgressColor = (progress: number) => {
    if (progress < 25) {
      // Blue to indigo
      return `hsl(${217 - (progress / 25) * 10}, 91%, ${59 + (progress / 25) * 10}%)`;
    } else if (progress < 50) {
      // Indigo to purple
      const localProgress = (progress - 25) / 25;
      return `hsl(${207 - localProgress * 40}, ${91 - localProgress * 20}%, ${69 - localProgress * 10}%)`;
    } else if (progress < 75) {
      // Purple to pink
      const localProgress = (progress - 50) / 25;
      return `hsl(${167 + localProgress * 160}, ${71 + localProgress * 20}%, ${59 + localProgress * 15}%)`;
    } else {
      // Pink to red/orange
      const localProgress = (progress - 75) / 25;
      return `hsl(${327 + localProgress * 33}, ${91 - localProgress * 20}%, ${74 - localProgress * 20}%)`;
    }
  };

  const progressColor = getProgressColor(progress);
  const shadowIntensity = Math.min(progress / 100 * 0.6 + 0.2, 0.8);

  return (
    <div 
      className="scroll-progress-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.1)',
        display: 'block'
      }}
    >
      <div 
        className="scroll-progress-bar"
        style={{ 
          width: `${progress}%`,
          height: '100%',
          background: progress > 0 ? `linear-gradient(90deg, ${progressColor}, ${progressColor}dd)` : '#3b82f6',
          boxShadow: `
            0 0 ${8 + progress * 0.12}px ${progressColor}${Math.round(shadowIntensity * 255).toString(16).padStart(2, '0')},
            0 0 ${16 + progress * 0.24}px ${progressColor}${Math.round(shadowIntensity * 0.5 * 255).toString(16).padStart(2, '0')},
            0 2px 4px rgba(0, 0, 0, 0.1)
          `,
          transition: 'width 0.1s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease-out, box-shadow 0.3s ease-out',
          minWidth: progress > 0 ? 'auto' : '10px'
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