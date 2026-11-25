import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  headingTag?: 'h2' | 'h3';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  headingTag = 'h3',
}) => {
  const Heading = headingTag;
  const visibleTech = project.techStack.slice(0, 4);
  const extraCount = project.techStack.length - visibleTech.length;
  const cardNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group h-full rounded-[12px] bg-[#F3F3F3] border border-[#000000]/8 p-[10px] flex flex-col transition-all duration-300 hover:bg-[#ECECEC]/75 hover:border-[#000000]/18 hover:shadow-[0_18px_42px_rgba(0,0,0,0.07)] active:scale-[0.99]"
      >
        {/* Mockup Preview Container */}
        <div className="w-full aspect-[16/11.5] rounded-[8px] overflow-hidden bg-[#111111] relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] group-active:scale-[1.02]"
          />

          {/* Top overlay bar: recognition badge + card index (never collides on narrow screens) */}
          <div className="absolute top-3.5 inset-x-3.5 flex items-start justify-between gap-2 pointer-events-none">
            {project.recognition ? (
              <div className="min-w-0 inline-flex items-center gap-1.5 rounded-full bg-[#000000]/82 backdrop-blur-md border border-[#FF7308]/45 px-3 py-1 text-[11px] font-medium text-[#FFFFFF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7308] shrink-0" />
                <span className="truncate">{project.recognition}</span>
              </div>
            ) : (
              <span />
            )}

            <span className="shrink-0 rounded-full bg-[#000000]/70 backdrop-blur-md border border-[#FFFFFF]/15 px-2.5 py-1 text-[11px] font-medium text-[#FFFFFF]/85 tabular-nums">
              {cardNumber}
            </span>
          </div>

          {/* Subtle hover bottom scrim */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#000000]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#FFFFFF] text-[#000000] px-3 py-1 text-[11px] font-medium shadow-sm">
              <span>View Case Study</span>
              <ArrowUpRight className="w-3 h-3 text-[#FF7308]" />
            </span>
          </div>
        </div>

        {/* Editorial Details Body */}
        <div className="flex-1 px-[14px] sm:px-[18px] pt-[18px] pb-[14px] flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2.5">
            {/* Eyebrow Category + Year */}
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.09em] text-[#FF7308]">
                {project.category}
              </span>
              <span className="text-[12px] font-medium text-[#000000]/50 tabular-nums">
                {project.year}
              </span>
            </div>

            {/* Title + Circular Arrow Button */}
            <div className="flex items-center justify-between gap-4">
              <Heading className="font-serif-display font-normal text-[28px] sm:text-[32px] leading-[1.08] tracking-[-0.01em] text-[#000000] group-hover:text-[#F3680F] group-active:text-[#F3680F] transition-colors">
                {project.title}
              </Heading>

              <span className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] border border-[#000000]/8 text-[#000000] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#FF7308] group-hover:border-[#FF7308] group-hover:text-[#FFFFFF] group-active:bg-[#FF7308] group-active:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            {/* Concise 2-line Summary */}
            <p className="text-[14px] leading-[1.5] tracking-[-0.01em] text-[#000000]/68 line-clamp-2">
              {project.shortDescription}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#000000]/10">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#FFFFFF] border border-[#000000]/8 px-2.5 py-1 text-[11px] font-medium text-[#000000]/80"
              >
                {tech}
              </span>
            ))}
            {extraCount > 0 && (
              <span className="rounded-full bg-[#FFFFFF]/70 px-2.5 py-1 text-[11px] font-medium text-[#000000]/55">
                +{extraCount}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
