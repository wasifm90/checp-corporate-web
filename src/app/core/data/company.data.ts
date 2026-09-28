import { CompanyProfile, SiteSettings } from '../models';

export const COMPANY_PROFILE: CompanyProfile = {
  name: 'CHECP',
  legalName: 'CHECP Engineering & Contracting Co.',
  tagline: 'Building with precision. Creating lasting value.',
  heroEyebrow: 'CONSTRUCTION • ENGINEERING • DELIVERY',
  heroHeadline: 'Building with precision. Creating lasting value.',
  heroSupportingCopy: 'We deliver complex construction and engineering projects through disciplined planning, technical expertise, safety and uncompromising quality.',
  whoWeAreHeading: 'Built on experience.\nDriven by relationships.',
  whoWeAreBody: 'CHECP directs landmark commercial developments, heavy civil works, and high-specification architectural assets across the Kingdom of Saudi Arabia and the wider GCC region. Through disciplined preconstruction, advanced construction management, and rigorous craftsmanship, we forge enduring built environments for sovereign, institutional, and private stakeholders.',
  convictionHeading: "We don't just build structures. We build confidence in every detail.",
  convictionBody: 'Every CHECP project is grounded in meticulous engineering, strict supply chain governance, and absolute transparency from groundbreaking to commissioning.',
  convictionSubtext: 'Every project is built on disciplined planning, skilled execution and a commitment to delivering what we promise.',
  metrics: [
    { value: '25+', targetNumber: 25, suffix: '+', label: 'Years Experience', verified: false },
    { value: '180+', targetNumber: 180, suffix: '+', label: 'Projects Delivered', verified: false },
    { value: '94%', targetNumber: 94, suffix: '%', label: 'Repeat Clients', verified: false },
    { value: '14M+', targetNumber: 14, suffix: 'M+', label: 'Sq. Ft. Completed', verified: false }
  ],
  deliveryStages: [
    {
      step: '01',
      name: 'PLAN',
      description: 'Feasibility analysis, constructability modeling, parametric budgeting, critical-path scheduling, and early risk identification.'
    },
    {
      step: '02',
      name: 'DESIGN',
      description: 'Integrated design management, multidisciplinary BIM coordination, structural optimization, and value engineering.'
    },
    {
      step: '03',
      name: 'BUILD',
      description: 'Turnkey site execution, automated material logistics, safety governance, and uncompromising quality control.'
    },
    {
      step: '04',
      name: 'DELIVER',
      description: 'Integrated MEP testing, structural commissioning, statutory regulatory closeouts, and comprehensive handover documentation.'
    },
    {
      step: '05',
      name: 'SUPPORT',
      description: 'Warranty lifecycle management, facility operational orientation, and enduring client advisory partnerships.'
    }
  ],
  values: [
    {
      title: 'Technical Discipline',
      description: 'We approach every structural challenge with mathematical precision, deep engineering intelligence, and proven building science.'
    },
    {
      title: 'Safety Without Compromise',
      description: 'Every worker returns home safely every single day. We cultivate an ingrained culture of proactive risk elimination.'
    },
    {
      title: 'Institutional Reliability',
      description: 'We honor contractual milestones, budget fidelity, and open communication with institutional integrity.'
    },
    {
      title: 'Sustainable Craftsmanship',
      description: 'Deploying low-carbon materials, energy-efficient methodologies, and sustainable construction practices aligned with regional visions.'
    }
  ],
  leadership: [
    {
      name: 'Executive Management Team',
      role: 'CHECP Corporate Directorate',
      bio: 'Leading multidisciplinary engineering, commercial operations, and project delivery governance across Saudi Arabia.'
    }
  ],
  foundedYear: '2010',
  headquarters: 'Riyadh, Kingdom of Saudi Arabia'
};

export const SITE_SETTINGS: SiteSettings = {
  siteUrl: 'https://checp.com',
  contactEmail: 'inquiries@checp.com',
  contactPhone: '+966 11 450 8900',
  linkedinUrl: 'https://linkedin.com/company/checp',
  copyrightYear: 2026
};
