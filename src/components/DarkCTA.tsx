import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/portfolio';
import { BlurReveal } from './BlurReveal';

export const DarkCTA: React.FC = () => {
  return (
    <section className="w-full bg-[#111111] text-[#FFFFFF] pt-[72px] md:pt-[92px] pb-[24px]">
      <div className="arvian-container flex flex-col items-center text-center gap-[24px] md:gap-[32px]">
        <div className="inline-flex items-center gap-2.5 rounded-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 px-4 py-2 text-[13px] font-medium text-[#FFFFFF]/90">
          <span className="availability-dot" />
          <span>{SITE_CONFIG.availabilityText}</span>
        </div>

        <BlurReveal className="max-w-[780px]">
          <h2 className="font-serif-display text-[48px] sm:text-[64px] md:text-[78px] leading-[0.96] tracking-[-0.02em] font-normal text-[#FFFFFF]">
            Let&rsquo;s work Together
          </h2>
        </BlurReveal>

        <p className="max-w-[540px] text-[15px] md:text-[16px] leading-[1.55] tracking-[-0.02em] text-[#FFFFFF]/70 -mt-2">
          Have an AI product, full-stack web application, or engineering challenge in mind? Let&rsquo;s build intelligent systems that solve real-world problems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-full bg-[#FFFFFF] text-[#000000] px-7 py-3.5 text-[14px] font-medium transition-colors duration-200 hover:bg-[#FF7308] hover:text-[#FFFFFF]"
          >
            View Selected Work
          </Link>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-flex items-center justify-center rounded-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] px-7 py-3.5 text-[14px] font-medium transition-colors duration-200 hover:bg-[#FFFFFF]/12 hover:border-[#F3680F]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};
