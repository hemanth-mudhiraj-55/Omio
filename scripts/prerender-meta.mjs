#!/usr/bin/env node
/**
 * Post-build script: injects route-specific <title>, <meta>, OG, and Twitter
 * tags into copies of index.html so that crawlers (Google, social previews)
 * receive correct metadata without needing to execute JavaScript.
 *
 * Run: node scripts/prerender-meta.mjs
 * Expects: frontend/dist/index.html to already exist (run after `vite build`).
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'frontend', 'dist');
const SITE_URL = 'https://www.evalixa.com';
const SITE_NAME = 'Evalixa AI';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

// ---------------------------------------------------------------------------
// Route metadata registry
// ---------------------------------------------------------------------------

const routes = [
  // ── Homepage ──
  {
    path: '/',
    title: 'AI Benchmarking & Agent Evaluation Services',
    description:
      'Evalixa AI \u2014 AI benchmarking, agent evaluation, model security testing, and enterprise AI services. We test, evaluate, and secure AI systems before they reach production.',
    keywords:
      'Evalixa AI, AI benchmarking company, AI agent evaluation services, AI model security testing, prompt injection testing, LLM red teaming, enterprise AI agents, data annotation services, AI benchmarking India, AI evaluation company, adversarial testing for LLMs, AI quality assurance',
  },

  // ── Core pages ──
  {
    path: '/contact',
    title: 'Contact Evalixa AI \u2014 Start a Conversation',
    description:
      'Contact Evalixa AI for AI benchmarking, agent evaluation, security testing, and enterprise AI services. Based in Hyderabad, India \u2014 serving teams globally. We respond within one business day.',
    keywords:
      'contact Evalixa AI, Evalixa AI email, hire AI evaluation company, AI benchmarking services contact, enterprise AI consulting India, AI security testing quote',
  },
  {
    path: '/about/who-we-are',
    title: 'About Evalixa AI \u2014 Who We Are',
    description:
      'Evalixa AI is an AI evaluation and security testing company built by senior practitioners. No handoffs, no junior replacements \u2014 the partner we wished existed.',
    keywords:
      'about Evalixa AI, Evalixa AI company, AI evaluation company India, AI security testing company, who is Evalixa, enterprise AI company Hyderabad, AI benchmarking startup India',
  },

  // ── Services ──
  {
    path: '/services/ai-agent-evaluation-benchmarking',
    title: 'AI Agent Evaluation & Benchmarking \u2014 Evalixa AI Services',
    description:
      'Structured AI benchmarking and agent evaluation for teams that need to measure quality, safety, and performance before production deployment.',
    keywords:
      'AI agent evaluation, AI benchmarking, AI benchmarking company, AI agent evaluation services, AI benchmarking in India, AI agent evaluation in India, LLM evaluation, model benchmarking, LLM-as-judge, AI red teaming, how to evaluate AI agents, AI agent quality assurance, evalixa',
  },
  {
    path: '/services/ai-model-security-testing',
    title: 'AI Model Security Testing \u2014 Evalixa AI Services',
    description:
      'Adversarial testing and vulnerability assessment that reveals how AI models behave under attack \u2014 prompt injection, jailbreaks, and edge-case exploitation.',
    keywords:
      'AI model security testing, AI security testing company, AI model security testing India, adversarial testing for LLMs, prompt injection testing, jailbreak testing, LLM red teaming services, AI vulnerability assessment, model robustness testing, AI penetration testing, evalixa',
  },
  {
    path: '/services/ai-attack-detection-systems',
    title: 'AI Attack Detection Systems \u2014 Evalixa AI Services',
    description:
      'Real-time detection systems that identify and block prompt injection, adversarial inputs, and model exploitation before they reach production AI systems.',
    keywords:
      'AI attack detection systems, AI attack detection, prompt injection detection, adversarial input detection, AI defense systems, AI guardrails, AI content filtering, real-time AI security, AI abuse prevention, AI threat detection, evalixa',
  },
  {
    path: '/services/data-annotation',
    title: 'Data Annotation \u2014 Evalixa AI Services',
    description:
      'Expert data labeling and annotation services that provide the high-quality training signal your AI models need \u2014 from preference pairs to domain-specific entity recognition.',
    keywords:
      'data annotation services, data labeling company, data annotation India, AI training data, RLHF data annotation, preference labeling, text annotation, entity recognition labeling, annotation services for AI, data annotation company India, evalixa',
  },
  {
    path: '/services/enterprise-ai-agents',
    title: 'Enterprise AI Agents \u2014 Evalixa AI Services',
    description:
      'Production-grade enterprise AI agents designed for reliability, governance, and real operational value \u2014 with human-in-the-loop controls and audit logging built in.',
    keywords:
      'enterprise AI agents, enterprise AI services, enterprise AI India, AI agents for business, AI workflow automation, multi-agent orchestration, RAG pipeline development, AI chatbot for enterprise, enterprise AI consulting, evalixa',
  },
  {
    path: '/services/agent-readiness-risk-assessment',
    title: 'Agent Readiness & Risk Assessment \u2014 Evalixa AI Services',
    description:
      'A structured AI readiness review that surfaces technical, compliance, and operational risks before they become incidents in production.',
    keywords:
      'AI readiness assessment, AI risk assessment, AI governance consulting, AI adoption risk, AI compliance audit, responsible AI assessment, AI safety review, AI risk management, agent readiness assessment, evalixa',
  },
  {
    path: '/services/continuous-monitoring-regression-testing',
    title: 'Continuous Monitoring & Regression Testing \u2014 Evalixa AI Services',
    description:
      'Continuous AI monitoring and regression testing that detects quality drift, performance shifts, and model degradation before they impact users.',
    keywords:
      'AI monitoring services, AI regression testing, model drift detection, AI observability, AI quality monitoring, continuous AI testing, AI canary deployment, AI production monitoring, model performance tracking, evalixa',
  },
  {
    path: '/services/sft-rlhf',
    title: 'Supervised Fine-Tuning (SFT) & RLHF \u2014 Evalixa AI Services',
    description:
      'Supervised fine-tuning (SFT) and RLHF services that adapt foundation models to your domain \u2014 improving accuracy, safety, and user-facing quality.',
    keywords:
      'SFT services, RLHF services, supervised fine-tuning company, reinforcement learning human feedback, model fine-tuning services, LLM fine-tuning, DPO training, AI model customization, domain-specific fine-tuning, fine-tuning company India, evalixa',
  },

  // ── Insights listing pages ──
  {
    path: '/insights/case-studies',
    title: 'Case Studies \u2014 Evalixa AI Insights',
    description:
      'Real delivery stories that show how Evalixa turns technical ambition into operational results.',
  },
  {
    path: '/insights/articles',
    title: 'Articles \u2014 Evalixa AI Insights',
    description:
      "Long-form reads on software startups, technology strategy, and Evalixa's perspective on the industry.",
  },
  {
    path: '/insights/blogs',
    title: 'Blog \u2014 AI Insights & Engineering Strategy',
    description:
      'Expert writing on AI benchmarking, agent evaluation, LLM security, enterprise AI, and modern engineering practices \u2014 by the Evalixa AI team.',
    keywords:
      'AI blog, AI benchmarking blog, enterprise AI insights, LLM evaluation articles, AI security testing blog, AI agent evaluation guide, Evalixa AI blog, AI engineering best practices',
  },
  {
    path: '/evalixa-ai',
    title: 'Evalixa AI \u2014 The Partner We Wished Existed',
    description:
      'We started Evalixa because we kept seeing the same problem: organisations adopting AI systems that were never properly tested, evaluated, or secured before reaching production.',
  },

  // ── Blog posts ──
  {
    path: '/insights/blogs/enterprise-ai-and-automation',
    title: 'Enterprise AI & Automation: Complete Guide 2026',
    description:
      'Learn how enterprise AI & automation agents work, where they create real value, and how to implement them without the usual pitfalls. A practical, no-nonsense guide from Evalixa AI.',
    type: 'article',
  },
  {
    path: '/insights/blogs/ai-benchmarking-and-agent-evaluation',
    title: 'AI Benchmarking & Agent Evaluation: Complete Guide 2026',
    description:
      'Learn AI benchmarking best practices, which AI agent benchmarking frameworks to use, and how to build an evaluation pipeline that catches real problems before production. Evalixa AI.',
    type: 'article',
  },
  {
    path: '/insights/blogs/from-generative-ai-to-agentic-ai',
    title: 'Generative AI to Agentic AI: The Shift from Passive Models to Autonomous Agents (2026)',
    description:
      'The shift from generative AI to agentic AI is the most important transition in enterprise technology right now. Understand what changed, what agentic AI actually means in production, and how to prepare your organisation.',
    type: 'article',
  },
  {
    path: '/insights/blogs/enterprise-ai-strategy-and-roi',
    title: 'Enterprise AI Strategy & ROI: A Practical Guide to AI Investments That Deliver (2026)',
    description:
      'Most enterprise AI projects fail to deliver measurable ROI. This guide explains how to build an AI strategy that ties directly to business outcomes \u2014 and how to measure whether it is working.',
    type: 'article',
  },
  {
    path: '/insights/blogs/ai-in-healthcare-evaluation',
    title: 'AI in Healthcare Evaluation: Why Testing Medical AI Systems Is Non-Negotiable (2026)',
    description:
      'Healthcare AI systems are making clinical decisions that affect patient lives. Without rigorous evaluation, the risks are enormous. Learn why healthcare AI evaluation is essential.',
    type: 'article',
  },

  // ── Articles ──
  {
    path: '/insights/articles/what-is-evalixa',
    title: 'What is Evalixa? | Evalixa AI \u2014 Enterprise Software & AI Services',
    description:
      'Discover what Evalixa AI is, what services it offers, and how it helps businesses build software and AI systems that perform reliably in production.',
    type: 'article',
  },
  {
    path: '/insights/articles/software-company-startups-in-india',
    title: 'Software Company Startups in India: Growth, Challenges & Opportunities (2025)',
    description:
      'Discover why software company startups in India are dominating global tech. Explore the key advantages, common challenges, and expert strategies for building a successful startup in India.',
    type: 'article',
  },
  {
    path: '/insights/articles/how-to-choose-a-software-development-company',
    title: 'How to Choose a Software Development Company | Practical Guide 2025',
    description:
      'A step-by-step guide to choosing the right software development company. Learn what to look for, which red flags to avoid, and how to run an evaluation that gives you a reliable answer.',
    type: 'article',
  },
  {
    path: '/insights/articles/what-makes-a-software-startup-succeed-globally',
    title: 'What Makes a Software Startup Succeed Globally',
    description:
      'Understand the factors that separate software startups that scale globally from those that stay local. Engineering quality, specialisation, and the right partners make the difference.',
    type: 'article',
  },
  {
    path: '/insights/articles/evalixa-solutions-services-and-approach',
    title: 'Evalixa AI: Complete Guide to Services, Capabilities & Approach',
    description:
      "Everything about Evalixa AI \u2014 what Evalixa builds, how Evalixa works with clients, Evalixa's engineering standards, AI capabilities, and why enterprises and startups choose Evalixa.",
    type: 'article',
  },
  {
    path: '/insights/articles/multimodal-ai-governance-and-security',
    title: 'Multimodal AI Governance & Security: Why Text, Audio & Video Systems Need New Rules',
    description:
      'Multimodal AI systems that process text, audio, and video are outpacing existing governance frameworks. Learn why AI security and oversight must catch up before real damage is done.',
    type: 'article',
  },

  // ── Careers ──
  {
    path: '/careers/life-at-evalixa',
    title: 'Life at Evalixa \u2014 Evalixa AI Careers',
    description:
      'A remote-first team where high performance and sustainable working conditions are treated as complementary.',
  },
  {
    path: '/careers/open-positions',
    title: 'Open Positions \u2014 Evalixa AI Careers',
    description:
      'We hire deliberately \u2014 people who care about craft and want to work on technically interesting problems.',
  },
  {
    path: '/careers/benefits',
    title: 'Benefits \u2014 Evalixa AI Careers',
    description:
      'Compensation and support structures designed for people doing serious, sustained work.',
  },
  {
    path: '/careers/professional-development',
    title: 'Professional Development \u2014 Evalixa AI Careers',
    description:
      'Learning and growth at Evalixa is funded, structured, and taken seriously by leadership.',
  },

  // ── About ──
  {
    path: '/about/leadership',
    title: 'Leadership \u2014 Evalixa AI About',
    description:
      'Experienced practitioners who stay close to the work and lead by example rather than by title.',
  },
  {
    path: '/about/partners',
    title: 'Partners \u2014 Evalixa AI About',
    description:
      'A curated network of technology and delivery partners whose capabilities complement our own.',
  },
  {
    path: '/about/location',
    title: 'Location \u2014 Evalixa AI About',
    description:
      'Remote-first and globally distributed \u2014 structured to work effectively with clients in any timezone.',
  },

  // ── Legal ──
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description:
      'Learn how Evalixa AI collects, uses, and protects your personal information.',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service',
    description:
      'Read the terms and conditions governing your use of the Evalixa AI website and services.',
  },
  {
    path: '/cookie-policy',
    title: 'Cookie Policy',
    description:
      'Understand how Evalixa AI uses cookies and similar technologies on our website.',
  },
];

// ---------------------------------------------------------------------------
// HTML replacement helpers
// ---------------------------------------------------------------------------

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceTag(html, regex, replacement) {
  return regex.test(html) ? html.replace(regex, replacement) : html;
}

function buildHtml(template, route) {
  const fullTitle = route.title.includes(SITE_NAME)
    ? route.title
    : `${route.title} | ${SITE_NAME}`;
  const escapedTitle = escapeHtml(fullTitle);
  const escapedDesc = escapeHtml(route.description);
  const canonicalUrl =
    route.path === '/' ? SITE_URL + '/' : `${SITE_URL}${route.path}`;
  const ogType = route.type || 'website';
  const keywords = route.keywords || '';

  let html = template;

  // <title>
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${escapedTitle}</title>`);

  // meta description
  html = replaceTag(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapedDesc}" />`,
  );

  // meta keywords (replace if present)
  if (keywords) {
    html = replaceTag(
      html,
      /<meta name="keywords" content="[^"]*"\s*\/?>/,
      `<meta name="keywords" content="${escapeHtml(keywords)}" />`,
    );
  }

  // canonical
  html = replaceTag(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );

  // hreflang x-default
  html = replaceTag(
    html,
    /<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?>/,
    `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`,
  );

  // Open Graph
  html = replaceTag(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapedTitle}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapedDesc}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:type" content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${ogType}" />`,
  );

  // Twitter Card
  html = replaceTag(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapedTitle}" />`,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapedDesc}" />`,
  );

  return html;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const indexPath = join(DIST, 'index.html');

if (!existsSync(indexPath)) {
  console.error('ERROR: frontend/dist/index.html not found. Run `vite build` first.');
  process.exit(1);
}

const template = readFileSync(indexPath, 'utf-8');
let written = 0;

for (const route of routes) {
  const html = buildHtml(template, route);

  if (route.path === '/') {
    // Overwrite the root index.html in-place (homepage already exists)
    writeFileSync(indexPath, html, 'utf-8');
  } else {
    // Write to e.g. dist/careers/benefits/index.html
    const dir = join(DIST, route.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html, 'utf-8');
  }
  written++;
}

console.log(`\u2713 Pre-rendered meta tags for ${written} routes into frontend/dist/`);
