/* ─────────────────────────────────────────────────
   OMIO — Centralised Link & Contact Registry
   All email addresses, social URLs, and external
   links live here. Import from this file everywhere
   else in the codebase instead of hard-coding.
───────────────────────────────────────────────── */

export const contactChannels = [
  {
    key: 'sales',
    label: 'Sales',
    email: 'sales@omio.world',
    icon: 'briefcase',
    tagline: 'Start a project conversation',
    description:
      'Discuss your project requirements, service packages, engagement models, and commercial terms. The best first step for any new partnership.',
  },
  {
    key: 'support',
    label: 'Technical Support',
    email: 'support@omio.world',
    icon: 'tool',
    tagline: 'Help with ongoing work',
    description:
      'Get assistance with active projects, technical blockers, delivery questions, and post-launch issues. We respond to support requests within one business day.',
  },
  {
    key: 'consulting',
    label: 'Expert Consulting',
    email: 'consulting@omio.world',
    icon: 'cpu',
    tagline: 'Short-term specialist engagement',
    description:
      'Architecture reviews, AI readiness assessments, code audits, and technical advisory sessions. Ideal when you need focused expertise without a full engagement.',
  },
  {
    key: 'community',
    label: 'Expert Community',
    email: 'community@omio.world',
    icon: 'users',
    tagline: 'Join the Omio builder network',
    description:
      'Connect with our network of engineers, AI researchers, and product specialists. Share knowledge, collaborate on open problems, and stay close to the craft.',
  },
  {
    key: 'partners',
    label: 'Partnerships',
    email: 'partners@omio.world',
    icon: 'handshake',
    tagline: 'Technology and ecosystem collaboration',
    description:
      'Explore co-delivery arrangements, technology integrations, referral partnerships, and ecosystem collaborations that expand what both sides can offer.',
  },
  {
    key: 'media',
    label: 'Media & Press',
    email: 'media@omio.world',
    icon: 'newspaper',
    tagline: 'Press, interviews, and brand inquiries',
    description:
      'Journalist inquiries, interview requests, speaking opportunities, brand asset requests, and anything related to public communications about Omio.',
  },
  {
    key: 'careers',
    label: 'Careers',
    email: 'careers@omio.world',
    icon: 'star',
    tagline: 'Join the team',
    description:
      'Applications, spontaneous CVs, internship enquiries, and questions about working at Omio. We read every message from people who care about the craft.',
  },
  {
    key: 'general',
    label: 'General Inquiries',
    email: 'hello@omio.world',
    icon: 'mail',
    tagline: 'Everything else',
    description:
      'Questions, feedback, ideas, and anything that does not fit another category. If you are not sure where to send something, this is the right place.',
  },
];

export const socialLinks = [
  { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/company/omio-solutions' },
  { key: 'github', label: 'GitHub', url: 'https://github.com/omio-solutions' },
  { key: 'twitter', label: 'X / Twitter', url: 'https://twitter.com/omiosolutions' },
];

export const companyInfo = {
  name: 'Omio Solutions',
  legalName: 'Omio Solutions Ltd.',
  founded: '2023',
  headquarters: 'Global — remote-first',
  website: 'https://omio.world',
  primaryEmail: 'hello@omio.world',
};
