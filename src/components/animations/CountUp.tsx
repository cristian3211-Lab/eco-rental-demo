"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CountUpProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export default function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { value: 0 };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          value: end,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
          },
        });
      },
    });

    triggerRef.current = trigger;

    return () => {
      triggerRef.current?.kill();
    };
  }, [end, suffix, prefix, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
