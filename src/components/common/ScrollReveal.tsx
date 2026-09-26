'use client';

import * as React from 'react';

import Box, { type BoxProps } from '@mui/material/Box';
import { motion, useReducedMotion } from 'framer-motion';

import { easeOutExpo } from '@/motion';

const MotionBox = motion.create(Box);

/** HTML event handlers whose React and framer-motion signatures conflict. */
type ConflictingHandlers = 'onAnimationStart' | 'onAnimationEnd' | 'onDrag' | 'onDragStart' | 'onDragEnd';

type ScrollRevealProps = Omit<BoxProps, ConflictingHandlers> & {
  /** Animation delay in seconds, used to stagger sibling reveals. */
  delay?: number;
  /** Vertical offset (px) the content travels in from. */
  y?: number;
  /** Fraction of the element (0–1) that must be visible before it reveals. */
  amount?: number;
};

/**
 * Fades + slides content in the first time it scrolls into view — the React
 * equivalent of the static site's `.reveal` / `.in` IntersectionObserver.
 * Respects `prefers-reduced-motion`.
 */
export default function ScrollReveal({
  delay = 0,
  y = 18,
  amount = 0.12,
  children,
  ...rest
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionBox
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, delay, ease: easeOutExpo }}
      {...(rest as React.ComponentProps<typeof MotionBox>)}
    >
      {children}
    </MotionBox>
  );
}
