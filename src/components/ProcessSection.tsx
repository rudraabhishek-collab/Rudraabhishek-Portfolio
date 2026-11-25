import React from 'react';
import { PROCESS_STEPS, SITE_CONFIG } from '../data/portfolio';
import { SectionBadge } from './SectionBadge';
import { BlurReveal } from './BlurReveal';

interface ProcessSectionProps {
  portraitSlotRef?: React.RefObject<HTMLDivElement | null>;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ portraitSlotRef }) => {
  return (
    <section className="w-full bg-[#FFFFFF] py-[56px] md:py-[72px]">
      <div className="arvian-container flex flex-col gap-8">
        <div>
          <SectionBadge label="Process" variant="dark" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-end">
          <div className="lg:col-span-6">
            <BlurReveal>
              <h2 className="arvian-h4 text-[#000000]">
                A clear engineering workflow from problem to release.
              </h2>
            </BlurReveal>
          </div>
          <div className="lg:col-span-6">
            <p className="arvian-body">
              Every project follows a structured four-stage cycle — aligning user needs, clean architecture, AI integration, and thorough refinement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative pt-2">
          {/* Left Sticky Portrait */}
          <div className="lg:col-span-5 lg:sticky lg:top-[92px]">
            <div className="w-full aspect-[540/450] max-h-[480px] rounded-[10px] bg-[#F3F3F3] pt-4 px-4 overflow-hidden flex items-end justify-center">
              <div
                ref={portraitSlotRef}
                className="w-full h-full flex items-end justify-center"
              >
                <img
                  src={SITE_CONFIG.portraits.process}
                  alt={`${SITE_CONFIG.fullName} — Engineering process`}
                  className="hidden motion-reduce:block w-full h-full object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          {/* Right Sticky Stacked Folder-Tab Cards on desktop AND mobile */}
          <div className="lg:col-span-7 flex flex-col gap-6 pb-4">
            {PROCESS_STEPS.map((item) => {
              const isOrange = item.variant === 'orange';
              return (
                <div
                  key={item.step}
                  className="sticky top-[84px] lg:top-[92px] flex flex-col items-start"
                >
                  <div
                    className={`inline-flex items-center gap-2.5 rounded-t-[10px] px-[18px] py-[11px] text-[13px] font-medium ${
                      isOrange
                        ? 'bg-[#F3680F] text-[#FFFFFF]'
                        : 'bg-[#F3F3F3] text-[#000000]'
                    }`}
                  >
                    <span
                      className={`w-[10px] h-[10px] rounded-full ${
                        isOrange ? 'bg-[#FFFFFF]' : 'bg-[#F3680F]'
                      }`}
                    />
                    <span>Step 0{item.step}</span>
                  </div>

                  <div
                    className={`w-full min-h-[245px] sm:min-h-[270px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] p-[24px] sm:p-[30px] flex items-center justify-between gap-6 relative overflow-hidden shadow-[0_-10px_24px_rgba(0,0,0,0.03)] ${
                      isOrange
                        ? 'bg-[#F3680F] text-[#FFFFFF]'
                        : 'bg-[#F3F3F3] text-[#000000]'
                    }`}
                  >
                    <div className="max-w-[440px] flex flex-col gap-3 z-10">
                      <h3 className="arvian-h2 leading-[1.15]">
                        {item.title}
                      </h3>
                      <p
                        className={`text-[15px] leading-[1.55] tracking-[-0.01em] ${
                          isOrange ? 'text-[#FFFFFF]/90' : 'text-[#000000]/75'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`font-serif-display text-[130px] sm:text-[160px] leading-[0.8] select-none shrink-0 ${
                        isOrange ? 'text-[#FFFFFF]/22' : 'text-[#000000]/10'
                      }`}
                    >
                      {item.step}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
