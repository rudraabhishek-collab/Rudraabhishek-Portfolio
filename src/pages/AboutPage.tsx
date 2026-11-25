import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import {
  ABOUT_SECTION,
  EXPERIENCES,
  SITE_CONFIG,
  TECH_STACK,
} from '../data/portfolio';
import { SectionBadge } from '../components/SectionBadge';
import { BlurReveal } from '../components/BlurReveal';
import { DarkCTA } from '../components/DarkCTA';

export const AboutPage: React.FC = () => {
  return (
    <main className="bg-[#FFFFFF]">
      <section className="pt-[48px] md:pt-[64px] pb-[64px]">
        <div className="arvian-container flex flex-col gap-9 md:gap-12">
          <div>
            <SectionBadge label="About" variant="dark" />
          </div>

          <BlurReveal className="max-w-[920px]">
            <h1 className="arvian-h4 text-[#000000]">
              We build intelligent software with practical purpose &mdash; combining AI engineering, full-stack web craft, and open-source rigor.
            </h1>
          </BlurReveal>

          {/* Portrait + Extended Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <div className="w-full aspect-[515/563] rounded-[10px] bg-[#F3F3F3] pt-[10px] px-[10px] overflow-hidden flex items-end justify-center">
                <img
                  src={SITE_CONFIG.portraits.about}
                  alt={SITE_CONFIG.fullName}
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#FF7308]">
                {SITE_CONFIG.fullName} &middot; PW Institute of Innovation
              </span>

              <div className="flex flex-col gap-5">
                {ABOUT_SECTION.extendedBio.map((paragraph) => (
                  <p key={paragraph} className="arvian-body text-[16px] leading-[1.65]">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 rounded-full bg-[#000000] text-[#FFFFFF] px-7 py-3.5 text-[14px] font-medium hover:bg-[#FF7308] transition-colors"
                >
                  <span>View Experience</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#000000]/20 text-[#000000] px-7 py-3.5 text-[14px] font-medium hover:border-[#F3680F] hover:text-[#F3680F] transition-colors"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Tools & Tech Stack */}
          <div className="pt-8 border-t border-[#000000]/20 flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-serif-display text-[36px] md:text-[44px] leading-none text-[#000000]">
                Tools &amp; Technologies
              </h2>
              <span className="text-[14px] text-[#000000]/60">
                Core stack across AI, frontend, backend &amp; databases
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_STACK.map((group) => (
                <div
                  key={group.category}
                  className="rounded-[10px] bg-[#F3F3F3] p-6 flex flex-col gap-4"
                >
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#FF7308]">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#FFFFFF] border border-[#000000]/10 px-3.5 py-1.5 text-[13px] font-medium text-[#000000]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Preview */}
          <div className="pt-8 border-t border-[#000000]/20 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif-display text-[36px] md:text-[44px] leading-none text-[#000000]">
                Experience
              </h2>
              <Link
                to="/experience"
                className="text-[14px] font-medium text-[#000000] hover:text-[#F3680F] transition-colors inline-flex items-center gap-1"
              >
                <span>Full timeline</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="border-t border-[#000000]/20">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.role}
                  className="py-6 border-b border-[#000000]/20 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
                >
                  <div className="md:col-span-4">
                    <h3 className="font-serif-display text-[24px] text-[#000000]">
                      {exp.role}
                    </h3>
                    <p className="text-[14px] text-[#FF7308] font-medium mt-1">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="md:col-span-6">
                    <ul className="flex flex-col gap-2 text-[14px] text-[#000000]/75 leading-[1.55]">
                      {exp.points.map((pt) => (
                        <li key={pt}>&bull; {pt}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-2 md:text-right text-[13px] font-medium text-[#000000]/60">
                    {exp.period} &middot; {exp.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DarkCTA />
    </main>
  );
};
