import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { createPortal } from 'react-dom';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return createPortal(
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`  
        fixed z-10 bottom-4 right-4
        bg-gradient-to-br from-[#00A651] to-[#16C172]
        text-white rounded-full
        flex items-center justify-center
        w-12 h-12
        shadow-md
        transition-all duration-500 ease-out
        ${isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
        }
        ${isHovered ? 'scale-110 shadow-[0_0_20px_4px_rgba(22,193,114,0.8)]' : ''}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
      {/* Optional glow on hover */}
      <div
        className={`
          absolute inset-0 rounded-full
          bg-[#00A651]/20 blur-xl -z-10
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </button>,
    document.body
  );
}