import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolio';
import { FourPointStar } from './SectionBadge';

export const MarqueeStrip: React.FC = () => {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="w-full bg-[#000000] text-[#FFFFFF] h-[54px] flex items-center overflow-hidden select-none border-y border-[#000000]"
      aria-label="Specialties marquee"
    >
      <div className="animate-marquee flex items-center">
        {repeated.map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center">
            <span className="text-[14px] md:text-[15px] font-medium tracking-[-0.01em] whitespace-nowrap px-5">
              {item}
            </span>
            <FourPointStar className="w-3.5 h-3.5 shrink-0" color="#FF7308" />
          </div>
        ))}
      </div>
    </div>
  );
};
