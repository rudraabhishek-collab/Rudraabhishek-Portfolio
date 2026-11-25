import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { SITE_CONFIG } from '../data/portfolio';

interface ScrollPortraitTravelerProps {
  heroSlotRef: React.RefObject<HTMLDivElement | null>;
  aboutSlotRef: React.RefObject<HTMLDivElement | null>;
  processSlotRef: React.RefObject<HTMLDivElement | null>;
}

const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const ScrollPortraitTraveler: React.FC<ScrollPortraitTravelerProps> = ({
  heroSlotRef,
  aboutSlotRef,
  processSlotRef,
}) => {
  const [prefersReduced, setPrefersReduced] = useState<boolean>(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const width = useMotionValue(340);
  const height = useMotionValue(390);
  const borderRadius = useMotionValue(0);
  const opacity = useMotionValue(1);

  useEffect(() => {
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setPrefersReduced(mqMotion.matches);
    syncMotion();

    mqMotion.addEventListener('change', syncMotion);
    return () => mqMotion.removeEventListener('change', syncMotion);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;

    let rafId = 0;

    const updatePosition = () => {
      const heroEl = heroSlotRef.current;
      const aboutEl = aboutSlotRef.current;
      const processEl = processSlotRef.current;
      if (!heroEl || !aboutEl || !processEl) return;

      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const sy = window.scrollY;
      const isDesktop = vw >= 1024;

      const hr = heroEl.getBoundingClientRect();
      const ar = aboutEl.getBoundingClientRect();
      const pr = processEl.getBoundingClientRect();

      const aboutDocTop = ar.top + sy;
      const aboutLockY = isDesktop ? Math.max(116, vh * 0.17) : Math.max(96, vh * 0.15);
      const travelDist1 = Math.max(1, aboutDocTop - aboutLockY);

      const processEnterTop = vh * 0.92;
      const processLockTop = isDesktop ? 108 : 96;

      if (pr.top < processEnterTop) {
        // Phase 2: Shrink/glide smoothly into Process portrait card (desktop & mobile)
        const raw2 = clamp(
          (processEnterTop - pr.top) / Math.max(1, processEnterTop - processLockTop),
          0,
          1
        );
        const t2 = easeOutCubic(raw2);

        const startW = pr.width * 0.52;
        const startH = pr.height * 0.52;
        const startX = pr.left + (pr.width - startW) * 0.5;
        const startY = Math.max(82, pr.top - 84);

        x.set(lerp(startX, pr.left, t2));
        y.set(lerp(startY, pr.top, t2));
        width.set(lerp(startW, pr.width, t2));
        height.set(lerp(startH, pr.height, t2));
        borderRadius.set(8);
        opacity.set(clamp(raw2 * 2.2, 0, 1));
      } else if (sy <= travelDist1) {
        // Phase 1: Shrink & glide continuously from Hero to About card (desktop & mobile)
        const raw1 = clamp(sy / travelDist1, 0, 1);
        const t1 = easeInOutCubic(raw1);

        x.set(lerp(hr.left, ar.left, t1));
        y.set(lerp(hr.top, ar.top, t1));
        width.set(lerp(hr.width, ar.width, t1));
        height.set(lerp(hr.height, ar.height, t1));
        borderRadius.set(lerp(0, 8, t1));
        opacity.set(1);
      } else {
        // Locked inside About card until About scrolls past header
        x.set(ar.left);
        y.set(ar.top);
        width.set(ar.width);
        height.set(ar.height);
        borderRadius.set(8);
        opacity.set(ar.bottom > 72 ? 1 : 0);
      }
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updatePosition);
    };

    updatePosition();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    const ro = new ResizeObserver(scheduleUpdate);
    if (heroSlotRef.current) ro.observe(heroSlotRef.current);
    if (aboutSlotRef.current) ro.observe(aboutSlotRef.current);
    if (processSlotRef.current) ro.observe(processSlotRef.current);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      ro.disconnect();
    };
  }, [
    prefersReduced,
    heroSlotRef,
    aboutSlotRef,
    processSlotRef,
    x,
    y,
    width,
    height,
    borderRadius,
    opacity,
  ]);

  if (prefersReduced) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x,
        y,
        width,
        height,
        borderRadius,
        opacity,
        zIndex: 20,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      className="flex items-end justify-center will-change-transform"
    >
      <motion.img
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        src={SITE_CONFIG.portraits.hero}
        alt=""
        className="w-full h-full object-contain object-bottom drop-shadow-[0_14px_30px_rgba(0,0,0,0.06)]"
      />
    </motion.div>
  );
};
