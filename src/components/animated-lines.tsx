// app/components/AnimatedLines.tsx
"use client";

import { useEffect, useRef, FC, ReactNode } from "react";
// En tu proyecto local, usa las importaciones de NPM
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

interface AnimatedWordsProps {
  children: ReactNode;
  className?: string;
}

const AnimatedWords: FC<AnimatedWordsProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const element = containerRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      // 1. Se cambió el tipo a "words"
      const split = SplitText.create(element, { type: "words" });

      // 2. Se aplicó la nueva animación de palabras
      // Las palabras caerán y rotarán aleatoriamente
      gsap.from(split.words, {
        y: -100, // Inician 100px arriba
        opacity: 0,
        rotation: "random(-80, 80)", // Rotación aleatoria
        duration: 0.7,
        ease: "back.out(1.7)", // Un 'ease' con más rebote
        stagger: 0.15,
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedWords;
