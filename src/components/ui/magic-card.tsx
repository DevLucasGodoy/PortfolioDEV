"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import React, { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
}

/**
 * MagicCard (magicui.design) — spotlight that follows the cursor on hover.
 * Interior is transparent so the card inherits the page background (no grey
 * surface); the visible edge comes from ShineBorder / BorderBeam siblings.
 */
export function MagicCard({
  children,
  className,
  gradientSize = 260,
  gradientColor = "#00bf63",
  gradientOpacity = 0.15,
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const sizeRef = useRef(gradientSize);

  useEffect(() => {
    sizeRef.current = gradientSize;
  }, [gradientSize]);

  const reset = useCallback(() => {
    const off = -sizeRef.current;
    mouseX.set(off);
    mouseY.set(off);
  }, [mouseX, mouseY]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      className={cn("group relative isolate overflow-hidden rounded-[inherit]", className)}
    >
      <motion.div
        suppressHydrationWarning
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientColor},
              transparent 100%
            )
          `,
          opacity: gradientOpacity,
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
}
