import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 w-full bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#000000]/20"
    >
      <div className="arvian-container h-[72px] flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className={`text-[17px] md:text-[18px] font-semibold tracking-[0.04em] uppercase transition-colors duration-200 ${
            isHome
              ? 'text-[#FF7308] hover:text-[#F3680F]'
              : 'text-[#000000] hover:text-[#F3680F]'
          }`}
        >
          {SITE_CONFIG.brandName}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Primary Navigation">
          {NAV_LINKS.map((item) => {
            const isActive =
              item.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[16px] md:text-[17px] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                  isActive
                    ? 'text-[#FF7308]'
                    : 'text-[#000000] hover:text-[#F3680F]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-[5px] text-[#000000] hover:text-[#F3680F] transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#000000]/15 bg-[#FFFFFF] px-5 py-5">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 text-[17px] font-medium border-b border-[#000000]/10 last:border-none ${
                    isActive ? 'text-[#FF7308]' : 'text-[#000000] hover:text-[#F3680F]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
