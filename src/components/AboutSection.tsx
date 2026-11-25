import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ABOUT_SECTION, SITE_CONFIG } from '../data/portfolio';
import { SectionBadge } from './SectionBadge';
import { BlurReveal } from './BlurReveal';

interface AboutSectionProps {
  portraitSlotRef?: React.RefObject<HTMLDivElement | null>;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ portraitSlotRef }) => {
  return (
    <section className="w-full bg-[#FFFFFF] py-[56px] md:py-[72px]">
      <div className="arvian-container flex flex-col gap-7">
        <div>
          <SectionBadge label="About" variant="dark" />
        </div>

        <BlurReveal className="max-w-[820px]">
          <h2 className="arvian-h4 text-[#000000]">
            Turning real-world problems into intelligent, scalable software.
          </h2>
        </BlurReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-1">
          {/* Left Portrait Frame */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-[515/530] max-h-[540px] rounded-[10px] bg-[#F3F3F3] pt-4 px-4 overflow-hidden flex items-end justify-center">
              <div
                ref={portraitSlotRef}
                className="w-full h-full flex items-end justify-center"
              >
                <img
                  src={SITE_CONFIG.portraits.about}
                  alt={`${SITE_CONFIG.fullName} — About portrait`}
                  className="hidden motion-reduce:block w-full h-full object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          {/* Right Philosophy + Capabilities */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F3680F]">
              {ABOUT_SECTION.eyebrow}
            </span>

            <BlurReveal>
              <p className="arvian-h2 text-[#000000] leading-[1.28]">
                &ldquo;{ABOUT_SECTION.statement}&rdquo;
              </p>
            </BlurReveal>

            <div className="flex flex-col border-t border-[#000000]/20">
              {ABOUT_SECTION.capabilities.map((cap) => (
                <div
                  key={cap.number}
                  className="flex items-center justify-between py-4 border-b border-[#000000]/20 group"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[14px] font-medium text-[#FF7308] tabular-nums">
                      {cap.number}
                    </span>
                    <span className="text-[16px] font-medium tracking-[-0.01em] text-[#000000] group-hover:text-[#F3680F] transition-colors">
                      {cap.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-1">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#000000] text-[#FFFFFF] px-7 h-[46px] text-[14px] font-medium transition-colors duration-200 hover:bg-[#FF7308]"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
