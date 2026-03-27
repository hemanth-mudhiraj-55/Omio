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
    title: 'Articles',
    description: 'In-depth reads on software startups, industry trends, and Omio\'s perspective on technology.',
    path: '/insights/articles',
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
    { text: 'Artificial intelligence', tone: 'muted' },
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

const createPage = ({ title, group, groupKey, intro, eyebrow, highlights = [], body = '', details = [], links = [] }) => ({
  eyebrow,
  title,
  group,
  groupKey,
  intro,
  highlights,
  body,
  details,
  links,
});

export const pageContent = {
  '/services/web-development': createPage({
    title: 'Web Development',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Elegant digital products, platforms, and internal tools engineered for speed and long-term maintainability.',
    highlights: ['Frontend architecture', 'API integrations', 'Platform modernization', 'Performance optimisation', 'Design system implementation'],
    body: 'We design and engineer web platforms that balance visual quality with engineering precision. From product launches to large-scale platform migrations, every build is structured for longevity — clean component architecture, tested APIs, and deployment pipelines that hold up under real traffic.',
    details: [
      {
        heading: 'What We Build',
        text: 'End-to-end web applications using React, Next.js, TypeScript, and modern backend frameworks including Node.js, Python, and Go. We handle everything from architecture decisions and database schema design to production deployment, CDN configuration, and ongoing maintenance. Each project is scoped and staffed to match the actual complexity of the work.',
      },
      {
        heading: 'Our Approach',
        text: 'We start with your business goals and work backward into technical choices. Every decision — from state management strategy to API design — is made to reduce long-term complexity, not add to it. We write code that the next engineer can understand and extend, because we know that most of the value in software is realised after the initial launch.',
      },
    ],
  }),
  '/services/mobile-development': createPage({
    title: 'Mobile Development',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Mobile applications shaped around performance, intuitive flows, and release confidence.',
    highlights: ['iOS and Android delivery', 'Design system parity', 'Store-readiness support', 'Offline-first architecture', 'Push notifications & analytics'],
    body: 'Cross-platform and native mobile applications that feel at home on every device. We build for the platforms your users are on, with performance and release velocity treated as first-class requirements — not optimised after the fact.',
    details: [
      {
        heading: 'Platforms & Frameworks',
        text: 'React Native and Flutter for cross-platform delivery where time-to-market matters. Swift and Kotlin for native builds where platform depth and performance are paramount. We match the stack to the product requirements, not to our own preferences, and we are honest about the trade-offs at each decision point.',
      },
      {
        heading: 'Beyond Launch',
        text: 'App store submission, TestFlight and internal testing pipelines, push notification infrastructure, in-app analytics, crash reporting integration, and ongoing performance monitoring after release. We stay engaged after launch because the real challenges often surface once real users start using the product.',
      },
    ],
  }),
  '/services/cloud-devops-custom-integration': createPage({
    title: 'Cloud, DevOps & Custom Integration',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Infrastructure and integration work that reduces friction between teams, tools, and environments.',
    highlights: ['CI/CD automation', 'Infrastructure hardening', 'System integration', 'Container orchestration', 'Cost optimisation', 'Observability setup'],
    body: 'Reliable infrastructure and integration work that removes the friction between development speed and production stability. We automate the repetitive, harden the critical, and connect the systems that should already be talking to each other but are not.',
    details: [
      {
        heading: 'Cloud & Infrastructure',
        text: 'Architecture and deployment across AWS, GCP, and Azure. Infrastructure as code with Terraform and Pulumi, container orchestration with Kubernetes and ECS, secret management, network security groups, and cost optimisation strategies for workloads at every scale. We build infrastructure that developers enjoy working with and operations teams can sleep alongside.',
      },
      {
        heading: 'Integration Work',
        text: 'Custom API integrations, event-driven architectures using Kafka or SQS, data pipelines, webhook systems, and third-party platform connectors that join your tools into a coherent operational whole. We document what we build and write the runbooks so your team can operate it independently after we hand over.',
      },
    ],
  }),
  '/services/ai-agent-evaluation-benchmarking': createPage({
    title: 'AI Agent Evaluation & Benchmarking',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Structured quality measurement for AI agents that need to perform consistently in production.',
    highlights: ['Evaluation design', 'Benchmark suites', 'Decision-grade reporting', 'Red-teaming', 'LLM-as-judge pipelines', 'Regression tracking'],
    body: 'Measurement frameworks that give you confidence in how your AI agents perform — before and after deployment. We design evaluations specific to your use case, not off-the-shelf metrics that miss what actually matters in your context.',
    details: [
      {
        heading: 'Evaluation Design',
        text: 'Task-specific benchmark suites built around your actual agent objectives. LLM-as-judge pipelines for scalable automated evaluation, human preference annotation for subjective quality dimensions, red-teaming exercises that surface edge cases and jailbreak vulnerabilities, and adversarial probing that stress-tests agent behaviour under realistic failure conditions.',
      },
      {
        heading: 'Reporting & Ongoing Monitoring',
        text: 'Decision-grade evaluation reports with clear pass/fail criteria and actionable findings. Regression tracking across model versions and prompt changes, quality dashboards that make drift visible before it reaches users, and alerting thresholds calibrated to your product\'s specific tolerance for quality variance.',
      },
    ],
  }),
  '/services/enterprise-ai-agents': createPage({
    title: 'Enterprise AI Agents',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Business-ready AI agents designed for reliability, governance, and meaningful operational value.',
    highlights: ['Workflow automation', 'Human-in-the-loop design', 'Enterprise deployment', 'Multi-agent orchestration', 'Audit logging', 'Access control'],
    body: 'AI agents built for the operational realities of enterprise environments — security, auditability, and clean integration with existing systems. We design for reliability from day one, not as a feature added at the end of the engagement.',
    details: [
      {
        heading: 'Agent Architecture',
        text: 'Multi-agent orchestration frameworks, tool use and function calling design, memory and retrieval systems with RAG pipelines, human-in-the-loop checkpoints that keep agents operating within acceptable boundaries, and fallback logic that degrades gracefully rather than failing silently. We build agents that your team can monitor, understand, and override.',
      },
      {
        heading: 'Enterprise Integration',
        text: 'Deployment within your existing cloud infrastructure, SSO and RBAC integration, comprehensive audit logging that satisfies compliance requirements, model access controls, data residency compliance, and monitoring dashboards that give operations teams visibility into agent behaviour without requiring ML expertise to interpret.',
      },
    ],
  }),
  '/services/agent-readiness-risk-assessment': createPage({
    title: 'Agent Readiness & Risk Assessment',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'A practical readiness review that surfaces technical, compliance, and operational concerns early.',
    highlights: ['Risk mapping', 'Policy alignment', 'Adoption planning', 'Vendor assessment', 'Data governance review', 'Compliance gap analysis'],
    body: 'A structured review process that identifies where AI adoption creates risk — technical, operational, legal, and reputational — before those risks become incidents. We produce findings that are actionable, not just comprehensive.',
    details: [
      {
        heading: 'What We Assess',
        text: 'Model behaviour under adversarial and edge-case inputs, data governance gaps that create compliance exposure, integration security and access control weaknesses, vendor lock-in risk and model dependency concentration, operational dependencies that create single points of failure, and the organisational readiness of the teams who will own the systems post-deployment.',
      },
      {
        heading: 'Outputs & Next Steps',
        text: 'A prioritised risk register with severity ratings and clear ownership. Remediation recommendations sized for your team\'s capacity, policy templates that can be adapted to your existing governance frameworks, a staged adoption roadmap, and an executive summary that communicates the findings to non-technical stakeholders without losing the substance.',
      },
    ],
  }),
  '/services/continuous-monitoring-regression-testing': createPage({
    title: 'Continuous Monitoring & Regression Testing',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Ongoing observability and test coverage for systems that evolve quickly and need stable performance.',
    highlights: ['Regression baselines', 'Quality dashboards', 'Production checks', 'Canary pipelines', 'Drift detection', 'Alerting design'],
    body: 'Quality systems that stay active after launch. We build the infrastructure to detect when model behaviour, API performance, or user-facing quality shifts — and surface it before it compounds into something that damages trust.',
    details: [
      {
        heading: 'What We Monitor',
        text: 'Model output quality against defined baseline benchmarks, API latency and throughput under load, error rates and failure patterns across deployment environments, input data distribution shifts that degrade model performance without triggering hard errors, and regression against quality baselines across model version updates and prompt changes.',
      },
      {
        heading: 'Test Infrastructure',
        text: 'Automated regression suites that run on every deployment, canary evaluation pipelines that compare new versions against current production before full rollout, shadow testing setups for safe live-traffic experimentation, and alerting thresholds calibrated to your product\'s specific tolerance — so your team is paged when it matters and not when it does not.',
      },
    ],
  }),
  '/services/sft-rlhf': createPage({
    title: 'Supervised Fine-Tuning (SFT) & RLHF',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Model customization services that improve fit, consistency, and user-facing quality.',
    highlights: ['Dataset strategy', 'Preference tuning', 'Domain adaptation', 'Instruction tuning', 'Safety alignment', 'Post-training evaluation'],
    body: 'Model customisation that bridges the gap between a capable foundation model and one that performs predictably in your specific domain. We manage the full fine-tuning cycle from data strategy through evaluation, with clear quality gates at every stage.',
    details: [
      {
        heading: 'Data & Training',
        text: 'Instruction dataset curation from your existing content and domain-specific sources, preference pair annotation by subject matter experts, quality filtering to remove low-signal or harmful examples, and supervised fine-tuning runs with rigorous held-out evaluation at each stage of the training pipeline. We track every experiment so decisions are reproducible.',
      },
      {
        heading: 'Alignment & Adaptation',
        text: 'RLHF and DPO workflows for preference alignment, constitutional AI techniques for behaviour shaping, domain adaptation to specialised vocabulary and reasoning patterns in finance, healthcare, legal, and technical domains. Post-training safety evaluations ensure the fine-tuned model does not introduce new failure modes alongside its improvements.',
      },
    ],
  }),
  '/services/staffing': createPage({
    title: 'Staffing',
    group: 'Services',
    groupKey: 'services',
    eyebrow: 'Service',
    intro: 'Specialized talent support for product, platform, and AI delivery teams that need immediate traction.',
    highlights: ['Flexible engagement', 'Specialist roles', 'Delivery continuity', 'Senior practitioners', 'AI & ML specialists', 'Platform engineers'],
    body: 'Engineering support for teams that need to move faster or go deeper than their current headcount allows. We place practitioners who integrate with your delivery process and contribute immediately — not after a three-month onboarding curve.',
    details: [
      {
        heading: 'Who We Place',
        text: 'Senior full-stack engineers, ML engineers with production fine-tuning and deployment experience, AI safety and evaluation specialists, DevOps and platform engineers with cloud-native expertise, technical leads who can drive delivery without being micromanaged, and product engineers with domain knowledge in fintech, healthcare, and enterprise software.',
      },
      {
        heading: 'Engagement Models',
        text: 'Short-term sprint support for specific delivery phases, extended project embedding for longer engagements, and team augmentation that scales with your roadmap. We structure every engagement around your delivery rhythm, not a generic contractor model. All placed engineers are vetted personally, not sourced from a database.',
      },
    ],
  }),
  '/insights/articles': createPage({
    title: 'Articles',
    group: 'Insights',
    groupKey: 'insights',
    eyebrow: 'Insights',
    intro: 'Long-form reads on software startups, technology strategy, and Omio\'s perspective on the industry.',
    highlights: ['Company deep-dives', 'Industry analysis', 'Startup strategy', 'SEO content', 'Technology trends'],
    body: 'Our articles explore the topics that matter most to founders, product leaders, and technology teams. From understanding what Omio does to navigating the software startup landscape in India, each article is written to be genuinely useful — grounded in real practice, not recycled opinion.',
    details: [
      {
        heading: 'What We Write About',
        text: 'Company overviews, software startup strategy, vendor selection guides, and industry analysis. Articles are written by practitioners at Omio and reflect current thinking — not last year\'s consensus. Each piece is structured for both readability and search discoverability.',
      },
      {
        heading: 'How Articles Differ from Blogs',
        text: 'Blogs on Omio cover technical topics and engineering practice in depth. Articles are broader — addressing business strategy, market context, and decision frameworks for the leaders and founders who work with software companies. The two formats complement each other.',
      },
    ],
    links: [
      {
        slug: 'what-is-omio',
        title: 'What is Omio?',
        intro: 'A complete overview of Omio Solutions — what the company does, how it works, and who it serves.',
        category: 'Company',
        readTime: '4 min read',
      },
      {
        slug: 'software-company-startups-in-india',
        title: 'Software Company Startups in India: What Founders Need to Know in 2025',
        intro: 'Why startups in India are dominating global tech and what it takes to build and scale a software company in the Indian market.',
        category: 'Industry',
        readTime: '7 min read',
      },
      {
        slug: 'how-to-choose-a-software-development-company',
        title: 'How to Choose a Software Development Company: A Practical Guide',
        intro: 'A step-by-step guide for product leaders selecting a software development partner — what to look for and what to avoid.',
        category: 'Guide',
        readTime: '6 min read',
      },
      {
        slug: 'what-makes-a-software-startup-succeed-globally',
        title: 'What Makes a Software Startup Succeed in the Global Market',
        intro: 'The factors that separate software startups that scale internationally from those that plateau — engineering quality, specialisation, and partners.',
        category: 'Startup Strategy',
        readTime: '5 min read',
      },
    ],
  }),
  '/insights/case-studies': createPage({
    title: 'Case Studies',
    group: 'Insights',
    groupKey: 'insights',
    eyebrow: 'Insights',
    intro: 'Real delivery stories that show how Omio turns technical ambition into operational results.',
    highlights: ['Project snapshots', 'Results framing', 'Client outcomes', 'Technical decisions', 'Before & after metrics'],
    body: 'Outcome-focused narratives from real engagements — documenting the problem, the approach, the decisions made under constraint, and the measurable results. These are stories written by the people who did the work, not summaries cleaned up for marketing.',
    details: [
      {
        heading: 'What Each Study Covers',
        text: 'Project context and business constraints, the technical choices we made and why alternatives were ruled out, execution timeline and team composition, obstacles encountered during delivery and how they were resolved, and quantified outcomes including performance improvements, cost reductions, time-to-market acceleration, and quality metrics before and after.',
      },
      {
        heading: 'Industries Represented',
        text: 'Fintech and payments infrastructure, healthcare and clinical data platforms, enterprise SaaS, e-commerce and marketplace engineering, and AI-native product development. More case studies are added as engagements reach a stage where clients are ready for the details to be shared publicly.',
      },
    ],
  }),
  '/insights/blogs': createPage({
    title: 'Blogs',
    group: 'Insights',
    groupKey: 'insights',
    eyebrow: 'Insights',
    intro: 'Practical writing on AI systems, product engineering, and modern delivery from the people doing the work.',
    highlights: ['Thought leadership', 'Technical essays', 'Company perspective', 'AI operations', 'Engineering culture', 'Delivery practices'],
    body: 'Technical and strategic writing from practitioners at Omio. Articles are grounded in real experience — problems we have encountered, approaches we have tested, and patterns that have held up under production conditions. No recycled content or theoretical takes.',
    details: [
      {
        heading: 'Topics We Cover',
        text: 'LLM evaluation frameworks and safety testing, frontend performance engineering and architecture patterns, cloud cost optimisation strategies, AI agent design and orchestration, RLHF and fine-tuning workflows, engineering culture and delivery leadership, and the business context that shapes how technical decisions should be made.',
      },
      {
        heading: 'Who Writes Here',
        text: 'Engineers, consultants, and product specialists from across the Omio team. Every article goes through a technical review before publication to ensure accuracy. We write about topics we are actively working on, which means the content reflects current practice rather than last year\'s consensus.',
      },
    ],
  }),
  '/omio-solutions': createPage({
    title: 'Omio Solutions',
    group: 'Omio',
    groupKey: 'omio',
    eyebrow: 'Omio',
    intro: 'Enterprise-grade software services built around intelligent systems, precise delivery, and long-term thinking.',
    highlights: ['Brand overview', 'Positioning', 'Company narrative', 'Service philosophy', 'Core values'],
    body: 'Omio Solutions is a technology services company founded on the belief that the best software work happens when craft and communication are treated as equally important as technical capability. We are a team of engineers, AI practitioners, and delivery specialists who take both the work and the relationship seriously.',
    details: [
      {
        heading: 'The Service Model',
        text: 'We operate as a delivery partner, not a vendor. Engagements are structured around clear goals, transparent progress reporting, and shared accountability for outcomes — not hours logged or scope argued over. Senior practitioners remain hands-on throughout the project, not just at the start. When things get complicated, the most experienced people get closer, not further away.',
      },
      {
        heading: 'Why Omio',
        text: 'We combine the engineering depth of a specialist consultancy with the operational structure of a professional services firm. Clients work directly with the people doing the work, get honest assessments of what is technically feasible, and receive guidance that is in their interest — even when that means recommending against a larger engagement. That is how we build relationships that last.',
      },
    ],
  }),
  '/careers/life-at-omio': createPage({
    title: 'Life at Omio',
    group: 'Careers',
    groupKey: 'careers',
    eyebrow: 'Careers',
    intro: 'A remote-first team where high performance and sustainable working conditions are treated as complementary.',
    highlights: ['Culture story', 'Team rituals', 'Ways of working', 'Remote-first', 'Async communication', 'Psychological safety'],
    body: 'Omio is a distributed team that works asynchronously without losing coherence. We have built deliberate structures around communication, delivery, and culture so that being remote does not mean being disconnected — from the work, from teammates, or from the overall direction of the company.',
    details: [
      {
        heading: 'How We Work',
        text: 'Asynchronous-first communication with well-written documentation and clear ownership of decisions. Structured sprint cycles with regular demos and retrospectives, no-meeting mornings to protect deep work time, and a shared expectation that people will deliver to a high standard without needing to be tracked. Results matter more than activity.',
      },
      {
        heading: 'Team Culture',
        text: 'A culture that values honest feedback — including upward — learning from mistakes without blame, and building things with genuine care about quality. We celebrate shipping but also the thinking and discipline that made the shipping possible. New team members are onboarded carefully and given real ownership quickly.',
      },
    ],
  }),
  '/careers/open-positions': createPage({
    title: 'Open Positions',
    group: 'Careers',
    groupKey: 'careers',
    eyebrow: 'Careers',
    intro: 'We hire deliberately — people who care about craft and want to work on technically interesting problems.',
    highlights: ['Role listings', 'Hiring flow', 'Department snapshots', 'Engineering roles', 'AI & ML roles', 'Operations roles'],
    body: 'Omio hires slowly and with intention. We are looking for people who have strong technical foundations, communicate clearly, and bring a genuine point of view to the work — not people who just clear the interview bar. Every hire has a real impact on the team because the team is small enough for that to be true.',
    details: [
      {
        heading: 'Current Focus Areas',
        text: 'We are actively looking for senior full-stack engineers with production React and TypeScript experience, ML engineers with hands-on fine-tuning and deployment work, AI safety and evaluation specialists, experienced DevOps engineers with Kubernetes and IaC expertise, and technical account leads who can manage delivery relationships at senior client levels.',
      },
      {
        heading: 'How to Apply',
        text: 'Send your CV and a short note about what you are looking for to careers@omio.world. Tell us what you have built recently and what kind of problem you want to work on next. We read everything and respond to every application. If the timing is not right, we keep promising candidates in mind for future openings.',
      },
    ],
  }),
  '/careers/benefits': createPage({
    title: 'Benefits',
    group: 'Careers',
    groupKey: 'careers',
    eyebrow: 'Careers',
    intro: 'Compensation and support structures designed for people doing serious, sustained work.',
    highlights: ['Competitive pay', 'Learning budget', 'Flexible hours', 'Home office stipend', 'Health coverage', 'Generous leave'],
    body: 'Omio\'s benefits are designed around the reality of remote, knowledge-intensive work. We provide the tools, autonomy, and support structures that help people do their best work over the long term — not just perks that look good on a careers page but rarely get used.',
    details: [
      {
        heading: 'Core Benefits',
        text: 'Competitive compensation benchmarked to your local market and reviewed annually. Flexible working hours with no mandatory core hours beyond team ceremonies, an annual learning and conference budget, a home office setup stipend for new joiners, comprehensive health insurance where applicable to your location, and equity participation for senior roles.',
      },
      {
        heading: 'How We Support You',
        text: 'Regular one-on-ones with your direct lead and skip-level access to founders, mental health support through a vetted partner, a generous vacation policy with a minimum enforced usage floor, no-questions-asked sick leave, and parental leave that treats all caregivers equitably regardless of gender or relationship structure.',
      },
    ],
  }),
  '/careers/professional-development': createPage({
    title: 'Professional Development',
    group: 'Careers',
    groupKey: 'careers',
    eyebrow: 'Careers',
    intro: 'Learning and growth at Omio is funded, structured, and taken seriously by leadership.',
    highlights: ['Learning budget', 'Conference access', 'Internal mentoring', 'Growth frameworks', 'Promotion criteria', 'External courses'],
    body: 'We invest in the development of every team member because we believe it makes the work better, the team more capable, and the company more resilient. Development at Omio is not a once-a-year performance review — it is an ongoing conversation with real resources behind it.',
    details: [
      {
        heading: 'Learning Programs',
        text: 'Annual budget for courses, certifications, books, and conferences. Access to a curated library of internal resources, regular knowledge-sharing sessions hosted by team members, structured mentoring pairings between senior and junior practitioners, and cross-functional project rotation for people who want to broaden their expertise beyond their primary discipline.',
      },
      {
        heading: 'Career Progression',
        text: 'Defined progression frameworks for every role in the company with transparent levelling criteria. Regular performance conversations that include specific, actionable feedback rather than generic ratings. Promotion decisions are based on demonstrated impact, leadership behaviour, and readiness for the next level — not on time in role or political visibility.',
      },
    ],
  }),
  '/about/who-we-are': createPage({
    title: 'Who We Are',
    group: 'About',
    groupKey: 'about',
    eyebrow: 'About',
    intro: 'A team of engineers and strategists who take technical excellence and business impact equally seriously.',
    highlights: ['Mission', 'Values', 'Operating philosophy', 'Company history', 'Team composition'],
    body: 'Omio Solutions was founded on a simple premise — that the best software work happens when craftsmanship and communication are both treated as non-negotiable. We are a small, senior team with broad capability across product engineering, AI delivery, infrastructure, and strategic advisory.',
    details: [
      {
        heading: 'Our Mission',
        text: 'To help ambitious organisations build software systems that are robust, intelligent, and genuinely useful — delivered with the discipline and honesty that complex technical work demands. We measure success by the outcomes we produce for clients, not by the size of the engagement or the impressiveness of the technology stack.',
      },
      {
        heading: 'How We Operate',
        text: 'Every engagement is staffed with senior practitioners who remain hands-on throughout the project. We do not hand off to junior teams after the sales process closes. When a problem becomes harder than expected, we say so early and work through it together. We believe that long-term relationships are built on honesty during the difficult moments, not just the smooth ones.',
      },
    ],
  }),
  '/about/leadership': createPage({
    title: 'Leadership',
    group: 'About',
    groupKey: 'about',
    eyebrow: 'About',
    intro: 'Experienced practitioners who stay close to the work and lead by example rather than by title.',
    highlights: ['Leadership bios', 'Strategic focus', 'Team stewardship', 'Domain expertise', 'Accessible founders'],
    body: 'Omio\'s leadership team brings together experience from enterprise software delivery, AI research, product development, and technical consulting across multiple industries and geographies. Leadership here is not a layer of abstraction — it is active participation in the work and the relationships that make the work possible.',
    details: [
      {
        heading: 'Leadership Philosophy',
        text: 'We lead by staying close to the problems — not by delegating all execution and managing through reports. Leaders at Omio contribute technically where it adds value, are honest about uncertainty, make decisions based on what is best for clients and the long-term health of the team, and take direct accountability for outcomes rather than attributing results to the people below them.',
      },
      {
        heading: 'Accessibility & Transparency',
        text: 'Every team member has direct access to founders and senior leaders through regular open sessions, not just through their direct manager. Strategic decisions are communicated with context, not just conclusions. When the direction changes, we explain why. We believe that people do better work when they understand the reasoning behind the constraints they are operating within.',
      },
    ],
  }),
  '/about/partners': createPage({
    title: 'Partners',
    group: 'About',
    groupKey: 'about',
    eyebrow: 'About',
    intro: 'A curated network of technology and delivery partners whose capabilities complement our own.',
    highlights: ['Technology partners', 'Delivery partners', 'Shared capabilities', 'Cloud platforms', 'AI tooling', 'Specialist agencies'],
    body: 'Omio works with partners whose work we have validated in production environments and whose values align with our own commitment to quality and transparency. Partnerships are built on demonstrated competence, not on commercial incentives or referral arrangements that do not benefit clients.',
    details: [
      {
        heading: 'Technology Partners',
        text: 'Cloud platform relationships with AWS, GCP, and Azure that give clients access to architectural guidance and commercial benefits. AI infrastructure partnerships with providers whose tooling we have used extensively in production. Specialist tooling vendors in areas including observability, security, and developer experience whose products are part of our standard delivery stack.',
      },
      {
        heading: 'Delivery Partners',
        text: 'Independent consultancies and specialist agencies with domain expertise that extends Omio\'s reach into verticals or geographies where depth matters more than breadth. We refer to partners only when we are confident their quality meets the standard our clients expect. Partner relationships are reviewed regularly — we do not maintain commercial arrangements that are no longer in clients\' interests.',
      },
    ],
  }),
  '/about/location': createPage({
    title: 'Location',
    group: 'About',
    groupKey: 'about',
    eyebrow: 'About',
    intro: 'Remote-first and globally distributed — structured to work effectively with clients in any timezone.',
    highlights: ['Remote-first', 'Global reach', 'Engagement coverage', 'Europe', 'Asia', 'North America'],
    body: 'Omio operates without a single headquarters. The team is distributed across Europe, Asia, and North America, which gives us natural coverage across timezones and proximity to clients wherever they are based. Being remote-first is a deliberate operational choice, not a consequence of the pandemic.',
    details: [
      {
        heading: 'How We Engage Globally',
        text: 'Client engagements are staffed with practitioners who align to the client\'s primary timezone to maximise overlap and minimise the cost of coordination. We schedule delivery ceremonies — stand-ups, reviews, retrospectives — to fit the client\'s working day, not our own convenience. Cross-timezone work is supported by strong asynchronous documentation practices.',
      },
      {
        heading: 'Regional Presence',
        text: 'While Omio is operationally remote-first, we maintain formal business registrations and banking relationships in multiple jurisdictions to support clean commercial arrangements with clients globally. For clients who require in-person engagement at key project milestones, we can accommodate travel and onsite working as part of the engagement structure.',
      },
    ],
  }),
};

export const routeOrder = Object.keys(pageContent).map((path) => ({ path }));
