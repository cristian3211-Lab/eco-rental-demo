"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "scaleIn" | "slideLeft" | "slideRight" | "parallax";
  delay?: number;
  duration?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animations = {
      fadeUp: {
        from: { opacity: 0, y: 60 },
        to: { opacity: 1, y: 0 },
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.85 },
        to: { opacity: 1, scale: 1 },
      },
      slideLeft: {
        from: { opacity: 0, x: 80 },
        to: { opacity: 1, x: 0 },
      },
      slideRight: {
        from: { opacity: 0, x: -80 },
        to: { opacity: 1, x: 0 },
      },
      parallax: {
        from: { y: 50 },
        to: { y: -50 },
      },
    };

    const anim = animations[animation];

    gsap.set(el, anim.from);

    const tween = gsap.to(el, {
      ...anim.to,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: animation === "parallax" ? "bottom top" : "top 40%",
        scrub: animation === "parallax" ? 1 : false,
        toggleActions: "play none none none",
      },
    });

    triggerRef.current = tween.scrollTrigger ?? null;

    return () => {
      triggerRef.current?.kill();
    };
  }, [animation, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
