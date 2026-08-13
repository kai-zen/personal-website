"use client";

import { FC, useEffect, useRef } from "react";

const ReadingProgress: FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      const bar = barRef.current;
      if (!bar) return;

      const viewport = window.innerHeight;
      const target = document.querySelector("[data-reading-progress]");

      let progress = 0;

      if (target instanceof HTMLElement) {
        const { top, height } = target.getBoundingClientRect();
        const range = height - viewport;
        progress = range <= 0 ? 1 : Math.min(1, Math.max(0, -top / range));
      } else {
        const range = document.documentElement.scrollHeight - viewport;
        progress = range <= 0 ? 1 : Math.min(1, window.scrollY / range);
      }

      bar.style.transform = `scaleX(${progress})`;
    };

    const onScrollOrResize = () => {
      if (frameRef.current) return;

      frameRef.current = requestAnimationFrame(() => {
        update();
        frameRef.current = 0;
      });
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-16 z-50 -mt-px h-0.5"
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-gray-950 dark:bg-white"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};

export default ReadingProgress;
