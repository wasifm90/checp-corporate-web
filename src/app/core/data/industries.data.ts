import { Industry } from '../models';

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'ind-01',
    slug: 'commercial-mixed-use',
    name: 'Commercial & Mixed-Use',
    subtitle: 'Institutional grade-A corporate towers, retail epicenters, and vibrant civic districts.',
    description: 'CHECP crafts commercial spaces that serve as anchors for regional economic enterprise. Through sophisticated engineering, column-free floor plates, and intelligent building envelopes, we deliver inspiring workplaces that optimize lifecycle operational performance and attract premier global tenants.',
    featuredImage: '/images/projects/financial-district-hq.jpg',
    order: 1,
    capabilities: [
      'Super-tall and high-rise commercial tower superstructures',
      'Dynamic high-span retail podiums and atrium glazing',
      'Smart building BMS and energy conservation automation',
      'LEED and Mostadam green building certification delivery',
      'Multi-level subterranean parking with automated traffic systems'
    ],
    keyChallenges: [
      'Tight urban footprints with heavy pedestrian and vehicular traffic',
      'Integration of complex structural cantilevers and signature architectural forms',
      'Meeting rigorous acoustic isolation criteria between retail and office spaces'
    ],
    highlights: [
      '145,000 m² Financial District Headquarters delivered ahead of schedule',
      'Achieved LEED Gold standard with 28% operational energy reduction',
      'Constructed with zero disruption to neighboring commercial tenants'
    ]
  },
  {
    id: 'ind-02',
    slug: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    subtitle: 'Specialized surgical suites, clinical facilities, and medical research campuses.',
    description: 'Healthcare construction demands extraordinary technical discipline. CHECP creates healing environments engineered to satisfy stringent clinical hygiene standards, electromagnetic isolation, medical gas distributions, and uninterrupted emergency power systems.',
    featuredImage: '/images/projects/sovereign-wealth-atrium.jpg',
    order: 2,
    capabilities: [
      'Cleanroom construction and positive/negative pressure isolation suites',
      'Radiofrequency and radiation shielding for MRI and oncology equipment',
      'Medical gas piping, deionized water systems, and clinical MEP',
      'Stringent indoor air quality (IAQ) HEPA filtration systems',
      'Seamless antimicrobial and antibacterial interior finishes'
    ],
    keyChallenges: [
      'Zero-tolerance dust and vibration controls near operating medical facilities',
      'Complex coordination of dense overhead MEP services within ceiling voids',
      'Strict compliance with Ministry of Health and international healthcare accreditations'
    ],
    highlights: [
      'Turnkey delivery of specialized diagnostic and clinical wings',
      '100% compliance during initial regulatory biological testing audits',
      'Redundant N+1 backup emergency power integration'
    ]
  },
  {
    id: 'ind-03',
    slug: 'industrial-logistics',
    name: 'Industrial & Logistics',
    subtitle: 'Automated fulfillment facilities, heavy processing plants, and cold storage chains.',
    description: 'As global supply chains expand, CHECP engineers the industrial backbone of regional commerce. We construct high-throughput distribution facilities, heavy processing plants, and specialized cold chain storage facilities engineered for continuous heavy vehicle traffic and automated material handling.',
    featuredImage: '/images/projects/metropolitan-tower.jpg',
    order: 3,
    capabilities: [
      'High-tolerance superflat industrial concrete floors (TR34 DM1 / ASTM F-min 100)',
      'High-bay automated storage and retrieval systems (ASRS) structural framing',
      'Multi-temperature refrigerated storage and thermal barrier envelopes',
      'Heavy-duty industrial stormwater retention and environmental containment',
      'High-span pre-engineered steel buildings and gantry crane runways'
    ],
    keyChallenges: [
      'Stringent flatness requirements for autonomous laser-guided forklifts',
      'Massive site earthworks and ground improvement over variable terrain',
      'Extremely rapid delivery schedules driven by tenant logistics commitments'
    ],
    highlights: [
      'Continuous jointless floor pours spanning over 50,000 m²',
      'Thermal insulation performance exceeding GCC energy preservation codes',
      'Fast-track delivery compressed by 8 weeks via prefabricated steel elements'
    ]
  },
  {
    id: 'ind-04',
    slug: 'hospitality-luxury',
    name: 'Hospitality & Luxury Assets',
    subtitle: 'Luxury coastal resorts, five-star hospitality flags, and private branded residences.',
    description: 'Creating world-class hospitality destinations requires an obsessive attention to guest experience and aesthetic perfection. CHECP delivers signature coastal retreats, luxury hotels, and private estates where master craftsmanship meets discrete, high-performance building engineering.',
    featuredImage: '/images/projects/financial-district-hq.jpg',
    order: 4,
    capabilities: [
      'Five-star hotel guestrooms, presidential villas, and ballroom fit-outs',
      'Resort coastal landscaping, lagoon civil works, and infinity pools',
      'Bespoke architectural joinery, handcrafted stonework, and bronze metalwork',
      'Acoustically isolated guest chambers (NC 25 / STC 60 standards)',
      'Discreet service corridors and automated back-of-house logistics'
    ],
    keyChallenges: [
      'Remote site logistics and harsh marine environmental conditions',
      'Coordination of international specialty artisans and custom bespoke materials',
      'Strict brand standard adherence mandated by ultra-luxury global operators'
    ],
    highlights: [
      'Delivered bespoke finishes with zero defects upon operator inspection',
      'Integrated marine-resistant building envelopes ensuring prolonged asset longevity',
      'Flawless acoustic isolation verified by third-party acoustic engineers'
    ]
  },
  {
    id: 'ind-05',
    slug: 'mission-critical-infrastructure',
    name: 'Mission Critical & Infrastructure',
    subtitle: 'Hyperscale data centers, substations, and critical civic and transport infrastructure.',
    description: 'CHECP engineers infrastructure where downtime is inconceivable. From hyperscale Tier III and Tier IV data centers to high-voltage electrical substations and transport hubs, we deliver facilities designed for continuous operation, absolute physical security, and extreme climate resilience.',
    featuredImage: '/images/projects/coastal-maritime-terminus.jpg',
    order: 5,
    capabilities: [
      'Tier III and Tier IV concurrently maintainable data center facilities',
      'High-voltage electrical substations and continuous power distribution grids',
      'Specialized chilled water loops and evaporative cooling infrastructures',
      'Severe physical security perimeters and blast-resistant structural envelopes',
      'Subterranean utility corridors and continuous fiber-optic distribution spines'
    ],
    keyChallenges: [
      'Extreme power densities and high ambient heat rejection in desert climates',
      'Accelerated equipment commissioning schedules for hyperscale cloud operators',
      'Uncompromising physical, cyber, and environmental security protocols'
    ],
    highlights: [
      '99.999% reliability demonstrated during integrated load testing',
      'Achieved PUE targets under 1.25 in high ambient regional climates',
      'Constructed with multi-layered physical security containment'
    ]
  }
];
