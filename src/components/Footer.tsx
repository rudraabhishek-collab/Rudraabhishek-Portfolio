import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] text-[#FFFFFF] pt-[60px] pb-[24px] border-t border-[#FFFFFF]/10">
      <div className="arvian-container flex flex-col gap-[40px]">
        {/* 3-Column Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Col 1: Bio + Email Pill */}
          <div className="md:col-span-6 flex flex-col items-start gap-6">
            <p className="max-w-[420px] text-[15px] leading-[1.55] tracking-[-0.01em] text-[#FFFFFF]/75">
              {SITE_CONFIG.footerBio}
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#FFFFFF] text-[#000000] px-5 py-2.5 text-[13px] md:text-[14px] font-medium transition-colors duration-200 hover:bg-[#FF7308] hover:text-[#FFFFFF] break-all"
            >
              <span>{SITE_CONFIG.email}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Col 2: Menu */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[12px] uppercase tracking-[0.08em] text-[#FFFFFF]/45 mb-1">
              Menu
            </span>
            <Link
              to="/projects"
              className="text-[14px] text-[#FFFFFF]/85 hover:text-[#F3680F] transition-colors w-fit"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="text-[14px] text-[#FFFFFF]/85 hover:text-[#F3680F] transition-colors w-fit"
            >
              About
            </Link>
            <Link
              to="/experience"
              className="text-[14px] text-[#FFFFFF]/85 hover:text-[#F3680F] transition-colors w-fit"
            >
              Experience
            </Link>
            <Link
              to="/#services"
              className="text-[14px] text-[#FFFFFF]/85 hover:text-[#F3680F] transition-colors w-fit"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-[14px] text-[#FFFFFF]/85 hover:text-[#F3680F] transition-colors w-fit"
            >
              Contact
            </Link>
          </div>

          {/* Col 3: Social */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[12px] uppercase tracking-[0.08em] text-[#FFFFFF]/45 mb-1">
              Social
            </span>
            {SITE_CONFIG.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#FFFFFF]/85 hover:text-[#F3680F] transition-colors w-fit inline-flex items-center gap-1"
              >
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Giant Full-Width Orange Brand Wordmark matching Arvian's footer */}
        <div className="w-full overflow-hidden border-t border-b border-[#FFFFFF]/10 py-6 md:py-8">
          <div className="font-serif-display text-center text-[clamp(2.4rem,10.5vw,9.2rem)] leading-[0.88] tracking-[-0.02em] text-[#FF7308] uppercase select-none whitespace-nowrap">
            {SITE_CONFIG.brandName}
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] text-[#FFFFFF]/55">
          <span>&copy; 2026 {SITE_CONFIG.fullName}. All rights reserved.</span>
          <span>{SITE_CONFIG.availabilityText} &mdash; Worldwide</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-[#FFFFFF]/85 hover:text-[#F3680F] transition-colors cursor-pointer"
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
};
