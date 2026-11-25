import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { SectionBadge } from '../components/SectionBadge';
import { BlurReveal } from '../components/BlurReveal';
import { DarkCTA } from '../components/DarkCTA';
import { NotFoundPage } from './NotFoundPage';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    return <NotFoundPage />;
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <main className="bg-[#FFFFFF]">
      <section className="pt-[48px] md:pt-[64px] pb-[64px]">
        <div className="arvian-container flex flex-col gap-8 md:gap-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#000000]/75 hover:text-[#F3680F] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Work</span>
            </Link>
            <SectionBadge label={project.category} variant="dark" />
          </div>

          {/* Title & Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 flex flex-col gap-4">
              {project.recognition && (
                <span className="inline-flex w-fit items-center rounded-full bg-[#F3680F]/10 border border-[#F3680F]/30 px-4 py-1.5 text-[13px] font-medium text-[#F3680F]">
                  {project.recognition}
                </span>
              )}
              <BlurReveal>
                <h1 className="font-serif-display text-[48px] sm:text-[64px] md:text-[78px] leading-[0.95] tracking-[-0.02em] text-[#000000]">
                  {project.title}
                </h1>
              </BlurReveal>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4">
              <p className="arvian-body text-[16px] md:text-[17px]">
                {project.longDescription}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#000000] text-[#FFFFFF] px-5 py-2.5 text-[13px] font-medium hover:bg-[#FF7308] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#F3F3F3] text-[#000000]/65 px-5 py-2.5 text-[13px] font-medium">
                    <Github className="w-4 h-4" />
                    <span>GitHub Link Pending</span>
                  </span>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#000000]/20 text-[#000000] px-5 py-2.5 text-[13px] font-medium hover:border-[#F3680F] hover:text-[#F3680F] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Highlights & Tech Metadata Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-[10px] bg-[#F3F3F3] p-7 md:p-9">
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#FF7308]">
                Highlights
              </span>
              <ul className="flex flex-col gap-1.5 text-[14px] text-[#000000]/80">
                {project.highlights.map((h) => (
                  <li key={h}>&bull; {h}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#FF7308]">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#FFFFFF] border border-[#000000]/10 px-3.5 py-1 text-[13px] font-medium text-[#000000]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#FF7308]">
                Overview
              </span>
              <div className="flex flex-col gap-2 pt-1">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between text-[14px]">
                    <span className="text-[#000000]/55">{m.label}</span>
                    <span className="font-medium text-[#000000]">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Primary Showcase Mockup */}
          <div className="w-full aspect-[16/10] max-h-[680px] rounded-[10px] overflow-hidden bg-[#111111]">
            <img
              src={project.image}
              alt={`${project.title} showcase`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Architecture Notes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-span-4">
              <h2 className="font-serif-display text-[32px] md:text-[38px] leading-[1.08] text-[#000000]">
                Engineering &amp; Architecture
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col border-t border-[#000000]/20">
              {project.architectureNotes.map((note, idx) => (
                <div
                  key={note}
                  className="py-5 border-b border-[#000000]/20 flex items-start gap-5"
                >
                  <span className="text-[13px] font-medium text-[#FF7308] tabular-nums pt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="arvian-body text-[#000000]/80">{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Project Link */}
          <div className="pt-8 border-t border-[#000000]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-[13px] uppercase tracking-[0.08em] text-[#000000]/55">
              Next Project
            </span>
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group inline-flex items-center gap-3 font-serif-display text-[32px] md:text-[44px] text-[#000000] hover:text-[#F3680F] transition-colors"
            >
              <span>{nextProject.title}</span>
              <ArrowUpRight className="w-7 h-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      <DarkCTA />
    </main>
  );
};
