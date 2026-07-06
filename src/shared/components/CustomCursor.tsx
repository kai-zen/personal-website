"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/shared/config/functions";

const RING_LERP = 0.14;

const subscribeToCursorPreference = (onStoreChange: () => void) => {
  const finePointer = window.matchMedia("(pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  finePointer.addEventListener("change", onStoreChange);
  reducedMotion.addEventListener("change", onStoreChange);

  return () => {
    finePointer.removeEventListener("change", onStoreChange);
    reducedMotion.removeEventListener("change", onStoreChange);
  };
};

const getCursorPreference = () => {
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  return hasFinePointer && !prefersReducedMotion;
};

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const isPointerDown = useRef(false);

  const pointer = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  const enabled = useSyncExternalStore(
    subscribeToCursorPreference,
    getCursorPreference,
    () => false,
  );

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor");

    const setDotPosition = (x: number, y: number) => {
      if (!dotRef.current) return;
      dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const setRingPosition = (x: number, y: number) => {
      if (!ringRef.current) return;
      ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      ring.current.x += (pointer.current.x - ring.current.x) * RING_LERP;
      ring.current.y += (pointer.current.y - ring.current.y) * RING_LERP;
      setRingPosition(ring.current.x, ring.current.y);
      rafRef.current = requestAnimationFrame(animate);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.current = { x: event.clientX, y: event.clientY };
      setDotPosition(event.clientX, event.clientY);
      setVisible(true);
    };

    const onPointerLeave = (event: PointerEvent) => {
      if (isPointerDown.current) return;
      if (event.relatedTarget === null) setVisible(false);
    };

    const onPointerDown = () => {
      isPointerDown.current = true;
    };

    const onPointerUp = () => {
      isPointerDown.current = false;
    };

    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("pointermove", onPointerMove);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("blur", onPointerUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("blur", onPointerUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-9999 rounded-full bg-gray-950 ring-1 ring-white will-change-transform dark:bg-white dark:ring-gray-950",
          "h-1.5 w-1.5",
          !visible && "opacity-0",
        )}
      />
      <div
        ref={ringRef}
        aria-hidden
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-9998 rounded-full border-2 border-gray-950 shadow-[0_0_0_1px_#fff] will-change-transform dark:border-white dark:shadow-[0_0_0_1px_#0a0a0a]",
          "h-8 w-8",
          !visible && "opacity-0",
        )}
      />
    </>
  );
};

export default CustomCursor;
