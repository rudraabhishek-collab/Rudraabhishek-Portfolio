import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { SectionBadge } from './SectionBadge';
import { BlurReveal } from './BlurReveal';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="w-full bg-[#FFFFFF] py-[56px] md:py-[72px]">
      <div className="arvian-container flex flex-col gap-8">
        <div>
          <SectionBadge label="Projects" variant="dark" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-end">
          <div className="lg:col-span-6">
            <BlurReveal className="max-w-[440px]">
              <h2 className="arvian-h4 text-[#000000]">
                Systems and products with a clear purpose.
              </h2>
            </BlurReveal>
          </div>
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-3">
            <p className="arvian-body lg:text-right max-w-[480px]">
              Building intelligent systems and meaningful digital experiences at the intersection of AI, software engineering, and real-world impact.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#000000] hover:text-[#F3680F] transition-colors"
            >
              <span>Filter &amp; explore all projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              headingTag="h3"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
