import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../data/portfolio';

interface HeroSectionProps {
  portraitSlotRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ portraitSlotRef }) => {
  return (
    <section className="relative w-full bg-[#FFFFFF] overflow-hidden min-h-[calc(100vh-72px)] flex flex-col justify-between">
      <div className="arvian-container relative flex-1 flex flex-col justify-between pt-8 pb-8 md:pb-11 min-h-[calc(100vh-72px)]">
        {/* Giant Split Display Typography symmetrically framing the centered portrait */}
        <div className="relative lg:absolute lg:inset-x-0 lg:top-[28%] flex flex-col sm:flex-row lg:grid lg:grid-cols-2 items-center justify-center gap-3 lg:gap-0 z-10 pointer-events-none select-none pt-4 lg:pt-0">
          <div className="flex justify-center lg:justify-end lg:pr-[clamp(145px,11.5vw,210px)]">
            <motion.h1
              initial={{ opacity: 0, filter: 'blur(12px)', y: 16 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif-display font-normal text-[#000000] uppercase tracking-[-0.02em] leading-[0.86] text-[clamp(3.1rem,6.8vw,7.8rem)] text-center lg:text-right whitespace-nowrap"
            >
              {SITE_CONFIG.heroLeftWord}
            </motion.h1>
          </div>

          <div className="flex justify-center lg:justify-start lg:pl-[clamp(145px,11.5vw,210px)]">
            <motion.span
              initial={{ opacity: 0, filter: 'blur(12px)', y: 16 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
              className="font-serif-display font-normal text-[#000000] uppercase tracking-[-0.02em] leading-[0.86] text-[clamp(3.1rem,6.8vw,7.8rem)] text-center lg:text-left whitespace-nowrap"
            >
              {SITE_CONFIG.heroRightWord}
            </motion.span>
          </div>
        </div>

        {/* Centered Cutout Portrait anchored flush to bottom edge, filling Hero presence */}
        <div className="relative lg:absolute lg:inset-x-0 lg:bottom-0 flex items-end justify-center pointer-events-none z-20 mt-4 lg:mt-0 h-[340px] sm:h-[460px] lg:h-[88%]">
          <div
            ref={portraitSlotRef}
            className="h-full aspect-[663/760] flex items-end justify-center"
          >
            <img
              src={SITE_CONFIG.portraits.hero}
              alt={`${SITE_CONFIG.fullName} portrait`}
              className="hidden motion-reduce:block h-full w-full object-contain object-bottom drop-shadow-[0_14px_30px_rgba(0,0,0,0.06)]"
            />
          </div>
        </div>

        {/* Bottom-Left & Bottom-Right Stacks pinned to outer corners */}
        <div className="relative z-30 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-auto pt-6">
          {/* Bottom-Left Stack */}
          <div className="flex flex-col items-start gap-4 bg-[#FFFFFF]/85 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none rounded-[10px] p-2 sm:p-0">
            <div
              className="inline-flex items-center gap-2.5 rounded-full bg-[#FFFFFF] px-[16px] py-[10px] text-[14px] font-medium text-[#000000]"
              style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)' }}
            >
              <span className="availability-dot" />
              <span>{SITE_CONFIG.availabilityText}</span>
            </div>

            <div className="flex flex-col leading-[1.35] text-[16px] font-medium tracking-[-0.01em] text-[#000000]">
              {SITE_CONFIG.heroRoles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
          </div>

          {/* Bottom-Right Stack */}
          <div className="flex flex-col items-start text-left gap-4 w-full sm:w-[250px] bg-[#FFFFFF]/85 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none rounded-[10px] p-2 sm:p-0">
            <p className="text-[15px] leading-[1.45] tracking-[-0.02em] text-[#000000]/80">
              {SITE_CONFIG.heroTagline}
            </p>
            <div className="flex items-center justify-between w-full text-[14px] font-medium text-[#000000]">
              {SITE_CONFIG.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F3680F] transition-colors duration-200"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
