import React from 'react';
import { motion } from 'framer-motion';
import { VALUES_MILESTONES } from '../data/portfolio';
import { SectionBadge } from './SectionBadge';
import { BlurReveal } from './BlurReveal';

export const ValuesSection: React.FC = () => {
  const diagonalClasses = [
    'md:ml-[2%]',
    'md:ml-[22%]',
    'md:ml-[42%]',
    'md:ml-auto md:mr-[2%]',
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-[56px] md:py-[72px] relative">
      <div className="arvian-container">
        <div className="flex flex-col gap-5 pb-4">
          <div>
            <SectionBadge label="Values & Milestones" variant="dark" />
          </div>
          <BlurReveal className="max-w-[680px]">
            <h2 className="arvian-h4 text-[#000000]">
              Principles and milestones shaping how I build.
            </h2>
          </BlurReveal>
        </div>

        {/* Sticky Backdrop + Diagonal Staggered Floating Cards on desktop & mobile */}
        <div className="relative">
          <div className="sticky top-[72px] h-[52vh] md:h-[60vh] flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="font-sans-ui font-bold uppercase tracking-[-0.04em] text-[#E5E5E5] text-[clamp(3.8rem,15vw,13rem)] leading-none text-center whitespace-nowrap">
              OUR VALUES
            </span>
          </div>

          <div className="relative z-10 -mt-[42vh] flex flex-col gap-10 md:gap-14 pb-6">
            {VALUES_MILESTONES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full max-w-[460px] ${diagonalClasses[idx] ?? ''}`}
              >
                <article className="rounded-[12px] bg-[#FFFFFF] border border-[#000000]/8 p-6 sm:p-7 shadow-[0_14px_40px_rgba(0,0,0,0.06)] flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF7308]">
                      {item.index}
                    </span>
                    <span className="rounded-full bg-[#F3F3F3] px-3 py-1 text-[12px] font-medium text-[#000000]/75">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="arvian-h3 text-[#000000] text-[24px] md:text-[28px] leading-[1.15]">
                    {item.title}
                  </h3>

                  <p className="arvian-body">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-[#000000]/10 text-[13px] font-medium text-[#000000]/65">
                    {item.meta}
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
