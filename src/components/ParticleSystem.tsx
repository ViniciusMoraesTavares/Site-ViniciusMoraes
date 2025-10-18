import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  colors?: string[];
  speed?: number;
  size?: { min: number; max: number };
  opacity?: { min: number; max: number };
  interactive?: boolean;
  className?: string;
}

export default function ParticleSystem({
  particleCount = 50,
  colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'],
  speed = 0.5,
  size = { min: 2, max: 6 },
  opacity = { min: 0.1, max: 0.6 },
  interactive = true,
  className = ''
}: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Inicializar partículas
  const initParticles = () => {
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * (size.max - size.min) + size.min,
        opacity: Math.random() * (opacity.max - opacity.min) + opacity.min,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 1000 + 500,
        maxLife: Math.random() * 1000 + 500
      });
    }
    
    particlesRef.current = particles;
  };

  // Atualizar partículas
  const updateParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particlesRef.current.forEach((particle, index) => {
      // Movimento básico
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Interação com mouse
      if (interactive) {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }
      }

      // Limites da tela
      if (particle.x < 0 || particle.x > dimensions.width) {
        particle.vx *= -1;
      }
      if (particle.y < 0 || particle.y > dimensions.height) {
        particle.vy *= -1;
      }

      // Manter dentro dos limites
      particle.x = Math.max(0, Math.min(dimensions.width, particle.x));
      particle.y = Math.max(0, Math.min(dimensions.height, particle.y));

      // Ciclo de vida
      particle.life -= 1;
      if (particle.life <= 0) {
        // Recriar partícula
        particle.x = Math.random() * dimensions.width;
        particle.y = Math.random() * dimensions.height;
        particle.vx = (Math.random() - 0.5) * speed;
        particle.vy = (Math.random() - 0.5) * speed;
        particle.life = particle.maxLife;
        particle.color = colors[Math.floor(Math.random() * colors.length)];
      }

      // Atualizar opacidade baseada na vida
      const lifeRatio = particle.life / particle.maxLife;
      particle.opacity = (Math.sin(lifeRatio * Math.PI) * (opacity.max - opacity.min) + opacity.min);
    });
  };

  // Renderizar partículas
  const renderParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    particlesRef.current.forEach(particle => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Efeito de brilho
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = particle.size * 2;
      ctx.fill();
      
      ctx.restore();
    });

    // Conectar partículas próximas
    if (interactive) {
      ctx.save();
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.globalAlpha = (120 - distance) / 120 * 0.2;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      ctx.restore();
    }
  };

  // Loop de animação
  const animate = () => {
    updateParticles();
    renderParticles();
    animationRef.current = requestAnimationFrame(animate);
  };

  // Manipular movimento do mouse
  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  };

  // Redimensionar canvas
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    setDimensions({
      width: rect.width,
      height: rect.height
    });

    canvas.width = rect.width;
    canvas.height = rect.height;
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      initParticles();
      animate();
    }

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [dimensions, particleCount, speed, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  );
}