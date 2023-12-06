import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LetterAnimationProps {
  text: string;
  isAnimating: boolean;
  onAnimationComplete: () => void; // Callback to notify parent when animation completes
}

const LetterAnimation: React.FC<LetterAnimationProps> = ({ text, isAnimating, onAnimationComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isAnimating) return;

    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power3.out' } });

    gsap.set(container, { display: 'flex', flexDirection: 'row' });
    gsap.set(container.children, { y: 50, opacity: 0 });

    Array.from(container.children).forEach((letterElement, index) => {
      tl.to(letterElement, { opacity: 1, y: 0 }, index * 0.1);
    });

    tl.eventCallback('onComplete', onAnimationComplete);

    return () => {
      tl.kill();
    };
  }, [text, isAnimating, onAnimationComplete]);

  return (
    <div className='text-events' ref={containerRef} style={{ display: 'inline-block', overflow: 'hidden' }}>
      {text.split('').map((letter, index) => (
        <span className='letter flex flex-row' key={index} style={{ display: 'block' }}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default LetterAnimation;
