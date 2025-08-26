"use client";

import { useEffect, useRef, FC, ReactNode } from "react";
import AnimatedLines from "@/components/animated-lines";
// 1. Se revirtieron las importaciones a URLs de CDN para resolver el error de compilación.
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// El estilo para ".char" debe estar en tu archivo global de CSS (ej: app/globals.css)

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
}

const AnimatedText: FC<AnimatedTextProps> = ({ children, className }) => {
  // 1. Cambiamos la referencia a HTMLDivElement
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrambleTextPlugin);

    const element = textRef.current;
    if (!element) return;
    
    // La animación ahora buscará el primer <p> dentro del componente
    const targetParagraph = element.querySelector('p');
    if (!targetParagraph) return;

    const st = SplitText.create(targetParagraph, {
      type: "chars",
      charsClass: "char",
    });

    st.chars.forEach((char) => {
      if (char instanceof HTMLElement) {
        gsap.set(char, { attr: { "data-content": char.innerHTML } });
      }
    });

    const onPointerMove = (e: PointerEvent) => {
      st.chars.forEach((char) => {
        if (char instanceof HTMLElement) {
          const rect = char.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = e.clientX - cx;
          const dy = e.clientY - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            gsap.to(char, {
              overwrite: true,
              duration: 1.2 - dist / 100,
              scrambleText: {
                text: char.dataset.content || "",
                chars: ".:",
                speed: 0.5,
              },
              ease: "none",
            });
          }
        }
      });
    };

    const parentContainer = element.closest("main");
    if (parentContainer) {
      parentContainer.addEventListener("pointermove", onPointerMove);
    }

    return () => {
      if (parentContainer) {
        parentContainer.removeEventListener("pointermove", onPointerMove);
      }
      if (st.revert) {
        st.revert();
      }
    };
  }, []);

  // 2. Cambiamos el elemento principal de <p> a <div>
  return (
    <AnimatedLines>
      <div ref={textRef} className={className}>
        {children}
      </div>
    </AnimatedLines>
  );
};

export default AnimatedText;