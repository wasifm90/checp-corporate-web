import { Article } from '../models';

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-01',
    slug: 'milestone-topping-out-al-nakheel',
    title: 'Milestone Topping Out at Al-Nakheel District',
    date: 'November 2025',
    category: 'COMMERCIAL',
    excerpt: 'Completing the structural core on schedule while sustaining zero lost-time incidents across two million worker hours.',
    featuredImage: '/images/insights/commercial-topping-out.jpg',
    readTime: '4 min read',
    author: {
      name: 'CHECP Project Directorate',
      role: 'Commercial Superstructures Division'
    },
    tags: ['Commercial', 'Superstructure', 'Topping Out', 'Safety'],
    seoTitle: 'Milestone Topping Out at Al-Nakheel District | CHECP Insights',
    seoDescription: 'CHECP celebrates the milestone topping out of a signature commercial tower in Riyadh, achieving structural completion on schedule with zero lost-time incidents.',
    content: [
      'The topping out of the signature commercial tower in Riyadh Al-Nakheel district marks a pivotal milestone for CHECP engineering team. Rising 42 floors above the central business district, the project reached its final structural elevation precisely on the critical-path target date established during preconstruction.',
      'Sustaining zero lost-time incidents across more than two million worker hours required relentless daily focus. With self-climbing hydraulic formwork operating continuously alongside twin luffing-jib tower cranes, the site team managed intricate logistic handoffs between concrete placement and structural steel core outriggers.',
      'The engineering team deployed real-time BIM clash detection and 4D crane scheduling to eliminate laydown congestion on a dense urban footprint. This disciplined approach enabled concurrent mechanical and electrical rough-ins on lower floors while concrete operations were progressing overhead.',
      'As the project transitions into exterior unitized curtain wall installation and interior fit-out phases, CHECP remains committed to delivering institutional quality, acoustic excellence, and lasting value for stakeholders.'
    ]
  },
  {
    id: 'art-02',
    slug: 'low-carbon-concrete-deep-foundations',
    title: 'Low-Carbon Concrete Deployment in Deep Foundations',
    date: 'October 2025',
    category: 'TECHNICAL',
    excerpt: 'Engineering high-durability, slag-enriched concrete formulations for deep subterranean foundations that cut embodied carbon by 32%.',
    featuredImage: '/images/insights/low-carbon-concrete.jpg',
    readTime: '6 min read',
    author: {
      name: 'Materials Engineering Group',
      role: 'CHECP Technical Services'
    },
    tags: ['Engineering', 'Concrete Science', 'Sustainability', 'Deep Foundations'],
    seoTitle: 'Low-Carbon Concrete Deployment in Deep Foundations | CHECP Technical',
    seoDescription: 'How CHECP engineers customized low-carbon concrete formulations to achieve superior hydration cooling and durability in extreme regional climates.',
    content: [
      'Deep mass foundations in high-ambient temperature regions present dual challenges: managing thermal stress during hydration and curtailing the significant embodied carbon associated with high cement volumes. CHECP technical services division recently concluded a multi-site program deploying high-performance supplementary cementitious materials (SCMs).',
      'By replacing over 60% of traditional Portland cement with ground granulated blast-furnace slag (GGBS) and microsilica, the engineering team lowered peak hydration core temperatures by 14°C, completely eliminating the risk of delayed ettringite formation and thermal cracking.',
      'Continuous thermal modeling combined with wireless embedded temperature sensors throughout a 14,000 m³ continuous raft pour confirmed that thermal gradient deltas remained well within the stringent 20°C differential limit specified by structural engineers.',
      'Crucially, this technical optimization yielded a 32% net reduction in embodied carbon footprint while delivering improved compressive strength at 56 and 90 days and vastly superior resistance to chloride ion ingress from groundwater.'
    ]
  },
  {
    id: 'art-03',
    slug: 'annual-jobsite-safety-excellence-review',
    title: 'Annual Jobsite Safety & Environmental Excellence Review',
    date: 'September 2025',
    category: 'HSE',
    excerpt: 'A comprehensive review of regional safety metrics, digital site monitoring systems, and our goal of zero incidents across all ongoing operations.',
    featuredImage: '/images/insights/annual-hse-review.jpg',
    readTime: '5 min read',
    author: {
      name: 'HSE Governance Council',
      role: 'CHECP Executive Operations'
    },
    tags: ['Safety', 'HSE Governance', 'Zero Incidents', 'Audits'],
    seoTitle: 'Annual Jobsite Safety & Environmental Excellence Review | CHECP',
    seoDescription: 'CHECP publishes its annual safety review detailing worker empowerment, digital safety inspections, and comprehensive risk mitigation across regional sites.',
    content: [
      'Safety at CHECP is not a retrospective statistic; it is the foundational discipline upon which every engineering success is built. In this annual review, the HSE Governance Council examines key performance metrics, field enhancements, and ongoing initiatives across all active projects.',
      'Over the past twelve months, CHECP instituted a digital site inspection platform that allows field engineers, superintendents, and safety stewards to log real-time observations, hazard rectifications, and peer positive safety interventions.',
      'Over 28,000 hours of specialized safety training were conducted across our workforce, covering working at heights, heavy crane rigging, confined space entry, and extreme heat illness prevention protocols.',
      'Our ongoing objective remains absolute: zero preventable incidents, zero worker injuries, and full environmental compliance across every project site.'
    ]
  }
];
