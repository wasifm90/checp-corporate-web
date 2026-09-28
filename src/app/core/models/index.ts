export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  sector: string;
  projectType: string;
  year: string;
  client?: string;
  shortDescription: string;
  description: string;
  featuredImage: string;
  gallery: string[];
  scope: string[];
  metrics?: { label: string; value: string }[];
  featured: boolean;
  approach?: string;
  outcome?: string;
  technicalSpecs?: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  capabilities: string[];
  methodology?: { stage: string; title: string; description: string }[];
  relatedProjectSlugs: string[];
  order: number;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  featuredImage: string;
  order: number;
  capabilities: string[];
  keyChallenges: string[];
  highlights: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  featuredImage: string;
  content: string[];
  readTime: string;
  author: { name: string; role: string };
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  active: boolean;
}

export interface LocationOffice {
  id: string;
  city: string;
  region: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  isHQ: boolean;
  description: string;
}

export interface SafetyRecord {
  headline: string;
  subheadline: string;
  description: string;
  metrics: { id: string; label: string; value: string; period: string; verified: boolean }[];
  certifications: string[];
  corePrinciples: { number: string; title: string; description: string }[];
  image: string;
}

export interface CompanyMetric {
  value: string;
  label: string;
  verified: boolean;
}

export interface DeliveryStage {
  step: string;
  name: string;
  description: string;
}

export interface CompanyProfile {
  name: string;
  legalName: string;
  tagline: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSupportingCopy: string;
  convictionHeading: string;
  convictionBody: string;
  convictionSubtext: string;
  whoWeAreHeading: string;
  whoWeAreBody: string;
  metrics: CompanyMetric[];
  deliveryStages: DeliveryStage[];
  values: { title: string; description: string }[];
  leadership: { name: string; role: string; bio: string }[];
  foundedYear: string;
  headquarters: string;
}

export interface ContactEnquiry {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  message: string;
  dateSubmitted?: string;
}

export interface SiteSettings {
  siteUrl: string;
  contactEmail: string;
  contactPhone: string;
  linkedinUrl: string;
  copyrightYear: number;
}
