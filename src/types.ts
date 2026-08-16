export interface StatisticItem {
  id: string;
  metric: string;
  headline: string;
  description: string;
  source: string;
  sourceUrl: string;
  year: string;
  verified: boolean;
}

export interface IndustryService {
  name: string;
  price?: string;
  description: string;
  highlight?: boolean;
}

export interface IndustryDemo {
  id: string;
  name: string;
  category: string;
  badge: string;
  iconName: string;
  businessName: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  aboutSnippet: string;
  hours: string;
  location: string;
  rating: string;
  reviewCount: number;
  featuredTestimonial: {
    author: string;
    text: string;
    role: string;
  };
  services: IndustryService[];
  gallery: string[];
  keyPerks: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  industry: string;
  isConcept: boolean;
  tagline: string;
  objective: string;
  keyFeatures: string[];
  resultsFocus: string;
  desktopImage: string;
  mobileImage: string;
  accentColor: string;
  liveDemoId?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  popular?: boolean;
  tagline: string;
  priceDisplay: string;
  timeline: string;
  idealFor: string;
  deliverables: string[];
  featuresIncluded: string[];
  excludedFeatures?: string[];
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'process' | 'technical' | 'results';
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverable: string;
  iconName: string;
}
