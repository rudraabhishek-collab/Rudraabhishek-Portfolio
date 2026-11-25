import React from 'react';
import { EXPERIENCES, TECH_STACK, VALUES_MILESTONES } from '../data/portfolio';
import { SectionBadge } from '../components/SectionBadge';
import { BlurReveal } from '../components/BlurReveal';
import { DarkCTA } from '../components/DarkCTA';

export const ExperiencePage: React.FC = () => {
  return (
    <main className="bg-[#FFFFFF]">
      <section className="pt-[48px] md:pt-[64px] pb-[64px]">
        <div className="arvian-container flex flex-col gap-9 md:gap-12">
          <div>
            <SectionBadge label="Experience" variant="dark" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <BlurReveal>
                <h1 className="arvian-h4 text-[#000000]">
                  Internships, open-source impact, and engineering milestones.
                </h1>
              </BlurReveal>
            </div>
            <div className="lg:col-span-4">
              <p className="arvian-body">
                Hands-on experience across Responsible AI, sustainable technology, and large-scale open-source backend contributions.
              </p>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="flex flex-col gap-6">
            {EXPERIENCES.map((exp, idx) => (
              <article
                key={exp.role}
                className={`rounded-[10px] p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start ${
                  idx % 2 === 1
                    ? 'bg-[#111111] text-[#FFFFFF]'
                    : 'bg-[#F3F3F3] text-[#000000]'
                }`}
              >
                <div className="lg:col-span-5 flex flex-col gap-3">
                  <span
                    className={`inline-flex w-fit rounded-full px-3.5 py-1 text-[12px] font-medium ${
                      idx % 2 === 1
                        ? 'bg-[#FF7308] text-[#FFFFFF]'
                        : 'bg-[#000000] text-[#FFFFFF]'
                    }`}
                  >
                    {exp.badge}
                  </span>
                  <h2 className="font-serif-display text-[32px] sm:text-[38px] leading-[1.08]">
                    {exp.role}
                  </h2>
                  <p
                    className={`text-[15px] font-medium ${
                      idx % 2 === 1 ? 'text-[#FF7308]' : 'text-[#F3680F]'
                    }`}
                  >
                    {exp.organization} &middot; {exp.location}
                  </p>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-4">
                  <ul
                    className={`flex flex-col gap-3 text-[15px] sm:text-[16px] leading-[1.6] ${
                      idx % 2 === 1 ? 'text-[#FFFFFF]/80' : 'text-[#000000]/75'
                    }`}
                  >
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FF7308] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Key Milestones Grid */}
          <div className="pt-6 flex flex-col gap-8">
            <h2 className="font-serif-display text-[36px] md:text-[44px] leading-none text-[#000000]">
              Recognition &amp; Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VALUES_MILESTONES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[10px] border border-[#000000]/15 p-7 flex flex-col gap-3 bg-[#FAFAFA]"
                >
                  <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#FF7308]">
                    {item.index}
                  </span>
                  <h3 className="font-serif-display text-[28px] text-[#000000]">
                    {item.title}
                  </h3>
                  <p className="arvian-body">{item.description}</p>
                  <span className="text-[13px] font-medium text-[#000000]/55 pt-2">
                    {item.meta}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="pt-6 border-t border-[#000000]/20 flex flex-col gap-8">
            <h2 className="font-serif-display text-[36px] md:text-[44px] leading-none text-[#000000]">
              Technical Stack
            </h2>
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
        </div>
      </section>

      <DarkCTA />
    </main>
  );
};
