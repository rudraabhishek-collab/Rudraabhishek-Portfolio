import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { MarqueeStrip } from '../components/MarqueeStrip';
import { AboutSection } from '../components/AboutSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { ValuesSection } from '../components/ValuesSection';
import { DarkCTA } from '../components/DarkCTA';
import { ScrollPortraitTraveler } from '../components/ScrollPortraitTraveler';

export const HomePage: React.FC = () => {
  const { hash } = useLocation();
  const heroSlotRef = useRef<HTMLDivElement>(null);
  const aboutSlotRef = useRef<HTMLDivElement>(null);
  const processSlotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace('#', ''));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    }
  }, [hash]);

  return (
    <main className="relative">
      <ScrollPortraitTraveler
        heroSlotRef={heroSlotRef}
        aboutSlotRef={aboutSlotRef}
        processSlotRef={processSlotRef}
      />
      <HeroSection portraitSlotRef={heroSlotRef} />
      <MarqueeStrip />
      <AboutSection portraitSlotRef={aboutSlotRef} />
      <ProjectsSection />
      <ShowcaseSection />
      <ServicesSection />
      <ProcessSection portraitSlotRef={processSlotRef} />
      <ValuesSection />
      <DarkCTA />
    </main>
  );
};
