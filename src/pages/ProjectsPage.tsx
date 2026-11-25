import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolio';
import { SectionBadge } from '../components/SectionBadge';
import { BlurReveal } from '../components/BlurReveal';
import { ProjectCard } from '../components/ProjectCard';
import { DarkCTA } from '../components/DarkCTA';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'AI & Healthcare', 'AI & Sustainability', 'AI & Civic Technology', 'Web & Open Source'];

  const filtered = PROJECTS.filter((project) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Web & Open Source') {
      return (
        project.category.includes('Media Streaming') ||
        project.category.includes('Open Source')
      );
    }
    return project.category === selectedCategory;
  });

  return (
    <main className="bg-[#FFFFFF]">
      <section className="pt-[48px] md:pt-[64px] pb-[64px]">
        <div className="arvian-container flex flex-col gap-8">
          <div>
            <SectionBadge label="Projects" variant="dark" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <BlurReveal>
                <h1 className="arvian-h4 text-[#000000]">
                  Intelligent systems and web products with a clear purpose.
                </h1>
              </BlurReveal>
            </div>
            <div className="lg:col-span-4">
              <p className="arvian-body">
                Six builds across healthcare AI, sustainable agriculture, civic technology, media streaming, and student open-source tooling.
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#000000] text-[#FFFFFF]'
                      : 'bg-[#F3F3F3] text-[#000000]/75 hover:bg-[#FF7308] hover:text-[#FFFFFF]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 2-Column Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={idx}
                headingTag="h2"
              />
            ))}
          </div>
        </div>
      </section>

      <DarkCTA />
    </main>
  );
};
