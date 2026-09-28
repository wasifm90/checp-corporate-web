import { Project } from '../models';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-01',
    slug: 'trans-regional-expressway-corridor',
    name: 'Trans-Regional Expressway & Viaduct Corridor',
    location: 'Eastern Province / Riyadh Corridor, Saudi Arabia',
    sector: 'Civil & Structural / Highways',
    projectType: 'Heavy Highway & Bridge Infrastructure',
    year: '2025',
    client: 'Ministry of Transport & Logistics Services',
    shortDescription: 'Multi-lane divided expressway construction, heavy-duty asphalt paving, precast prestressed bridge viaducts, and intelligent traffic management systems.',
    description: 'The Trans-Regional Expressway Corridor is a landmark civil transportation undertaking delivering 84 kilometers of continuous 8-lane heavy-duty highway infrastructure, including 6 grade-separated flyover interchanges, precast prestressed concrete viaduct spans, and comprehensive stormwater runoff culverts. CHECP deployed automated laser-guided slipform asphalt paving trains and high-compaction vibratory rollers to meet the Kingdom’s most rigorous surface regularity, friction, and heavy axle-load standards under extreme desert temperature conditions.',
    featuredImage: '/images/projects/road-construction-expressway.jpg',
    gallery: [
      '/images/projects/desert-road-construction.jpg',
      '/images/projects/desert-road-grading.jpg',
      '/images/projects/infrastructure-bridge.jpg'
    ],
    scope: [
      '84 km dual-carriageway 8-lane heavy expressway construction',
      'Automated laser-controlled asphalt paving trains and polymer-modified bitumen (PMB) surface courses',
      '6 multi-level grade-separated flyover interchanges and precast concrete bridge decks',
      'Continuous deep stormwater box culverts and desert flash-flood drainage networks',
      'Smart highway ITS infrastructure, fiber-optic incident detection, and solar LED arterial lighting',
      'Heavy steel guardrails, crash cushions, and high-reflectivity thermal road markings'
    ],
    metrics: [
      { label: 'Highway Length', value: '84 km' },
      { label: 'Asphalt Volume', value: '1.2M Tons' },
      { label: 'Bridge Spans', value: '18 Viaducts' },
      { label: 'Axle Load Design', value: 'Class A 130 kN' }
    ],
    featured: true,
    approach: 'Deployed proprietary Polymer-Modified Bitumen (PG 76-22) mixes specially engineered to resist rutting and high ambient surface temperatures reaching 65°C. Automated laser screeds and 3D GPS machine-controlled graders achieved millimeter-level ride smoothness tolerances (IRI < 0.85 m/km).',
    outcome: 'Delivered ahead of national logistics timeline commitments, reducing regional transit freight times by 35% with zero lost-time injuries across 4.2 million man-hours.',
    technicalSpecs: [
      { label: 'Pavement Type', value: 'Superpave Heavy-Duty Flexible' },
      { label: 'Surface Regularity', value: 'IRI < 0.85 m/km Precision' },
      { label: 'Design Service Life', value: '40-Year Structural Design' },
      { label: 'Traffic Capacity', value: '120,000 Vehicles / Day' }
    ]
  },
  {
    id: 'proj-02',
    slug: 'financial-district-headquarters',
    name: 'Financial District Headquarters',
    location: 'Riyadh, Saudi Arabia',
    sector: 'Commercial / Design & Build',
    projectType: 'Commercial Complex & Towers',
    year: '2025',
    client: 'Institutional Banking Corporation',
    shortDescription: 'Turnkey architectural engineering, heavy cantilevered superstructure, and high-performance acoustic glass envelopes executed for institutional banking.',
    description: 'The Financial District Headquarters represents a pinnacle of corporate construction in Riyadh. Designed to provide grade-A institutional workspaces, the landmark project encompasses an iconic 38-story structural steel and post-tensioned concrete tower with an expressive 18-meter cantilevered podium. CHECP executed the complete design-and-build mandate under an accelerated timeline while upholding rigorous sustainability and thermal efficiency standards.',
    featuredImage: '/images/projects/financial-district-hq.jpg',
    gallery: [
      '/images/projects/financial-district-cantilever.jpg',
      '/images/projects/financial-district-glazing.jpg',
      '/images/projects/financial-district-hq.jpg'
    ],
    scope: [
      'Turnkey Design & Build contracting',
      'Geotechnical deep excavation and retaining diaphragms',
      'Post-tensioned high-strength concrete core with composite steel framing',
      'Unitized triple-glazed curtain wall with solar shading fins',
      'Tier III redundancy power and mission-critical MEP infrastructure',
      'LEED Gold certification delivery'
    ],
    metrics: [
      { label: 'Built-up Area', value: '145,000 m²' },
      { label: 'Structural Height', value: '185 m' },
      { label: 'Safe Man-Hours', value: '3.8M hrs' },
      { label: 'Completion', value: 'On Schedule' }
    ],
    featured: true,
    approach: 'CHECP utilized 4D BIM digital twin simulations to orchestrate continuous logistical delivery within a congested central business district. Prefabricated structural steel assemblies and offsite facade pre-assembly reduced critical-path crane cycles by 24%, enabling simultaneous interior fit-out during upper-level structural framing.',
    outcome: 'Delivered two months ahead of tenant occupancy milestones with zero lost-time incidents across 3.8 million worker hours, achieving top-tier environmental and operational benchmarking.',
    technicalSpecs: [
      { label: 'Delivery Model', value: 'Lump Sum Design & Build' },
      { label: 'Seismic Rating', value: 'Zone 2B Compliance' },
      { label: 'Concrete Volume', value: '62,000 m³ High-Strength' },
      { label: 'Curtain Wall Area', value: '38,500 m² Acoustic Glass' }
    ]
  },
  {
    id: 'proj-03',
    slug: 'metropolitan-tower-infrastructure',
    name: 'Metropolitan Tower Infrastructure',
    location: 'Riyadh, Saudi Arabia',
    sector: 'Civil & Structural Engineering',
    projectType: 'High-Rise Substructure & Superstructure',
    year: '2024',
    client: 'Sovereign Real Estate Development',
    shortDescription: 'Substructure foundations, seismic stabilization systems, and complex high-rise structural framing on a dense urban footprint.',
    description: 'Metropolitan Tower Infrastructure is an engineering feat demanding subterranean mastery and high-precision structural concrete work. CHECP was appointed to deliver the comprehensive foundation package, deep diaphragm basement systems, seismic stabilization dampers, and primary concrete superstructure for a signature 52-story mixed-use tower in the northern corridor of Riyadh.',
    featuredImage: '/images/projects/metropolitan-tower.jpg',
    gallery: [
      '/images/projects/metropolitan-tower.jpg',
      '/images/projects/metropolitan-slipform-core.jpg',
      '/images/projects/metropolitan-tower-erection.jpg'
    ],
    scope: [
      'Subterranean deep excavation (26m depth across 5 basement levels)',
      'Continuous mass concrete raft pour exceeding 14,000 m³',
      'Self-climbing hydraulic core formwork system',
      'Integrated outrigger trusses and seismic structural damping',
      'Post-tensioned floor slab construction cycles'
    ],
    metrics: [
      { label: 'Excavation Volume', value: '190,000 m³' },
      { label: 'Raft Foundation', value: '3.2m Thickness' },
      { label: 'Floor Cycle', value: '5-Day Floor Turns' },
      { label: 'Safety Record', value: 'Zero LTI' }
    ],
    featured: true,
    approach: 'Engineered specialized thermal heat dissipation mixes for low-heat hydration in deep foundation concrete pours, monitored in real-time via wireless fiber-optic sensor arrays to prevent thermal stress cracking in extreme ambient desert conditions.',
    outcome: 'Flawless structural alignment verified by millimeter-level LIDAR scanning, providing the client with an uncompromising structural core certified for over 100 years of design service life.',
    technicalSpecs: [
      { label: 'Structural System', value: 'Core Wall with Outrigger Columns' },
      { label: 'Concrete Grade', value: 'C70/85 High Performance' },
      { label: 'Foundation Piles', value: '280 Large-Diameter Bored Piles' },
      { label: 'Excavation Depth', value: '26 Meters Below Grade' }
    ]
  },
  {
    id: 'proj-04',
    slug: 'sovereign-wealth-executive-atrium',
    name: 'Sovereign Wealth Executive Atrium',
    location: 'KAFD, Riyadh, Saudi Arabia',
    sector: 'Interior Fit-Out & Turnkey',
    projectType: 'Ultra-Prime Corporate Interior',
    year: '2025',
    client: 'Sovereign Investment Authority',
    shortDescription: 'Precision terrazzo flooring, acoustic timber millwork, and frameless structural glass conference volumes executed to rigorous specifications.',
    description: 'Located in the King Abdullah Financial District (KAFD), this flagship corporate interior spans 24,000 m² of executive suites, diplomatic conference chambers, and an expansive multi-story reception atrium. CHECP directed all specialized architectural trades, bespoke acoustic engineering, and high-security automation systems.',
    featuredImage: '/images/projects/sovereign-wealth-atrium.jpg',
    gallery: [
      '/images/projects/sovereign-wealth-atrium.jpg',
      '/images/projects/sovereign-atrium-millwork.jpg',
      '/images/projects/sovereign-executive-mezzanine.jpg'
    ],
    scope: [
      'Comprehensive turnkey interior fit-out and architectural millwork',
      'Seamless in-situ Italian terrazzo flooring with brass architectural inlays',
      'Perforated acoustic micro-timber ceilings and wall paneling (NRC 0.85+)',
      '12-meter suspended frameless structural glass partition systems',
      'Custom lighting controls and cryptographic secure conference MEP'
    ],
    metrics: [
      { label: 'Interior Footprint', value: '24,000 m²' },
      { label: 'Millwork Tolerances', value: '±1.0 mm Precision' },
      { label: 'Acoustic Rating', value: 'STC 55+ Verified' },
      { label: 'Handover Quality', value: 'Zero Snag Closeout' }
    ],
    featured: true,
    approach: 'Collaborated directly with European stone quarries and artisanal joinery ateliers, establishing an on-site temperature and humidity-controlled mock-up facility to calibrate acoustic performance and seamless material transitions prior to permanent installation.',
    outcome: 'Delivered an immaculate corporate sanctuary that balances monumental architectural gravitas with intimate tactile warmth, honored as a regional benchmark for institutional fit-out excellence.',
    technicalSpecs: [
      { label: 'Acoustic Criterion', value: 'NC-25 Ambient Noise Level' },
      { label: 'Glass Specs', value: 'Structural Low-Iron Laminated Acoustic' },
      { label: 'Timber Species', value: 'FSC-Certified Quarter-Cut Smoked Oak' },
      { label: 'Flooring', value: 'Monolithic Terrazzo Matrix' }
    ]
  },
  {
    id: 'proj-05',
    slug: 'coastal-maritime-logistics-terminus',
    name: 'Coastal Maritime & Logistics Terminus',
    location: 'Western Province, Saudi Arabia',
    sector: 'Specialized Infrastructure',
    projectType: 'Marine Foundations & Logistics Spines',
    year: '2024',
    client: 'National Logistics & Ports Authority',
    shortDescription: 'Heavy civil marine foundations, specialized structural handling spines, and automated multimodal logistics hubs engineered for high continuous capacity.',
    description: 'The Coastal Maritime & Logistics Terminus serves as a vital strategic node connecting Red Sea maritime corridors to internal high-speed freight railways. CHECP engineered and constructed the heavy civil quayside infrastructure, high-load automated container sorting terminals, customs clearance facilities, and subterranean seawater discharge culverts.',
    featuredImage: '/images/projects/coastal-maritime-terminus.jpg',
    gallery: [
      '/images/projects/coastal-maritime-terminus.jpg',
      '/images/projects/maritime-quay-cranes.jpg',
      '/images/projects/maritime-berth-apron.jpg'
    ],
    scope: [
      'Heavy marine civil engineering and coastal sheet piling',
      'Reinforced concrete terminal slabs engineered for 120 kN/m² dynamic loads',
      'Multimodal cargo clearance and high-span automated gantry crane tracks',
      'Desalination and specialized marine corrosion-resistant MEP networks',
      'Automated terminal operating system hardware enclosures'
    ],
    metrics: [
      { label: 'Terminal Area', value: '420,000 m²' },
      { label: 'Pavement Capacity', value: '120 kN/m² Load' },
      { label: 'Berth Length', value: '850 m Civil Spine' },
      { label: 'Durability Design', value: '75-Year Marine Grade' }
    ],
    featured: true,
    approach: 'Implemented advanced blast-furnace slag concrete mixes with cathodic protection and silica fume additives to resist hypersaline maritime groundwater. Round-the-clock slipform paving methodologies achieved uninterrupted high-density apron surfaces.',
    outcome: 'Completed on schedule to support expanding national import/export volumes, providing critical logistics capacity with state-of-the-art durability standards.',
    technicalSpecs: [
      { label: 'Concrete Protection', value: 'Cathodic Impressed Current System' },
      { label: 'Pavement Type', value: 'Heavy-Duty Steel-Fiber Jointless Concrete' },
      { label: 'Drainage Network', value: 'Continuous Monolithic Polymer Channels' },
      { label: 'Power Resilience', value: 'Dual 33kV Substation Distribution' }
    ]
  }
];
