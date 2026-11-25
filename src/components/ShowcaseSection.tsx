import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Code2,
  Database,
  GitBranch,
  Layers,
  Server,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { SHOWCASE_FOCUS_AREAS } from '../data/portfolio';
import { SectionBadge } from './SectionBadge';
import { BlurReveal } from './BlurReveal';

const iconMap = {
  sparkles: Sparkles,
  layers: Layers,
  bot: Bot,
  code: Code2,
  server: Server,
  database: Database,
  'git-branch': GitBranch,
  shield: ShieldCheck,
} as const;

export const ShowcaseSection: React.FC = () => {
  return (
    <section className="w-full bg-[#000000] text-[#FFFFFF] py-[64px] md:py-[80px]">
      <div className="arvian-container flex flex-col gap-9">
        <div>
          <SectionBadge label="CREATIVE SHOWCASE" variant="light" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <BlurReveal className="max-w-[460px]">
              <h2 className="arvian-h4 text-[#FFFFFF]">
                Engineering intelligence. Crafted for scale.
              </h2>
            </BlurReveal>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] md:text-[16px] leading-[1.55] tracking-[-0.02em] text-[#FFFFFF]/70">
              Eight core engineering pillars spanning Generative AI, full-stack web applications, structured backend systems, and open-source craft.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SHOWCASE_FOCUS_AREAS.map((area, idx) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                whileTap={{ scale: 0.98 }}
                className="group h-[168px] rounded-[10px] border border-[#FFFFFF]/20 bg-[#000000] text-[#FFFFFF] flex flex-col items-center justify-center gap-4 px-5 text-center transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#FFFFFF] active:bg-[#FFFFFF] active:text-[#000000] active:border-[#FFFFFF] cursor-default"
              >
                <div className="w-11 h-11 rounded-full bg-[#252525] text-[#FFFFFF] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#000000] group-hover:text-[#FF7308] group-active:bg-[#000000] group-active:text-[#FF7308]">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[15px] font-medium tracking-[-0.01em]">
                  {area.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
