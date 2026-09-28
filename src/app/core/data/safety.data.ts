import { SafetyRecord } from '../models';

export const SAFETY_DATA: SafetyRecord = {
  headline: 'Every project starts with responsibility.',
  subheadline: 'We embed safety, quality and risk management into every stage of project delivery across all jobsites and operational divisions.',
  description: 'At CHECP, safety is not a procedural checklist—it is an unconditional organizational value. From executive boardroom governance to daily morning toolbox briefings on active jobsites, we cultivate an environment where every individual has the moral duty and absolute authority to halt work whenever safety is in question.',
  image: '/images/safety/safety-inspection.jpg',
  metrics: [
    {
      id: 'lti',
      label: 'Lost Time Incidents',
      value: '0',
      targetNumber: 0,
      suffix: '',
      period: 'YEAR TO DATE',
      verified: true
    },
    {
      id: 'audit-rate',
      label: 'Site Compliance Audit Rate',
      value: '99%',
      targetNumber: 99,
      suffix: '%',
      period: 'AUDITED',
      verified: true
    },
    {
      id: 'training-hours',
      label: 'Safety Training Hours',
      value: '35K+',
      targetNumber: 35,
      suffix: 'K+',
      period: 'COMPLETED',
      verified: true
    }
  ],
  certifications: [
    'ISO 45001:2018 — Occupational Health and Safety Management System',
    'ISO 9001:2015 — Quality Management System',
    'ISO 14001:2015 — Environmental Management System',
    'High Commission for Industrial Security (HCIS) Operational Compliance'
  ],
  corePrinciples: [
    {
      number: '01',
      title: 'Life-First Planning',
      description: 'Prior to mobilizing any site equipment, multidisciplinary risk assessments identify hazard zones, crane swings, and utility conflicts before work commences.'
    },
    {
      number: '02',
      title: 'Universal Stop-Work Authority',
      description: 'Every worker on a CHECP project, regardless of rank or subcontractor status, possesses unconditional authorization and leadership backing to immediately pause work if unsafe conditions arise.'
    },
    {
      number: '03',
      title: 'Multilingual Worker Empowerment',
      description: 'Daily visual briefings, digital translated induction modules, and continuous hands-on training ensure that safety instructions are clearly understood by every member of our diverse workforce.'
    },
    {
      number: '04',
      title: 'Quality Verification at Every Milestones',
      description: 'Zero defects closeout strategy driven by real-time digital punch-listing, automated material batch testing, and third-party structural engineering audits.'
    }
  ]
};
