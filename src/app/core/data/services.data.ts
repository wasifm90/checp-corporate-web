import { ServiceItem } from '../models';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-01',
    slug: 'general-contracting',
    name: 'General Contracting',
    shortDescription: 'Full accountability across site execution, trade management, safety governance, and critical-path delivery for major commercial and institutional builds.',
    description: 'As a principal general contractor, CHECP assumes direct contractual and operational responsibility for turning architectural masterplans into physical reality. We coordinate multidisciplinary trades, manage deep regional supply chains, enforce unyielding safety protocols, and guarantee critical-path milestones under rigorous schedule discipline.',
    image: '/images/services/general-contracting.jpg',
    capabilities: [
      'Comprehensive on-site project direction and superintendent leadership',
      'Direct trade subcontractor vetting, coordination, and quality oversight',
      'Advanced 4D schedule sequencing and daily milestones tracking',
      'Strict site logistics, crane staging, and material flow orchestration',
      'Comprehensive environmental health and safety (EHS) governance'
    ],
    methodology: [
      { stage: 'Phase 01', title: 'Site Mobilization & Logistics', description: 'Establishing perimeter controls, power grids, crane allocations, and digital entry protocols.' },
      { stage: 'Phase 02', title: 'Substructure & Framing', description: 'Disciplined continuous pours, steel erection, and multi-tier structural trade sequencing.' },
      { stage: 'Phase 03', title: 'Building Enclosure', description: 'Thermal facade installation, weatherproofing, and early climate-controlled dry-in.' },
      { stage: 'Phase 04', title: 'Commissioning & Handover', description: 'Integrated system tests, regulatory authority sign-offs, and seamless client transition.' }
    ],
    relatedProjectSlugs: ['financial-district-headquarters', 'metropolitan-tower-infrastructure'],
    order: 1
  },
  {
    id: 'srv-02',
    slug: 'construction-management',
    name: 'Construction Management',
    shortDescription: 'Owner representation, programmatic cost control, supply chain logistics, and rigorous site inspection from pre-development through occupancy.',
    description: 'CHECP provides owner-centric construction management services, functioning as an extension of institutional clients to safeguard capital investments, compress delivery horizons, and eliminate operational vulnerabilities across complex capital portfolios.',
    image: '/images/services/construction-management.jpg',
    capabilities: [
      'Agency CM and Construction Manager at Risk (CMAR) delivery models',
      'Target value design, probabilistic budgeting, and continuous cost containment',
      'Independent quality assurance inspections and non-conformance remediation',
      'Transparent open-book procurement and tier-1 vendor negotiations',
      'Claims avoidance, risk mitigation, and executive dashboard reporting'
    ],
    methodology: [
      { stage: 'Phase 01', title: 'Pre-Development Alignment', description: 'Budget validation, risk matrix definition, and master procurement roadmap.' },
      { stage: 'Phase 02', title: 'Trade Procurement', description: 'Competitive tier-1 subcontractor package bidding and transparent evaluation.' },
      { stage: 'Phase 03', title: 'Site Oversight', description: 'Continuous site presence verifying compliance against engineering drawings.' },
      { stage: 'Phase 04', title: 'Fiscal Closeout', description: 'Contract reconciliation, warranty transfers, and final audit sign-offs.' }
    ],
    relatedProjectSlugs: ['financial-district-headquarters', 'sovereign-wealth-executive-atrium'],
    order: 2
  },
  {
    id: 'srv-03',
    slug: 'design-build',
    name: 'Design & Build',
    shortDescription: 'A single point of contractual responsibility uniting architectural coordination, structural engineering, and fast-track execution.',
    description: 'Under the Design & Build model, CHECP merges architectural vision with constructability engineering under one single contract. This unified structure eradicates adversarial designer-contractor dynamics, speeds up project timelines by up to 30%, and guarantees single-source accountability for cost, quality, and schedule.',
    image: '/images/services/design-build.jpg',
    capabilities: [
      'Single-point contractual accountability for design and construction',
      'Early phase cost certainty prior to schematic design completion',
      'Concurrent fast-track permitting, early procurement, and foundation works',
      'Parametric BIM coordination uniting MEP, structural, and facade disciplines',
      'Comprehensive value engineering without compromising architectural intent'
    ],
    methodology: [
      { stage: 'Phase 01', title: 'Vision & Program Validation', description: 'Establishing performance targets, budget caps, and aesthetic benchmarks.' },
      { stage: 'Phase 02', title: 'Constructability Engineering', description: 'Real-time engineering reviews refining assemblies for maximum efficiency.' },
      { stage: 'Phase 03', title: 'Accelerated Construction', description: 'Early ground breaking while final interior packages are completed.' },
      { stage: 'Phase 04', title: 'Integrated Handover', description: 'Unified as-built documentation and streamlined facility activation.' }
    ],
    relatedProjectSlugs: ['financial-district-headquarters', 'coastal-maritime-logistics-terminus'],
    order: 3
  },
  {
    id: 'srv-04',
    slug: 'preconstruction-feasibility',
    name: 'Preconstruction & Feasibility',
    shortDescription: 'Constructability reviews, market pricing indices, geotechnical evaluations, and detailed schedule sequencing prior to capital commitment.',
    description: 'Success on site is determined long before the first shovel touches the ground. CHECP preconstruction services provide institutional clients with absolute clarity, market-tested cost estimates, constructability analysis, and logistical foresight before committing capital.',
    image: '/images/services/preconstruction-feasibility.jpg',
    capabilities: [
      'Parametric quantity takeoffs and historical regional cost indexing',
      'Detailed constructability and site access feasibility reviews',
      'Geotechnical evaluation, hydrology analysis, and utility impact studies',
      'Long-lead procurement scheduling and supply chain risk hedging',
      '4D BIM site sequencing and temporary works engineering'
    ],
    methodology: [
      { stage: 'Phase 01', title: 'Baseline Assessment', description: 'Site surveys, regulatory constraints, and utility connection mapping.' },
      { stage: 'Phase 02', title: 'Constructability Analysis', description: 'Identifying structural bottlenecks, crane clearances, and clash detection.' },
      { stage: 'Phase 03', title: 'Cost Engineering', description: 'Bottom-up market pricing, trade package division, and value alternatives.' },
      { stage: 'Phase 04', title: 'Master Project Execution Plan (PEP)', description: 'Delivering the comprehensive roadmap for site mobilization.' }
    ],
    relatedProjectSlugs: ['financial-district-headquarters', 'metropolitan-tower-infrastructure'],
    order: 4
  },
  {
    id: 'srv-05',
    slug: 'interior-fitout',
    name: 'Interior Fit-Out & Turnkey',
    shortDescription: 'High-specification corporate interiors, bespoke joinery, acoustic systems, and precision mechanical and electrical installations.',
    description: 'CHECP transforms raw architectural spaces into refined, high-performance environments. From sovereign executive boardrooms to luxury commercial headquarters, our interior specialists execute flawless millwork, bespoke stonework, advanced acoustics, and integrated smart building systems with surgical precision.',
    image: '/images/services/interior-fitout.jpg',
    capabilities: [
      'Turnkey Grade-A corporate workplace and hospitality interior execution',
      'Custom architectural millwork, veneer matching, and specialized joinery',
      'High-performance acoustic ceiling systems, baffles, and wall linings',
      'Seamless terrazzo, monolithic natural stone, and specialized resin flooring',
      'Integrated conference audiovisual, IoT environmental controls, and MEP'
    ],
    methodology: [
      { stage: 'Phase 01', title: 'Material Sourcing & Samples', description: 'Stone quarry visits, timber atelier coordination, and full-scale mockups.' },
      { stage: 'Phase 02', title: 'Rough-In & MEP Coordination', description: 'Precision overhead ceiling coordination and acoustic duct insulation.' },
      { stage: 'Phase 03', title: 'Finishes Installation', description: 'Dust-controlled environment for joinery, stone cladding, and glazing.' },
      { stage: 'Phase 04', title: 'Acoustic & Lux Calibration', description: 'Decibel testing, light-meter verification, and white-glove snag clearing.' }
    ],
    relatedProjectSlugs: ['sovereign-wealth-executive-atrium'],
    order: 5
  },
  {
    id: 'srv-06',
    slug: 'renovation-modernization',
    name: 'Renovation & Modernization',
    shortDescription: 'Structural reinforcement, MEP upgrades, and exterior facade retrofitting in operational commercial and institutional facilities.',
    description: 'Upgrading operational buildings requires specialized sensitivity to continuous tenant activity, noise constraints, and structural preservation. CHECP delivers complex structural alterations, building envelope retrofits, and full MEP modernization while minimizing disruption to ongoing operations.',
    image: '/images/services/renovation-modernization.jpg',
    capabilities: [
      'Carbon-fiber reinforced polymer (CFRP) structural strengthening',
      'Facade replacement and building envelope energy retrofits',
      'Phased mechanical, electrical, and plumbing infrastructure replacements',
      'Seismic and fire safety code compliance retrofitting',
      'Work in occupied institutional, corporate, and healthcare environments'
    ],
    methodology: [
      { stage: 'Phase 01', title: 'Laser Scanning & Structural Audit', description: 'Precise 3D point-cloud surveys of existing structural conditions.' },
      { stage: 'Phase 02', title: 'Phasing & Containment Plan', description: 'Dust-tight acoustic barriers, negative air pressure, and off-peak shifts.' },
      { stage: 'Phase 03', title: 'Structural & MEP Modernization', description: 'Careful surgical demolition, reinforcements, and system cut-overs.' },
      { stage: 'Phase 04', title: 'Re-Commissioning', description: 'Energy auditing, airflow balancing, and renewed occupancy certificates.' }
    ],
    relatedProjectSlugs: ['sovereign-wealth-executive-atrium', 'metropolitan-tower-infrastructure'],
    order: 6
  },
  {
    id: 'srv-07',
    slug: 'civil-structural-engineering',
    name: 'Civil & Structural Engineering',
    shortDescription: 'Heavy earthworks, foundation systems, post-tensioned slabs, subterranean structures, and infrastructure networks.',
    description: 'From deep subterranean basements in high-density urban zones to monumental post-tensioned superstructures, CHECP delivers robust structural solutions engineered for seismic resistance, extreme ambient temperatures, and monumental structural longevity.',
    image: '/images/services/civil-structural.jpg',
    capabilities: [
      'Deep excavation, secant piling, sheet piling, and rock anchoring',
      'Mass concrete foundation pours with active thermal cooling',
      'Post-tensioned and pre-stressed concrete slab engineering',
      'Heavy structural steel fabrication, erection, and composite decking',
      'Civil siteworks, arterial storm drainage, and underground utility tunnels'
    ],
    methodology: [
      { stage: 'Phase 01', title: 'Geotechnical Engineering', description: 'Soil mechanics modeling, ground water controls, and shoring.' },
      { stage: 'Phase 02', title: 'Deep Substructure', description: 'Continuous foundation pours with temperature sensor matrices.' },
      { stage: 'Phase 03', title: 'Superstructure Framing', description: 'High-speed hydraulic core climbing and post-tensioning cycles.' },
      { stage: 'Phase 04', title: 'Structural Integrity Signoff', description: 'LIDAR alignment confirmation and concrete core stress testing.' }
    ],
    relatedProjectSlugs: ['metropolitan-tower-infrastructure', 'financial-district-headquarters'],
    order: 7
  },
  {
    id: 'srv-08',
    slug: 'specialized-infrastructure',
    name: 'Specialized Infrastructure',
    shortDescription: 'High-uptime facilities, continuous power installations, specialized clean environments, and critical municipal assets.',
    description: 'CHECP engineers mission-critical infrastructure where operational failure is not an option. We deliver heavy transport corridors, port logistics hubs, electrical sub-stations, and high-uptime facilities designed with redundant systems to ensure uninterruptible 24/7 service.',
    image: '/images/services/specialized-infrastructure.jpg',
    capabilities: [
      'Heavy civil marine foundations and quay wall infrastructure',
      'Substations, industrial switchgear, and dual-feed power distribution',
      'Multimodal logistics terminals and heavy-load concrete pavements',
      'Severe-environment corrosion protection and specialized marine concrete',
      'SCADA automation and industrial process MEP piping'
    ],
    methodology: [
      { stage: 'Phase 01', title: 'Environmental & Civil Profiling', description: 'Hydrodynamic and geotechnical analysis of marine and high-stress soils.' },
      { stage: 'Phase 02', title: 'Specialized Civil Engineering', description: 'Marine piling, cathodic protection grids, and heavy-duty slab paving.' },
      { stage: 'Phase 03', title: 'Critical Systems MEP', description: 'Installation of high-voltage transformers, switchgear, and backup generators.' },
      { stage: 'Phase 04', title: 'Full Load Testing', description: 'Black-building simulations, load-bank testing, and operational handover.' }
    ],
    relatedProjectSlugs: ['coastal-maritime-logistics-terminus'],
    order: 8
  }
];
