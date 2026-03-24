const serviceItems = [
  {
    title: 'Web Development',
    description: 'Custom web platforms with strong UX, scalable architecture, and measurable business outcomes.',
    path: '/services/web-development',
  },
  {
    title: 'Mobile Development',
    description: 'iOS and Android experiences built for performance, polish, and product iteration speed.',
    path: '/services/mobile-development',
  },
  {
    title: 'Cloud, DevOps & Custom Integration',
    description: 'Reliable delivery pipelines, infrastructure automation, and systems that connect cleanly.',
    path: '/services/cloud-devops-custom-integration',
  },
  {
    title: 'AI Agent Evaluation & Benchmarking',
    description: 'Practical evaluation frameworks that expose quality, safety, and operational readiness.',
    path: '/services/ai-agent-evaluation-benchmarking',
  },
  {
    title: 'Enterprise AI Agents',
    description: 'Production-minded AI workflows designed for internal efficiency and customer-facing value.',
    path: '/services/enterprise-ai-agents',
  },
  {
    title: 'Agent Readiness & Risk Assessment',
    description: 'Governance-focused reviews to identify adoption risks before they affect the business.',
    path: '/services/agent-readiness-risk-assessment',
  },
  {
    title: 'Continuous Monitoring & Regression Testing',
    description: 'Ongoing quality signals that keep complex systems trustworthy after launch.',
    path: '/services/continuous-monitoring-regression-testing',
  },
  {
    title: 'Supervised Fine-Tuning (SFT) & RLHF',
    description: 'Model improvement loops aligned with domain expectations and user experience goals.',
    path: '/services/sft-rlhf',
  },
  {
    title: 'Staffing',
    description: 'Flexible engineering support for delivery teams that need specialized momentum.',
    path: '/services/staffing',
  },
];

const insightItems = [
  {
    title: 'Case Studies',
    description: 'Real delivery stories that show how Omio turns technical ambition into operational results.',
    path: '/insights/case-studies',
  },
  {
    title: 'Blogs',
    description: 'Thoughtful articles on product engineering, AI systems, and modern delivery practices.',
    path: '/insights/blogs',
  },
];

const careerItems = [
  {
    title: 'Life at Omio',
    description: 'A look at how the team works, collaborates, and grows together.',
    path: '/careers/life-at-omio',
  },
  {
    title: 'Open Positions',
    description: 'Current opportunities for people who enjoy building ambitious software products.',
    path: '/careers/open-positions',
  },
  {
    title: 'Benefits',
    description: 'Support structures that help the team do its best work sustainably.',
    path: '/careers/benefits',
  },
  {
    title: 'Professional Development',
    description: 'Learning opportunities designed to deepen craft and expand leadership capacity.',
    path: '/careers/professional-development',
  },
];

const aboutItems = [
  {
    title: 'Who We Are',
    description: 'The story, values, and operating mindset behind Omio Solutions.',
    path: '/about/who-we-are',
  },
  {
    title: 'Leadership',
    description: 'The people shaping delivery quality, culture, and long-term direction.',
    path: '/about/leadership',
  },
  {
    title: 'Partners',
    description: 'Collaborators and ecosystem relationships that expand what Omio can deliver.',
    path: '/about/partners',
  },
  {
    title: 'Location',
    description: 'Where the team operates and how Omio works with clients across regions.',
    path: '/about/location',
  },
];

export const navigationGroups = [
  {
    key: 'services',
    label: 'Services',
    path: '/services/web-development',
    description: 'Engineering, AI delivery, and platform acceleration services.',
    featuredTitle: 'Build systems that stay elegant as they scale.',
    featuredDescription:
      'From product engineering to enterprise AI, Omio combines clean execution with dependable delivery.',
    items: serviceItems,
  },
  {
    key: 'insights',
    label: 'Case Studies',
    path: '/insights/case-studies',
    description: 'Selected work, applied thinking, and practical stories from the field.',
    featuredTitle: 'Proof over promise.',
    featuredDescription:
      'Explore delivery patterns, product wins, and engineering lessons shaped by real engagements.',
    items: insightItems,
  },
  {
    key: 'omio',
    label: 'Omio',
    path: '/omio-solutions',
    description: 'The core Omio story and positioning.',
    featuredTitle: 'Technology that feels carefully considered.',
    featuredDescription:
      'A premium digital presence for a software services brand centered on craft and intelligence.',
    items: [
      {
        title: 'Omio Solutions',
        description: 'A concise overview page that anchors the company narrative.',
        path: '/omio-solutions',
      },
    ],
  },
  {
    key: 'careers',
    label: 'Career',
    path: '/careers/life-at-omio',
    description: 'Culture, opportunities, and team growth.',
    featuredTitle: 'Join a team that values thoughtful builders.',
    featuredDescription:
      'Career pages are structured and ready for full role content once you share the final copy.',
    items: careerItems,
  },
  {
    key: 'about',
    label: 'About us',
    path: '/about/who-we-are',
    description: 'Who Omio is, how the team works, and where it is headed.',
    featuredTitle: 'A clear point of view, expressed simply.',
    featuredDescription:
      'The about section is broken into dedicated pages so every topic can grow without crowding.',
    items: aboutItems,
  },
];

export const supportedLanguages = [
  'Global / English',
  'Germany / Deutsch',
  'Japan / Japanese',
  'Poland / Polski',
  'Ukraine / Ukrainian',
];

export const heroContent = {
  eyebrow: 'Omio Solutions',
  titleLines: [
    { text: 'Think behind', tone: 'muted' },
    { text: 'the', tone: 'light' },
    { text: 'human', tone: 'muted' },
    { text: 'intelligence', tone: 'muted' },
  ],
  description:
    'Enterprise-grade software services shaped around intelligent systems, modern delivery, and calm, precise execution.',
  primaryAction: 'Contact',
  secondaryAction: 'Explore Services',
};

export const homeStats = [
  { value: '09', label: 'Service verticals ready for expansion' },
  { value: '17', label: 'Dedicated routes already structured' },
  { value: '24/7', label: 'Cross-functional delivery mindset' },
];

export const homePillars = [
  {
    eyebrow: 'Product Engineering',
    title: 'Build premium digital products without losing delivery speed.',
    description:
      'Omio combines frontend craft, backend reliability, and platform thinking so every launch feels deliberate.',
  },
  {
    eyebrow: 'Applied AI',
    title: 'Bring AI initiatives into production with measurement and control.',
    description:
      'From readiness assessments to benchmarking and monitoring, the foundation is designed for real-world use.',
  },
  {
    eyebrow: 'Operational Clarity',
    title: 'Structure every section so the website can scale with the business.',
    description:
      'The site architecture is already separated into reusable content, shared styles, and route-ready pages.',
  },
];

export const homeHighlights = [
  {
    title: 'Case-study ready storytelling',
    description: 'A dedicated Insights structure for case studies and blogs, with room for featured editorial content.',
  },
  {
    title: 'Flexible visual system',
    description: 'Color tokens and image paths are centralized so the brand can evolve without rebuilding the UI.',
  },
  {
    title: 'Global navigation model',
    description: 'Language switching, mega-menu sections, and page-level routing mirror a mature enterprise layout.',
  },
];

const createPage = ({ title, group, groupKey, intro, eyebrow, highlights = [] }) => ({
  eyebrow,
  title,
  group,
  groupKey,
  intro,
  highlights,
  body:
    'This page is intentionally scaffolded so you can layer in the final description, media, and proof points without restructuring the frontend.',
});

export const pageContent = {
  '/services/web-development': createPage({
    title: 'Web Development',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Elegant digital products, platforms, and internal tools engineered for speed and long-term maintainability.',
    highlights: ['Frontend architecture', 'API integrations', 'Platform modernization'],
  }),
  '/services/mobile-development': createPage({
    title: 'Mobile Development',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Mobile applications shaped around performance, intuitive flows, and release confidence.',
    highlights: ['iOS and Android delivery', 'Design system parity', 'Store-readiness support'],
  }),
  '/services/cloud-devops-custom-integration': createPage({
    title: 'Cloud, DevOps & Custom Integration',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Infrastructure and integration work that reduces friction between teams, tools, and environments.',
    highlights: ['CI/CD automation', 'Infrastructure hardening', 'System integration'],
  }),
  '/services/ai-agent-evaluation-benchmarking': createPage({
    title: 'AI Agent Evaluation & Benchmarking',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Structured quality measurement for AI agents that need to perform consistently in production.',
    highlights: ['Evaluation design', 'Benchmark suites', 'Decision-grade reporting'],
  }),
  '/services/enterprise-ai-agents': createPage({
    title: 'Enterprise AI Agents',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Business-ready AI agents designed for reliability, governance, and meaningful operational value.',
    highlights: ['Workflow automation', 'Human-in-the-loop design', 'Enterprise deployment'],
  }),
  '/services/agent-readiness-risk-assessment': createPage({
    title: 'Agent Readiness & Risk Assessment',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'A practical readiness review that surfaces technical, compliance, and operational concerns early.',
    highlights: ['Risk mapping', 'Policy alignment', 'Adoption planning'],
  }),
  '/services/continuous-monitoring-regression-testing': createPage({
    title: 'Continuous Monitoring & Regression Testing',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Ongoing observability and test coverage for systems that evolve quickly and need stable performance.',
    highlights: ['Regression baselines', 'Quality dashboards', 'Production checks'],
  }),
  '/services/sft-rlhf': createPage({
    title: 'Supervised Fine-Tuning (SFT) & RLHF',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Model customization services that improve fit, consistency, and user-facing quality.',
    highlights: ['Dataset strategy', 'Preference tuning', 'Domain adaptation'],
  }),
  '/services/staffing': createPage({
    title: 'Staffing',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Specialized talent support for product, platform, and AI delivery teams that need immediate traction.',
    highlights: ['Flexible engagement', 'Specialist roles', 'Delivery continuity'],
  }),
  '/insights/case-studies': createPage({
    title: 'Case Studies',
    group: 'Insights',
    groupKey: 'insights',
    eyebrow: 'Insights',
    intro: 'A structured home for outcome-focused narratives, before-and-after stories, and delivery evidence.',
    highlights: ['Project snapshots', 'Results framing', 'Client outcomes'],
  }),
  '/insights/blogs': createPage({
    title: 'Blogs',
    group: 'Insights',
    groupKey: 'insights',
    eyebrow: 'Insights',
    intro: 'A publishing space for articles on engineering strategy, AI operations, and product craftsmanship.',
    highlights: ['Thought leadership', 'Technical essays', 'Company perspective'],
  }),
  '/omio-solutions': createPage({
    title: 'Omio Solutions',
    group: 'Omio',
    groupKey: 'omio',
    eyebrow: 'Omio',
    intro: 'A concise narrative page that introduces the brand, the point of view, and the service philosophy.',
    highlights: ['Brand overview', 'Positioning', 'Company narrative'],
  }),
  '/careers/life-at-omio': createPage({
    title: 'Life at Omio',
    group: 'Careers',
    groupKey: 'careers',
    eyebrow: 'Careers',
    intro: 'A welcoming overview of how the team collaborates, ships, and supports healthy high performance.',
    highlights: ['Culture story', 'Team rituals', 'Ways of working'],
  }),
  '/careers/open-positions': createPage({
    title: 'Open Positions',
    group: 'Careers',
    groupKey: 'careers',
    eyebrow: 'Careers',
    intro: 'A flexible page template ready for role cards, hiring notes, and application pathways.',
    highlights: ['Role listings', 'Hiring flow', 'Department snapshots'],
  }),
  '/careers/benefits': createPage({
    title: 'Benefits',
    group: 'Careers',
    groupKey: 'careers',
    eyebrow: 'Careers',
    intro: 'A simple structure for benefits content that can grow into region-specific details later.',
    highlights: ['Work support', 'Wellbeing', 'Flexibility'],
  }),
  '/careers/professional-development': createPage({
    title: 'Professional Development',
    group: 'Careers',
    groupKey: 'careers',
    eyebrow: 'Careers',
    intro: 'A page reserved for growth frameworks, learning support, and long-term career development at Omio.',
    highlights: ['Learning support', 'Mentoring', 'Growth paths'],
  }),
  '/about/who-we-are': createPage({
    title: 'Who We Are',
    group: 'About',
    groupKey: 'about',
    eyebrow: 'About',
    intro: 'An introduction to the team, mission, and operating values behind Omio Solutions.',
    highlights: ['Mission', 'Values', 'Operating philosophy'],
  }),
  '/about/leadership': createPage({
    title: 'Leadership',
    group: 'About',
    groupKey: 'about',
    eyebrow: 'About',
    intro: 'A dedicated space for leadership profiles, bios, and strategic direction once details are ready.',
    highlights: ['Leadership bios', 'Strategic focus', 'Team stewardship'],
  }),
  '/about/partners': createPage({
    title: 'Partners',
    group: 'About',
    groupKey: 'about',
    eyebrow: 'About',
    intro: 'A clean framework for showcasing ecosystem relationships and collaboration strengths.',
    highlights: ['Technology partners', 'Delivery partners', 'Shared capabilities'],
  }),
  '/about/location': createPage({
    title: 'Location',
    group: 'About',
    groupKey: 'about',
    eyebrow: 'About',
    intro: 'A structured page for office details, operating regions, and cross-border delivery presence.',
    highlights: ['Primary base', 'Global reach', 'Engagement coverage'],
  }),
};

export const routeOrder = Object.keys(pageContent).map((path) => ({ path }));
