// src/components/ParticlesBackground.tsx
import { useEffect, useRef } from 'react';

interface ParticlesBackgroundProps {
  id?: string;
  className?: string;
}

export function ParticlesBackground({
  id = 'particles-js',
  className = '',
}: ParticlesBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ useEffect tashqarisida funksiya sifatida e'lon qilamiz
  const initParticles = () => {
    if (window.particlesJS && containerRef.current) {
      if (window.pJSDom && window.pJSDom.length > 0) {
        const existingIndex = window.pJSDom.findIndex(
          (item: any) => item.pJS.canvas.el.id === id
        );
        if (existingIndex !== -1) {
          return;
        }
      }

      window.particlesJS(id, {
        particles: {
          number: { value: 250, density: { enable: true, value_area: 800 } },
          color: { value: '#00A651' },
          shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
          opacity: { value: 0.3, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
          size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
          line_linked: { enable: true, distance: 150, color: '#00A651', opacity: 0.2, width: 2 },
          move: {
            enable: true,
            speed: 5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
          },
          // ✅ Yangi: Zarralarning hayot muddati (agar particles.js versiyasi qo'llab-quvvatlasa)
          life: {
            enable: true,
            duration: 5, // sekundda
            count: 1 // Har bir push da 1 ta zarraga hayot beriladi
          }
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
            push: {
              particles_nb: 1 // ✅ Har clickda faqat 1 ta zarrani qo'sh
            }
          }
        },
        retina_detect: true
      });

      // ✅ Alternativ: Agar life ishlamasa, manual o'chirish
      const pJS = window.pJSDom?.find((item: any) => item.pJS.canvas.el.id === id)?.pJS;
      if (pJS) {
        pJS.fn.interact.push = function() {
          if (!this.particles || !this.particles.pushed) return;
          const nb = this.particles.push.particles_nb;
          for (let i = 0; i < nb; i++) {
            const pos = {
              x: Math.random() * this.canvas.width,
              y: Math.random() * this.canvas.height
            };
            const newParticle = this.particles.create(pos);
            newParticle.life = {
              duration: 5, // 5 sekund
              timeLeft: 5
            };
            this.particles.pushed.push(newParticle);
            setTimeout(() => {
              const index = this.particles.pushed.indexOf(newParticle);
              if (index !== -1) {
                this.particles.pushed.splice(index, 1);
                // Zarrani o'chirish
                this.particles.array = this.particles.array.filter((p: any) => p !== newParticle);
              }
            }, 5000); // 5 sekunddan keyin o'chirish
          }
        };
      }
    }
  };

  useEffect(() => {
    // ✅ Endi initParticles mavjud — chunki yuqorida e'lon qilingan
    if (window.particlesJS && containerRef.current) {
      initParticles();
      return;
    }

    const existingScript = document.querySelector('script[src*="particles"]');
    if (existingScript) {
      existingScript.addEventListener('load', initParticles);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'; // ⚠️ ortiqcha bo'shliqni olib tashladim
    script.async = true;
    script.onload = initParticles;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (window.pJSDom && window.pJSDom.length > 0) {
        const index = window.pJSDom.findIndex((item: any) =>
          item.pJS.canvas.el?.id === id
        );
        if (index !== -1) {
          // `destroy` funksiyasi mavjudligini tekshirish
          if (typeof window.pJSDom[index].pJS.fn.vendors.destroypJS === 'function') {
            window.pJSDom[index].pJS.fn.vendors.destroypJS();
          }
          window.pJSDom.splice(index, 1);
        }
      }
      // Skriptni ham olib tashlash (ixtiyoriy)
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [id, initParticles]); // ✅ initParticles ham dependency sifatida

  return (
    <div
      id={id}
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: 'auto'
      }}
    />
  );
}

declare global {
  interface Window {
    particlesJS: any;
    pJSDom: any[];
  }
}