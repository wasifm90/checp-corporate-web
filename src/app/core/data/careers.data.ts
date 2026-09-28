import { JobPosition } from '../models';

export const CAREERS_DATA = {
  headline: "Build something you'll be proud of.",
  subheadline: 'Join a team that values expertise, collaboration and meaningful project delivery.',
  cultureDescription: 'At CHECP, we believe remarkable engineering is achieved by empowered, multidisciplinary teams who share a relentless commitment to craft, precision, and mutual respect. We offer an environment where technical rigor meets visionary execution on the region’s most transformative capital works.',
  image: '/images/careers/engineering-team.jpg',
  pillars: [
    {
      title: 'Craft & Engineering Rigor',
      description: 'Work alongside premier structural, civil, and preconstruction specialists tackling complex architectural feats.'
    },
    {
      title: 'Safety & People First',
      description: 'A non-negotiable culture where the health, well-being, and continuous development of our people come before all else.'
    },
    {
      title: 'Career Advancement',
      description: 'Clear pathways for superintendents, project managers, estimators, and commercial directors across national projects.'
    },
    {
      title: 'Integrity in Practice',
      description: 'An open, transparent environment where merit, accountability, and ethical delivery define our leadership style.'
    }
  ],
  // In Phase 1: vacancies can be easily configured or kept empty to display the professional placeholder
  jobs: [] as JobPosition[],
  noVacanciesNotice: 'Current opportunities will be published here. We continuously welcome inquiries from accomplished civil engineers, project directors, and estimators looking to build with precision.'
};
