import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SERVICES } from '../data/portfolio';
import { SectionBadge } from './SectionBadge';
import { BlurReveal } from './BlurReveal';

export const ServicesSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="services" className="w-full bg-[#FFFFFF] py-[56px] md:py-[72px]">
      <div className="arvian-container flex flex-col gap-8">
        <div>
          <SectionBadge label="services" variant="dark" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-end">
          <div className="lg:col-span-6">
            <BlurReveal className="max-w-[520px]">
              <h2 className="arvian-h4 text-[#000000]">
                From a real problem to an intelligent product.
              </h2>
            </BlurReveal>
          </div>
          <div className="lg:col-span-6">
            <p className="arvian-body">
              AI engineering, full-stack web development, backend systems, and rapid prototyping. Each capability connects software reliability with practical intelligence across every layer.
            </p>
          </div>
        </div>

        <div className="border-t border-[#000000]/20">
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={service.number}
                className="border-b border-[#000000]/20"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full py-6 md:py-7 flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="text-[14px] font-medium text-[#FF7308] tabular-nums">
                      {service.number}
                    </span>
                    <h3 className="font-serif-display font-normal text-[28px] sm:text-[36px] lg:text-[44px] leading-[1em] tracking-[-0.01em] text-[#000000] group-hover:text-[#F3680F] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-10 h-10 rounded-full border border-[#000000]/15 flex items-center justify-center shrink-0 text-[#000000] group-hover:border-[#F3680F] group-hover:text-[#F3680F] transition-colors"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pt-1 pl-0 md:pl-[62px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 flex flex-col gap-5">
                          <p className="arvian-body max-w-[540px]">
                            {service.description}
                          </p>
                          <div className="grid grid-cols-2 gap-3 max-w-[440px]">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-[#000000]/20 px-4 py-2 text-[13px] font-medium text-[#000000] text-center"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="lg:col-span-5">
                          <div className="w-full aspect-[16/10] max-h-[260px] rounded-[10px] overflow-hidden bg-[#111111]">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
