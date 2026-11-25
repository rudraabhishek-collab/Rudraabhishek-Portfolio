import React from 'react';
import { Link } from 'react-router-dom';
import { SectionBadge } from '../components/SectionBadge';
import { BlurReveal } from '../components/BlurReveal';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="bg-[#FFFFFF] min-h-[calc(100vh-72px)] flex items-center justify-center py-24">
      <div className="arvian-container flex flex-col items-center text-center gap-8 max-w-[680px]">
        <SectionBadge label="404" variant="dark" />

        <BlurReveal>
          <h1 className="arvian-h4 text-[#000000]">
            This page took a wrong turn &mdash; let&rsquo;s get you back to the work.
          </h1>
        </BlurReveal>

        <p className="arvian-body max-w-[460px]">
          The route you requested isn&rsquo;t available. Return home or browse all selected projects.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/"
            className="rounded-full bg-[#000000] text-[#FFFFFF] px-7 py-3.5 text-[14px] font-medium hover:bg-[#FF7308] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/projects"
            className="rounded-full border border-[#000000]/20 text-[#000000] px-7 py-3.5 text-[14px] font-medium hover:border-[#F3680F] hover:text-[#F3680F] transition-colors"
          >
            View projects
          </Link>
        </div>
      </div>
    </main>
  );
};
