export interface ProjectItem {
  slug: string;
  title: string;
  year: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  recognition?: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  architectureNotes: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  variant: 'light' | 'orange';
}

export interface ValueMilestone {
  index: string;
  tag: string;
  title: string;
  description: string;
  meta: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  badge: string;
  points: string[];
}

export interface TechCategory {
  category: string;
  items: string[];
}

export const SITE_CONFIG = {
  brandName: 'RUDRAABHISHEK',
  fullName: 'Rudraabhishek Sharma',
  heroLeftWord: 'ASPIRING',
  heroRightWord: 'AI ENGINEER',
  footerWordmark: 'AI ENGINEER',
  availabilityText: 'Open to Opportunities',
  heroRoles: ['Aspiring AI Engineer', 'Full-Stack Developer'],
  heroTagline: 'Building intelligent solutions that solve real-world problems.',
  email: 'Rudrasharmaabhishek2006@gmail.com',
  location: 'India · Open to Remote & Global Roles',
  footerBio:
    'Aspiring AI Engineer and Full-Stack Developer building intelligent systems, LLM applications, and scalable digital products with practical real-world impact.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/rudraabhishek-collab' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rudraabhishek-sharma-221792251/' },
    { label: 'Instagram', href: 'https://www.instagram.com/_rxdra._.vashisth/' },
  ],
  portraits: {
    // Portrait cutout in public/images/portraits/:
    hero: '/images/portraits/rudra-portrait.png',
    about: '/images/portraits/rudra-portrait.png',
    process: '/images/portraits/rudra-portrait.png',
  },
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
];

export const MARQUEE_ITEMS = [
  'AI Engineering',
  'Generative AI',
  'Full-Stack Development',
  'Large Language Models',
  'Backend Development',
  'Open-Source Contribution',
  'Responsible AI',
  'Intelligent Automation',
];

export const ABOUT_SECTION = {
  eyebrow: 'ENGINEERING PHILOSOPHY',
  statement:
    'I believe technology should solve real problems, not just look impressive. I build intelligent, scalable applications by combining AI, software engineering, and thoughtful problem-solving to turn ideas into meaningful products.',
  capabilities: [
    { number: '01', label: 'AI Engineering & LLM Applications' },
    { number: '02', label: 'Full-Stack Development' },
    { number: '03', label: 'Backend Systems & API Development' },
    { number: '04', label: 'Open-Source Engineering' },
  ],
  extendedBio: [
    "I'm Rudraabhishek Sharma, a Computer Science and Engineering undergraduate at PW Institute of Innovation, passionate about building AI-powered applications and solving real-world problems through technology.",
    "My interests lie in Generative AI, LLM applications, backend engineering, and full-stack development. I've worked on projects across agriculture, healthcare, and civic technology, exploring how intelligent systems can make everyday solutions more accessible and effective.",
    'As an ECSoc 2026 open-source contributor, I raised 40+ pull requests, with 35+ successfully merged, earning a rank of 97 among approximately 13,000+ contributors.',
    "I'm continuously exploring new technologies, contributing to open-source projects, and building products that combine innovation with practical impact.",
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'krishify-ai',
    title: 'Krishify AI',
    year: '2026',
    category: 'AI & Sustainability',
    shortDescription:
      'An AI-powered sustainable agricultural marketplace designed to connect farmers with verified buyers and help reduce post-harvest food loss.',
    longDescription:
      'Developed during the 1M1B × IBM SkillsBuild × AICTE AI for Sustainability program, Krishify AI bridges smallholder farmers and verified commercial buyers through intelligent crop matching, market guidance, and demand prediction workflows aimed at minimizing post-harvest waste.',
    highlights: [
      'Crop & market guidance',
      'Demand prediction concepts',
      'Verified buyer marketplace',
      'Sustainable agriculture & UN SDGs',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Prisma', 'MySQL', 'Generative AI'],
    image: '/images/projects/krishify-ai.svg',
    featured: true,
    metrics: [
      { label: 'Focus', value: 'UN SDG Sustainability' },
      { label: 'Architecture', value: 'Next.js + Prisma + MySQL' },
      { label: 'Domain', value: 'AgriTech & AI' },
    ],
    architectureNotes: [
      'Structured relational schema with Prisma and MySQL for produce listings, harvest windows, and verified buyer profiles.',
      'AI-assisted crop guidance and demand forecasting layer designed to alert farmers to regional surplus and optimal sell windows.',
      'Clean mobile-first interface built with Next.js and Tailwind CSS for low-friction field accessibility.',
    ],
  },
  {
    slug: 'carequeue',
    title: 'CareQueue',
    year: '2026',
    category: 'AI & Healthcare',
    shortDescription:
      'A smart healthcare queue management system designed to improve patient flow through symptom-based risk estimation, hospital discovery, and digital OPD token management.',
    longDescription:
      'CareQueue reimagines crowded outpatient clinics by pairing symptom-based AI risk estimation with real-time digital OPD token orchestration. Patients discover nearby facilities and track queue status remotely while hospital admins prioritize urgent cases cleanly.',
    highlights: [
      'Patient & admin dashboards',
      'Severity-based prioritization',
      'Hospital discovery',
      'Digital OPD token management',
    ],
    techStack: ['AI/ML', 'React', 'Next.js', 'REST APIs', 'Tailwind CSS'],
    recognition: 'Top Finalist · Ranked 5th, TCU Verse Hackathon',
    image: '/images/projects/carequeue.svg',
    featured: true,
    metrics: [
      { label: 'Recognition', value: 'Top Finalist · 5th Place' },
      { label: 'Event', value: 'TCU Verse Hackathon' },
      { label: 'Core Engine', value: 'Severity Triage AI' },
    ],
    architectureNotes: [
      'Dual-role patient and hospital administrator dashboards enabling transparent token updates and clinical triage.',
      'Symptom intake pipeline outputs urgency scoring so critical patients surface appropriately in OPD queues.',
      'Hospital discovery flow helping patients compare nearby clinics and active wait volumes before travelling.',
    ],
  },
  {
    slug: 'votegenie',
    title: 'VoteGenie',
    year: '2026',
    category: 'AI & Civic Technology',
    shortDescription:
      'An AI-assisted platform designed to help first-time voters make more informed decisions through candidate comparison and accessible voting insights.',
    longDescription:
      'VoteGenie lowers the barrier to civic participation for first-time voters by synthesizing neutral, structured candidate comparisons, manifesto breakdowns, and plain-language voting procedures guided by Responsible AI principles.',
    highlights: [
      'Candidate comparison',
      'AI-driven civic insights',
      'Accessible interface',
      'Responsible AI guardrails',
    ],
    techStack: ['JavaScript', 'AI Integration', 'Google Services', 'HTML/CSS'],
    image: '/images/projects/votegenie.svg',
    featured: true,
    metrics: [
      { label: 'Audience', value: 'First-Time Voters' },
      { label: 'Principle', value: 'Neutral & Responsible AI' },
      { label: 'Platform', value: 'Civic Web App' },
    ],
    architectureNotes: [
      'Side-by-side candidate comparison cards grounded in structured, neutral data points rather than opinionated summaries.',
      'Accessible typography and simplified step-by-step guidance explaining polling workflows and voter readiness.',
      'Integrated with Google Services and prompt-engineered AI layers with strict fairness and factual-neutrality boundaries.',
    ],
  },
  {
    slug: 'nirogi-g1',
    title: 'Nirogi-G1',
    year: '2026',
    category: 'AI & Healthcare',
    shortDescription:
      'An AI-powered healthcare agent focused on making healthcare guidance more accessible through conversational interactions.',
    longDescription:
      'Nirogi-G1 provides a calm, approachable conversational assistant that helps everyday users understand symptoms, preventive wellness steps, and basic medical terminology in clear language without overwhelming clinical jargon.',
    highlights: [
      'AI healthcare assistance',
      'Conversational interface',
      'Accessible user interaction',
      'Clear wellness guidance',
    ],
    techStack: ['AI Integration', 'LLMs', 'Prompt Engineering', 'Web Application'],
    image: '/images/projects/nirogi-g1.svg',
    featured: true,
    metrics: [
      { label: 'Interaction', value: 'Conversational AI Agent' },
      { label: 'Focus', value: 'Accessible Health Guidance' },
      { label: 'Category', value: 'Healthcare AI' },
    ],
    architectureNotes: [
      'Conversational flow designed for clarity, structured follow-up questions, and safe escalation disclaimers.',
      'Low-clutter chat UI prioritizing readability across desktop and mobile devices.',
      'Prompt engineering tuned to translate complex medical concepts into practical everyday guidance.',
    ],
  },
  {
    slug: 'rajasthan-radio',
    title: 'Rajasthan Radio',
    year: '2026',
    category: 'Web Development & Media Streaming',
    shortDescription:
      'A Rajasthan-focused online radio platform bringing ~15 regional FM, community radio, and AIR/Akashvani stations together with live HLS.js playback and zero login.',
    longDescription:
      'Rajasthan Radio curates regional broadcasts across Rajasthan into one fast, distraction-free web player. Listeners can explore FM, community radio, and AIR/Akashvani stations with verified stream mappings and instant live HLS.js playback without creating an account.',
    highlights: [
      '~15 regional station entries',
      'Live playback via HLS.js',
      'Accurate station-to-stream mapping',
      'Zero login required',
    ],
    techStack: ['Next.js', 'React', 'JavaScript', 'HLS.js'],
    image: '/images/projects/rajasthan-radio.svg',
    featured: true,
    metrics: [
      { label: 'Stations', value: '~15 Curated Channels' },
      { label: 'Streaming', value: 'HLS.js Adaptive Audio' },
      { label: 'Access', value: 'Instant · No Login' },
    ],
    architectureNotes: [
      'Verified station-to-stream directory spanning regional FM, community stations, and AIR/Akashvani channels.',
      'Resilient HLS.js audio player controller handling stream initialization, buffering states, and instant station switching.',
      'Clean visual station identities in a responsive Next.js & React interface.',
    ],
  },
  {
    slug: 'ioi-open-source-explorer',
    title: 'IOI Open-Source Explorer',
    year: '2026',
    category: 'Open Source & Developer Tools',
    shortDescription:
      'A project discovery platform built for IOI students to search, filter, bookmark, and explore open-source projects matched to their technical skills.',
    longDescription:
      'Built for students at PW Institute of Innovation, IOI Open-Source Explorer removes the friction of finding a first meaningful open-source repository. Students filter repositories by stack and development track, bookmark targets, and inspect contribution guidelines in one place.',
    highlights: [
      'Filter by tech & dev track',
      'Project bookmarking',
      'Contribution requirement breakdown',
      'Built for IOI student community',
    ],
    techStack: ['Next.js', 'React', 'JavaScript', 'CSS'],
    image: '/images/projects/ioi-explorer.svg',
    featured: true,
    metrics: [
      { label: 'Users', value: 'IOI Student Developers' },
      { label: 'Discovery', value: 'Track & Stack Filtering' },
      { label: 'Workflow', value: 'Bookmark & Contribute' },
    ],
    architectureNotes: [
      'Fast client-side search and multi-facet filtering across languages, frameworks, and contribution tracks.',
      'Persistent bookmarking flow enabling students to curate personal contribution shortlists.',
      'Structured project detail cards highlighting repository expectations and onboarding steps.',
    ],
  },
];

export const SHOWCASE_FOCUS_AREAS = [
  { id: 'genai', label: 'Generative AI', icon: 'sparkles' },
  { id: 'llm-rag', label: 'LLM & RAG Systems', icon: 'layers' },
  { id: 'agentic', label: 'Agentic AI', icon: 'bot' },
  { id: 'react-next', label: 'React & Next.js', icon: 'code' },
  { id: 'backend', label: 'Backend & REST APIs', icon: 'server' },
  { id: 'database', label: 'Database Engineering', icon: 'database' },
  { id: 'opensource', label: 'Open Source', icon: 'git-branch' },
  { id: 'responsible', label: 'Responsible AI', icon: 'shield' },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'AI & LLM Applications',
    description:
      'Building AI-powered applications using LLMs, prompt engineering, and intelligent integrations to solve practical problems.',
    tags: ['Generative AI', 'LLM Applications', 'Prompt Engineering', 'RAG'],
    image: '/images/projects/nirogi-g1.svg',
  },
  {
    number: '02',
    title: 'Full-Stack Web Development',
    description:
      'Creating responsive, user-friendly web applications with modern frontend frameworks and reliable backend integration.',
    tags: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
    image: '/images/projects/krishify-ai.svg',
  },
  {
    number: '03',
    title: 'Backend Systems & APIs',
    description:
      'Developing structured backend systems, REST APIs, database-driven applications, and secure application workflows.',
    tags: ['Python', 'REST APIs', 'Prisma', 'MySQL'],
    image: '/images/projects/carequeue.svg',
  },
  {
    number: '04',
    title: 'Intelligent Automation & Prototyping',
    description:
      'Turning ideas into working prototypes by combining AI capabilities, automation, and rapid application development.',
    tags: ['AI Integration', 'Agentic AI', 'Workflow Automation', 'Rapid Prototyping'],
    image: '/images/projects/votegenie.svg',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Problem Discovery & Research',
    description:
      'Understand the problem, identify user needs, and research possible solutions before writing a single line of code.',
    variant: 'light',
  },
  {
    step: 2,
    title: 'Planning & System Architecture',
    description:
      'Define the engineering approach, choose suitable technologies, data models, and structure the system for scale.',
    variant: 'orange',
  },
  {
    step: 3,
    title: 'Development & AI Integration',
    description:
      'Build the application end-to-end, integrate AI and backend workflows, and turn the concept into a working product.',
    variant: 'light',
  },
  {
    step: 4,
    title: 'Testing & Refinement',
    description:
      'Test functionality, fix edge cases, improve performance, and refine the final experience for real-world reliability.',
    variant: 'orange',
  },
];

export const VALUES_MILESTONES: ValueMilestone[] = [
  {
    index: '01 · PRINCIPLE',
    tag: 'Engineering Ethos',
    title: 'Problem-First Engineering',
    description:
      'Building technology around real-world problems and practical impact — prioritizing usability, reliability, and clarity over unnecessary complexity.',
    meta: 'Agriculture · Healthcare · Civic Tech',
  },
  {
    index: '02 · OPEN SOURCE',
    tag: 'ECSoc 2026',
    title: 'ECSoc 2026 — Rank 97',
    description:
      'Raised 40+ pull requests with 35+ successfully merged — shipping role management, session revocation, audit logging, and automated testing.',
    meta: 'Ranked 97 among ~13,000+ contributors',
  },
  {
    index: '03 · HACKATHON',
    tag: 'TCU Verse',
    title: 'TCU Verse Hackathon Finalist',
    description:
      'Ranked 5th as a Top Finalist with CareQueue — a smart OPD healthcare queue and severity-based risk estimation platform.',
    meta: 'Top Finalist · 5th Overall',
  },
  {
    index: '04 · INTERNSHIP',
    tag: '1M1B × IBM × AICTE',
    title: 'AI for Sustainability',
    description:
      'Explored Responsible AI, Agentic AI, RAG, and UN Sustainable Development Goals while shaping the solution direction for Krishify AI.',
    meta: '1M1B × IBM SkillsBuild × AICTE',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'AI for Sustainability Virtual Intern',
    organization: '1M1B × IBM SkillsBuild × AICTE',
    period: '2026',
    location: 'Virtual',
    badge: 'Internship',
    points: [
      'Explored Responsible AI, Agentic AI, Retrieval-Augmented Generation (RAG), and alignment with the UN Sustainable Development Goals.',
      'Developed the solution direction for Krishify AI, an AI-powered sustainable agricultural marketplace connecting farmers with verified buyers.',
    ],
  },
  {
    role: 'Open-Source Contributor',
    organization: 'ECSoc 2026',
    period: '2026',
    location: 'Open Source',
    badge: 'Rank 97 / ~13,000+',
    points: [
      'Raised 40+ pull requests, with 35+ successfully merged, earning a rank of 97 among approximately 13,000+ contributors.',
      'Contributed production backend and admin features including role management, session revocation, audit logging, and automated testing.',
    ],
  },
];

export const TECH_STACK: TechCategory[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript', 'C', 'C++', 'SQL'],
  },
  {
    category: 'AI & Generative AI',
    items: ['Generative AI', 'LLM Applications', 'NLP', 'Prompt Engineering', 'Responsible AI', 'RAG'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend & Database',
    items: ['REST APIs', 'Prisma', 'MySQL'],
  },
  {
    category: 'Developer Tools & Core',
    items: ['Git', 'GitHub', 'Open Source', 'Problem Solving', 'Debugging'],
  },
];
