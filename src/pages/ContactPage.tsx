import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/portfolio';
import { SectionBadge } from '../components/SectionBadge';
import { BlurReveal } from '../components/BlurReveal';
import { DarkCTA } from '../components/DarkCTA';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !details.trim()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nProject / Opportunity Details:\n${details.trim()}`
    );
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="bg-[#FFFFFF]">
      <section className="pt-[48px] md:pt-[64px] pb-[64px]">
        <div className="arvian-container flex flex-col gap-8 md:gap-10">
          <div>
            <SectionBadge label="Contact" variant="dark" />
          </div>

          <BlurReveal className="max-w-[760px]">
            <h1 className="arvian-h4 text-[#000000]">
              Good work starts with a conversation.
            </h1>
          </BlurReveal>

          {/* 2-Column #F3F3F3 Cards matching Arvian Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Left Info Card */}
            <div className="lg:col-span-5 rounded-[10px] bg-[#F3F3F3] p-8 sm:p-10 flex flex-col justify-between gap-10">
              <div className="flex flex-col gap-5">
                <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#FF7308]">
                  START A PROJECT OR ROLE
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-serif-display text-[clamp(1.25rem,2.1vw,1.75rem)] leading-[1.2] text-[#000000] hover:text-[#F3680F] transition-colors break-words"
                >
                  {SITE_CONFIG.email}
                </a>
                <p className="arvian-body">
                  Share a little about your team, product idea, timeline, or open-source collaboration. I&rsquo;m open to AI engineering roles, full-stack builds, and impactful projects.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-[#000000]/15">
                <span className="text-[12px] uppercase tracking-[0.1em] text-[#000000]/50">
                  Connect
                </span>
                <div className="flex flex-wrap gap-5 text-[14px] font-medium text-[#000000]">
                  {SITE_CONFIG.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F3680F] transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7 rounded-[10px] bg-[#F3F3F3] p-8 sm:p-10">
              {submitted ? (
                <div className="h-full min-h-[320px] flex flex-col items-start justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1FA463]/15 text-[#1FA463] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="font-serif-display text-[34px] text-[#000000]">
                    Ready to send in your email client
                  </h2>
                  <p className="arvian-body max-w-[460px]">
                    Your message details have been prepared for{' '}
                    <span className="text-[#000000] font-medium">{SITE_CONFIG.email}</span>. You can also send another inquiry below.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setDetails('');
                    }}
                    className="mt-2 rounded-full bg-[#252525] text-[#FFFFFF] px-6 py-3 text-[14px] font-medium hover:bg-[#FF7308] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="text-[13px] font-medium text-[#000000]/75"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Smith"
                      className="w-full rounded-[8px] bg-[#FFFFFF] border border-[#000000]/10 px-4 py-3.5 text-[15px] text-[#000000] placeholder:text-[#000000]/35 focus:outline-none focus:border-[#FF7308]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-email"
                      className="text-[13px] font-medium text-[#000000]/75"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full rounded-[8px] bg-[#FFFFFF] border border-[#000000]/10 px-4 py-3.5 text-[15px] text-[#000000] placeholder:text-[#000000]/35 focus:outline-none focus:border-[#FF7308]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-details"
                      className="text-[13px] font-medium text-[#000000]/75"
                    >
                      Project details
                    </label>
                    <textarea
                      id="contact-details"
                      rows={5}
                      required
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Tell me about your project, role, or collaboration idea"
                      className="w-full rounded-[8px] bg-[#FFFFFF] border border-[#000000]/10 px-4 py-3.5 text-[15px] text-[#000000] placeholder:text-[#000000]/35 focus:outline-none focus:border-[#FF7308] resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-fit rounded-full bg-[#252525] text-[#FFFFFF] px-8 py-3.5 text-[14px] font-medium transition-colors duration-200 hover:bg-[#FF7308] cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 3-Item Capabilities Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#000000]/20">
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[#FF7308]">01</span>
              <h3 className="font-serif-display text-[26px] text-[#000000]">
                AI &amp; LLM Systems
              </h3>
              <p className="arvian-body">
                Generative AI applications, prompt engineering, RAG workflows, and responsible AI integrations.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[#FF7308]">02</span>
              <h3 className="font-serif-display text-[26px] text-[#000000]">
                Full-Stack Web Apps
              </h3>
              <p className="arvian-body">
                Responsive React and Next.js interfaces backed by clean Prisma, MySQL, and REST API layers.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[#FF7308]">03</span>
              <h3 className="font-serif-display text-[26px] text-[#000000]">
                Open-Source &amp; Teams
              </h3>
              <p className="arvian-body">
                Proven collaborator with 35+ merged PRs, automated testing, and rapid hackathon delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DarkCTA />
    </main>
  );
};
