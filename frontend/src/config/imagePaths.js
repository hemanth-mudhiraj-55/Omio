import heroBackgroundAsset from '../assets/heroBackground.webp';
import heroBackgroundDarkAsset from '../assets/heroBackground.webp';
import caseStudy from '../assets/caseStudyBackground.png'
import careerOppertunities from '../assets/navItems/careerOppertunities.png'
import aboutUs from '../assets/navItems/aboutUs.png'
import appDev from '../assets/services/appDevelopment.webp'
import webDev from '../assets/services/webDevelopment.webp'
import services from '../assets/navItems/services.webp'
import devOps from '../assets/services/DevOps.webp'
import aiAgentEvalution from '../assets/services/aiAgentEvalution.webp'
import enterpriseAI from '../assets/services/enterpriseAI.webp'
import agentRisk from '../assets/services/agentRisk.webp'
import moniteringTesting from '../assets/services/moniteringTesting.webp'
import rlhf from '../assets/services/rlhf.webp'


export const imagePaths = {
  pageBackground: heroBackgroundAsset,
  heroBackground: heroBackgroundAsset,
  heroBackgroundDark: heroBackgroundDarkAsset,
  navFeatured: {
    services: services,
    insights: caseStudy,
    omio: '',
    careers: careerOppertunities,
    about: aboutUs,
  },
  pageImages: {
    '/services/web-development': webDev,
    '/services/mobile-development': appDev,
    '/services/cloud-devops-custom-integration': devOps,
    '/services/ai-agent-evaluation-benchmarking': aiAgentEvalution,
    '/services/enterprise-ai-agents': enterpriseAI,
    '/services/agent-readiness-risk-assessment': agentRisk,
    '/services/continuous-monitoring-regression-testing': moniteringTesting,
    '/services/sft-rlhf': rlhf,
    '/services/staffing': '',
    '/insights/case-studies': '',
    '/insights/blogs': '',
    '/omio-solutions': '',
    '/careers/life-at-omio': '',
    '/careers/open-positions': '',
    '/careers/benefits': '',
    '/careers/professional-development': '',
    '/about/who-we-are': '',
    '/about/leadership': '',
    '/about/partners': '',
    '/about/location': '',
  },
};
