import React from 'react';

interface SectionBadgeProps {
  label: string;
  variant?: 'dark' | 'light';
}

export const FourPointStar: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-3.5 h-3.5',
  color = '#FF7308',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 1.5C12.7 7.2 16.8 11.3 22.5 12C16.8 12.7 12.7 16.8 12 22.5C11.3 16.8 7.2 12.7 1.5 12C7.2 11.3 11.3 7.2 12 1.5Z"
      fill={color}
    />
  </svg>
);

export const SectionBadge: React.FC<SectionBadgeProps> = ({ label, variant = 'dark' }) => {
  const isDark = variant === 'dark';
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-[5px] px-[14px] py-[8px] text-[13px] font-medium tracking-[-0.01em] ${
        isDark ? 'bg-[#000000] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#000000]'
      }`}
    >
      <FourPointStar className="w-3.5 h-3.5 shrink-0" color="#FF7308" />
      <span>{label}</span>
    </div>
  );
};
